import { Html } from '@react-three/drei';
import React from 'react';

function InfoText({ title, texts, position }) {
  return (
    <>
      <Html wrapperClass="info" position={position} center>
        <div
          className="dot"
          style={{ transform: `scale(${0.5 + Math.random()})` }}
        ></div>
        <div className="text">
          <h4>{title.toUpperCase()}</h4>
          {texts.map((text, i) => (
            <p key={`title-${i}`}>{text}</p>
          ))}
        </div>
      </Html>
    </>
  );
}

export default InfoText;
