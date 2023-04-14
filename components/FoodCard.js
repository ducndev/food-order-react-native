import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const FoodCard = ({ foods, toggleModal }) => {
  const navigation = useNavigation();
  function navigateToFoodDetails(food) {
    navigation.navigate("FoodDetailsScreen", { food });
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingBottom: 220,
        }}
      >
        {foods.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigateToFoodDetails(item);
            }}
          >
            <View
              style={{
                width: 162,
                height: 226,
                borderWidth: 1,
                borderColor: "#c5c5c5",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#3FC979",
                    width: 15,
                    height: 15,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#3FC979",
                      width: 9,
                      height: 9,
                      borderRadius: 50,
                    }}
                  ></View>
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/ios-filled/100/FA5252/like--v1.png",
                    }}
                    style={{ width: 15, height: 15, resizeMode: "contain" }}
                  />
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <Image
                    source={{ uri: item.imgUrl }}
                    style={{ width: 100, height: 100, borderRadius: 100 }}
                  />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#3FC979",
                      fontWeight: "bold",
                    }}
                  >
                    $ {item.price}
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      width: 20,
                      height: 20,
                      backgroundColor: "#3FC979",
                      borderColor: "#3FC979",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                    }}
                  >
                    <TouchableOpacity onPress={toggleModal}>
                      <Image
                        source={{
                          uri: "https://img.icons8.com/ios-filled/100/FFFFFF/plus-math.png",
                        }}
                        style={{ width: 15, height: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FoodCard;

const styles = StyleSheet.create({});
