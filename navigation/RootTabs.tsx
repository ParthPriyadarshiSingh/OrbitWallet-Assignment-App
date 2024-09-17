import { Dimensions } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import CommunityScreen from "../screens/CommunityScreen";
import MeScreen from "../screens/MeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../Colors";

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get("window");

const RootTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Create") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Community") {
              iconName = focused ? "people" : "people-outline";
            } else if (route.name === "Me") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return (
              <Ionicons name={iconName} size={0.05 * width} color={color} />
            );
          },
          tabBarLabelStyle: { fontSize: 0.03 * width },
          tabBarActiveTintColor: Colors.dark,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Me" component={MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabs;
