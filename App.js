import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />;
}

export default function App() {
  return (

    <View style={{ flex: 1 }}>
      <MyWebComponent />
      <StatusBar style="auto" />
    </View>

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
