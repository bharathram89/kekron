/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 SK_Military_Underwear6.glb --transform
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function SK_Military_Character6(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/characters/fullModels/SK_Military_Character6-fullModel.glb')
  const uniqueArray = animations.filter((obj, index, self) => {
    // Check if the index of the current object is the first occurrence of its color property
    return index === self.findIndex((o) => o.name === obj.name);
  });
  const { actions } = useAnimations(uniqueArray, group)
  useEffect(() => {
    if (actions && props.animation) {
      // Stop all currently playing animations
      Object.values(actions).forEach((action) => {
        action.stop();
      });

      // Get a random animation from the available animations
      const randomIndex = Math.floor(Math.random() * uniqueArray.length);
      const randomAnimation = uniqueArray[randomIndex].name;

      // Play the random animation
      actions[randomAnimation].play();
    }
  }, [props.animation, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="SK_Military_Underwear6">
        <group name="SK_Military_Underwear6_1" position={[0, 0, 0]} rotation={[0, 0.0, 0]}>
          <group name="Decals">
            <skinnedMesh visible={props.decal === 'Decal_Arab'} name="Decal_Arab" geometry={nodes.Decal_Arab.geometry} material={materials.Decals} skeleton={nodes.Decal_Arab.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Carabin'} name="Decal_Carabin" geometry={nodes.Decal_Carabin.geometry} material={materials.Decals} skeleton={nodes.Decal_Carabin.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_China'} name="Decal_China" geometry={nodes.Decal_China.geometry} material={materials.Decals} skeleton={nodes.Decal_China.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_FBI'} name="Decal_FBI" geometry={nodes.Decal_FBI.geometry} material={materials.Decals} skeleton={nodes.Decal_FBI.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_FSB'} name="Decal_FSB" geometry={nodes.Decal_FSB.geometry} material={materials.Decals} skeleton={nodes.Decal_FSB.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Gendarm'} name="Decal_Gendarm" geometry={nodes.Decal_Gendarm.geometry} material={materials.Decals} skeleton={nodes.Decal_Gendarm.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_India'} name="Decal_India" geometry={nodes.Decal_India.geometry} material={materials.Decals} skeleton={nodes.Decal_India.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Medic'} name="Decal_Medic" geometry={nodes.Decal_Medic.geometry} material={materials.Decals} skeleton={nodes.Decal_Medic.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Police'} name="Decal_Police" geometry={nodes.Decal_Police.geometry} material={materials.Decals} skeleton={nodes.Decal_Police.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Policia'} name="Decal_Policia" geometry={nodes.Decal_Policia.geometry} material={materials.Decals} skeleton={nodes.Decal_Policia.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Polis'} name="Decal_Polis" geometry={nodes.Decal_Polis.geometry} material={materials.Decals} skeleton={nodes.Decal_Polis.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Polisi'} name="Decal_Polisi" geometry={nodes.Decal_Polisi.geometry} material={materials.Decals} skeleton={nodes.Decal_Polisi.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Polizei'} name="Decal_Polizei" geometry={nodes.Decal_Polizei.geometry} material={materials.Decals} skeleton={nodes.Decal_Polizei.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Polizia'} name="Decal_Polizia" geometry={nodes.Decal_Polizia.geometry} material={materials.Decals} skeleton={nodes.Decal_Polizia.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_PRESS'} name="Decal_PRESS" geometry={nodes.Decal_PRESS.geometry} material={materials.Decals} skeleton={nodes.Decal_PRESS.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Rus'} name="Decal_Rus" geometry={nodes.Decal_Rus.geometry} material={materials.Decals} skeleton={nodes.Decal_Rus.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_Skull'} name="Decal_Skull" geometry={nodes.Decal_Skull.geometry} material={materials.Decals} skeleton={nodes.Decal_Skull.skeleton} />
            <skinnedMesh visible={props.decal === 'Decal_UN'} name="Decal_UN" geometry={nodes.Decal_UN.geometry} material={materials.Decals} skeleton={nodes.Decal_UN.skeleton} />
          </group>
          <group name="Military" />
          <group name="Outfits">
            <group name="Outfit1">
              <skinnedMesh visible={props.vest_attachments === 'Outfit1'} name="Outfit1_1" geometry={nodes.Outfit1_1.geometry} material={materials.Vest2_skin1} skeleton={nodes.Outfit1_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit1'} name="Outfit1_2" geometry={nodes.Outfit1_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit1_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit1'} name="Outfit1_3" geometry={nodes.Outfit1_3.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit1_3.skeleton} />
            </group>
            <group name="Outfit2">
              <skinnedMesh visible={props.vest_attachments === 'Outfit2'} name="Outfit2_1" geometry={nodes.Outfit2_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit2_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit2'} name="Outfit2_2" geometry={nodes.Outfit2_2.geometry} material={materials.Pistol1_skin1} skeleton={nodes.Outfit2_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit2'} name="Outfit2_3" geometry={nodes.Outfit2_3.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit2_3.skeleton} />
            </group>
            <group name="Outfit3">
              <skinnedMesh visible={props.vest_attachments === 'Outfit3'} name="Outfit3_1" geometry={nodes.Outfit3_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit3_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit3'} name="Outfit3_2" geometry={nodes.Outfit3_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit3_2.skeleton} />
            </group>
            <group name="Outfit4">
              <skinnedMesh visible={props.vest_attachments === 'Outfit4'} name="Outfit4_1" geometry={nodes.Outfit4_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit4_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit4'} name="Outfit4_2" geometry={nodes.Outfit4_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit4_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit4'} name="Outfit4_3" geometry={nodes.Outfit4_3.geometry} material={materials.Vest2_skin1} skeleton={nodes.Outfit4_3.skeleton} />
            </group>
            <skinnedMesh visible={props.vest_attachments === 'Outfit5'} name="Outfit5" geometry={nodes.Outfit5.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit5.skeleton} />
            <group name="Outfit6">
              <skinnedMesh visible={props.vest_attachments === 'Outfit6'} name="Outfit6_1" geometry={nodes.Outfit6_1.geometry} material={materials.Vest2_skin1} skeleton={nodes.Outfit6_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit6'} name="Outfit6_2" geometry={nodes.Outfit6_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit6_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit6'} name="Outfit6_3" geometry={nodes.Outfit6_3.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit6_3.skeleton} />
            </group>
            <group name="Outfit7">
              <skinnedMesh visible={props.vest_attachments === 'Outfit7'} ame="Outfit7_1" geometry={nodes.Outfit7_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit7_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit7'} name="Outfit7_2" geometry={nodes.Outfit7_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit7_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit7'} name="Outfit7_3" geometry={nodes.Outfit7_3.geometry} material={materials.Pistol1_skin1} skeleton={nodes.Outfit7_3.skeleton} />
            </group>
            <group name="Outfit8">
              <skinnedMesh visible={props.vest_attachments === 'Outfit8'} name="Outfit8_1" geometry={nodes.Outfit8_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit8_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit8'} name="Outfit8_2" geometry={nodes.Outfit8_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit8_2.skeleton} />
            </group>
            <group name="Outfit9">
              <skinnedMesh visible={props.vest_attachments === 'Outfit9'} name="Outfit9_1" geometry={nodes.Outfit9_1.geometry} material={materials.Pouches1_Skin1} skeleton={nodes.Outfit9_1.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit9'} name="Outfit9_2" geometry={nodes.Outfit9_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Outfit9_2.skeleton} />
              <skinnedMesh visible={props.vest_attachments === 'Outfit9'} name="Outfit9_3" geometry={nodes.Outfit9_3.geometry} material={materials.Pistol1_skin1} skeleton={nodes.Outfit9_3.skeleton} />
            </group>
          </group>
          <group name="Radio">
            <skinnedMesh visible={props.vest_attachments === 'Head_Wire'} name="Head_Wire" geometry={nodes.Head_Wire.geometry} material={materials.Equip2_skin1} skeleton={nodes.Head_Wire.skeleton} position={[-0.26, 0.27, 0.03]} rotation={[0, 0, -0.12]} scale={[1, 1.4, 1]} />
            <skinnedMesh visible={props.vest_attachments === 'Radio1'} name="Radio1" geometry={nodes.Radio1.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio1.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio2'} name="Radio2" geometry={nodes.Radio2.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio2.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio3'} name="Radio3" geometry={nodes.Radio3.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio3.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio4'} name="Radio4" geometry={nodes.Radio4.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio4.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio5'} name="Radio5" geometry={nodes.Radio5.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio5.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio6'} name="Radio6" geometry={nodes.Radio6.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio6.skeleton} />
            <skinnedMesh visible={props.vest_attachments === 'Radio7'} name="Radio7" geometry={nodes.Radio7.geometry} material={materials.Equip2_skin1} skeleton={nodes.Radio7.skeleton} />
          </group>
          <primitive object={nodes.root} />
          <skinnedMesh visible={props.backpack === 'Backpack2'} name="Backpack2" geometry={nodes.Backpack2.geometry} material={materials.Backpack2_skin1} skeleton={nodes.Backpack2.skeleton} />
          <skinnedMesh visible={props.backpack === 'Backpack2'} name="Backpack2_handle" geometry={nodes.Backpack2_handle.geometry} material={materials.Backpack2_skin1} skeleton={nodes.Backpack2_handle.skeleton} />
          <skinnedMesh visible={props.backpack === 'Backpack3'} name="Backpack3" geometry={nodes.Backpack3.geometry} material={materials.Backpack3_skin1} skeleton={nodes.Backpack3.skeleton} />
          <skinnedMesh visible={props.backpack === 'Backpack3'} name="BackPack3_handle" geometry={nodes.BackPack3_handle.geometry} material={materials.Backpack3_skin1} skeleton={nodes.BackPack3_handle.skeleton} />
          <skinnedMesh visible={props.footwear === 'Boots3'} name="Boots3" geometry={nodes.Boots3.geometry} material={materials.Boots3_Skin1} skeleton={nodes.Boots3.skeleton} position={[1.31, 0.14, -0.29]} />
          <skinnedMesh visible={props.footwear === 'Boots4'} name="Boots4" geometry={nodes.Boots4.geometry} material={materials.Boots_4_5_skin1} skeleton={nodes.Boots4.skeleton} />
          <skinnedMesh visible={props.footwear === 'Boots5'} name="Boots5" geometry={nodes.Boots5.geometry} material={materials.Boots_4_5_skin1} skeleton={nodes.Boots5.skeleton} />
          <skinnedMesh visible={props.headwear === 'Cap4'} name="Cap4" geometry={nodes.Cap4.geometry} material={materials.Cap4_skin1} skeleton={nodes.Cap4.skeleton} />
          <skinnedMesh visible={props.headwear === 'Cap5'} name="Cap5" geometry={nodes.Cap5.geometry} material={materials.Cap5_6_skin1} skeleton={nodes.Cap5.skeleton} />
          <skinnedMesh visible={props.headwear === 'Cap6'} name="Cap6" geometry={nodes.Cap6.geometry} material={materials.Cap5_6_skin1} skeleton={nodes.Cap6.skeleton} position={[-0.27, 0, 0]} />
          <skinnedMesh visible={props.headwear === 'Cap7'} name="Cap7" geometry={nodes.Cap7.geometry} material={materials.Cap5_6_skin1} skeleton={nodes.Cap7.skeleton} position={[-0.27, 0, 0]} />
          <skinnedMesh name="CHR6_Head" geometry={nodes.CHR6_Head.geometry} material={materials.Head6} skeleton={nodes.CHR6_Head.skeleton} />
          <group name="CHR_Male_Gloves">
            <skinnedMesh name="CHR_Male_Gloves_1" geometry={nodes.CHR_Male_Gloves_1.geometry} material={materials.Hands1_skin1} skeleton={nodes.CHR_Male_Gloves_1.skeleton} />
            <skinnedMesh name="CHR_Male_Gloves_2" geometry={nodes.CHR_Male_Gloves_2.geometry} material={materials.Equip2_skin1} skeleton={nodes.CHR_Male_Gloves_2.skeleton} />
          </group>
          <skinnedMesh name="CHR_Male_Hands" geometry={nodes.CHR_Male_Hands.geometry} material={materials.Hands1_skin1} skeleton={nodes.CHR_Male_Hands.skeleton} />
          <skinnedMesh name="CHR_Male_Palm_hands" geometry={nodes.CHR_Male_Palm_hands.geometry} material={materials.Hands1_skin1} skeleton={nodes.CHR_Male_Palm_hands.skeleton} />
          <group visible={props.eyewear === 'Gasmask2'} name="Gasmask2">
            <skinnedMesh name="Gasmask2_1" geometry={nodes.Gasmask2_1.geometry} material={materials.Glass_skin1} skeleton={nodes.Gasmask2_1.skeleton} />
            <skinnedMesh name="Gasmask2_2" geometry={nodes.Gasmask2_2.geometry} material={materials.Gasmask1_skin1} skeleton={nodes.Gasmask2_2.skeleton} />
          </group>
          <group visible={props.eyewear === 'Goggles2_up'} name="Goggles1">
            <skinnedMesh name="Goggles1_1" geometry={nodes.Goggles1_1.geometry} material={materials.Glass_skin1} skeleton={nodes.Goggles1_1.skeleton} />
            <skinnedMesh name="Goggles1_2" geometry={nodes.Goggles1_2.geometry} material={materials.Cap4_skin1} skeleton={nodes.Goggles1_2.skeleton} />
          </group>
          <group visible={props.eyewear === 'Goggles2_for_helmet'} name="Goggles2_for_helmet">
            <skinnedMesh name="Goggles2_for_helmet_1" geometry={nodes.Goggles2_for_helmet_1.geometry} material={materials.Equip1_skin1} skeleton={nodes.Goggles2_for_helmet_1.skeleton} />
            <skinnedMesh name="Goggles2_for_helmet_2" geometry={nodes.Goggles2_for_helmet_2.geometry} material={materials.Glass_skin1} skeleton={nodes.Goggles2_for_helmet_2.skeleton} />
          </group>
          <group visible={props.eyewear === 'Goggles2_up'} name="Goggles2_up" position={[0, 0.19, 0.76]} rotation={[-0.42, 0, 0]}>
            <skinnedMesh name="Goggles2_up_1" geometry={nodes.Goggles2_up_1.geometry} material={materials.Equip1_skin1} skeleton={nodes.Goggles2_up_1.skeleton} />
            <skinnedMesh name="Goggles2_up_2" geometry={nodes.Goggles2_up_2.geometry} material={materials.Glass_skin1} skeleton={nodes.Goggles2_up_2.skeleton} />
          </group>
          <skinnedMesh visible={props.headset === 'Headset1'} name="Headset1" geometry={nodes.Headset1.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Headset1.skeleton} />
          <skinnedMesh visible={props.headset === 'Headset2'} name="Headset2" geometry={nodes.Headset2.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Headset2.skeleton} />
          <skinnedMesh visible={props.headset === 'Headset3'} name="Headset3" geometry={nodes.Headset3.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Headset3.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet1'} name="Helmet1" geometry={nodes.Helmet1.geometry} material={materials.Cap1_Skin1} skeleton={nodes.Helmet1.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet1'} name="Helmet1_Fastering" geometry={nodes.Helmet1_Fastering.geometry} material={materials.Cap1_Skin1} skeleton={nodes.Helmet1_Fastering.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet1'} name="Helmet1_For_goggles" geometry={nodes.Helmet1_For_goggles.geometry} material={materials.Cap1_Skin1} skeleton={nodes.Helmet1_For_goggles.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet2'} name="Helmet2" geometry={nodes.Helmet2.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Helmet2.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet2'} name="Helmet2_For_goggles" geometry={nodes.Helmet2_For_goggles.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Helmet2_For_goggles.skeleton} position={[0, 0, 0.12]} rotation={[-0.07, 0, 0]} />
          <skinnedMesh visible={props.headgear === 'Helmet2'} name="Helmet2_fastening" geometry={nodes.Helmet2_fastening.geometry} material={materials.Helmet2_skin1} skeleton={nodes.Helmet2_fastening.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet3'} name="Helmet3" geometry={nodes.Helmet3.geometry} material={materials.Helmet3_skin1} skeleton={nodes.Helmet3.skeleton} />
          <skinnedMesh visible={props.headgear === 'Helmet3'} name="Helmet3_fastering" geometry={nodes.Helmet3_fastering.geometry} material={materials.Helmet3_skin1} skeleton={nodes.Helmet3_fastering.skeleton} />
          <group name="Helmet3_Visor_close">
            <skinnedMesh visible={props.headgear === 'Helmet3-closed'} name="Helmet3_Visor_close_1" geometry={nodes.Helmet3_Visor_close_1.geometry} material={materials.Helmet3_skin1} skeleton={nodes.Helmet3_Visor_close_1.skeleton} />
            <skinnedMesh visible={props.headgear === 'Helmet3-closed'} name="Helmet3_Visor_close_2" geometry={nodes.Helmet3_Visor_close_2.geometry} material={materials.Glass_skin1} skeleton={nodes.Helmet3_Visor_close_2.skeleton} />
          </group>
          <group name="Helmet3_Visor_open">
            <skinnedMesh visible={props.headgear === 'Helmet3-open'} name="Helmet3_Visor_open_1" geometry={nodes.Helmet3_Visor_open_1.geometry} material={materials.Helmet3_skin1} skeleton={nodes.Helmet3_Visor_open_1.skeleton} />
            <skinnedMesh visible={props.headgear === 'Helmet3-open'} name="Helmet3_Visor_open_2" geometry={nodes.Helmet3_Visor_open_2.geometry} material={materials.Glass_skin1} skeleton={nodes.Helmet3_Visor_open_2.skeleton} />
          </group>
          <skinnedMesh name="Holster1_empty" geometry={nodes.Holster1_empty.geometry} material={materials.Equip2_skin1} skeleton={nodes.Holster1_empty.skeleton} />
          <group name="Holster1_Pistol__for_Pants2_5_">
            <skinnedMesh name="Holster1_Pistol__for_Pants2_5__1" geometry={nodes.Holster1_Pistol__for_Pants2_5__1.geometry} material={materials.Equip2_skin1} skeleton={nodes.Holster1_Pistol__for_Pants2_5__1.skeleton} />
            <skinnedMesh name="Holster1_Pistol__for_Pants2_5__2" geometry={nodes.Holster1_Pistol__for_Pants2_5__2.geometry} material={materials.Pistol1_skin1} skeleton={nodes.Holster1_Pistol__for_Pants2_5__2.skeleton} />
          </group>
          <skinnedMesh name="Kneepad1_Left" geometry={nodes.Kneepad1_Left.geometry} material={materials.Pants1_Skin1} skeleton={nodes.Kneepad1_Left.skeleton} />
          <skinnedMesh name="Kneepad1_Right" geometry={nodes.Kneepad1_Right.geometry} material={materials.Pants1_Skin1} skeleton={nodes.Kneepad1_Right.skeleton} />
          <skinnedMesh visible={props.headgear === "Helmet1-NVG-Disabled" || props.headgear === "Helmet2-NVG-Disabled" } name="NVG_disabled" geometry={nodes.NVG_disabled.geometry} material={materials.Helmet2_skin1} skeleton={nodes.NVG_disabled.skeleton} position={[0, 0, 0.01]} />
          <skinnedMesh visible={props.headgear === "Helmet1-NVG-Enabled" || props.headgear === "Helmet2-NVG-Enabled" } name="NVG_enabled" geometry={nodes.NVG_enabled.geometry} material={materials.Helmet2_skin1} skeleton={nodes.NVG_enabled.skeleton} position={[0, 0, 0.01]} />
          <skinnedMesh name="Pants1" geometry={nodes.Pants1.geometry} material={materials.Pants1_Skin1} skeleton={nodes.Pants1.skeleton} position={[9.29, -0.94, 0.02]} />
          <skinnedMesh name="Pants4" geometry={nodes.Pants4.geometry} material={materials.Pants4_skin1} skeleton={nodes.Pants4.skeleton} />
          <skinnedMesh name="Pants5" geometry={nodes.Pants5.geometry} material={materials.Pants5_skin1} skeleton={nodes.Pants5.skeleton} />
          <skinnedMesh name="Shirt4" geometry={nodes.Shirt4.geometry} material={materials.Shirt4_skin1} skeleton={nodes.Shirt4.skeleton} />
          <skinnedMesh name="Shirt5" geometry={nodes.Shirt5.geometry} material={materials.Shirt5_skin1} skeleton={nodes.Shirt5.skeleton} />
          <skinnedMesh name="Shirt6" geometry={nodes.Shirt6.geometry} material={materials.Shirt6_skin1} skeleton={nodes.Shirt6.skeleton} />
          <skinnedMesh name="Vest1" geometry={nodes.Vest1.geometry} material={materials.Vest1_Skin1} skeleton={nodes.Vest1.skeleton} />
          <skinnedMesh name="Vest1_Belt" geometry={nodes.Vest1_Belt.geometry} material={materials.Vest1_Skin1} skeleton={nodes.Vest1_Belt.skeleton} />
          <skinnedMesh name="Vest2" geometry={nodes.Vest2.geometry} material={materials.Vest2_skin1} skeleton={nodes.Vest2.skeleton} />
          <skinnedMesh name="Vest2_Bottom" geometry={nodes.Vest2_Bottom.geometry} material={materials.Vest2_skin1} skeleton={nodes.Vest2_Bottom.skeleton} />
          <skinnedMesh name="Vest2_collar" geometry={nodes.Vest2_collar.geometry} material={materials.Vest2_skin1} skeleton={nodes.Vest2_collar.skeleton} />
          <skinnedMesh name="Vest2_Shoulder_L" geometry={nodes.Vest2_Shoulder_L.geometry} material={materials.Vest2_skin1} skeleton={nodes.Vest2_Shoulder_L.skeleton} />
          <skinnedMesh name="Vest2_Shoulder_R" geometry={nodes.Vest2_Shoulder_R.geometry} material={materials.Vest2_skin1} skeleton={nodes.Vest2_Shoulder_R.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/characters/fullModels/SK_Military_Character6-fullModel.glb')
