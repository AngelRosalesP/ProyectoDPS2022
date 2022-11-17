import React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  PolyLine,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  SafeAreaView,
} from "react-native-svg";
import { useState } from "react";
import { Registrarse, Btn2, Regresar } from "../componentes/botones";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const ProfileScreen = ({ navigation }) => {
  const [state, setState] = useState({
    peso: 54,
    altura: 165,
    nivel: 1,
    edad: 27,
    exp: 0,
    imb: 0,
    grasa: 0,
    cuello: 0,
    cintura: 0,
    cadera: 0,
    genero: "Hombre",
    IMC: 0,
    diasT: 0,
    diasM: 0,
    pdcc:0,
    simular: true,
  });

  const CapturarDatos = (campo, value) => {
    setState({ ...state, [campo]: value });
  };
  const Simulacion = async event => {     
    
    if (
      state.diasM === "" ||
      state.diasT === ""
    ) {
      Alert.alert("Campos vacios, Favor rellene los campos");
    } else {      
        for (var i=state.diasT; i < state.diasM; i++) {
          CapturarDatos("diasT",parseInt(state.diasT)+i);

          await delay(10);  
           
        }
    }
  };
  
  if (state.cintura > 0 && state.cuello > 0 && state.cadera > 0) {
    state.IMC =(state.cintura-state.cuello + ((state.pdcc - state.imb)*state.diasT/365)).toFixed(2);
  } else {
    state.IMC = (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) / ((state.altura / 100) * (state.altura / 100));
    console.log(state.IMC);
  }

  if (state.genero == "Hombre") {
    if(state.imb===0){
    state.imb = (
      10 * (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) +
      6.25 * state.altura -
      5 * (state.edad + state.diasT/365) +5
    ).toFixed(2);
    }
    if (state.nivel < 0) {
      state.nivel = 1;
    }
    if (state.nivel >= 1) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.0015;
      state.grasa = (
        (1.2 * parseFloat(state.IMC) + 0.23 * ( parseFloat(state.edad) +  parseFloat(state.diasT/365)) - 10.8 )
      ).toFixed(2);
    }
    if (state.nivel >= 2) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.03;
      state.grasa = (
        (1.2 * parseFloat(state.IMC) + 0.23 * ( parseFloat(state.edad) +  parseFloat(state.diasT/365)) - 10.8 * 1 - 2.7)
      ).toFixed(2);
    }
    if (state.nivel >= 3) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.06;
      state.grasa = (
        (1.2 * parseFloat(state.IMC) + 0.23 * ( parseFloat(state.edad) +  parseFloat(state.diasT/365)) - 10.8 * 1 - 5.4)
      ).toFixed(2);
    }
    if (state.nivel >= 4) {
      inc =((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.12;
      state.grasa = (
        (1.2 * parseFloat(state.IMC) + 0.23 * ( parseFloat(state.edad) +  parseFloat(state.diasT/365)) - 10.8 * 1 - 10.8)
      ).toFixed(2);
    }
    if (state.nivel >= 5) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.24;
      state.grasa = (
        (1.2 * parseFloat(state.IMC) + 0.23 * ( parseFloat(state.edad) +  parseFloat(state.diasT/365)) - 10.8 * 1 - 21.6)
      ).toFixed(2);
    }
    return (
      <View>
        <View style={styles.Header}>
        <Text
          style={{
            fontSize: 15,
            color: "#FFE500",
            position: "absolute",
            top: 230,
            left: 10,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {"Dias: " + state.diasT}
        </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 250,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Peso: " + (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))).toFixed(2) + " Kg"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 270,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Altura: " + state.altura + " cm"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 290,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Edad: " +  (parseInt(state.edad) + parseFloat(state.diasT/365)).toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 310,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"IMC: " + state.IMC.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 330,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"IMB: " + state.imb}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 350,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Grasa: " + state.grasa + "%"}
          </Text>
          <Svg
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 0,
              left: 75,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
            width="250"
            height="500"
            viewBox="0 0 257 300"
            fill="none"
            id="svg8877"
          >
            <Path
              d="M5.5 57 
        Q 40 50 50 57
        Q 65 47 90 53  "
              //fill="#DFD855"
              //stroke="#D9D9D9"
              id="Piel"
            />

            <Path
              d={
                "M130.5 40 Q150.5 " +
                (40 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " 167 50          Q190 " +
                (50 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " 210 55.5          Q" +
                (220 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " " +
                (55.5 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
                " 253 57          V71" +
                "Q220 " +
                (70 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " 210 68          Q188 " +
                (70 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " " +
                (160 + inc * 0.2) +
                " 65          Q" +
                (145 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
                " " +
                (90 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (1000 * state.nivel)) +
                " " +
                (159 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
                " 120          Q" +
                (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (200 * state.nivel)) +
                " 160 " +
                (158 + inc / 9 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " 170 Q158 190 159 200 Q" +
                (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " 230 155 257" +
                "H145" +
                "Q " +
                (150 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
                " 210 145 200      " +
                "Q" +
                (138 - inc / 1.5 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
                " 165 129 145"
              }
              fill="#393704"
              stroke="cyan"
              id="Grasa"
            />
            <Path
              transform="matrix(-1,0,0,1,257.75595,-0.00175479)"
              d={
                "M130.5 40 Q150.5 " +
                (40 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " 167 50          Q190 " +
                (50 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " 210 55.5          Q" +
                (220 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
                " " +
                (55.5 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
                " 253 57          V71" +
                "Q220 " +
                (70 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " 210 68          Q188 " +
                (70 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
                " " +
                (160 + inc * 0.2) +
                " 65          Q" +
                (145 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
                " " +
                (90 +inc+ ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (1000 * state.nivel)) +
                " " +
                (159 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
                " 120          Q" +
                (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (200 * state.nivel)) +
                " 160 " +
                (158 + inc / 9 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
                " 170 Q158 190 159 200 Q" +
                (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
                " 230 155 257" +
                "H145" +
                "Q " +
                (150 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (400 * state.nivel)) +
                " 210 145 200      " +
                "Q" +
                (138 - inc / 1.5 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (400 * state.nivel)) +
                " 165 129 145"
              }
              fill="#393704"
              stroke="cyan"
              id="Grasa2"
            />
            <G id="Huesos">
              <Path
                d="M106.385 206.84L105 202.28L108.231 200L111 202.28L110.077 208.55L111 253.58L107.308 257L105 254.72L106.385 206.84Z"
                fill="#D9D9D9"
                id="TibiaDerecha"
              />
              <Path
                d="M149.385 206.84L148 202.28L151.231 200L154 202.28L153.077 208.55L154 253.58L150.308 257L148 254.72L149.385 206.84Z"
                fill="#D9D9D9"
                id="TibiaIzquierda"
              />
              <Path
                d="M120 139.091L114 133L104.5 134.305L106.5 145.617L104.5 188.253L104 196.955L109 200L114 189.123V145.617L120 139.091Z"
                fill="#D9D9D9"
                id="FemurDerecho"
              />
              <Path
                d="M138 139.091L144 133L153.5 134.305L151.5 145.617L153.5 188.253L154 196.955L149 200L144 189.123V145.617L138 139.091Z"
                fill="#D9D9D9"
                id="FemurIzquierdo"
              />
              <Path
                d="M118 110H109.5L112.5 130L128 143V115H122.5L118 110Z M139 110H147.5L144.5 130L129 143V115H134.5L139 110Z"
                fill="#D9D9D9"
                id="Cinto"
              />

              <Ellipse
                cx="130"
                cy="19.5"
                rx="16"
                ry="19.5"
                fill="#D9D9D9"
                id="Craneo"
              />
              <Path
                d="M 135 85 H 125 V 115 H 135  z"
                fill="#D9D9D9"
                id="Columna"
              />
              <Path
                d="M 109 47L98 55 V60.5L109 96 H118L128.5 86.5V47H109Z M148.5 47L159.5 55V60.5L148.5 96H139.5L129 86.5V47H148.5Z"
                fill="#D9D9D9"
                id="Pulmones"
              />
              <Path
                d="M 165 55 L210 60 v5 L 165 60 z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                id="HuezoBrazoIzquierdo"
              />
              <Path
                d="M 95 55 L50 60 v5 L 95 60 z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                id="HuezoBrazoDerecho"
              />
              <Path
                d="M 215 60 L300 60 v5 L215 65 z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                id="HuezoAnteBrazoIzquierdo"
              />
              <Path
                d="M 45 60 L0 60 v5 L 45 65 z"
                fill="#D9D9D9"
                stroke="#D9D9D9"
                id="HuezoAnteBrazoDerecho"
              />
            </G>
            <G id="Musculos 1">
              <Path
                d={
                  "M122 115 Q " +
                  (120 - inc) +
                  " 127.381 129 141 Q " +
                  (136 + inc) +
                  " 130 135 115 L132 118.714 H125.667Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="AbdomenBajo" //Path8775
              />
              <Path
                d={
                  "M154.5 123 L151 127 L156.968 169.577 Q" +
                  (158 + inc) +
                  " 153 156. 122Z"
                }
                stroke="#A12C2C"
                fill="#C96363"
                id="MusculoPequeñoPierna"
              />
              <Path
                d={
                  "M136 139.507 Q" +
                  (140.214 - inc) +
                  " 160.123 148.143 198 Q" +
                  (153 + inc) +
                  " 175.466 145.107 128Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Pierna"
              />
              <Path
                d={
                  "M153.7 200 Q" +
                  (146 - inc) +
                  " 215.957 153.7 253 Q" +
                  (157 + inc) +
                  " 236.473 157 200 L153.7 200 Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Pantorrilla"
              />
              <Path
                d={
                  "M145.828 49.5 H136 Q" +
                  (157.207 + inc / 2) +
                  " " +
                  (46 - inc / 2) +
                  " 166 56H160.828C160.414 56 158.241 54.3333 157.207 53.5L145.828 49.5Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="hombro izquierdo"
              />
              <Path
                d={"M137 44.5 Q138.5 " + (42 - inc / 2) + " 148.5 43z"}
                fill="#C96363"
                stroke="#A12C2C"
                id="espalda"
              />

              <Path
                d={
                  "M143 83 Q" +
                  (141.105 + inc / 4) +
                  " " +
                  (93.3433 + inc / 4) +
                  " 131 93.8358 Q" +
                  (131 - inc / 4) +
                  " " +
                  (84.9701 - inc / 4) +
                  " 143 83"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab1"
              />
              <Path
                d={
                  "M142.368 96.2985 Q" +
                  (131 - inc / 4) +
                  " " +
                  (96.2985 - inc / 4) +
                  " 131 103.7463 Q" +
                  (142.368 + inc / 4) +
                  " " +
                  (99.7463 + inc / 2) +
                  " 142.368 96.2985z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab2"
              />
              <Path
                d={
                  "M131 106.149L141.737 105.657 Q" +
                  (141.737 + inc / 3) +
                  " " +
                  (109.104 + inc / 2) +
                  " 131 116 V106.149Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab3"
              />

              <Path
                d={
                  "M175 57.5 L169 54 Q192 " +
                  (50 - inc) +
                  " 207.5 59.5L175 57.5Z"
                }
                fill="#C96363"
                id="bicep"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M174 62.5L169 57.5L174 64.5 Q188 " +
                  (66.5 + inc / 2) +
                  " 206 63.5L188 61L174 62.5Z"
                }
                fill="#C96363"
                id="Path8805"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M253 61 L230.5 62.5L212 59 Q222.5 " +
                  (55.5 - inc / 2) +
                  " 253 61Z"
                }
                fill="#C96363"
                id="Path8811"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M253 67.5L226.5 64.5L212 66 Q222.5 " +
                  (69.5 + inc / 2) +
                  " 253 67.5"
                }
                fill="#C96363"
                id="Path8813"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M153 74 L146 " +
                  (83 - inc / 4) +
                  " V " +
                  (85 + inc / 4) +
                  " L158.5 " +
                  (75 + inc / 3) +
                  " V66L153 74Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8819"
              />
              <Path
                d={
                  "M158 80.5 L146.5 " +
                  (95 - inc / 3) +
                  " V" +
                  (95 + inc / 4) +
                  " L 156.5 " +
                  (91.5 + inc / 4) +
                  "L158 84.5Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8821"
              />
              <Path
                d={
                  "M156.5 94.5 L146 " +
                  (103 - inc / 3) +
                  "  V" +
                  (105 + inc / 5) +
                  "  L154.5 101.5  L156.5 94.5 Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8823"
              />

              <Path
                d={
                  "M154 " +
                  (108 - inc / 3) +
                  " L146.5 " +
                  (115 - inc / 3) +
                  " L144.5 " +
                  (120 + inc / 3) +
                  " L154 " +
                  (114 + inc / 3) +
                  "Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8825"
              />
              <Path
                d={
                  "M132 58.25V78.0833 Q" +
                  (152.429 + inc) +
                  " " +
                  (69.9167 + inc) +
                  " 158 58.25 Q" +
                  (145.619 + inc) +
                  " " +
                  (53 - inc / 3) +
                  " 136.333 53Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="pectoral"
              />
            </G>
            <G
              id="Musculos 2"
              transform="matrix(-1,0,0,1,257.75595,-0.00175479)"
            >
              <Path
                d={
                  "M154.5 123 L151 127 L156.968 169.577 Q" +
                  (158 + inc) +
                  " 153 156. 122Z"
                }
                stroke="#A12C2C"
                fill="#C96363"
                id="MusculoPequeñoPierna"
              />
              <Path
                d={
                  "M136 139.507 Q" +
                  (140.214 - inc) +
                  " 160.123 148.143 198 Q" +
                  (153 + inc) +
                  " 175.466 145.107 128Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Pierna"
              />
              <Path
                d={
                  "M153.7 200 Q" +
                  (146 - inc) +
                  " 215.957 153.7 253 Q" +
                  (157 + inc) +
                  " 236.473 157 200 L153.7 200 Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Pantorrilla"
              />
              <Path
                d={
                  "M145.828 49.5 H136 Q" +
                  (157.207 + inc / 2) +
                  " " +
                  (46 - inc / 2) +
                  " 166 56H160.828C160.414 56 158.241 54.3333 157.207 53.5L145.828 49.5Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="hombro izquierdo"
              />
              <Path
                d={"M137 44.5 Q138.5 " + (42 - inc / 2) + " 148.5 43z"}
                fill="#C96363"
                stroke="#A12C2C"
                id="espalda"
              />

              <Path
                d={
                  "M143 83 Q" +
                  (141.105 + inc / 4) +
                  " " +
                  (93.3433 + inc / 4) +
                  " 131 93.8358 Q" +
                  (131 - inc / 4) +
                  " " +
                  (84.9701 - inc / 4) +
                  " 143 83"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab1"
              />
              <Path
                d={
                  "M142.368 96.2985 Q" +
                  (131 - inc / 4) +
                  " " +
                  (96.2985 - inc / 4) +
                  " 131 103.7463 Q" +
                  (142.368 + inc / 4) +
                  " " +
                  (99.7463 + inc / 2) +
                  " 142.368 96.2985z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab2"
              />
              <Path
                d={
                  "M131 106.149L141.737 105.657 Q" +
                  (141.737 + inc / 3) +
                  " " +
                  (109.104 + inc / 2) +
                  " 131 116 V106.149Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="ab3"
              />

              <Path
                d={
                  "M175 57.5 L169 54 Q192 " +
                  (50 - inc) +
                  " 207.5 59.5L175 57.5Z"
                }
                fill="#C96363"
                id="bicep"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M174 62.5L169 57.5L174 64.5 Q188 " +
                  (66.5 + inc / 2) +
                  " 206 63.5L188 61L174 62.5Z"
                }
                fill="#C96363"
                id="Path8805"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M253 61 L230.5 62.5L212 59 Q222.5 " +
                  (55.5 - inc / 2) +
                  " 253 61Z"
                }
                fill="#C96363"
                id="Path8811"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M253 67.5L226.5 64.5L212 66 Q222.5 " +
                  (69.5 + inc / 2) +
                  " 253 67.5"
                }
                fill="#C96363"
                id="Path8813"
                stroke="#A12C2C"
              />
              <Path
                d={
                  "M153 74 L146 " +
                  (83 - inc / 4) +
                  " V " +
                  (85 + inc / 4) +
                  " L158.5 " +
                  (75 + inc / 3) +
                  " V66L153 74Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8819"
              />
              <Path
                d={
                  "M158 80.5 L146.5 " +
                  (95 - inc / 3) +
                  " V" +
                  (95 + inc / 4) +
                  " L 156.5 " +
                  (91.5 + inc / 4) +
                  "L158 84.5Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8821"
              />
              <Path
                d={
                  "M156.5 94.5 L146 " +
                  (103 - inc / 3) +
                  "  V" +
                  (105 + inc / 5) +
                  "  L154.5 101.5  L156.5 94.5 Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8823"
              />

              <Path
                d={
                  "M154 " +
                  (108 - inc / 3) +
                  " L146.5 " +
                  (115 - inc / 3) +
                  " L144.5 " +
                  (120 + inc / 3) +
                  " L154 " +
                  (114 + inc / 3) +
                  "Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="Path8825"
              />
              <Path
                d={
                  "M132 58.25V78.0833 Q" +
                  (152.429 + inc) +
                  " " +
                  (69.9167 + inc) +
                  " 158 58.25 Q" +
                  (145.619 + inc) +
                  " " +
                  (53 - inc / 3) +
                  " 136.333 53Z"
                }
                fill="#C96363"
                stroke="#A12C2C"
                id="pectoral"
              />
            </G>
          </Svg>

          <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>

              <Registrarse text="Simular" onPress={() => Simulacion()} />
              <TextInput
                keyboardType="numeric"
                placeholder="Dias Transcurridos"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("diasT", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Dias Meta"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("diasM", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Nivel Sedentarismo"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("nivel", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Peso(kg)"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("peso", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Altura(cm)"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("altura", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Edad"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("edad", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Promedio diario de calorias quemadas"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("imb", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Promedio diario de calorias consumidas"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("pdcc", value)}
              ></TextInput>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  } else if (state.genero == "Mujer") {
    state.imb = (
      10 * (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) +
      6.25 * state.altura -
      5 * state.edad +
      5
    ).toFixed(2);
    if (state.nivel >= 0) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * (state.grasa / 100)) * 0.0075;
      state.grasa = (
        1.2 * state.IMC +
        0.23 * state.edad -
        10.8 * 1 * inc * inc
      ).toFixed(2);
    }
    if (state.nivel == 1) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 100) * 0.0075;
      state.grasa = (
        510 /
          (1.0324 -
            0.19077 * (Math.log(state.IMC) / Math.log(10)) +
            0.15456 * (Math.log(state.altura / 2.54) / Math.log(10))) -
        450
      ).toFixed(2);
    }
    if (state.nivel >= 2) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 100) * 0.03;
      state.grasa = (
        495 /
          (1.0324 -
            0.19077 * (Math.log(state.IMC) / Math.log(10)) +
            0.15456 * (Math.log(state.altura / 2.54) / Math.log(10))) -
        450
      ).toFixed(2);
    }
    if (state.nivel >= 3) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 100) * 0.06;
      state.grasa = (
        485 /
          (1.0324 -
            0.19077 * (Math.log(state.IMC) / Math.log(10)) +
            0.15456 * (Math.log(state.altura / 2.54) / Math.log(10))) -
        450
      ).toFixed(2);
    }
    if (state.nivel >= 4) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 100) * 0.12;
      state.grasa = (
        475 /
          (1.0324 -
            0.19077 * (Math.log(state.IMC) / Math.log(10)) +
            0.15456 * (Math.log(state.altura / 2.54) / Math.log(10))) -
        450
      ).toFixed(2);
    }
    if (state.nivel >= 5) {
      inc = ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 100) * 0.24;
      state.grasa = (
        469 /
          (1.0324 -
            0.19077 * (Math.log(state.IMC) / Math.log(10)) +
            0.15456 * (Math.log(state.altura / 2.54) / Math.log(10))) -
        450
      ).toFixed(2);
    }
  }
  return (
    <View>
      <View style={styles.Header}>
      <Text
          style={{
            fontSize: 15,
            color: "#FFE500",
            position: "absolute",
            top: 230,
            left: 10,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {"Dias: " + state.diasT}
        </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 250,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Peso: " + (parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))).toFixed(2) + " Kg"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 270,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Altura: " + state.altura + " cm"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 290,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Edad: " +  (parseInt(state.edad) + parseFloat(state.diasT/365)).toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 310,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"IMC: " + state.IMC.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 330,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"IMB: " + state.imb}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFE500",
              position: "absolute",
              top: 350,
              left: 10,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {"Grasa: " + state.grasa + "%"}
          </Text>
        <Svg
          style={{
            fontSize: 15,
            color: "#FFE500",
            position: "absolute",
            top: 0,
            left: 75,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
          width="250"
          height="500"
          viewBox="0 0 257 300"
          fill="none"
          id="svg8877"
        >
          <Path
            d="M5.5 57 
        Q 40 50 50 57
        Q 65 47 90 53  "
            //fill="#DFD855"
            //stroke="#D9D9D9"
            id="Piel"
          />

          <Path
            d={
              "M130.5 40 Q150.5 " +
              (44 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 167 50          Q190 " +
              (56 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " 210 55.5          Q" +
              (220 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " " +
              (59.5 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 253 57          V67" +
              "Q220 " +
              (65 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " 210 68          Q188 " +
              (65 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " " +
              (160 + inc * 0.2) +
              " 65          Q" +
              (150 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " " +
              (60 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " " +
              (151 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (150 * state.nivel)) +
              " " +
              (95 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
              "          Q" +
              (162 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " 120 " +
              (158 + inc / 9 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 170 Q158 190 159 200 Q" +
              (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 230 155 257" +
              "H145" +
              "Q " +
              (150 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 210 145 200      " +
              "Q" +
              (138 - inc / 1.5 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 165 129 145"
            }
            fill="#393704"
            stroke="pink"
            id="Grasa"
          />
          <Path
            transform="matrix(-1,0,0,1,257.75595,-0.00175479)"
            d={
              "M130.5 40 Q150.5 " +
              (44 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 167 50          Q190 " +
              (56 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " 210 55.5          Q" +
              (220 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " " +
              (59.5 - inc / 2 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 253 57          V67" +
              "Q220 " +
              (65 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " 210 68          Q188 " +
              (65 + inc / 2 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 300) +
              " " +
              (160 + inc * 0.2) +
              " 65          Q" +
              (150 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " " +
              (60 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " " +
              (151 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (150 * state.nivel)) +
              " " +
              (95 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (500 * state.nivel)) +
              "          Q" +
              (162 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / (100 * state.nivel)) +
              " 120 " +
              (158 + inc / 9 + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 170 Q158 190 159 200 Q" +
              (158 + inc + ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 500) +
              " 230 155 257" +
              "H145" +
              "Q " +
              (150 - inc - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 210 145 200      " +
              "Q" +
              (138 - inc / 1.5 - ((parseFloat(state.peso) + parseFloat(((state.pdcc - state.imb)/7716.10)*(state.diasT))) * state.grasa) / 400) +
              " 165 129 145"
            }
            fill="#393704"
            stroke="pink"
            id="Grasa2"
          />
          <G id="Huesos">
            <Path
              d="M106.385 206.84L105 202.28L108.231 200L111 202.28L110.077 208.55L111 253.58L107.308 257L105 254.72L106.385 206.84Z"
              fill="#D9D9D9"
              id="TibiaDerecha"
            />
            <Path
              d="M149.385 206.84L148 202.28L151.231 200L154 202.28L153.077 208.55L154 253.58L150.308 257L148 254.72L149.385 206.84Z"
              fill="#D9D9D9"
              id="TibiaIzquierda"
            />
            <Path
              d="M120 139.091L114 133L104.5 134.305L106.5 145.617L104.5 188.253L104 196.955L109 200L114 189.123V145.617L120 139.091Z"
              fill="#D9D9D9"
              id="FemurDerecho"
            />
            <Path
              d="M138 139.091L144 133L153.5 134.305L151.5 145.617L153.5 188.253L154 196.955L149 200L144 189.123V145.617L138 139.091Z"
              fill="#D9D9D9"
              id="FemurIzquierdo"
            />
            <Path
              d="M118 110H109.5L112.5 130L128 143V115H122.5L118 110Z M139 110H147.5L144.5 130L129 143V115H134.5L139 110Z"
              fill="#D9D9D9"
              id="Cinto"
            />

            <Ellipse
              cx="130"
              cy="19.5"
              rx="16"
              ry="19.5"
              fill="#D9D9D9"
              id="Craneo"
            />
            <Path
              d="M 135 85 H 125 V 115 H 135  z"
              fill="#D9D9D9"
              id="Columna"
            />
            <Path
              d="M 109 47M148.5 47L155.5 55V50.5 L147.5 90 H130.5 L129 86.5V47H148.5Z"
              fill="#D9D9D9"
              id="Pulmon1"
            />
            <Path
              transform="matrix(-1,0,0,1,257.75595,-0.00175479)"
              d="M 109 47M148.5 47L155.5 55V50.5 L147.5 90 H130.5 L129 86.5V47H148.5Z"
              fill="#D9D9D9"
              id="Pulmon2"
            />
            <Path
              d="M 165 55 L210 60 v5 L 165 60 z"
              fill="#D9D9D9"
              stroke="#D9D9D9"
              id="HuezoBrazoIzquierdo"
            />
            <Path
              d="M 95 55 L50 60 v5 L 95 60 z"
              fill="#D9D9D9"
              stroke="#D9D9D9"
              id="HuezoBrazoDerecho"
            />
            <Path
              d="M 215 60 L300 60 v5 L215 65 z"
              fill="#D9D9D9"
              stroke="#D9D9D9"
              id="HuezoAnteBrazoIzquierdo"
            />
            <Path
              d="M 45 60 L0 60 v5 L 45 65 z"
              fill="#D9D9D9"
              stroke="#D9D9D9"
              id="HuezoAnteBrazoDerecho"
            />
          </G>
          <G id="Musculos 1">
            <Path
              d={
                "M122 115 Q " +
                (120 - inc) +
                " 127.381 129 141 Q " +
                (136 + inc) +
                " 130 135 115 L132 118.714 H125.667Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="AbdomenBajo" //Path8775
            />
            <Path
              d={
                "M152 102 L150 127 L156.968 169.577 Q" +
                (155 + inc) +
                " 130 152 102Z"
              }
              stroke="#A12C2C"
              fill="#C96363"
              id="MusculoPequeñoPierna"
            />
            <Path
              d={
                "M136 139.507 Q" +
                (140.214 - inc) +
                " 160.123 148.143 198 Q" +
                (153 + inc) +
                " 175.466 145.107 128Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Pierna"
            />
            <Path
              d={
                "M153.7 200 Q" +
                (146 - inc) +
                " 215.957 153.7 253 Q" +
                (157 + inc) +
                " 236.473 157 200 L153.7 200 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Pantorrilla"
            />
            <Path
              d={
                "M145.828 49.5 H136 Q" +
                (157.207 + inc / 3) +
                " " +
                (46 - inc / 3) +
                " 166 56H160.828C160.414 56 158.241 54.3333 157.207 53.5L145.828 49.5Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="hombro izquierdo"
            />
            <Path
              d={"M137 44.5 Q138.5 " + (42 - inc / 5) + " 148.5 43z"}
              fill="#C96363"
              stroke="#A12C2C"
              id="espalda"
            />

            <Path
              d={
                "M143 83 Q" +
                (141.105 + inc / 4) +
                " " +
                (93.3433 + inc / 4) +
                " 131 93.8358 Q" +
                (131 - inc / 4) +
                " " +
                (84.9701 - inc / 4) +
                " 143 83"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab1"
            />
            <Path
              d={
                "M142.368 96.2985 Q" +
                (131 - inc / 4) +
                " " +
                (96.2985 - inc / 4) +
                " 131 103.7463 Q" +
                (142.368 + inc / 4) +
                " " +
                (99.7463 + inc / 2) +
                " 142.368 96.2985z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab2"
            />
            <Path
              d={
                "M131 106.149L141.737 105.657 Q" +
                (141.737 + inc / 3) +
                " " +
                (109.104 + inc / 2) +
                " 131 116 V106.149Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab3"
            />

            <Path
              d={
                "M175 57.5 L169 54 Q192 " + (55 - inc) + " 207.5 59.5L175 57.5Z"
              }
              fill="#C96363"
              id="bicep"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M174 62.5L169 57.5L174 64.5 Q188 " +
                (66.5 + inc / 2) +
                " 206 63.5L188 61L174 62.5Z"
              }
              fill="#C96363"
              id="Path8805"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M253 61 L230.5 62.5L212 59 Q222.5 " +
                (55.5 - inc / 2) +
                " 253 61Z"
              }
              fill="#C96363"
              id="Path8811"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M253 67.5L226.5 64.5L212 66 Q222.5 " +
                (69.5 + inc / 2) +
                " 253 67.5"
              }
              fill="#C96363"
              id="Path8813"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M152.5 70 L145 " +
                (81 - inc / 4) +
                " V " +
                (84 + inc / 4) +
                " L152.5 " +
                (75 + inc / 3) +
                " V70 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8819"
            />
            <Path
              d={
                "M150 84.5 L144.5 " +
                (92 - inc / 3) +
                " V" +
                (94 + inc / 4) +
                " L 149 " +
                (90.5 + inc / 4) +
                "L150 84.5Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8821"
            />
            <Path
              d={
                "M149 94.5 L143 " +
                (103 - inc / 3) +
                "  V" +
                (105 + inc / 5) +
                "  L148 101.5  L149 94.5 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8823"
            />

            <Path
              d={
                "M149 " +
                (106 - inc / 3) +
                " L140.5 " +
                (115 - inc / 3) +
                " L140.5 " +
                (115 + inc / 3) +
                " L148 " +
                (110 + inc / 3) +
                "Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8825"
            />
            <Path
              d={
                "M132 58.25V78.0833 Q" +
                (152.429 + inc) +
                " " +
                (69.9167 + inc) +
                " 158 58.25 Q" +
                (145.619 + inc) +
                " " +
                (53 - inc / 10) +
                " 136.333 53Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="pectoral"
            />
          </G>
          <G id="Musculos 2" transform="matrix(-1,0,0,1,257.75595,-0.00175479)">
            <Path
              d={
                "M122 115 Q " +
                (120 - inc) +
                " 127.381 129 141 Q " +
                (136 + inc) +
                " 130 135 115 L132 118.714 H125.667Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="AbdomenBajo" //Path8775
            />
            <Path
              d={
                "M152 102 L150 127 L156.968 169.577 Q" +
                (155 + inc) +
                " 130 152 102Z"
              }
              stroke="#A12C2C"
              fill="#C96363"
              id="MusculoPequeñoPierna"
            />
            <Path
              d={
                "M136 139.507 Q" +
                (140.214 - inc) +
                " 160.123 148.143 198 Q" +
                (153 + inc) +
                " 175.466 145.107 128Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Pierna"
            />
            <Path
              d={
                "M153.7 200 Q" +
                (146 - inc) +
                " 215.957 153.7 253 Q" +
                (157 + inc) +
                " 236.473 157 200 L153.7 200 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Pantorrilla"
            />
            <Path
              d={
                "M145.828 49.5 H136 Q" +
                (157.207 + inc / 3) +
                " " +
                (46 - inc / 3) +
                " 166 56H160.828C160.414 56 158.241 54.3333 157.207 53.5L145.828 49.5Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="hombro izquierdo"
            />
            <Path
              d={"M137 44.5 Q138.5 " + (42 - inc / 5) + " 148.5 43z"}
              fill="#C96363"
              stroke="#A12C2C"
              id="espalda"
            />

            <Path
              d={
                "M143 83 Q" +
                (141.105 + inc / 4) +
                " " +
                (93.3433 + inc / 4) +
                " 131 93.8358 Q" +
                (131 - inc / 4) +
                " " +
                (84.9701 - inc / 4) +
                " 143 83"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab1"
            />
            <Path
              d={
                "M142.368 96.2985 Q" +
                (131 - inc / 4) +
                " " +
                (96.2985 - inc / 4) +
                " 131 103.7463 Q" +
                (142.368 + inc / 4) +
                " " +
                (99.7463 + inc / 2) +
                " 142.368 96.2985z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab2"
            />
            <Path
              d={
                "M131 106.149L141.737 105.657 Q" +
                (141.737 + inc / 3) +
                " " +
                (109.104 + inc / 2) +
                " 131 116 V106.149Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="ab3"
            />

            <Path
              d={
                "M175 57.5 L169 54 Q192 " + (55 - inc) + " 207.5 59.5L175 57.5Z"
              }
              fill="#C96363"
              id="bicep"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M174 62.5L169 57.5L174 64.5 Q188 " +
                (66.5 + inc / 2) +
                " 206 63.5L188 61L174 62.5Z"
              }
              fill="#C96363"
              id="Path8805"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M253 61 L230.5 62.5L212 59 Q222.5 " +
                (55.5 - inc / 2) +
                " 253 61Z"
              }
              fill="#C96363"
              id="Path8811"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M253 67.5L226.5 64.5L212 66 Q222.5 " +
                (69.5 + inc / 2) +
                " 253 67.5"
              }
              fill="#C96363"
              id="Path8813"
              stroke="#A12C2C"
            />
            <Path
              d={
                "M152.5 70 L145 " +
                (81 - inc / 4) +
                " V " +
                (84 + inc / 4) +
                " L152.5 " +
                (75 + inc / 3) +
                " V70 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8819"
            />
            <Path
              d={
                "M150 84.5 L144.5 " +
                (92 - inc / 3) +
                " V" +
                (94 + inc / 4) +
                " L 149 " +
                (90.5 + inc / 4) +
                "L150 84.5Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8821"
            />
            <Path
              d={
                "M149 94.5 L143 " +
                (103 - inc / 3) +
                "  V" +
                (105 + inc / 5) +
                "  L148 101.5  L149 94.5 Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8823"
            />

            <Path
              d={
                "M149 " +
                (106 - inc / 3) +
                " L140.5 " +
                (115 - inc / 3) +
                " L140.5 " +
                (115 + inc / 3) +
                " L148 " +
                (110 + inc / 3) +
                "Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="Path8825"
            />
            <Path
              d={
                "M132 58.25V78.0833 Q" +
                (152.429 + inc) +
                " " +
                (69.9167 + inc) +
                " 158 58.25 Q" +
                (145.619 + inc) +
                " " +
                (53 - inc / 3) +
                " 136.333 53Z"
              }
              fill="#C96363"
              stroke="#A12C2C"
              id="pectoral"
            />
          </G>
        </Svg>
          <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20 }}>

              <Registrarse text="Simular" onPress={() => Simulacion()} />
              <TextInput
                keyboardType="numeric"
                placeholder="Dias Transcurridos"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("diasT", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Dias Meta"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("diasM", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Nivel Sedentarismo"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("nivel", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Peso(kg)"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("peso", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Altura(cm)"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("altura", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Edad"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("edad", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Promedio diario de calorias quemadas"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("imb", value)}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                placeholder="Promedio diario de calorias consumidas"
                style={styles.txtbox}
                onChangeText={(value) => CapturarDatos("pdcc", value)}
              ></TextInput>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  txtbox: {
    marginTop: 5,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: 300,
    textAlign: "center",
  },
  container: {
    marginTop: 5,
    flex: 1,
    top: 370,
    right: 0,
    bottom: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    backgroundColor: "#040227",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    //alignItems: "center",
  },
  Title: {
    fontSize: 20,
    color: "black",
    position: "relative",
    top: 400,
    left: 170,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;