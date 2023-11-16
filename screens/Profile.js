import { View, Text, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ReactNativeToggleElement from "react-native-toggle-element";

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
                                fontSize: 18
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
                <ScrollView style={{ marginBottom: 60 }}>
                    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16,
                            color: "#181B24"
                        }}>Categories</Text>

                        <View style={{
                            backgroundColor: "#E0E6E9",
                            gap: 10,
                            padding: 10,
                            borderRadius: 20
                        }}>
                            <Pressable style={styles.horizontalAlign}>
                                <Ionicons name="md-document-text-outline" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Account details
                                </Text></Pressable>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />
                            <Pressable style={styles.horizontalAlign}>
                                <Feather name="dollar-sign" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Payment details
                                </Text></Pressable>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />

                            <Pressable style={styles.horizontalAlign}>
                                <Feather name="calendar" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Order history
                                </Text></Pressable>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />

                            <Pressable style={styles.horizontalAlign}>
                                <Feather name="star" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Rewards
                                </Text></Pressable>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />

                            <Pressable style={styles.horizontalAlign}>
                                <Feather name="tag" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Student discount
                                </Text></Pressable>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16,
                            color: "#181B24"
                        }}>Notification</Text>

                        <View style={{
                            backgroundColor: "#E0E6E9",
                            gap: 10,
                            padding: 10,
                            borderRadius: 20
                        }}>
                            <View style={styles.horizontalAlign}>
                                <Ionicons name="notifications-outline" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Receive notifications
                                </Text>
                                <View style={{ position: "absolute", right: 0 }}>
                                    <ReactNativeToggleElement
                                        onPress={() => { }}
                                        trackBar={{
                                            width: 46,
                                            height: 24,
                                            backgroundColor: "#FEE4D6",
                                            activeBackgroundColor: "#FEE4D6",
                                            inActiveBackgroundColor: "#FEE4D6",
                                            borderActiveColor: "#E95436",
                                            borderInActiveColor: "#E95436",
                                            borderWidth: 1
                                        }}
                                        thumbButton={{
                                            width: 20,
                                            height: 20,
                                            activeBackgroundColor: "#E95436",
                                            inActiveBackgroundColor: "#E95436"
                                        }}
                                        animationDuration={70}
                                    >

                                    </ReactNativeToggleElement>
                                </View>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />
                            <View style={styles.horizontalAlign}>
                                <FontAwesome5 name="location-arrow" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Share location data
                                </Text>
                                <View style={{ position: "absolute", right: 0 }}>
                                    <ReactNativeToggleElement
                                        onPress={() => { }}
                                        trackBar={{
                                            width: 46,
                                            height: 24,
                                            backgroundColor: "#C4D1DA",
                                            activeBackgroundColor: "#C4D1DA",
                                            inActiveBackgroundColor: "#C4D1DA",
                                            borderActiveColor: "#5B7E9A",
                                            borderInActiveColor: "#5B7E9A",
                                            borderWidth: 1
                                        }}
                                        thumbButton={{
                                            width: 20,
                                            height: 20,
                                            activeBackgroundColor: "#5B7E9A",
                                            inActiveBackgroundColor: "#5B7E9A"
                                        }}
                                        animationDuration={70}
                                    >

                                    </ReactNativeToggleElement>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                        <Text style={{
                            fontFamily: "Poppins-SemiBold",
                            marginVertical: 5,
                            fontSize: 16,
                            color: "#181B24"
                        }}>Other</Text>

                        <View style={{
                            backgroundColor: "#E0E6E9",
                            gap: 10,
                            padding: 10,
                            borderRadius: 20
                        }}>
                            <Pressable style={styles.horizontalAlign}>
                                <Ionicons name="location-outline" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Location
                                </Text>
                            </Pressable>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#bec2c4' }} />
                            <Pressable style={styles.horizontalAlign}>
                                <FontAwesome5 name="dollar-sign" size={26} color="#707A81" />
                                <Text style={styles.ProfileLabel}>
                                    Currency
                                </Text>

                            </Pressable>
                        </View>
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
    horizontalAlign: {
        flexDirection: "row",
        gap: 10

    },
    ProfileLabel: {
        color: "#353537",
        fontFamily: "Poppins-Medium",
        marginLeft: 10,
        fontSize: 16
    }

})
