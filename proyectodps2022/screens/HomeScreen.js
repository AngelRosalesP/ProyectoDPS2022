import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={{
        fontSize: 48,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Ir a la pantalla de Registro </Text>
      <Button
        title="regresar"
        onPress={() => navigation.navigate('Registro')}
      />
      <Button
        title="Regresar a la pantalla de Autentificacion"
        onPress={() => navigation.navigate('AuthTabs')}
      />
    </View>
  );
}

export default HomeScreen;