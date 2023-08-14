// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../pages/Onboarding';
import Register from '../pages/Register';
import DockIndex from '../pages/DockIndex';
import DockTimer from '../pages/DockTimer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../pages/Login';
import Thank from '../pages/Thank';
// import Ionicons from 'react-native-icon/Ionicons';

const Stack = createNativeStackNavigator();

function RootNavigator({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true, headerShadowVisible: false}}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={({navigation, route}) => ({
            headerBackVisible: false,
            headerStyle: {backgroundColor: '#FFA500', elevation: 0},
            headerTitle: () => <></>,
            headerTitleAlign: 'center',

            headerLeft: () => <></>,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation, route}) => ({
            headerBackVisible: false,
            headerStyle: {backgroundColor: '#232F3E', elevation: 0},
            headerTitle: () => (
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="Thank"
          component={Thank}
          options={({navigation, route}) => ({
            headerBackVisible: false,
            headerStyle: {backgroundColor: '#232F3E', elevation: 0},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DockIndex')}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: () => <></>,
            headerTitleAlign: 'center',
          })}
        />

        <Stack.Screen
          name="DockTimer"
          component={DockTimer}
          options={({navigation, route}) => ({
            headerBackVisible: false,
            headerStyle: {backgroundColor: '#232F3E', elevation: 0},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Time Starts Counting Down
              </Text>
            ),
            headerTitleAlign: 'center',
          })}
        />

        {/* */}
        {/**/}

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="DockIndex"
          component={DockIndex}
          options={({navigation, route}) => ({
            headerBackVisible: false,
            headerStyle: {backgroundColor: '#232F3E', elevation: 0},
            headerTitle: () => (
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Select a dock door
              </Text>
            ),
            headerTitleAlign: 'center',

            headerLeft: () => <></>,
          })}
        />
        {/* #232F3E */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
