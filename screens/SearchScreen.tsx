import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Colors";
import { Images } from "../interfaces/Images";
import HorizontalList from "../components/HorizontalList";
import HashtagsItem from "../components/HashtagsItem";
import CommunityItem from "../components/CommunityItem";
import NomadsItem from "../components/NomadsItem";

const ios = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

const SearchScreen = () => {
  const [trndHashImages, setTrndHashImages] = useState<Images[]>([]);
  const [topComImages, setTopComImages] = useState<Images[]>([]);
  const [nomadsImages, setNomadsImages] = useState<Images[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover the world</Text>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <View>
            <Image
              source={{ uri: "https://picsum.photos/800" }}
              style={styles.topSearchImage}
            />
            <Text style={styles.topSearchText}>#Top search of the day</Text>
          </View>
        </View>

        <HorizontalList
          title="Trending hashtags"
          data={trndHashImages}
          setData={setTrndHashImages}
          renderItem={HashtagsItem}
        />

        <HorizontalList
          title="Top community"
          data={topComImages}
          setData={setTopComImages}
          renderItem={CommunityItem}
        />
        <HorizontalList
          title="Top nomads"
          data={nomadsImages}
          setData={setNomadsImages}
          renderItem={NomadsItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: ios ? -10 : 40,
  },
  section: {
    gap: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 0.03 * height,
    color: Colors.blue,
    fontWeight: "700",
  },
  searchInput: {
    fontSize: 0.02 * height,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 10,
  },
  topSearchImage: {
    width: width - 20,
    height: height * 0.25,
    borderRadius: 10,
  },
  topSearchText: {
    color: "#fff",
    fontSize: 0.025 * height,
    fontWeight: "700",
    position: "absolute",
    bottom: 10,
    left: 5,
  },
});

export default SearchScreen;
