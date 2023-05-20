import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import CQBMaster_custom from '../../../assets/weaponJsx/CQBMaster-custom';
import { getUniqueWeaponAttachmentType, getWeaponAttachments } from "../../../service/weapons";
import Loader from '../../../components/weapons/loader'
// import "./weaponDetail.css"
import Button from '../../../components/shared/button';
const AllCharacters = ({weaponid}) => {


    const [uniqueAttachments, setUniqueAttachments] = useState([]);

    

    useEffect(() => {
    }, [])


    
  return (
   
  <section></section>
  );
};

export default AllCharacters;
