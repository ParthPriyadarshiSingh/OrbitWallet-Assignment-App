import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Images } from "../interfaces/Images";

const { height } = Dimensions.get("window");

const CommunityItem = ({ item }: { item: Images }) => {
  const resizedImageUrl = `https://picsum.photos/id/${item.id}/300`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: resizedImageUrl }}
        style={styles.squareImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.posts}>110 posts/day</Text>
        <Text style={styles.place}>
          Places of <Text style={{ fontWeight: "800" }}>FRANCE</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0.2 * height,
    height: 0.2 * height,
    flexDirection: "column-reverse",
    paddingVertical: 5,
  },
  squareImage: {
    position: "absolute",
    width: 0.2 * height,
    height: 0.2 * height,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 5,
    zIndex: 50,
  },
  posts: {
    color: "#fff",
    fontSize: 0.015 * height,
    fontWeight: "700",
    alignSelf: "flex-end",
  },
  place: {
    color: "#fff",
    fontSize: 0.04 * height,
    alignSelf: "flex-start",
  },
});

export default CommunityItem;
