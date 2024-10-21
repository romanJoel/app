import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

// Agregar children como props para aceptar componentes hijos
interface ContainerSimplecardProps {
    children: ReactNode;
}

const ContainerSimplecard = ({ children }: ContainerSimplecardProps) => {
    return (
        <View style={styles.Container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 30,
        flex: 1
    }
});

export default ContainerSimplecard;
