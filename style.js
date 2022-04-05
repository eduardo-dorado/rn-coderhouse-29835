import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#FF8008",
    width: "100%",
    margin: 5,
    fontSize: 20,
  },
  addItemContainer: {
    padding: 20,
    width: "90%",
    backgroundColor: "#DDDDDD",
    borderRadius: 6,
    margin: 10,
    color: "#FF8008",
  },
  listItemContainer: {
    backgroundColor: "#3483FA",
    width: "90%",
    flex: 4,
    alignItems: "center",
    borderRadius: 6,
    margin: 10,
  },
  listItem: {
    fontSize: 24,
  },
});
