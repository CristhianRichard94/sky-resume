import './style.css';

import React, { StrictMode } from 'react';

import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { Leva } from 'leva';
import Lights from './components/Lights';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));
const isProd = true;
root.render(
  <>
    <StrictMode>
      <Canvas>
        <Leva
          collapsed // default = false, when true the GUI is collpased
          hidden={isProd} // default = false, when true the GUI is hidden
        />
        <Experience />
        <Lights />
      </Canvas>
    </StrictMode>
  </>
);
