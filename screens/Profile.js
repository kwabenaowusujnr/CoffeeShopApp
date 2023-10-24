import { View, Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
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
                            <Text style={{ fontFamily: "Poppins-Medium", color: "#FFF", fontSize: 24 }}>Profile</Text>

                        </View>

                    </ImageBackground>
                </View>
                <View style={{
                    width: "100%",
                    marginTop: -40,
                    alignItems: "center"
                }}>
                    <View style={styles.ProfileWrapper}>
                        <Image source={require("../assets/avatarm.png")} style={{
                            height: 80, width: 80,
                            borderRadius: 50,
                            margin: 5
                        }}></Image>

                        <View style={{ padding: 20 }}>
                            <Text style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 16
                            }}>Kwabena Owusu</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="star" size={24} color="#E65738" />
                                <Text style={{ fontSize: 16, marginLeft: 10 }}>144 points</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginTop: 20, right: -60 }}>
                            <Feather name="edit" size={24} color="#34536A" />
                        </TouchableOpacity>
                    </View>
                </View>

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
    ProfileWrapper: {
        width: "90%",
        height: 90,
        backgroundColor: "#E0E6E9",
        borderWidth: 0,
        borderRadius: 50,
        justifyContent: "flex-start",
        alignContent: "center",
        marginVertical: 10,
        flexDirection: "row"
    },
    textField: {
        width: "100%",
        fontFamily: "Poppins-Medium",
        fontSize: 16
    },

})
