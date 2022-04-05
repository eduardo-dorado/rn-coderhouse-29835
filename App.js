import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import ModalItem from "./components/Modal";
import AddItem from "./components/AddItem";
import "./style";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignora las notificaciones de advertencia en la aplicación, pero no en la consola
LogBox.ignoreAllLogs(); // Ignora todas las advertencias de notificaciones

export default function App() {
  const [counter, setCounter] = useState(3);
  const [listItem, setListItem] = useState([
    { id: 1, value: "Andrea" },
    { id: 2, value: "Lucas" },
    { id: 3, value: "Eduardo" },
  ]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerDelete = (id) => {
    console.log("Item " + itemSelected.value + " Eliminado");
    setListItem((currenItems) => currenItems.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(listItem.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const agregarItem = (textItem) => {
    console.log("Se Agrega");
    if (textItem !== "") {
      console.log("Se agrego el item: " + textItem);
      setListItem((currenItems) => [
        ...currenItems,
        { id: counter, value: textItem },
      ]);
      setCounter(counter + 1);
    }
  };

  const renderItem = (data) => (
    <View style={styles.listItemContainer}>
      <Text
        style={styles.listItem}
        onPress={onHandlerModal.bind(this, data.item.id)}
      >
        {data.item.value}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AddItem onAddItem={agregarItem} />
      <View style={styles.listItemContainer}>
        <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalItem
        onDelete={onHandlerDelete}
        item={itemSelected}
        visible={modalVisible}
        onCancel={closeModal}
      />
    </View>
  );
}
