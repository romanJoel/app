import React from 'react';
import { Modal, View, Text, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';

type ZoomableImageModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
};

const ZoomableImageModal: React.FC<ZoomableImageModalProps> = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <TouchableHighlight onPress={closeModal} style={styles.cerrarModal}>
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>Cerrar ventana</Text>
        </TouchableHighlight>
        {/* Contenido del modal, como la imagen de horarios */}
        <Image source={require('./horariosNormales.jpg')} style={styles.zoomableImage} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Reducí la opacidad
  },
  cerrarModal: {
    width: 133,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#185574',
    marginBottom: 20, // Reducí la distancia
  },
  zoomableImage: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
  }
});

export default ZoomableImageModal;
