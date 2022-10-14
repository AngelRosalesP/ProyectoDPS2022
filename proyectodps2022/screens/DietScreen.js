import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DietScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={{
        fontSize: 48,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Pantalla de dietas </Text>
    </View>
  );
}

export default DietScreen;