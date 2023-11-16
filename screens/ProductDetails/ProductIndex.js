import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CoffeeShopProvider } from "../../providers/CoffeeShopContext";
import ProductDetails from "./ProductDetails";

const Stack = createNativeStackNavigator()

export default function ProductIndex() {
    return (
        <CoffeeShopProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator >
                    <Stack.Screen
                        name='ProductDetails'
                        component={ProductDetails}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CoffeeShopProvider>
    );
}
