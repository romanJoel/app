import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { ExternalLink } from "../ExternalLink";

const Footer = ()=>{
    return(
        <View style={{width:'100%', top:10}} >
            <View style={styles.FooterContainer} >
               <TouchableOpacity style={styles.touchableImagen} >
                    <Image source={require('../../assets/images/HelloW-400.png')}
                    style={{width:'70%', height:'60%', resizeMode:'cover',}}
                    />
                </TouchableOpacity>          
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    FooterContainer:{
        height:50,
        width:'100%',
        padding:5,
        alignItems:'center',
        backgroundColor:'#54B5DE',
       marginTop:15,
    },
    InfoContainer:{
        width:'50%',
        left:150,
    },
    touchableImagen:{
        width:78,
        height:50,
    }
})