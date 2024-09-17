import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Images } from "../interfaces/Images";
import { Colors } from "../Colors";

const { height } = Dimensions.get("window");

const NomadsItem = ({ item }: { item: Images }) => {
  const resizedImageUrl = `https://picsum.photos/id/${item.id}/300`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: resizedImageUrl }}
        style={styles.circularImage}
        resizeMode="cover"
      />
      <Text style={styles.name}>{item.author}</Text>
      <Text style={styles.followers}>250k followers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
  },
  circularImage: {
    width: 0.18 * height,
    height: 0.18 * height,
    borderRadius: 0.09 * height,
    marginBottom: 10,
  },
  name: {
    color: Colors.blue,
    fontSize: 0.015 * height,
    fontWeight: "700",
  },
  followers: {
    color: Colors.grey,
    fontSize: 0.015 * height,
    fontWeight: "400",
  },
});

export default NomadsItem;
