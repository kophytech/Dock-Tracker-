import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../component/CustomButton';
import {HP, WP} from '../component/util';
import FormCustomInput from '../component/FormCustomInput';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles._container}>
      <Image
        source={require('../asset/o.jpeg')}
        style={{
          width: WP(80),
          alignSelf: 'center',
          height: HP(34),
          top: WP(10),
        }}
      />
      {/* top: HP(50) */}
      <View style={{top: HP(20)}}>
        <View style={{marginVertical: WP(3), alignSelf: 'center'}}>
          <CustomButton
            btnName={'Create New Account'}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <CustomButton
            btnName={'Log In'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  _container: {
    backgroundColor: '#FFA500',
    flex: 1,
  },
});
