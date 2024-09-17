import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Images } from "../interfaces/Images";

const { height } = Dimensions.get("window");

const HashtagsItem = ({ item }: { item: Images }) => {
  const resizedImageUrl = `https://picsum.photos/id/${item.id}/300`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: resizedImageUrl }}
        style={styles.squareImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.hashText}>#adventure</Text>
        <Text style={styles.views}>2.5m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0.2 * height,
    height: 0.2 * height,
    flexDirection: "column-reverse",
    paddingVertical: 10,
  },
  squareImage: {
    position: "absolute",
    width: 0.2 * height,
    height: 0.2 * height,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    zIndex: 50,
  },
  hashText: {
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "700",
  },
  views: {
    color: "#fff",
    fontSize: 0.015 * height,
    fontWeight: "500",
  },
});

export default HashtagsItem;
