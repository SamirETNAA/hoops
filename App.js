import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
        style={{
          backgroundColor: "#FE434C",
          borderColor: "transparent",
          with: 250
        }}
        textStyle={{ color: "#FFFFFF", fontSize: 20 }}
        >
        Hello
      </Button>
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
