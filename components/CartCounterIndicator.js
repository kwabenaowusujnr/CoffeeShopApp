import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useCoffeeShop } from "../providers/CoffeeShopContext"

const CartCounterIndicator = ({ cartCount }) => {
    const { cart } = useCoffeeShop();

    return (
        <View style={{ position: "absolute", right: -10, top: -5, backgroundColor: "#E65738", height: 16, width: 16, borderRadius: 10, justifyContent: "center", alignItems: "center", display: "flex", textAlign: "center" }} ><Text style={{ fontSize: 10, color: "#fff", }}>{cart.length}</Text></View>
    );
};

export default CartCounterIndicator;

const styles = StyleSheet.create({});
