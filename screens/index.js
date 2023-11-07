import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Favorite from "../components/Favorite";
import MyCart from "./MyCart";
import Menu from "./Menu";
import Profile from "./Profile";
import CartCounterIndicator from "../components/CartCounterIndicator";
import { CartProvider } from "../providers/cartContext";

const Tab = createBottomTabNavigator();
function AppMenu() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#E65738",
                tabBarStyle: {
                    borderRadius: 40,
                    backgroundColor: "#ffffff",
                    position: 'absolute',
                    overflow: 'hidden',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    padding: 8
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarLabel: 'Menu',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="book-open" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorite}
                options={{
                    tabBarLabel: 'Favorites',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={MyCart}
                options={{
                    tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <View>

                            <Feather name="shopping-cart" color={color} size={size} />
                            <CartCounterIndicator cartCount={0}></CartCounterIndicator>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default function Index() {
    return (
        <CartProvider>
            <NavigationContainer independent={true}>
                <AppMenu />
            </NavigationContainer>
        </CartProvider>
    );
};

