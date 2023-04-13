import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodDetails = () => {
  const route = useRoute();
  const { food } = route.params;
  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: food.imgUrl }}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/100/FFFFFF/less-than.png",
          }}
          style={{
            width: 35,
            height: 35,
            position: "absolute",
            bottom: 30,
            left: 20,
          }}
        />
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/100/FFFFFF/like--v1.png",
          }}
          style={{
            width: 35,
            height: 35,
            position: "absolute",
            bottom: 30,
            right: 20,
          }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ fontSize: 20 }}>{food.name}</Text>
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderColor: "#3FC979",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <View
              style={{
                backgroundColor: "#3FC979",
                width: 12,
                height: 12,
                borderRadius: 50,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <Text style={{ fontSize: 24, color: "#3FC979" }}>$ {food.price}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#B8B8B8",
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/100/FFFFFF/minus-math.png",
                }}
                style={{ width: 15, height: 20 }}
              />
            </View>
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 50,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>1</Text>
            </View>
            <View
              style={{
                backgroundColor: "#3FC979",
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/100/FFFFFF/plus-math.png",
                }}
                style={{ width: 15, height: 20 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({});
