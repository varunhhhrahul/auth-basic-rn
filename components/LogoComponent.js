import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SECONDARY_SHADE_2 } from '../constants/colors';

const LogoComponent = ({ marginBottom }) => {
  return (
    <View
      style={{
        ...styles.screen,
        marginBottom,
      }}
    >
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  screen: {
    // justifyContent: 'center',
    // flexDirection: 'column',
  },

  text: {
    marginVertical: 20,
    marginHorizontal: 12,
    fontSize: 55,
    letterSpacing: 2,
    textAlign: 'left',
    fontWeight: '800',
    fontFamily: 'special',
    // alignSelf: 'center',
    color: SECONDARY_SHADE_2,
    // textTransform: 'uppercase',
  },
});
