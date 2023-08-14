import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HP, WP} from '../component/util';
import CustomInput2 from '../component/CustomInput2';
import CustomButton from '../component/CustomButton';
import {auth} from './Config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../Utils';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(props?.route?.params?.params, 'props');

  const userLogin = async () => {
    if (email == '' || password == '') {
      Alert.alert('Kindly input details correctly');
    } else {
      setLoading(true);
      console.log(email);
      axios
        .post(`${API_URL}/user/login`, {
          username: email,
          password: password,
        })
        .then(item => {
          const jsonValue = JSON.stringify(item);
          AsyncStorage.setItem('userDetails', jsonValue);
          setLoading(false);

          props.navigation.navigate('DockIndex', {
            params: 'Successfully Registered.. Kindly Login',
          });
        })
        .catch(error => {
          console.log(error, 'error');
          setLoading(false);
          Alert.alert('Kindly check your details... Something went wrong,');
        });
    }
  };
  return (
    <View style={styles._container}>
      <View style={{width: WP(90), alignSelf: 'center'}}>
        <Text
          style={{marginVertical: WP(3), textAlign: 'center', color: 'green'}}
        >
          {props?.route?.params?.params}
        </Text>
        <CustomInput2
          lablelText={'Email'}
          onChangeText={txt => setEmail(txt)}
        />
        <CustomInput2
          lablelText={'Password'}
          onChangeText={txt => setPassword(txt)}
          secureEntryText={true}
        />
        <View>
          <CustomButton
            onPress={() => userLogin()}
            btnName={loading ? <ActivityIndicator color="white" /> : 'Login'}
            backgroundColor="#FFA500"
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text style={{color: 'yellow', textAlign: 'center', top: WP(3)}}>
          Not a member yet? Create new account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  _container: {
    backgroundColor: '#232F3E',
    flex: 1,
  },
  formContainer: {
    width: WP(80),
    alignSelf: 'center',
    top: HP(3),
  },
});
