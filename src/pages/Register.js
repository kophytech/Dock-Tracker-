import {StyleSheet, Text, View, Alert, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../component/CustomButton';
import {HP, WP} from '../component/util';
import FormCustomInput from '../component/FormCustomInput';
import {auth} from './Config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import {API_URL} from '../../Utils';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [loading, setLoading] = useState(false);

  const addUser = () => {
    if (email == '' || password == '' || password !== confirm_password) {
      Alert.alert('Kindly input details correctly');
    } else {
      setLoading(true);
      axios
        .post(`${API_URL}/register`, {
          username: email,
          password: password,
          password2: password,
          email: email,
          first_name: name,
          last_name: name,
        })
        .then(item => {
          setLoading(false);
          navigation.navigate('Login', {
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
    <KeyboardAwareScrollView style={styles._container}>
      <View>
        <View style={{marginTop: WP(13)}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: WP(8),
              top: WP(3),
              left: WP(12),
              color:'black'
            }}
          >
            Register{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: WP(3),
              top: WP(7),
              left: WP(12),
              color: '#A9ABAA',
            }}
          >
            Register an account to get started
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <FormCustomInput
              name="name"
              placeholder="Name"
              onChangeText={txt => setName(txt)}
            />
          </View>
          <View style={{top: WP(-6)}}>
            <FormCustomInput
              name="email"
              placeholder="Email"
              onChangeText={txt => setEmail(txt)}
            />
          </View>
          <View style={{top: WP(-8)}}>
            <FormCustomInput
              name="password"
              placeholder="Password"
              onChangeText={txt => setPassword(txt)}
              secureTextEntry={true}
            />
          </View>
          <View style={{top: WP(-8)}}>
            <FormCustomInput
              name="confirm_password"
              placeholder="Confirm Password"
              onChangeText={txt => setConfirm_password(txt)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <CustomButton
            width={WP(80)}
            backgroundColor="#FFA500"
            btnName={loading ? <ActivityIndicator color="white" /> : 'Register'}
            onPress={() => addUser()}
          />
          <View style={{alignSelf: 'center', top: WP(3), height: WP(13)}}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Already a member{' '}
              <Text
                style={{color: 'black', textAlign: 'center'}}
                onPress={() => navigation.navigate('Login')}
              >
                Click here to login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  _container: {
    backgroundColor: 'white',
    flex: 1,
  },
  formContainer: {
    width: WP(80),
    alignSelf: 'center',
    top: HP(3),
  },
});
