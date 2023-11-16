import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useCoffeeShop } from "../providers/CoffeeShopContext";

const CartCard = (props) => {
    const [quantity, setQuantity] = useState(props.item.quantity);
    const { cart, setCart } = useCoffeeShop();

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    }

    const decreaseQuantity = () => {
        const newQuantity = quantity - 1;
        (quantity > 1) ? setQuantity(newQuantity) : null;
        onQuantityChange(newQuantity);
    }

    const onQuantityChange = (newQuantity) => {
        setCart((prevItem) => {
            return prevItem.map((item) => {
                if (item.id == props.item.id) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        })
    }

    return (
        <View style={{
            width: "90%",
            height: 80,
            backgroundColor: "#ffffff",
            flexDirection: "row",
            borderRadius: 20,
            marginRight: 10,
            shadowColor: "#E6E6E6",
            shadowOffset: { height: 3, width: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
            marginVertical: 5
        }}>
            <Image source={props.item.img} style={{ width: "20%", height: 80, borderRadius: 20 }}></Image>

            <View style={{
                marginLeft: 14,
                marginRight: 14,
                marginTop: 10,
                width: "55%",
                gap: -5
            }}>
                <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16
                }}>{props.item.name}</Text>

                <Text style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Medium",
                    textAlign: "left"
                }}>{props.item.size}, {props.item.milk}</Text>

                <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 14,
                    paddingBottom: 10,
                }}><Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16,
                    paddingBottom: 10,
                    color: "#E65738"
                }}>$</Text>{props.item.price}</Text>

            </View>

            <View style={{
                width: "10%",
                backgroundColor: "#E65738",
                flex: 1,
                flexDirection: "column",
                position: "absolute",
                right: 0,
                height: "100%",
                borderRadius: 20,
                justifyContent: "space-evenly",
                alignItems: "center"

            }}>
                <TouchableOpacity onPress={increaseQuantity}>
                    <Entypo name="plus" size={18} color="white" style={{
                    }} ></Entypo>
                </TouchableOpacity>
                <Text style={{ fontFamily: "Poppins-SemiBold", color: "#fff", fontSize: 16 }}>{quantity}</Text>
                <TouchableOpacity onPress={decreaseQuantity}>
                    <Entypo name="minus" size={16} color="white" style={{
                    }} ></Entypo>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({



});
