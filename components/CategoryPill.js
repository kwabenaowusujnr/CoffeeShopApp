import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React from "react";

const CategoryPill = (props) => {

    return (
        <Pressable onPress={() => { props.setCatgoryType(props.id); }}>
            <View style={[{
                height: 48,
                width: 150,
                backgroundColor: "#E0E6E9",
                flexDirection: "row",
                padding: 4,
                borderRadius: 27,
                alignItems: "center",
                marginRight: 6,
                color: "#34536A"
            }, props.catgoryType == props.id && styles.selectedCategory]}>
                <Image source={(props.catgoryType == props.id)
                    ? props.imageSelected : props.image} style={{ height: 42, width: 42, borderRadius: 27 }}></Image>
                <Text style={[{ fontFamily: "Poppins-SemiBold", margin: 10, fontSize: 14 }, props.catgoryType == props.id && styles.selectedCategoryText]}>{props.name}</Text>
            </View>
        </Pressable>
    );
};

export default CategoryPill;

const styles = StyleSheet.create({
    selectedCategory: {
        backgroundColor: "#E65738",
    },
    selectedCategoryText: {
        color: "#ffffff"
    }
})