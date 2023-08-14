/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {WP, HP} from './util';

const CustomButton = ({
  btnName,
  color,
  width,
  backgroundColor,
  borderWidth,
  onPress,
}) => {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '#232F3E',
        width: width ? width : WP(90),
        padding: WP(3),
        height: HP(6.5),
        borderRadius: WP(26),
      }}
      onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          color: color ? color : 'white',
          fontWeight: 'bold',
        }}>
        {btnName}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
