import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "../components/Modal";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeNavIcons } from "../datas";
import FoodCard from "../components/FoodCard";
import { foods } from "../datas";
const HomeScreen = ({ navigation }) => {
  const [activeIcon, setActiveIcon] = useState("Home");
  const [modalActive, setModalActive] = useState(true);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };
  return (
    <SafeAreaView style={styles.homeContainer}>
      {/* <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ccc",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></View> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column", gap: 3 }}>
          <View
            style={{ width: 26, height: 3, backgroundColor: "#000000" }}
          ></View>
          <View
            style={{ width: 21, height: 3, backgroundColor: "#000000" }}
          ></View>
          <View
            style={{ width: 17, height: 3, backgroundColor: "#000000" }}
          ></View>
        </View>
        <View>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/null/search--v1.png",
            }}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "semibold" }}>
            Work Place
          </Text>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/737373/sort-down.png",
            }}
            style={{ width: 14, height: 10 }}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 15 }}>Choose Your Delicious Meal</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          gap: 45,
        }}
      >
        {homeNavIcons.map((icon) => (
          <View
            style={{
              width: 53,
              height: 45,
              borderColor: "#3FC979",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            key={icon.id}
          >
            <TouchableOpacity
              onPress={() => setActiveIcon(icon.name)}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: activeIcon ? icon.active : icon.inactive,
                }}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={{ marginTop: 32, flexDirection: "row" }}>
        <FoodCard
          foods={foods}
          navigation={navigation}
          toggleModal={toggleModal}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "97%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginLeft: 25,
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
      {modalActive ? <Modal toggleModal={toggleModal} /> : null}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    position: "relative",
  },
});
