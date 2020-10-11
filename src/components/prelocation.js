import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import Constants from "expo-constants";

function PreLocation() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#09CEAA",
      }}
    >
      <Text>We require your current location to give you local content</Text>
    </View>
  );
}

export default PreLocation;
