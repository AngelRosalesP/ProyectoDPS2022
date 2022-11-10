import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function Registrarse(props){
    const{ onPress, text } = props;
    return(
        <TouchableOpacity style={{...styles.btn, backgroundColor:'#00ab4c'}}
            onPress={onPress}>
            <Text style={{...styles.btnText,color:'white'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
export function Regresar(props){
    const{ onPress, text } = props;
    return(
        <TouchableOpacity style={{...styles.btn, backgroundColor:'#000000'}}
            onPress={onPress}>
            <Text style={{...styles.btnText,color:'white'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
export function Btn2(props){
    const{ text } = props;
    return(
        <TouchableOpacity s style={{...styles.btn2, backgroundColor:'#f1f1f1'}}>
            <Text style={{...styles.btnText2,color:'black'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        alignSelf:'center',
        width:220,
        height:40,
        borderRadius:10,
        alignContent:'center',
        padding:5
    },
    btn2:{
        alignSelf:'center',
        width:200,
        height:50,
        alignContent:'center',
        padding:10
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        
    },
    btnText2:{
        
        textAlign:'center',
        fontSize:15
    }
})