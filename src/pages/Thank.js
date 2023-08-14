import {View, Text, Image} from 'react-native';
import React from 'react';
import {WP} from '../component/util';

const Thank = () => {
  return (
    <View style={{backgroundColor: '#232F3E', flex: 1}}>
      <View
        style={{
          resizeMode: 'contain',
          height: WP(50),
          alignSelf: 'center',
          top: WP(30),
        }}>
        <Text style={{color: 'white', fontSize: WP(10), textAlign: 'center'}}>
          Thanks For A Great Shift
        </Text>
      </View>
      <Image
        source={require('../asset/b.png')}
        style={{
          resizeMode: 'contain',
          height: WP(50),
          alignSelf: 'center',
          top: WP(30),
        }}
      />
    </View>
  );
};

export default Thank;
