import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useCoffeeShop } from "../providers/CoffeeShopContext";


const NewInCard = (props) => {
    const { cart, addItemToCart, removeItemFromCart } = useCoffeeShop();
    return (
        <View style={{
            width: 140,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            padding: 10,
            borderRadius: 20,
            marginRight: 10,
            shadowColor: "#E6E6E6",
            shadowOffset: { height: 3, width: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5
        }}>
            <Image source={props.image} style={{ width: 120, height: 100, borderRadius: 20 }}></Image>
            <Text style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                marginVertical: 5
            }}>{props.name}</Text>

            <View style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginVertical: 2
            }}>
                <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16,
                    alignItems: "center"
                }}> <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16,
                    alignItems: "center",
                    color: "#E65738"
                }}>$</Text>{props.price}</Text>

                <TouchableOpacity onPress={() => addItemToCart(JSON.stringify(props.item))} style={{
                    backgroundColor: "#E65738",
                    width: 50,
                    height: 36,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    right: -10,
                    bottom: -12,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20
                }} >
                    <Entypo name="plus" size={22} color="white" style={{
                        position: "absolute"
                    }} ></Entypo>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default NewInCard;

const styles = StyleSheet.create({});
