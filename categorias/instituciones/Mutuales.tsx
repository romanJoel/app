import React from "react";
import { View,ScrollView, StyleSheet } from "react-native";

const Mutuales = ()=>{
    return(
        <ScrollView style={{flex: 1}}>
            <View style={styles.mutualesView} ></View>
            <View style={styles.mutualesView} ></View>
        </ScrollView>
    );
}

export default Mutuales;

const styles = StyleSheet.create({
    mutualesView:{
        height:'50%',
        width:'80%',
        borderRadius:10,
    }
})