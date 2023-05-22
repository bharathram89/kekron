import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls, OrbitControls } from '@react-three/drei'
import CQBMaster_custom from '../../../assets/weaponJsx/CQBMaster-custom';
import { getUniqueOutfitOptionType, getCharacterOutfits } from "../../../service/characters";
import Loader from '../../../components/loadingidicator/loader'
import SK_Military_Character6 from '../../../assets/characterJsx/SK_Military_Charcter6'
// import "./weaponDetail.css"
import Button from '../../../components/shared/button';
import SwitchCharacter from './characterSwitcher';
const CharacterDetail = ({characterid}) => {



    const [selectedBackpack, setselectedBackpack] = useState(null);
    const [selectedDecal, setselectedDecal] = useState(null);
    const [selectedExtras, setselectedExtras] = useState(null);
    const [selectedEyewear, setselectedEyewear] = useState(null);

    const [selectedFootwear, setselectedFootwear] = useState(null);
    const [selectedGloves, setselectedGloves] = useState(null);
    const [selectedHeadgear, setselectedHeadgear] = useState(null);
    const [selectedHeadset, setselectedHeadset] = useState(null);
    const [selectedHeadwear, setselectedHeadwear] = useState(null);
    const [selectedPant, setselectedPant] = useState(null);
    const [selectedShirt, setselectedShirt] = useState(null);
    const [selectedVest, setselectedVest] = useState(null);
    const [selectedVest_attachments, setselectedVest_attachments] = useState(null);


    const [outfitData, setOutfitData] = useState(null);

    const [uniqueOutfits, setUniqueOutfits] = useState([]);

    const fetchCharacterData = () => {
        getUniqueOutfitOptionType(characterid)
        .then(uniqueOutfits => {
            setUniqueOutfits(uniqueOutfits);
            console.log(uniqueOutfits,"uniqueOutfits")
        })
        getCharacterOutfits(characterid)
        .then(allOutfits => {
            let groupedAttachments = allOutfits.reduce((acc, curr) => {
                if (acc[curr.outfit_type]) {
                  acc[curr.outfit_type].push(curr);
                } else {
                  acc[curr.outfit_type] = [curr];
                }
                return acc;
              }, {});

            setOutfitData(groupedAttachments);
            console.log(groupedAttachments,"groupedOutfits")
        })
    }
    useEffect(() => {
        fetchCharacterData()
    }, [])


    const getCharacter = (characterid) => {
        if(characterid){
            const Switcher = SwitchCharacter[characterid];
            return (
                <Switcher
                key={characterid} // or something unique
                // backpack={selectedBackpack}
                // decal={selectedDecal}
                // extras={selectedExtras}
                // eyewear={selectedEyewear}
                // footwear={selectedFootwear}
                // gloves={selectedGloves}
                // headgear={selectedHeadgear}
                // headset={selectedHeadset}
                // headwear={selectedHeadwear}
                // pant={selectedPant}
                // shirt={selectedShirt}
                // vest={selectedVest}
                // vest_attachments={selectedVest_attachments}
                // {...section.fields}
                />
            );
        }
       
    }
    
  return (
    <div style={{ position: 'relative', backgroundImage: 'url(../../assets/images/weaponConfigBG.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
    <div id="dropdowns" style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', margin: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}>
        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'backpack') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Sight</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" onChange={(e) => setselectedBackpack(e.target.value)}  style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                {outfitData?.Backpack?.forEach(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </a>
        {/* <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'barrel') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Barrel</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </a> 
        <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'muzzle') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Muzzle</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" onChange={(e) => setselectedMuzzle(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                {attachmentData?.Muzzle?.map(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </a> */}
        <a style={{  margin:'20px', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
           <Button>Save</Button>
        </a>
    </div>
    
    <Canvas style={{ width: '100%', height: '600px', maxWidth: '800px', margin: '20px auto' }}>
      <mesh>
        <ambientLight intensity={0.6} />
        <spotLight intensity={0.8} position={[0, 0, 0]} />
        <Suspense fallback={<Loader />}>
            <Stage intensity={2}>
                {getCharacter(characterid)}
            </Stage>
        </Suspense>
      </mesh>
      <OrbitControls></OrbitControls>
    </Canvas>



   <div id="dropdowns" style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', margin: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}>
        {/* <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'magazine') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{ margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Magazine</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </a>
        <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'trigger') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px',padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Trigger</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </a>
        <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'underbarrel') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Under barrel</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </a>
        <a style={uniqueAttachments.some(item => item.trim().toLowerCase() === 'siderail') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Side Rail</label>
            <br></br><hr></hr>
            <select id="selectDropdown1" style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </a>
 */}

    </div>
  </div>
  
  );
};

export default CharacterDetail;
