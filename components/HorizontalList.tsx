import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Images } from "../interfaces/Images";
import { fetchImages } from "../api/photos.api";
import { Colors } from "../Colors";
import { FlashList } from "@shopify/flash-list";

const { height } = Dimensions.get("window");

interface Props {
  title: string;
  data: Images[];
  setData: (data: Images[]) => void;
  renderItem: any;
}

const HorizontalList = ({ title, data, setData, renderItem }: Props) => {
  const [loading, setLoading] = useState(true);

  const loadImages = async () => {
    try {
      const page = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      const data = await fetchImages(page);
      setData(data);
    } catch (error) {
      console.error("Error loading images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.sectionWithButton}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>See all</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={Colors.dark} />
        </View>
      ) : (
        <FlashList
          horizontal
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={(item) => renderItem(item)}
          estimatedItemSize={0.2 * height}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // 10px space between items
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    gap: 20,
    padding: 10,
    marginHorizontal: -10,
  },
  sectionTitle: {
    fontSize: 0.03 * height,
    color: Colors.blue,
    fontWeight: "700",
  },
  sectionWithButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  seeAllButton: {
    fontSize: 0.02 * height,
    color: Colors.blue,
  },
});

export default HorizontalList;
