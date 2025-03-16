import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1582719478250-d929f3979dbc" }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>AI-Driven Waste Management System</Text>

          <Text style={styles.subtitle}>
            Smart, Sustainable, and Efficient Waste Solutions
          </Text>

          <View style={styles.featuresContainer}>
            <View style={styles.featureCard}>
              <MaterialIcons name="report" size={40} color="#10B981" />
              <Text style={styles.featureText}>Report Waste</Text>
            </View>
            <View style={styles.featureCard}>
              <MaterialIcons name="delete" size={40} color="#F59E0B" />
              <Text style={styles.featureText}>AI Waste Sorting</Text>
            </View>
            <View style={styles.featureCard}>
              <MaterialIcons name="eco" size={40} color="#3B82F6" />
              <Text style={styles.featureText}>Sustainability Rewards</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#D1D5DB",
    textAlign: "center",
    marginBottom: 30,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  featureCard: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 15,
    borderRadius: 10,
    width: 100,
  },
  featureText: {
    color: "#FFFFFF",
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomePage;
