import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls, OrbitControls } from '@react-three/drei'
import CQBMaster_custom from '../../../assets/weaponJsx/CQBMaster-custom';
import { getUniqueOutfitOptionType, getCharacterOutfits, getCharacterDetails } from "../../../service/characters";
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
    const [animation, setanimation] = useState(null);
    const [uniqueOutfits, setUniqueOutfits] = useState([]);

    const fetchCharacterData = () => {
        Promise.all([getCharacterDetails(characterid), getUniqueOutfitOptionType(characterid), getCharacterOutfits(characterid)]).then((combined) => {
            console.log(combined);
            let characterDetails = combined[0]
            let uniqueOutfits = combined[1]
            let allOutfits = combined[2]

            console.log(characterDetails.minRequiredOutfits, "characterDetails");
            const validJSONString = characterDetails.minRequiredOutfits.replace(/'/g, '"');
            const requiredOutfit = JSON.parse(validJSONString);


            setUniqueOutfits(uniqueOutfits);
            console.log(uniqueOutfits,"uniqueOutfits")

            let groupedAttachments = allOutfits.reduce((acc, curr) => {
                if (acc[curr.type]) {
                  acc[curr.type].push(curr);
                } else {
                  acc[curr.type] = [curr];
                }
                return acc;
              }, {});

            setOutfitData(groupedAttachments);
            if (requiredOutfit.includes('shirt')) {
                setselectedShirt(groupedAttachments.Shirts[0].name);
            }
            if (requiredOutfit.includes('pant')) {
                setselectedPant(groupedAttachments.Pants[0].name);
            }
            if (requiredOutfit.includes('boots')) {
                setselectedFootwear(groupedAttachments.Footwear[0].name);
            }
            console.log(requiredOutfit);
            console.log(groupedAttachments,"groupedOutfits",allOutfits)

          });
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
                animation={animation}
                backpack={selectedBackpack}
                decal={selectedDecal}
                extras={selectedExtras}
                eyewear={selectedEyewear}
                footwear={selectedFootwear}
                // gloves={selectedGloves}
                headgear={selectedHeadgear}
                headset={selectedHeadset}
                pant={selectedPant}
                shirt={selectedShirt}
                vest={selectedVest}
                vest_attachments={selectedVest_attachments}
                // {...section.fields}
                />
            );
        }
       
    }
    let x =0;
    const handleCanvasClick = () => {
        x=x+1;
        setanimation(x)
    }
  return (
    <div style={{ position: 'relative', backgroundImage: 'url(../../assets/images/weaponConfigBG.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
    <div className=' flex items-center justify-center flex-wrap px-2'>

        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'headset') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Headset</label>
            <br></br><hr></hr>
            <select id="selectDropdown3" onChange={(e) => setselectedHeadset(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option>None</option>
                {outfitData?.Headset?.map(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </a>
        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'headgear') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Headgear</label>
            <br></br><hr></hr>
            <select id="selectDropdown3" onChange={(e) => setselectedHeadgear(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option>None</option>
                {outfitData?.Headgear?.map(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
              </a>
              <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'eyewear') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                        <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Eyewear</label>
                        <br></br><hr></hr>
                        <select id="selectDropdown3" onChange={(e) => setselectedEyewear(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                            <option>None</option>
                            {outfitData?.Eyewear?.map(option => (
                                <option key={option.id} value={option.value}>{option.name}</option>
                            ))}
                        </select>
              </a>
        <a style={{  margin:'20px', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
           <Button>Save</Button>
        </a>
          </div>
          <div className="flex lg:flex-row flex-col ">
                <div className="flex flex-col items-center justify-evenly">
                    <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'decals') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding:       '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                       <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Decals</label>
                       <br></br><hr></hr>
                       <select id="selectDropdown3" onChange={(e) => setselectedDecal(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                            <option>None</option>
                            {outfitData?.Decals?.map(option => (
                            <option key={option.id} value={option.value}>{option.name}</option>
                            ))}
                       </select>
                    </a>
                    <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'shirts') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                        <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Shirt</label>
                        <br></br><hr></hr>
                        <select id="selectDropdown3" onChange={(e) => setselectedShirt(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                                <option>None</option>
                                {outfitData?.Shirts?.map(option => (
                                <option key={option.id} value={option.value}>{option.name}</option>
                            ))}
                        </select>
                    </a>
                </div>
            <Canvas onClick={handleCanvasClick} style={{ width: '100%', height: '600px', maxWidth: '800px', margin: '20px auto' }}>
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
              <div className="flex flex-col items-center justify-evenly">
              <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'footwear') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                    <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Footwear</label>
                    <br></br><hr></hr>
                    <select id="selectDropdown3" onChange={(e) => setselectedFootwear(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                        <option>None</option>
                        {outfitData?.Footwear?.map(option => (
                            <option key={option.id} value={option.value}>{option.name}</option>
                        ))}
                    </select>
              </a> 
                <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'pants') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                    <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Pants</label>
                    <br></br><hr></hr>
                    <select id="selectDropdown3" onChange={(e) => setselectedPant(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                        <option>None</option>
                        {outfitData?.Pants?.map(option => (
                            <option key={option.id} value={option.value}>{option.name}</option>
                        ))}
                    </select>
                </a>
              </div>
          </div>



    <div id='dropdowns' className='flex items-center justify-center flex-wrap px-2'>
        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'backpack') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Backpack</label>
            <br></br><hr></hr>
            <select id="selectDropdown3" onChange={(e) => setselectedBackpack(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option>None</option>
                {outfitData?.Backpack?.map(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </a>
        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'vest attachments') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
                      <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Vest Attachments</label>
                      <br></br><hr></hr>
                      <select id="selectDropdown3" onChange={(e) => setselectedVest_attachments(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                        <option>None</option>
                        {outfitData?.['Vest Attachments']?.map(option => (
                            <option key={option.id} value={option.value}>{option.name}</option>
                        ))}
                      </select>
        </a>
        <a style={uniqueOutfits.some(item => item.trim().toLowerCase() === 'extras') ? { margin: '20px', fontSize: '20px', textAlign: 'center', padding: '20px', background: 'linear-gradient(to bottom, #606060, #808080)', opacity: 0.8, borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' } : {display: 'none'}}>
            <label style={{  margin:'20px', padding: '20px', fontWeight: 'bold' }} htmlFor="selectDropdown1">Extras</label>
            <br></br><hr></hr>
            <select id="selectDropdown3" onChange={(e) => setselectedExtras(e.target.value)} style={{ background: 'rgba(128, 128, 128, 0.5)', border: 'none', padding: '5px 10px', borderRadius: '5px', color: '#fff' }}>
                <option>None</option>
                {outfitData?.Extras?.map(option => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </a>
    </div>
  </div>
  
  );
};

export default CharacterDetail;
