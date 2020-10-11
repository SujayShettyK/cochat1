import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { View } from "react-native";
import NavBar from "./src/components/navbar/navbar";
import PreLocation from "./src/components/prelocation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Location from "expo-location";
import * as firebase from "firebase";
import "firebase/firestore";
import impfirebase from "./src/components/firebase";
const db = firebase.firestore();
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#09CEAA",
    accent: "#2ed2b6",
  },
};

function MyApp() {
  const [permissionacc, setPermissionacc] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    async function LocPerm() {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      } else {
        setPermissionacc(true);
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        firebase
          .auth()
          .signInAnonymously()
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        var uid = 0;
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            uid = user.uid;
            db.collection("users")
              .doc(uid)
              .set({
                userid: uid,
                coords: {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                },
              });
          }
        });
      }
    }
    LocPerm();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          marginTop: 25,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {permissionacc == true ? (
              <>
                <Stack.Screen name="Navbar" component={NavBar} />
              </>
            ) : (
              <Stack.Screen name="Prelocation" component={PreLocation} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

export default MyApp;
