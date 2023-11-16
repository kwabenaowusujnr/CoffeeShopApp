import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useCoffeeShop } from "../providers/CoffeeShopContext";
import { useNavigation } from '@react-navigation/native';

const MenuCard = (props) => {
    const { cart, addItemToCart, removeItemFromCart, storeData, addItemToFavorite } = useCoffeeShop();

    const addToFav = (item) => {
        storeData(item, 'cartData');
    }
    const navigation = useNavigation();
    return (
        <View style={{
            width: '45%',
            backgroundColor: "#ffffff",
            justifyContent: "center",
            padding: 14,
            borderRadius: 20,
            marginRight: 10,
            shadowColor: "#E6E6E6",
            shadowOffset: { height: 3, width: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
            marginVertical: 10
        }}>
            <View>
                <Pressable onPress={() => { navigation.navigate("ProductDetails", { item: JSON.stringify(props.item) }); console.log(props.item) }}>
                    <Image source={props.image} style={{ width: "100%", height: 160, borderRadius: 20, backgroundColor: "#E6EBEF" }}></Image>
                </Pressable>
                <TouchableOpacity onPress={() => addItemToFavorite(JSON.stringify(props.item))}>
                    <Ionicons name="heart-circle-sharp" size={40} color="#E65738" style={{
                        position: "absolute", bottom: -5, right: -5
                    }} />
                </TouchableOpacity>
            </View>
            <Text style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 18,
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
                    fontSize: 18,
                    alignItems: "center",
                }}> <Text style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 18,
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
                    right: -12,
                    bottom: -14,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20
                }} >
                    <Entypo name="plus" size={22} color="white" style={{
                        position: "absolute"
                    }} ></Entypo>
                    {/* {
                        (addToCart) ?
                            < Entypo name="plus" size={22} color="white" style={{
                                position: "absolute"
                            }} ></Entypo> :
                            <Entypo name="minus" size={22} color="white" style={{
                                position: "absolute"
                            }} ></Entypo>
                    } */}

                </TouchableOpacity>
            </View>
        </View >
    );
};

export default MenuCard;
