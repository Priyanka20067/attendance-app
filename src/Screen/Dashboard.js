import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const isMobile = width < 768;

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          console.log("Decoded token:", decoded);

          let assignedRole = null;

          if (typeof decoded.roles === "string") {
            assignedRole = decoded.roles;
          } else if (Array.isArray(decoded.roles) && decoded.roles.length > 0) {
            assignedRole = decoded.roles[0];
          }

          if (assignedRole) {
            const normalizedRole = assignedRole.toLowerCase();
            console.log("Assigned Role:", normalizedRole);
            setRole(normalizedRole);
          }
        }
      } catch (error) {
        console.error("Error decoding token or fetching token:", error);
      }
    };
    fetchToken();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const routes = {
    student: [
      { name: "HomePage", route: "HomePage" },
      { name: "Report Waste", route: "ReportWaste" },
      { name: "Collect Waste", route: "CollectWaste" },
      { name: "Reward", route: "Reward" },
      { name: "Leaderboard", route: "LeaderBoard" },
    ],
    // Add other roles and routes if needed
  };

  const renderLinks = () => {
    if (!role || !routes[role]) {
      console.log("No menu items to show for role:", role);
      return null;
    }

    return routes[role].map((item) => (
      <TouchableOpacity
        key={item.route}
        style={styles.link}
        onPress={() => {
          setIsOpen(false);
          navigation.navigate(item.route);
        }}
      >
        <Text style={styles.linkText}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <>
      {isMobile && (
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
      )}

      {isMobile ? (
        <Modal visible={isOpen} animationType="slide" transparent={true}>
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.sidebar}>
              <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
                <MaterialIcons name="close" size={28} color="#2563EB" />
              </TouchableOpacity>

              <View style={styles.logoContainer}>
                <Image
                  source={require("./assets/logo.png")}
                  style={{ width: 100, height: 100 }}
                  resizeMode="contain"
                />
              </View>

              <ScrollView style={styles.menu}>{renderLinks()}</ScrollView>

              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      ) : (
        <View style={[styles.sidebar, styles.desktopSidebar]}>
          <View style={styles.logoContainer}>
            <Image
              source={require("./assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <ScrollView style={styles.menu}>
  <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Homepage')}>
    <Text style={styles.linkText}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ReportWaste')}>
    <Text style={styles.linkText}>Report Waste</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('CollectWaste')}>
    <Text style={styles.linkText}>Collect Waste</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Reward')}>
    <Text style={styles.linkText}>Reward</Text>
  </TouchableOpacity>
</ScrollView>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 100,
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 16,
  },
  sidebar: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  desktopSidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.25,
    height: height,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
  menu: {
    flex: 1,
  },
  link: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
  },
  logoutButton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Navbar;
