import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HP, WP} from '../component/util';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {db} from './Config';
const numberItem = [
  {id: 201, name: 201},
  {id: 202, name: 202},
  {id: 203, name: 203},
  {id: 204, name: 204},
  {id: 205, name: 205},
  {id: 206, name: 206},

  {id: 207, name: 207},
  {id: 208, name: 208},
  {id: 209, name: 209},
  {id: 210, name: 210},
  {id: 211, name: 211},
  {id: 212, name: 212},
  {id: 213, name: 213},
  {id: 214, name: 214},
  {id: 215, name: 215},

  {id: 216, name: 216},
];
const DockIndex = ({navigation}) => {


  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        {numberItem.map(item => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('DockTimer', {item})}
              style={{
                alignself: 'center',
                backgroundColor: '#FFA500',
                marginVertical: HP(1),
                width: WP(90),
                alignSelf: 'center',
                padding: WP(5),
              }}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default DockIndex;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232F3E',
    flex: 1,
  },
});
