import React from "react";

//navigation:
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens:
import NewsListScreen from "../screens/NewsListScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";

//icons:
import { MaterialIcons } from "@expo/vector-icons";

//implement navigation:
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <MaterialIcons
      name="menu"
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator
      
    >
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{
          title: "All News",
          headerLeft: () => <HeaderLeft />
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreen}
        options={{
          title: "News Details",
        }}
      />
    </Stack.Navigator>
  );
}

function favoritesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
function aboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
function tabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favorites") {
            iconName = "favorite";
          }
          return <MaterialIcons name={iconName} size={24} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Favorites" component={favoritesNavigator} />
    </Tabs.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="News" component={tabsNavigator} />
        <Drawer.Screen name="About" component={aboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
