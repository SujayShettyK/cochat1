import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import impfirebase from "../firebase";
import { color } from "react-native-reanimated";

function post() {

  const [text, setText] = React.useState(""); 


  const handleChange = (event)=>{
  const textvalue = event;
  setText(textvalue);
}

const handleSubmit = () =>{
  if (user) {
    uid = user.uid;
    firebase
    .database()
    .ref("users/" + uid)
      .set({
        userid: uid,
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        karma: 0,
      });
  }

}

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={{
          marginTop: 25,
          marginBottom: 5,
          width: 100,
          marginLeft: "auto",
          marginRight: 2,
          backgroundColor: "#2ed2b6",
          borderRadius: 10,
        }}
      >
        Post
      </Button>
      <TextInput
        label="write something"
        multiline={true}
        numberOfLines={6}
        underlineColor="#2ED2B6"
        style={styles.textinput}
        maxLength={250}
        selectionColor="#2ED2B6"
        blurOnSubmit={true}
        onChangeText = {handleChange}
        value={text}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  textinput: {
    backgroundColor: "white",
  },
});
export default post;
