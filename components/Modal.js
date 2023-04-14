import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Modal = ({ toggleModal }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 386,
        width: 300,
        backgroundColor: "#E7EBE7",
        position: "absolute",
        top: "25%",
        left: "15%",
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={toggleModal}>
        <View
          style={{
            width: 35,
            height: 35,
            borderWidth: 2,
            borderColor: "#333",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginLeft: "85%",
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/100/4D4D4D/delete-sign--v1.png",
            }}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Add to Cart</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
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
            <Text style={{ fontSize: 18, color: "#3FC979", fontWeight: "600" }}>
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
      <View
        style={{
          position: "absolute",
          bottom: 50,
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
            backgroundColor: "#E5E5E5",
            height: 50,
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 10,
            borderWidth: 1,
            borderColor: "#ccc",
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

export default Modal;

const styles = StyleSheet.create({});
