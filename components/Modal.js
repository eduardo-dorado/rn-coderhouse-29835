import React, { useState } from "react";
import { Text, View, Button, Modal, StyleSheet } from "react-native";

function ModalItem(props) {
  const { visible, onDelete, item, onCancel } = props;

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modalCenter}>
        <View style={styles.modalView}>
          <View style={styles.tituloModal}>
            <Text style={styles.textoTitulo}>Eliminar Registro</Text>
            <Text
              style={styles.textoTitulo}
              onPress={onCancel.bind(this)}
            ></Text>
          </View>
          <View style={styles.cuerpoModal}>
            <View>
              <Text>¿Eliminar el item seleccionado?</Text>
            </View>
            <View>
              <Text>{item.value}</Text>
            </View>
          </View>
          <View style={styles.botonModal}>
            <Text>
              <Button
                title="Confirmar"
                onPress={onDelete.bind(this, item.id)}
              />
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    borderWidth: 1,
    borderRadius: 6,
    width: 200,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  tituloModal: {
    flex: 2,
    backgroundColor: "#777777",
    width: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  cuerpoModal: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  botonModal: {
    flex: 2,
    paddingBottom: 15,
    flexDirection: "row",
  },
});

export default ModalItem;
