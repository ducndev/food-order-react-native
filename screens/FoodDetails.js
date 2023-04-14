import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodDetails = ({ navigation }) => {
  const route = useRoute();
  const { food } = route.params;

  return (
    <View style={styles.foodDetails}>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: food.imgUrl }}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
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
        </TouchableOpacity>
        <TouchableOpacity>
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
        </TouchableOpacity>
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
            marginTop: 20,
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
              <Text
                style={{ fontSize: 18, color: "#3FC979", fontWeight: "600" }}
              >
                1
              </Text>
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
      <View style={{ padding: 20, marginTop: -15 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipe</Text>
        <Text style={{ fontSize: 15, paddingTop: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi ut nibh
          viverra <Text style={{ color: "#3FC979" }}>more....</Text>
        </Text>
      </View>
      <View style={{ padding: 20, flexDirection: "column", gap: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 53,
              height: 45,
              borderWidth: 2,
              borderColor: "#3FC979",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/100/3FC979/marker.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Location</Text>
            <Text>Lorem ipsum dolor</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 53,
              height: 45,
              borderWidth: 2,
              borderColor: "#3FC979",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/100/3FC979/clock--v1.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Delivery Time
            </Text>
            <Text>20 minutes</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "95%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginLeft: 10,
            backgroundColor: "#3FC979",
            height: 50,
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
            borderBottomEndRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>2 items</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>$ 27.00</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  foodDetails: {
    flex: 1,
    position: "relative",
  },
});
