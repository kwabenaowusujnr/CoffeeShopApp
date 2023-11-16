import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather, Ionicons, MaterialCommunityIcons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { useCoffeeShop } from "../../providers/CoffeeShopContext";

function ProductDetails({ navigation, route }) {
    const { cart, addItemToCart, removeItemFromCart, storeData, addItemToFavorite } = useCoffeeShop();
    const { item } = route.params;
    let ProductDetails = JSON.parse(item);
    ProductDetails.quantity = 1;
    const Sizes = [
        {
            id: 1,
            text: "Small",
            size: 125
        },
        {
            id: 2,
            text: "Medium",
            size: 150
        },
        {
            id: 3,
            text: "Large",
            size: 175
        }
    ]
    const [size, setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        ProductDetails.quantity = quantity + 1;
        setQuantity(ProductDetails.quantity)
    }

    const decreaseQuantity = () => {
        (quantity > 1) ? ProductDetails.quantity = quantity - 1 : null;
        setQuantity(ProductDetails.quantity)
    }

    useEffect(() => {
        ProductDetails.quantity = quantity;
    }, [quantity]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <View style={{ flex: 1, backgroundColor: "#F3F7F8" }}>
                <View style={styles.wrapper}>
                    <ImageBackground source={require("../../assets/headerbg.png")} resizeMode='cover' style={{ width: "100%", height: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: 'hidden' }}>
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                            marginHorizontal: 20,
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            width: "100%",
                            marginVertical: 20
                        }}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <Octicons name="chevron-left" size={32} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#E65738",
                                    width: 36,
                                    height: 36,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20,
                                    right: 40,
                                    position: "absolute"
                                }}
                                onPress={() => addItemToFavorite(JSON.stringify(ProductDetails))}>
                                <Feather name="heart" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
                <View style={{
                    width: "10%",
                    backgroundColor: "#E65738",
                    height: 100,
                    flexDirection: "column",
                    borderRadius: 20,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: -50,
                    marginLeft: 20
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
                <View style={{ width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                    <Image
                        source={ProductDetails.img}
                        style={{ display: "flex", width: 240, height: 240, marginTop: -240 }}></Image>
                </View>

                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <Text style={{
                            fontFamily: "Poppins-Bold",
                            fontSize: 18,
                            marginVertical: 10
                        }}>{ProductDetails.name}</Text>

                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            fontSize: 16,
                            marginVertical: 5,
                            color: "#536674"
                        }}>{ProductDetails.description}</Text>

                        <View style={{
                            flexDirection: "row",
                            width: "100%"
                        }}>
                            <Text style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 16,
                                marginVertical: 5
                            }}>Size</Text>

                            <Text style={{
                                fontFamily: "Poppins-Medium",
                                fontSize: 16,
                                marginVertical: 5,
                                position: "absolute",
                                right: 0,
                                color: "#4C4C4C"
                            }}>{Sizes.find(item => item.id === size).size}ml</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {
                                Sizes.map((item, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => { setSize(item.id) }}
                                        style={[{ backgroundColor: "#fff", width: "30%", height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }, size == item.id && styles.selectedBg]}>
                                        <Text style={[{ fontFamily: "Poppins-Medium" }, size == item.id && styles.selectedText]}>{item.text}</Text>
                                    </Pressable>
                                ))
                            }
                        </View>
                        <View style={{
                            width: "100%",
                            marginVertical: 20,
                        }}>
                            <Text style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 16
                            }}>Customize your coffee</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-evenly"

                        }}>
                            <View style={{
                                borderWidth: 2,
                                paddingVertical: 20,
                                paddingHorizontal: 5,
                                borderRadius: 40,
                                alignItems: "center",
                                borderColor: "#F3D5CD",
                                backgroundColor: "#FDF2EE",
                                width: "20%"
                            }}>
                                <MaterialCommunityIcons name="bottle-soda-classic-outline" size={32} color="#E65738" />
                                <Text style={{
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 12,
                                    marginVertical: 5,
                                    color: "#E65738",
                                }}>Milk</Text>
                                <Text style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 16,
                                    color: "#E65738",
                                }}>Oats</Text>
                            </View>
                            <View style={{
                                borderWidth: 2,
                                paddingVertical: 20,
                                paddingHorizontal: 5,
                                borderRadius: 40,
                                alignItems: "center",
                                borderColor: "#F3D5CD",
                                backgroundColor: "#FDF2EE",
                                width: "20%"
                            }}>
                                <SimpleLineIcons name="cup" size={32} color="#E65738" />
                                <Text style={{
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 12,
                                    marginVertical: 5,
                                    color: "#E65738",
                                }}>Cream</Text>
                                <Text style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 16,
                                    color: "#E65738",
                                }}>No</Text>
                            </View>
                            <View style={{
                                borderWidth: 2,
                                paddingVertical: 20,
                                paddingHorizontal: 5,
                                borderRadius: 40,
                                alignItems: "center",
                                borderColor: "#F3D5CD",
                                backgroundColor: "#FDF2EE",
                                width: "20%"
                            }}>
                                <MaterialCommunityIcons name="bottle-soda-classic-outline" size={32} color="#E65738" />
                                <Text style={{
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 12,
                                    marginVertical: 5,
                                    color: "#E65738",
                                }}>Caffeine</Text>
                                <Text style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 16,
                                    color: "#E65738",
                                }}>Yes</Text>
                            </View>
                            <View style={{ width: "20%" }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "#E65738",
                                        width: 52,
                                        height: 52,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 30
                                    }}
                                    onPress={() => { }}>
                                    <Feather name="edit-2" size={24} color="#fff" />
                                </TouchableOpacity>
                                <Text>Change</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
                <View style={{
                    position: "absolute",
                    bottom: 40,
                    padding: 20,
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>
                    <View>
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            fontSize: 16,
                        }}>Total Price</Text>

                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 20,
                            alignItems: "center",
                        }}> <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 20,
                            alignItems: "center",
                            color: "#E65738"
                        }}>$</Text>{ProductDetails.price}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => { addItemToCart(JSON.stringify(ProductDetails)), console.log(ProductDetails.quantity) }}
                        style={{
                            backgroundColor: "#293441",
                            alignItems: 'center',
                            width: "70%",
                            justifyContent: 'center',
                            height: 60,
                            borderRadius: 20,
                            position: "relative",
                            right: -50,
                            bottom: 0
                        }}
                    >
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "#fff",
                            fontSize: 18
                        }}>
                            Add to cart
                        </Text>
                    </TouchableOpacity >


                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetails;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 60,
        height: "27%",

    },
    selectedBg: {
        backgroundColor: "#E65738",
    },
    selectedText: {
        color: "#ffffff"
    }

});

