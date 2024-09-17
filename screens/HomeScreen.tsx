import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import HomeImagesList from "../components/HomeImagesList";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const buttons = [
    {
      IconComponent: AntDesign,
      name: "adduser",
    },
    {
      IconComponent: Ionicons,
      name: "chatbubble-ellipses-outline",
    },
    {
      IconComponent: Ionicons,
      name: "heart-outline",
    },
    {
      IconComponent: MaterialCommunityIcons,
      name: "share-outline",
    },
    {
      IconComponent: Feather,
      name: "send",
    },
  ];

  return (
    <View style={styles.container}>
      <HomeImagesList />
      <Text style={styles.topText}>For you</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((item, index) => (
          <TouchableOpacity style={styles.iconButton} key={index}>
            <item.IconComponent
              //@ts-ignore
              name={item.name}
              size={0.07 * width}
              color="#fff"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    position: "absolute",
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "600",
    top: 50,
    alignSelf: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  iconButton: {
    marginVertical: 10,
  },
});
