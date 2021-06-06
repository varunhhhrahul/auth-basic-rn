import React from 'react';
import { View, Platform, Text, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { SECONDARY } from '../constants/colors';

export const CustomFormButton = ({
  label,
  handleSubmit,
  loading = false,
  disabled,
}) => {
  const ShadowView = Platform.OS === 'android' ? Surface : View;
  return (
    <ShadowView
      style={{
        ...Platform.select({
          android: styles.android,
          ios: styles.ios,
        }),
      }}
    >
      <Button
        loading={loading}
        mode='contained'
        disabled={disabled}
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.text}>{label}</Text>
      </Button>
    </ShadowView>
  );
};

const styles = StyleSheet.create({
  android: {
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  ios: {
    marginVertical: 15,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: SECONDARY,
    borderRadius: 10,
    color: '#ffffff',
    shadowColor: SECONDARY,
    fontFamily: 'special',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'special',
  },
});
