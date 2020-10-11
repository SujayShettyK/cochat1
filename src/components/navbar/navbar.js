import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Chats from "../chats/chats";
import Post from "../post/post";

const PostRoute = () => <Post />;

const RecentsRoute = () => <Text>Recents</Text>;

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "chats", title: "Chats", icon: "chat", color: "#09CEAA" },
    { key: "post", title: "Post", icon: "plus-box", color: "#2ED2B6" },
    { key: "recents", title: "Recents", icon: "history", color: "#09CEAA" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chats: Chats,
    post: PostRoute,
    recents: RecentsRoute,
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
