import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FrequentlyOrderedCard from "./FrequentlyOrderedCard";
import CoffeeData from "../data.js/CoffeeData"
import { useCoffeeShop } from "../providers/CoffeeShopContext";
import EmptyAni from "./EmptyAni";


export default function Favorite() {
    // const FavoriteCoffeeData = CoffeeData.coffeeTypes.slice(0, 4);
    const { favorites, setFavorites, removeItemFromFavorite } = useCoffeeShop();


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1, backgroundColor: "#F3F7F8" }}>
                <View style={styles.wrapper}>
                    <ImageBackground source={require("../assets/headerbg.png")} resizeMode='cover' style={{ width: "100%", height: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}>


                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            marginHorizontal: 20,
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%"
                        }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontWeight: '400', fontSize: 20 }}>Favorites</Text>

                        </View>

                    </ImageBackground>
                </View>
                {
                    (favorites.length > 0) ?
                        <View style={{
                            margin: 20
                        }} >
                            <Text style={{
                                fontFamily: "Poppins-SemiBold",
                                marginVertical: 5,
                                textAlign: "right",
                                fontSize: 14,
                                left: 0,
                                color: "#34536A"
                            }}>{favorites.length} items</Text>

                            <ScrollView
                                style={{
                                    paddingBottom: 100,
                                    height: "70%"
                                }}
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    favorites.map((item, index) => (
                                        <View
                                            key={index}
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}>
                                            <FrequentlyOrderedCard
                                                name={item.name}
                                                image={item.img}
                                                price={item.price}
                                                size={item.size}
                                                milk={item.milk}
                                                item={item}
                                            ></FrequentlyOrderedCard>
                                            <TouchableOpacity onPress={() => removeItemFromFavorite(JSON.stringify(item))}>
                                                <MaterialIcons name="delete-forever" size={24} color="#FF0000" />
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }
                            </ScrollView>

                            {/* <Text style={{
                                fontFamily: "Poppins-SemiBold",
                                marginVertical: 5,
                                textAlign: "right",
                                fontSize: 16,
                                color: "#E65738"
                            }}>Edit</Text> */}

                        </View>
                        :
                        <View style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <EmptyAni></EmptyAni>
                        </View>
                }
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 60,
        height: "15%",

    },
    textFieldWrapper: {
        width: "90%",
        height: 56,
        backgroundColor: "#E0E6E9",
        borderWidth: 0,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginVertical: 10
    },
    textField: {
        width: "100%",
        fontFamily: "Poppins-Medium",
        fontSize: 16
    },

})