import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const Fab = () => (
  <FAB
    style={styles.fab}
    small
    icon="pencil"
    onPress={() => console.log("Pressed")}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 60,
  },
});

export default Fab;
