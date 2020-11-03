import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Chats from "../chats/chats";
import Post from "../post/post";

const PostRoute = () => <Post />;

const MeRoute = () => <Text>Me</Text>;
 
const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "chats", title: "Chats", icon: "chat", color: "#2ED2B6" },
    { key: "post", title: "Post", icon: "plus-box", color: "#2ED2B6" },
    { key: "me", title: "Me", icon: "account", color: "#2ED2B6" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chats: Chats,
    post: PostRoute,
    me: MeRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default NavBar;
