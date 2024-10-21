import React from "react";
import { Image,View, StyleSheet } from "react-native";

const Header = ()=>{
    return(
        <View style={styles.container} >
            <View style={styles.containerImage}>
            <Image source={require('../../assets/images/imagenPortada-Alvarez.jpg')}
                 style={styles.rightImage}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       height:150,
       alignItems:'center',
    },
    containerImage:{
        height:150,
        width:'100%',
        alignItems:'center',
    },
    rightImage:{
        width:'100%',
        height:'100%',
    }
})

export default Header;