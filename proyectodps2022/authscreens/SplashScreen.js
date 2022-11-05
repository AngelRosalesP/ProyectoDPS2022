import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={{
        fontSize: 48,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Splash </Text>
    </View>
  );
}

export default SplashScreen;