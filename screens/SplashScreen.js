import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/12/Indian-Cuisine-PNG-Images-HD.png",
          }}
          style={{ width: 222, height: 222, marginTop: -100 }}
        />
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 32,
              color: "#fff",
              fontWeight: "bold",
              width: 389,
              textAlign: "center",
              letterSpacing: 2,
              marginTop: 50,
            }}
          >
            Food Ordering App
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginTop: -40 }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              opacity: 0.8,
              width: 300,
              height: 56,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 84,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Get a meal
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3FC979",
    alignItems: "center",
    justifyContent: "center",
  },
});
