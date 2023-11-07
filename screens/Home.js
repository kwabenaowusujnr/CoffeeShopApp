import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FrequentlyOrderedCard from "../components/FrequentlyOrderedCard";
import NewInCard from "../components/NewInCard";
import CoffeeData from "../data.js/CoffeeData"

function pickRandomElementsFromArray(arr, num) {
    if (num > arr.length) {
        return "Cannot pick more elements than available in the array.";
    }
    return arr.sort(() => Math.random() - 0.5).slice(0, num);
}

export default function Home() {

    const NewInCoffeeData = CoffeeData.coffeeTypes.slice(0, 4);
    const FrequentlyOrdered = pickRandomElementsFromArray(CoffeeData.coffeeTypes, 5);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1, backgroundColor: "#F3F7F8" }}>
                <View style={styles.wrapper}>
                    <ImageBackground source={require("../assets/headerbg.png")} resizeMode='cover' style={{ width: "100%", height: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}>

                        <View style={{ alignItems: "center", marginVertical: 20 }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#E65738", fontWeight: '400', fontSize: 26 }}>Cavosh</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%"
                        }}>
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontWeight: '400', fontSize: 22 }}>Good morning, user</Text>
                            <Ionicons name="notifications" size={28} color="white" style={{
                                position: "absolute", right: 40
                            }} />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                            marginVertical: 6,
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%"
                        }}>
                            <Text style={{ fontFamily: "Poppins-Regular", color: "#FFF", fontWeight: '400', fontSize: 16 }}>
                                Your cafe: </Text>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#FFF", fontWeight: '400', fontSize: 16 }}>
                                Cavosh Cafe Test
                            </Text>
                            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#FFF", fontWeight: '400', fontSize: 12, position: "absolute", right: 40 }} >Change</Text>
                        </View>

                    </ImageBackground>
                </View>
                <View style={{
                    width: "100%",
                    marginTop: -40,
                    alignItems: "center"
                }}>
                    <View style={styles.textFieldWrapper}>
                        <TextInput
                            style={styles.textField}
                            placeholder="Search"
                        />
                        <TouchableOpacity
                            style={{ position: "absolute", right: 0 }}
                        >
                            <Ionicons name="ios-search-circle-sharp" size={56} color="#E65738" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    marginHorizontal: 20
                }}>
                    <View >
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16
                        }}>New in</Text>

                        <ScrollView
                            horizontal={true}
                            style={{
                                paddingBottom: 30,
                            }}
                            showsHorizontalScrollIndicator={false}
                        >
                            {
                                NewInCoffeeData.map((item, index) => (
                                    <NewInCard
                                        key={index}
                                        name={item.name}
                                        image={item.img}
                                        price={item.price}
                                        item={item}
                                    ></NewInCard>
                                ))
                            }
                        </ScrollView>
                    </View>

                    <View >
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16
                        }}>Frequently ordered</Text>

                        <ScrollView
                            style={{
                                paddingBottom: 100,
                                height: 230
                            }}
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                FrequentlyOrdered.map((item, index) => (
                                    <FrequentlyOrderedCard
                                        key={index}
                                        name={item.name}
                                        image={item.img}
                                        price={item.price}
                                        size={item.size}
                                        milk={item.milk}
                                        item={item}
                                    ></FrequentlyOrderedCard>
                                ))
                            }


                        </ScrollView>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 60,
        height: "25%",

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