import { Text, Text3D } from '@react-three/drei';

import React from 'react';

function TextComponent({ text, textProps, upperCase, in3d }) {
  return in3d ? (
    <Text3D {...textProps} font="../assets/Roboto_Bold.json">
      {upperCase ? text.toUpperCase() : text}
      <meshStandardMaterial color={textProps.color} />
    </Text3D>
  ) : (
    <Text {...textProps}>{upperCase ? text.toUpperCase() : text}</Text>
  );
}

export default TextComponent;
