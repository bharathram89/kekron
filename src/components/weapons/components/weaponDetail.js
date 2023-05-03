import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import { useParams } from "react-router-dom";
import { Sig552 } from '../../static/Sig552';
import { weapon, weaponSights, weaponUnderbarrel, weaponMagazine} from '../../mock';
import { getWeapon, getUniqueWeaponAttachmentType, getWeaponAttachments } from '../../../service/weapons';

function Model({ gltfPath, position, rotation }) {
  const gltf = useGLTF('https://ac-dev-s3.s3.us-west-1.amazonaws.com/'+gltfPath, true); // load the glTF model and cache it
  const ref = React.useRef();
  return (
    <mesh position={position} rotation={rotation}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function WeaponDetail() {
  const { id } = useParams();
  const [selectedSights, setselectedSights] = useState(null);
  const [selectedMag, setselectedMag] = useState(null);
  const [selectedUnderbarrel, setselectedUnderbarrel] = useState(null);
  
  useEffect(() => {
    fetchGunsDetails()
  }, [])

  

  const fetchGunsDetails = () => {
    getWeapon(id)
      .then(data => {
        // setData(data)
      })

    getUniqueWeaponAttachmentType(id)
      .then(data => {
        // setData(data)
      })
    
    getWeaponAttachments(id)
      .then(data => {
        const groupedData = data.reduce((acc, curr) => {
            if (acc[curr.type]) {
              acc[curr.type].push(curr);
            } else {
              acc[curr.type] = [curr];
            }
            return acc;
          }, {});
           console.log(groupedData,data,"grouped data")
        // setData(data)
      })
  }
  const selectStyle = {
    background: 'transparent', 
    color: 'white', 
    fontSize: '20px', 
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid white',
    margin: '10px',
    textAlign: 'center'
  };


  return (
    <div style={{ height: '100vh' }}>
        <div style={{  textAlign: 'center' }}>
            <select
                value={selectedSights}
                onChange={(e) => setselectedSights(e.target.value)}
                style={selectStyle}
            >
                <option value="">Select a sight</option>
                {weaponSights?.map((attachment) => (
                <option key={attachment} value={attachment}>
                    {attachment}
                </option>
                ))}
            </select>

            <select
                value={selectedMag}
                onChange={(e) => setselectedMag(e.target.value)}
                style={selectStyle}
            >
                <option value="">Select magazine</option>
                {weaponMagazine?.map((attachment) => (
                <option key={attachment} value={attachment}>
                    {attachment}
                </option>
                ))}
            </select>
            

            <select
                value={selectedUnderbarrel}
                onChange={(e) => setselectedUnderbarrel(e.target.value)}
                style={selectStyle}
            >
                <option value="">Select a underbarrel</option>
                {weaponUnderbarrel?.map((attachment) => (
                <option key={attachment} value={attachment}>
                    {attachment}
                </option>
                ))}
            </select>
      </div>

      <Canvas>
        <mesh>
        <ambientLight intensity={0.6} />
        <spotLight intensity={0.8} position={[30, 30, 50]} />
        <Suspense fallback={null}>
            <PresentationControls speed={4.0} zoom={2.0}>
                <Stage intensity={2}>
                    <Sig552 sight={selectedSights} mag={selectedMag} underbarrel={selectedUnderbarrel}></Sig552>
                </Stage>
            </PresentationControls>
        </Suspense>
        </mesh>
      </Canvas>
    </div>
  );
}

export default WeaponDetail;
