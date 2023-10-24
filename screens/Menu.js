import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CoffeeData from "../data.js/CoffeeData"
import NewInCard from "../components/NewInCard";
import MenuCard from "../components/MenuCard";
import { Image } from "react-native";
import CategoryPill from "../components/CategoryPill";

export default function Menu() {
    const _CoffeeData = CoffeeData.coffeeTypes;
    const _Category = [
        {
            id: 1,
            name: "Hot drinks",
            img: require('../assets/cat1.png'),
            imgSelected: require('../assets/cat1s.png')
        },
        {
            id: 2,
            name: "Cold drinks",
            img: require('../assets/cat2.png'),
            imgSelected: require('../assets/cat2s.png'),
        },
        {
            id: 3,
            name: "Milkshakes",
            img: require('../assets/cat6.png'),
            imgSelected: require('../assets/cat6s.png'),
        },
        {
            id: 4,
            name: "Smoothies",
            img: require('../assets/cat5.png'),
            imgSelected: require('../assets/cat5s.png'),
        },
        {
            id: 5,
            name: "Cocktails",
            img: require('../assets/cat3.png'),
            imgSelected: require('../assets/cat3s.png'),
        }

    ];

    const [catType, setCatgoryType] = useState(1);
    const [searchText, setSearchText] = useState("")
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
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontSize: 24 }}>Menu</Text>

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
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                right: 0
                            }}
                        >
                            <Ionicons name="ios-search-circle-sharp" size={56} color="#E65738" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
                    <Text style={{
                        fontFamily: "Poppins-SemiBold",
                        marginVertical: 5,
                        fontSize: 18,
                        color: "#34536A"
                    }}>Categories</Text>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            _Category.map((item, index) => (
                                <CategoryPill
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    image={item.img}
                                    imageSelected={item.imgSelected}
                                    setCatgoryType={setCatgoryType}
                                    catgoryType={catType}
                                ></CategoryPill>
                            ))


                        }
                    </ScrollView>
                </View>


                <ScrollView
                    style={{
                        paddingBottom: 100,
                        height: "70%",
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding: 15,
                        marginBottom: 40
                    }}>
                        {

                            _CoffeeData.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()) || searchText === "").map((item, index) => (
                                <MenuCard
                                    key={index}
                                    name={item.name}
                                    image={item.img}
                                    price={item.price}
                                    size={item.size}
                                    milk={item.milk}
                                ></MenuCard>
                            ))
                        }
                    </View>
                </ScrollView>


            </View >
        </SafeAreaView >
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