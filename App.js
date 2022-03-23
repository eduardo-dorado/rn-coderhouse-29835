import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, Coders!</Text>
      <Text style={styles.texto}>Eduardo Dorado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#dd1e90',
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#90232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
