import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { TextInput, HelperText, Surface } from 'react-native-paper';
import { SECONDARY } from '../constants/colors';

export const CustomInput = ({
  field,
  placeholder,
  type,
  values,
  secure,
  errors,
  touched,
  handleBlur,
  handleChange,
  multiline,
  width,
  condition,
  placeValue,
  editable,
}) => {
  const ShadowView = Platform.OS === 'android' ? Surface : View;
  return (
    <>
      <ShadowView
        style={{
          ...Platform.select({
            android: styles.android,
          }),
        }}
      >
        <TextInput
          mode='outlined'
          caretHidden={false}
          underlineColor='transparent'
          placeholder={`    ${placeholder}`}
          placeholderTextColor={
            errors[field] && touched[field] ? 'red' : 'gray'
          }
          value={placeValue ? placeValue : String(values[field])}
          onChangeText={handleChange(field)}
          onBlur={handleBlur(field)}
          error={errors[field] && touched[field]}
          spellCheck={true}
          autoCorrect
          secureTextEntry={secure}
          multiline={multiline}
          keyboardType={type ? type : 'default'}
          returnKeyLabel='next'
          autoCapitalize='none'
          returnKeyType='next'
          style={{
            shadowColor: errors[field] && touched[field] ? 'red' : SECONDARY,
            width,
            ...styles.input,
          }}
          theme={{
            colors: {
              // primary: 'transparent',

              text: SECONDARY,
              background: 'white',

              placeholder: 'transparent',
              // error: 'transparent',
            },

            animation: {
              scale: 2,
            },
            roundness: 10,
          }}
          editable={!editable ? true : false}
        />
      </ShadowView>
      <HelperText
        style={styles.helperText}
        type='error'
        visible={errors[field] && touched[field]}
      >
        {errors[field] && touched[field] && errors[field]}
      </HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  android: {
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  input: {
    elevation: 15,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginTop: -5,
  },
  helperText: {
    marginLeft: 20,
    ...Platform.select({
      ios: {
        marginVertical: 8,
      },
    }),
  },
});
