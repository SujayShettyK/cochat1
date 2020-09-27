import * as React from "react";
import { Title, Card, Paragraph, IconButton, Colors } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const Chats = () => (
  <ScrollView>
    <Card style={{ marginTop: 20, flexDirection: "row" }}>
      <Card.Content>
        <Text style={{ fontSize: 17 }}>
          What a wonderful day at bangalore. What a wonderful day at bangalore.
          What a wonderful day at bangalore. What a wonderful day at bangalore.
        </Text>
      </Card.Content>

      <Card.Actions>
        <IconButton
          icon="chat"
          color={Colors.grey300}
          size={20}
          style={{ marginRight: 0 }}
          onPress={() => console.log("Pressed1")}
        />
        <Text style={styles.colorgrey}>2 replies</Text>

        <View style={styles.floatright}>
          <IconButton
            icon="chevron-up"
            color={Colors.grey300}
            size={35}
            onPress={() => console.log("Pressed")}
          />
          <IconButton
            icon="chevron-down"
            color={Colors.grey300}
            size={35}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </Card.Actions>
    </Card>
  </ScrollView>
);

export default Chats;

const styles = StyleSheet.create({
  floatright: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  colorgrey: {
    color: "grey",
  },
});
