import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  var inc =0,
    peso = 81,
    altura = 167,
    nivel =1,
    exp = 0,
    imb = 0,
    edad = 27,
    grasa = 30,
    definicion =0,
    IMC=peso / ((altura / 100) * (altura / 100));

  imb = (10 * peso + 6.25 * altura - 5 * edad + 5).toFixed(2);
  grasa = grasa - definicion;
  if (nivel == 0) {    
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 * inc * inc).toFixed(2);;
    inc = ((peso - (peso * (grasa/100)) ) * 0.0075);
  }
  if (nivel == 1) {    
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 * inc).toFixed(2);;
    inc = ((peso - (peso * grasa/100) ) * 0.015);
  }
  if (nivel == 2) {    
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 - 2.7).toFixed(2);;
    inc = ((peso - (peso * grasa/100) ) * 0.03);
  }
  if (nivel == 3) {
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 - 5.4).toFixed(2);;
    inc = ((peso - (peso * grasa/100)  ) * 0.06);
  }
  if (nivel == 4) {
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 - 10.8).toFixed(2);;
    inc = ((peso - (peso * grasa/100)  ) * 0.12);
  }
  if (nivel == 5) {
    grasa =(1.2 * IMC + 0.23 *edad - 10.8 * 1 - 21.6).toFixed(2);;
    inc = ((peso - (peso * grasa/100)  ) * 0.24);
  }
  
  return (
    <View>
      <Text
      style={{
        fontSize: 48,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      > Pantalla de Inicio </Text>
    </View>
  );
}

export default HomeScreen;