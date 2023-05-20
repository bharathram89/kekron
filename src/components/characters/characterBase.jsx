import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, useAnimations } from '@react-three/drei';
import Loader from '../loadingidicator/loader';

function Model(props) {
  const { scene } = useGLTF('https://ac-dev-s3.s3.us-west-1.amazonaws.com' + props.glbFile);
  return <primitive object={scene} {...props} />;
}

function CharacterBase(props) {
  const myMesh = useRef();
  // const { actions } = useAnimations(props.animations);

  // useEffect(() => {
  //   actions && actions.idle.play(); // Play the 'idle' animation
  // }, [actions]);

  return (
    <mesh ref={myMesh}>
      <Suspense fallback={<Loader />}>
        <PresentationControls speed={4.0} zoom={1.5}>
          <Stage intensity={2}>
            <Model glbFile={props.glbFile} scale={2.0} />
          </Stage>
        </PresentationControls>
      </Suspense>
    </mesh>
  );
}

export default CharacterBase;






  // const gltf = useFBX('https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/Idle.fbx'); //useLoader(FBXLoader, "https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/Idle.glb")
//   const fbx = useFBX('https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/Idle.fbx')

//   const gltf = useLoader(GLTFLoader, 'https://ac-dev-s3.s3.us-west-1.amazonaws.com/glb/Idle.glb'); // Load the "idle.glb" file
// console.log(gltf,"glasdf")
//   const modelAnimations = useAnimations(fbx.animations);

//   useEffect(() => {
//     modelAnimations.actions[modelAnimations.names[0]].play(); // Play the first animation in the array
//   }, [modelAnimations]);

// function useAnimations(animations) {
//   const { current: mixer } = useRef(new THREE.AnimationMixer());
//   useEffect(() => {
//     if (animations && animations.length > 0) {
//       animations.forEach((clip) => {
//         const action = mixer.clipAction(clip);
//         action.play();
//       });
//     }
//     return () => mixer.stopAllAction();
//   }, [animations, mixer]);
//   useFrame((state, delta) => mixer.update(delta));
//   return mixer;
// }