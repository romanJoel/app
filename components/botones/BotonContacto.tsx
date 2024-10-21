import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

type BotonContactoProps = {
  telefono: string;
};

const BotonContacto: React.FC<BotonContactoProps> = ({ telefono }) => {
  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${telefono}`);
  };

  const makePhoneCall = () => {
    Linking.openURL(`tel:${telefono}`);
  };

  return (
    <View style={styles.containerContact}>
      <TouchableOpacity style={styles.botonContact} onPress={openWhatsApp}>
        <Text style={{ color: '#fff', fontSize: 20 }}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonContact} onPress={makePhoneCall}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Llamar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    containerContact:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        marginTop:10,
     },
    botonContact:{
        width:110,
        height:36,
        borderRadius:10,
        backgroundColor:'#2C9CCB',
        justifyContent:'center',
        alignItems:'center'
      },
})


export default BotonContacto