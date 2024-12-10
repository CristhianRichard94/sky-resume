import * as THREE from 'three';

import { Float, OrbitControls, useTexture } from '@react-three/drei';
import React, { useEffect } from 'react';

import InfoText from './InfoText';
import Text from './Text';
import { useControls } from 'leva';
import { useThree } from '@react-three/fiber';

const Background = ({ gl }) => {
  const texture = useTexture('../assets/bg.jpg');
  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);
  return <primitive attach="background" object={formatted.texture} />;
};

const renderTitle = () => {
  const { position, rotation, color } = useControls('title', {
    position: { value: [-6, 5, -20] },
    rotation: { value: [-0.3, 0, 0] },
    color: 'lightblue',
  });
  return (
    <>
      <Float speed={0.7}>
        <Text
          textProps={{
            // font: '/Roboto-Bold.ttf',
            fontSize: 5,
            maxWidth: 20,
            textAlign: 'center',
            depthOffset: 15,
            position,
            rotation,
            color,
            scale: 2,
            'scale-z': 5,
          }}
          in3d={true}
          upperCase={true}
          text={`Welcome to \n my Resume \n experience`}
        />
      </Float>
      <Float speed={1}>
        <Text
          textProps={{
            // font: '/Roboto-Bold.ttf',
            fontSize: 1,
            maxWidth: 20,
            textAlign: 'center',
            depthOffset: 15,
            position: [-10, -6, -20],
            rotation,
            color: new THREE.Color('pink'),
            'scale-z': 5,
          }}
          in3d={true}
          upperCase={true}
          text={`You can find more info about \n         me searching around.`}
        />
      </Float>
    </>
  );
};
function calculateAge() {
  // Today's date
  const today = new Date();
  const birthDate = new Date('12-Nov-1994');

  // Calculate the difference in years
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust age if the birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const renderTexts = () => {
  const age = calculateAge();

  const texts = [
    {
      title: 'About me',
      texts: [
        `Cristhian Richard, ${age} years old, Systems Engineer, Developer, Mate fan, like to play ⚽️, listen to music.`,
      ],
      position: [-120, 90, -100],
    },
    {
      title: 'IT Experience',
      texts: [
        `Sidesys IT Solutions (Jun 2019 - Jan 2021)`,
        `Media.Monks (Jan 2021 - Present)`,
      ],
      position: [120, 60, 10],
    },
    {
      title: 'Skills',
      texts: [
        'Typescript, Angular, React, Vue, Three.js, Redux, Jasmine + Karma, Python, Node, .Net Framework, Agile methodologies',
      ],
      position: [0, 15, 50],
    },
    {
      title: 'Education',
      texts: [
        'Electrician Technician (EET2) (2013)',
        'System Analyst (UTN) (2018)',
        'Information System Engineer (UTN) (2019)',
      ],
      position: [-40, 45, 40],
    },
    {
      title: 'Contact',
      texts: [
        <a href="https://github.com/CristhianRichard94" target="_blank">
          Github
        </a>,
        <a
          href="https://www.linkedin.com/in/cristhian-richard-bb9060174/"
          target="_blank"
        >
          LinkedIn
        </a>,
        <a href="mailto:richardcristhian94@gmail.com" target="_blank">
          richardcristhian94@gmail.
        </a>,
      ],
      position: [-130, 90, 20],
    },
  ];

  return texts.map(({ texts: infoTexts, title, position }, i) => (
    <InfoText
      key={`info-text${i}`}
      texts={infoTexts}
      title={title}
      position={position}
    />
  ));
};

export default function Experience() {
  const { gl, scene } = useThree();
  useEffect(() => {
    gl.toneMapping = THREE.CineonToneMapping;
    gl.toneMappingExposure = 1.5;
    scene.traverse((object) => {
      if (object.material) {
        object.material.needsUpdate = true;
      }
    });
  }, []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI - Math.PI / 2.5}
      />

      <Background gl={gl} />
      {renderTitle()}
      {renderTexts()}
    </>
  );
}
