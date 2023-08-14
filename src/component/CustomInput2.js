import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {WP} from './util';

const CustomInput2 = ({
  lablelText,
  value,
  onChangeText,
  showIcon = false,
  placeholder,
  onFocus,
  keyboardType,
  labelTextTop,
  fontWeight,
  secureEntryText,
}) => {
  return (
    <View style={styles._mainContainer}>
      <Text
        style={[
          styles._labelText,
          {top: labelTextTop, fontWeight: fontWeight},
        ]}>
        {lablelText}
      </Text>
      <View>
        <TextInput
          style={styles._textInputStyle}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={onFocus}
          keyboardType={keyboardType}
          secureTextEntry={secureEntryText}
        />
      </View>
    </View>
  );
};

export default CustomInput2;

const styles = StyleSheet.create({
  _mainContainer: {
    marginVertical: WP(3),
    bottom: WP(2),
  },
  _labelText: {
    paddingBottom: WP(2),
    fontWeight: '600',
    color: '#AAAEB9',
    left: WP(1),
  },
  _textInputStyle: {
    borderWidth: 0.8,
    padding: WP(3.5),
    borderColor: 'black',
    color: 'white',
    backgroundColor: '#46505D',
  },
});
