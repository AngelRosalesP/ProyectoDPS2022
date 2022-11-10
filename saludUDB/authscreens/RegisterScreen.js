import React, { useEffect } from "react";
import { FlatList, Text, View, TextInput, Image, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { Registrarse, Btn2 , Regresar} from "../componentes/botones";
import { useState } from "react";

import firestore from '@react-native-firebase/firestore';


const RegisterScreen = ({ navigation }) => {
  


    //leyendo datos de la base

  const [data, setData] = useState()
  const [rtdata, setrtData] = useState([])

  async function loadData(){
    try{
      const datos = await firestore().collection('Usuario').get()
      
      setData(datos.docs)
    }catch(e){
      Alert.alert(e)
    }
  }

  async function loadRTdata()
  {
    const suscriber = firestore().collection('Usuario').onSnapshot(querySnapshot =>{
      const datos = []
      querySnapshot.forEach(documentSnapshot=>{
        datos.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id
        })
      })
      setrtData(datos)
    })
    return()=>suscriber()
  }


  useEffect(()=>{
    loadData()
    loadRTdata()
  }, [])

  
  function renderItem({ item }){
    return(
      <View style={{flexDirection:'row', margin:10}}>
        <Text>{item.data().nombre_user} </Text>
        <Text>{item.data().apellido_user} </Text>
        
      </View>
    )
  }
  function renderRTItem({ item }){
    return(
      <View style={{flexDirection:'row', margin:10}}>
        <Text>{item.nombre_user} </Text>
        <Text>{item.apellido_user} </Text>
        <Text>{item.contraseña} </Text>
        <Text>{item.email} </Text>
        <Text>{item.apellido} </Text>
        <Text>{item.genero} </Text>
        <Text>{item.edad} </Text>
        <Text>{item.peso} </Text>
        <Text>{item.diametro_cadera} </Text>
        <Text>{item.altura} </Text>
        <Text>{item.diametro_cintura} </Text>
        <Text>{item.diametro_cuello} </Text>
      </View>
    )
  }










 //Insertando datosa la base


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

  const AgregarUsuario= () =>{
    if(state.nombre ==="" || state.apellido ==="" || state.email==="" || state.contraseña==="" || state.edad==="" || state.altura==="" || state.peso==="")
    {
      Alert.alert("Campos vacios")
    }
    else{
      
     try {
      firestore().collection('Usuario').add({
        nombre: state.nombre,
        apellido: state.apellido,

      })
      } catch (error) {
        console.log(error)
      }finally{
        setState("")
      }
    Alert.alert(state.nombre +" "+ state.apellido+ state.altura)
    
      
    }
  }



  return (

    
    <ScrollView style={styles.fondo}>
    
      
      <View style={styles.container}>
      <Image style={styles.img} source={require('../img/logo.jpeg')}/>
      </View>
      <View style={{padding:10}}>
        <Text>Informacion RT:</Text>
        <FlatList 
          data = {rtdata}
          renderItem = {renderRTItem}
          keyExtractor= {item => item.key}
        />
      </View>
      <Text></Text>
      <View style={styles.container}>
        <TextInput placeholder="Ingresa tu nombre" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("nombre", value)}></TextInput>
        <Text></Text>
        <TextInput placeholder="Ingresa tu Apellido" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("apellido", value)}></TextInput>
        <Text></Text>
        <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("email", value)}></TextInput>
        <Text></Text>
        <TextInput  placeholder="Contraseña" style={styles.txtbox} onChangeText={(value)=>CapturarDatos("contraseña", value)}></TextInput>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TextInput keyboardType='numeric'   placeholder="Edad" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("edad", value)}></TextInput><TextInput></TextInput>
          <TextInput keyboardType="numeric" placeholder="Peso(kg)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("peso", value)}></TextInput>
        </View>
      </View>
      <View style={styles.container}>
      <TextInput keyboardType='numeric' placeholder="Altura(m)" style={styles.txtbox2} onChangeText={(value)=>CapturarDatos("altura", value)}></TextInput>
      </View>
      <Text></Text><Text></Text>
      <SafeAreaView style={styles.container}>
        <Registrarse text ="Registrarse" onPress={()=>AgregarUsuario()} />
        <Text></Text>
        <Regresar
          text="Ya posees una cuenta?"
          onPress={() => navigation.navigate("Sesion")}
        />
      </SafeAreaView>
      <Text></Text><Text></Text>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.icon} source={require('../img/gg.png')}></Image>
          <SafeAreaView style={styles.container}>
        <Btn2 text ="Continuar con Google" />
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

export default RegisterScreen;