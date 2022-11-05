
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
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ProfileScreen = ({ navigation }) => {
  var inc = 0,
    peso = 81,
    altura = 167,
    nivel = 5,
    exp = 0,
    imb = 0,
    edad = 27,
    grasa = 30,
    definicion = 0,
    IMC = peso / ((altura / 100) * (altura / 100));

  imb = (10 * peso + 6.25 * altura - 5 * edad + 5).toFixed(2);
  grasa = grasa - definicion;
  if (nivel == 0) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 * inc * inc).toFixed(2);
    inc = (peso - peso * (grasa / 100)) * 0.0075;
  }
  if (nivel == 1) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 * inc).toFixed(2);
    inc = (peso - (peso * grasa) / 100) * 0.015;
  }
  if (nivel == 2) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 - 2.7).toFixed(2);
    inc = (peso - (peso * grasa) / 100) * 0.03;
  }
  if (nivel == 3) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 - 5.4).toFixed(2);
    inc = (peso - (peso * grasa) / 100) * 0.06;
  }
  if (nivel == 4) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 - 10.8).toFixed(2);
    inc = (peso - (peso * grasa) / 100) * 0.12;
  }
  if (nivel == 5) {
    grasa = (1.2 * IMC + 0.23 * edad - 10.8 * 1 - 21.6).toFixed(2);
    inc = (peso - (peso * grasa) / 100) * 0.24;
  }

  return (
    <View style={styles.Header}>
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
        {"Peso: " + peso + " Kg"}
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
        {"Altura: " + altura + " cm"}
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
        {"Edad: " + edad}
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
        {"IMB: " + imb}
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
        {"Grasa: " + grasa + "%"}
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
            (40 - inc / 2 - (peso * grasa) / 500) +
            " 167 50          Q190 " +
            (50 - inc - (peso * grasa) / 300) +
            " 210 55.5          Q" +
            (220 + (peso * grasa) / 500) +
            " " +
            (55.5 - inc / 2 - (peso * grasa) / 400) +
            " 253 57          V71" +
            "Q220 " +
            (70 + inc / 2 + (peso * grasa) / 300) +
            " 210 68          Q188 " +
            (70 + inc / 2 + (peso * grasa) / 300) +
            " " +
            (160 + inc * 0.2) +
            " 65          Q" +
            (159 + (peso * grasa) / (100 * nivel)) +
            " " +
            (100 + (peso * grasa) / (200 * nivel)) +
            " " +
            (159 + (peso * grasa) / (500 * nivel)) +
            " 120          Q" +
            (158 + inc + (peso * grasa) / (200 * nivel)) +
            " 160 " +
            (158 + inc / 9 + (peso * grasa) / 500) +
            " 170 Q158 190 159 200 Q" +
            (158 + inc + (peso * grasa) / 500) +
            " 230 155 257" +
            "H145" +
            "Q " +
            (150 - inc - (peso * grasa) / 400) +
            " 210 145 200      " +
            "Q" +
            (138 - inc / 1.5 - (peso * grasa) / 400) +
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
            (40 - inc / 2 - (peso * grasa) / 500) +
            " 167 50          Q190 " +
            (50 - inc - (peso * grasa) / 300) +
            " 210 55.5          Q" +
            (220 + (peso * grasa) / 500) +
            " " +
            (55.5 - inc / 2 - (peso * grasa) / 400) +
            " 253 57          V71" +
            "Q220 " +
            (70 + inc / 2 + (peso * grasa) / 300) +
            " 210 68          Q188 " +
            (70 + inc / 2 + (peso * grasa) / 300) +
            " " +
            (160 + inc * 0.2) +
            " 65          Q" +
            (159 + (peso * grasa) / (100 * nivel)) +
            " " +
            (100 + (peso * grasa) / (200 * nivel)) +
            " " +
            (159 + (peso * grasa) / (500 * nivel)) +
            " 120          Q" +
            (158 + inc + (peso * grasa) / (200 * nivel)) +
            " 160 " +
            (158 + inc / 9 + (peso * grasa) / 500) +
            " 170 Q158 190 159 200 Q" +
            (158 + inc + (peso * grasa) / 500) +
            " 230 155 257" +
            "H145" +
            "Q " +
            (150 - inc - (peso * grasa) / 400) +
            " 210 145 200      " +
            "Q" +
            (138 - inc / 1.5 - (peso * grasa) / 400) +
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
          <Path d="M 135 85 H 125 V 115 H 135  z" fill="#D9D9D9" id="Columna" />
          <Path
            d="M 109 47L98 55V60.5L109 96H118L128.5 86.5V47H109Z M148.5 47L159.5 55V60.5L148.5 96H139.5L129 86.5V47H148.5Z"
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
            d={"M175 57.5 L169 54 Q192 " + (50 - inc) + " 207.5 59.5L175 57.5Z"}
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
        <G id="Musculos 2" transform="matrix(-1,0,0,1,257.75595,-0.00175479)">
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
            d={"M175 57.5 L169 54 Q192 " + (50 - inc) + " 207.5 59.5L175 57.5Z"}
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
      <Text
        style={{
          fontSize: 20,
          color: "black",
          position: "relative",
          top: 400,
          left: 170,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {"Simular"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#040227",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    //alignItems: "center",
  },
});
export default ProfileScreen;
