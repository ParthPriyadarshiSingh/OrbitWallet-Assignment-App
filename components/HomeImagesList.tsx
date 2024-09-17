import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { Images } from "../interfaces/Images";
import { fetchImages } from "../api/photos.api";
import { Colors } from "../Colors";
import { FlashList } from "@shopify/flash-list";

const { width, height } = Dimensions.get("window"); //To implement responsive design

const HomeImagesList = () => {
  const tabBarHeight = useContext(BottomTabBarHeightContext) || 79; // Get the bottom tab bar height
  const itemHeight = height - tabBarHeight; //Image height
  const [images, setImages] = useState<Images[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadImages = async () => {
    try {
      const data = await fetchImages(page);
      setImages((prevImages) => [...prevImages, ...data]); // Append new data to the existing images
    } catch (error) {
      console.error("Error loading images:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [page]); // Reload images when `page` changes

  const loadMoreImages = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1); // Increase page number
    }
  };

  // Render loading spinner when loading more images
  const renderFooter = () => {
    return (
      loadingMore && (
        <View style={styles.footer}>
          <ActivityIndicator size="large" color={Colors.dark} />
        </View>
      )
    );
  };

  if (loading && images.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.dark} />
      </View>
    );
  }

  const renderItem = ({ item }: { item: Images }) => {
    const resizedImageUrl = `https://picsum.photos/id/${item.id}/1000`;

    return (
      <>
        <Image
          source={{ uri: resizedImageUrl }}
          style={{ width, height: itemHeight }}
          resizeMode="cover"
        />
        <Text style={styles.author}>{item.author}</Text>
      </>
    );
  };

  return (
    <FlashList
      data={images}
      renderItem={renderItem}
      estimatedItemSize={itemHeight}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      onEndReached={loadMoreImages} // Trigger loadMoreImages when the user scrolls to the end
      onEndReachedThreshold={0.9}
      ListFooterComponent={renderFooter} // Display a loading spinner at the bottom
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    paddingVertical: 20,
  },
  author: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "600",
  },
});

export default HomeImagesList;
