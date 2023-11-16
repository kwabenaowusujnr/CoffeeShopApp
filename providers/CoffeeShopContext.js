import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CoffeeShopContext = createContext();

export const CoffeeShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addItemToCart = (item) => {
        const newItem = JSON.parse(item);
        console.log(item)
        // Check if the item with the same ID already exists in the cart
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === newItem.id);

        if (existingItemIndex !== -1) {
            // If the item exists, update its quantity
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    const newQuantity = cartItem.quantity + 1;
                    return { ...cartItem, quantity: newQuantity };
                } else {
                    return cartItem;
                }
            });

            setCart(updatedCart);

        } else {
            console.log(newItem.quantity)
            // If the item doesn't exist, add it to the cart with quantity 1
            if (newItem.quantity == undefined)
                newItem.quantity = 1;
            setCart([...cart, newItem]);
        }

        storeData(cart); // Save the updated cart to storage
    };

    const removeItemFromCart = (item) => {
        const newItem = JSON.parse(item);
        const updatedCart = cart.filter((cartItem) => cartItem.id !== newItem.id);
        setCart(updatedCart);
    };

    const addItemToFavorite = (item) => {
        const newItem = JSON.parse(item);

        const existingItemIndex = favorites.findIndex((favItem) => favItem.id === newItem.id);
        if (existingItemIndex === -1) {
            setFavorites([...favorites, newItem]);
        }
    }

    const removeItemFromFavorite = (item) => {
        const newItem = JSON.parse(item);
        const updatedfav = favorites.filter((favItem) => favItem.id !== newItem.id);
        setFavorites(updatedfav);
    }

    return (
        <CoffeeShopContext.Provider value={{ cart, addItemToCart, removeItemFromCart, setCart, storeData, favorites, setFavorites, addItemToFavorite, removeItemFromFavorite }}>
            {children}
        </CoffeeShopContext.Provider>
    );
};

const storeData = async (value, storageNme = "cartData") => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(storageNme, jsonValue);
    } catch (e) {
        // saving error
    }
};

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('cartData');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

export const useCoffeeShop = () => {
    return useContext(CoffeeShopContext);
};