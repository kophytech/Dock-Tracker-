import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {WP} from './util';

const FormCustomInput = ({
  lablelText,
  value,
  onChangeText,
  showIcon = false,
  placeholder,
  onFocus,
  keyboardType,
  labelTextTop,
  fontWeight,
  secureTextEntry,
}) => {
  return (
    <View style={styles._mainContainer}>
      <Text
        style={[styles._labelText, {top: labelTextTop, fontWeight: fontWeight}]}
      >
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
          secureTextEntry={secureTextEntry}
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

export default FormCustomInput;

const styles = StyleSheet.create({
  _mainContainer: {
    marginVertical: WP(3),
    bottom: WP(2),
  },
  _labelText: {
    paddingBottom: WP(2),
    fontWeight: '600',
    color: 'black',
    left: WP(1),
  },
  _textInputStyle: {
    borderWidth: 0.8,
    padding: WP(3.5),
    borderColor: 'black',
    borderRadius: WP(5),
    color: 'black',
  },
});
