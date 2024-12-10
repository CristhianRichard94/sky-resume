import * as THREE from 'three';

import React, { useEffect, useRef } from 'react';

import { DirectionalLight } from 'three';
import { useControls } from 'leva';
import { useHelper } from '@react-three/drei';

function Lights() {
  const directionalLight = useRef();
  const { position } = useControls('light', {
    position: { value: [0, 0, 1] },
  });
  useEffect(() => {
    directionalLight.current.lookAt(-8, 0, -30);
    // helper.current.update();
  }, [directionalLight]);
  //   const helper = useHelper(directionalLight, THREE.DirectionalLightHelper);

  return (
    <>
      <directionalLight
        ref={directionalLight}
        position={position}
        intensity={3}
      />
      <ambientLight intensity={1} />
    </>
  );
}

export default Lights;
