import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EnhancedLoginForm from './EnhancedLoginForm';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView keyboardShouldPersistTaps='always' style={styles.screen}>
      <EnhancedLoginForm navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  wrapper: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
