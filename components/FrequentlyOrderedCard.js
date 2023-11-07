import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useCart } from "../providers/cartContext";

const FrequentlyOrderedCard = (props) => {
    const { cart, addItemToCart, removeItemFromCart } = useCart();
    const selectedItem = props.item;
    return (
        <View style={{
            width: "100%",
            height: 100,
            backgroundColor: "#ffffff",
            flexDirection: "row",
            borderRadius: 20,
            marginRight: 10,
            shadowColor: "#E6E6E6",
            shadowOffset: { height: 3, width: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
            marginVertical: 10
        }}>
            <Image source={props.image} style={{ width: "25%", height: 100, borderRadius: 20 }}></Image>

            <View style={{
                marginLeft: 14,
                marginRight: 14,
                marginTop: 14,
                width: "70%",
            }}>
                <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 16
                }}>{props.name}</Text>
                <Text style={{
                    fontFamily: "Poppins-Regular",
                    textAlign: "left"
                }}>{props.size}, {props.milk}</Text>

                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 5,
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                }}>
                    <Text style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 16,
                        paddingBottom: 10,
                    }}><Text style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 16,
                        paddingBottom: 10,
                        color: "#E65738"
                    }}>$</Text>{props.price}</Text>

                    <TouchableOpacity onPress={() => addItemToCart(JSON.stringify(props.item))} style={{
                        backgroundColor: "#E65738",
                        width: 50,
                        height: 36,
                        right: -5,
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }} >
                        <Entypo name="plus" size={22} color="white"  ></Entypo>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default FrequentlyOrderedCard;
