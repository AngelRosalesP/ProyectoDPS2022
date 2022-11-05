import React from "react";
import { Text, View, TextInput, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { Registrarse, Btn2 , Regresar} from "../componentes/botones";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {

  const [state, setState] = useState({
    nombre:'',
    apellido:'',
    email:'',
    contraseña:'',
    edad:'',
    altura:'',
    peso:'',
  })

  const CapturarDatos = (campo, value)=>{
    setState({...state, [campo]: value});
  };

  const LoginUsuario= () =>{
    if(state.email==="" || state.contraseña==="")
    {
      Alert.alert("Campos vacios")
    }
    else{
      //await firebase.collection('usuario').add({
       // nombre: state.nombre,
       // apellido: state.apellido,
       // edad: state.edad,
       // altura: state.altura, 
        //peso: state.peso,  
       // email: state.email,
      //  contraseña: state.contraseña,    
     // })
      Alert.alert("Inicio de sesion exitoso")
      
    }
  }



  return (

    
    <ScrollView style={styles.fondo}>
    
      
      <View style={styles.container}>
      <Image style={styles.img} source={require('../img/logo.jpeg')}/>
      </View>
      <Text></Text>
      <View style={styles.container}>
        <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("email", value)}></TextInput>
        <Text></Text>
        <TextInput  placeholder="Contraseña" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("contraseña", value)}></TextInput>
      </View>
      <Text></Text><Text></Text>
      <SafeAreaView style={styles.container}>
        <Registrarse text ="Iniciar Sesion" onPress={()=>AgregarUsuario()} />
        <Text></Text>
      </SafeAreaView>
      <Text></Text><Text></Text>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.icon} source={require('../img/gg.png')}></Image>
          <SafeAreaView style={styles.container}>
        <Btn2 text ="Iniciar con Google" />
      </SafeAreaView>
        </View>
      </View>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
      
    </ScrollView>
  );
}

const styles= StyleSheet.create({
  fondo:{
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:
  {
    width: 200,
    height: 175,
  },
  icon:{
    width:50,
    height:50
  },
  txtbox:{
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth:1,
    width:250,
    textAlign:'center'
  },
  txtbox2:{
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth:1,
    width:75,
    textAlign:'center'
  },
  btn:{
    fontSize:30,
    backgroundColor:"#00ab4c",
    borderRadius:10,
  }
});

export default LoginScreen;