import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../providers/cartContext";
import CartCard from "../components/CartCard";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function MyCart() {

    const { cart, setCart } = useCart();
    const [OrderPrice, setOrderPrice] = useState(0);
    const [discount, setDiscount] = useState(2.25);
    const [totalOrder, setTotalOrder] = useState();
    const [promoCode, setPromoCode] = useState("");

    // Calculate the order price whenever the cart or discount changes
    useEffect(() => {
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.price * item.quantity;
        }
        setOrderPrice(totalPrice);
    }, [cart, discount]);

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
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontWeight: '400', fontSize: 20 }}>My Cart</Text>

                        </View>

                    </ImageBackground>
                </View>
                <View style={{ flex: 1, margin: 20 }}>
                    <View style={{ marginBottom: 10 }}>
                        <ScrollView
                            style={{
                                marginBottom: 20,
                                height: "45%"
                            }}
                            showsHorizontalScrollIndicator={false}>
                            {
                                cart.map((item, index) => (
                                    <CartCard
                                        key={index}
                                        item={item} />
                                ))
                            }
                        </ScrollView>
                    </View>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16,
                            color: "#2D465B",
                        }}>Promo Code</Text>
                        <View style={styles.textFieldWrapper}>
                            <TextInput
                                style={styles.textField}
                                placeholder=""
                                value={promoCode}
                                onChangeText={code => setPromoCode(code)}
                                onBlur={console.log('sd')}
                            />
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    backgroundColor: "#E65738",
                                    height: "100%",
                                    width: "40%",
                                    borderRadius: 60,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    let testPromoCode = "test";
                                    (promoCode.toLocaleLowerCase() == testPromoCode.toLocaleLowerCase())
                                        ?
                                        setDiscount(OrderPrice * 0.5)
                                        :
                                        setDiscount(0)

                                }}
                            >
                                <Text style={{ fontFamily: "Poppins-SemiBold", color: "#fff", fontSize: 14 }}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.cartDetailsLabel}>Cart</Text>
                        <Text style={styles.cartDetailsValue}>${parseFloat(OrderPrice).toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.cartDetailsLabel}>Discount</Text>
                        <Text style={styles.cartDetailsValue}>${parseFloat(discount).toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                        <Text style={styles.cartDetailsLabel}>Total</Text>
                        <Text style={styles.cartDetailsValue}>${(parseFloat(OrderPrice) - parseFloat(discount)).toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#293441",
                            alignItems: 'center',
                            width: "100%",
                            justifyContent: 'center',
                            height: 60,
                            borderRadius: 20,
                            marginVertical: 40,
                            position: "absolute",
                            bottom: 0

                        }}
                    >
                        <Text style={{
                            fontFamily: "Poppins-Medium",
                            color: "#fff",
                            fontSize: 18
                        }}>
                            Check Out
                        </Text>
                    </TouchableOpacity >
                </View>
            </View>
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
        width: "100%",
        height: 52,
        backgroundColor: "#E0E6E9",
        borderWidth: 0,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        marginVertical: 2
    },
    textField: {
        width: "100%",
        fontFamily: "Poppins-Medium",
        fontSize: 16
    },
    cartDetailsLabel: {
        fontFamily: "Poppins-Bold",
        fontSize: 16
    },
    cartDetailsValue: {
        fontFamily: "Poppins-Medium",
        fontSize: 16
    }
})
