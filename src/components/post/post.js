import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import impfirebase from "../firebase";
import { color } from "react-native-reanimated";

function post() {
  var uid = 0;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      uid = user.uid;
      firebase
        .database()
        .ref("users/" + uid)
        .set({
          username: "name",
          email: "email",
          profile_picture: "imageUrl",
        });
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="write something"
        multiline={true}
        numberOfLines={6}
        underlineColor="#2ED2B6"
        style={styles.textinput}
        maxLength={250}
        selectionColor="#2ED2B6"
        blurOnSubmit={true}
      />

      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={{
          marginTop: 3,
          width: 100,
          marginLeft: "auto",
          marginRight: 2,
          backgroundColor: "#2ed2b6",
        }}
      >
        Post
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  textinput: {
    backgroundColor: "white",
    borderBottomColor: "white",
  },
});
export default post;
