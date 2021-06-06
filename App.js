import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SECONDARY } from './constants/colors';
import useCachedResources from './hooks/useCachedResources';
import { AuthNavigator } from './navigation/AuthNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: SECONDARY,
        },
      }}
    >
      <StatusBar style='auto' />
      <AuthNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
