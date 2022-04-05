import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function AddItem(props) {
  const [textItem, setTextItem] = useState("");
  const { onAddItem } = props;
  const onHandlerChangeItem = (texto) => setTextItem(texto);

  const onHandlerAddItem = () => {
    console.log("Item Añadido: " + textItem);
    setTextItem("");
    onAddItem(textItem);
  };

  return (
    <View style={styles.addItemContainer}>
      <TextInput
        placeholder="Ingrese un nuevo item"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <Button
        buttonStyle={styles.button}
        title="Agregar"
        onPress={onHandlerAddItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#2BC0E4",
    width: "100%",

    padding: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#DDDDDD",
  },
  addItemContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 40,
    width: "90%",
    backgroundColor: "#3483FA",
    borderRadius: 6,
    margin: 10,
  },
  button: {
    color: "#FF8008",
  },
});

export default AddItem;
