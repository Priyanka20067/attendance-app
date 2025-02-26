import React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions } from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Sample data
const data = [
  { id: "1", date: "23.07.24", subject: "Syllabus", process: "Accepted", backgroundColor: "green" },
  { id: "2", date: "23.07.24", subject: "Fess", process: "Rejected", backgroundColor: "red" },
  { id: "3", date: "23.07.24", subject: "Syllabus", process: "Not view", backgroundColor: "blue" },
  { id: "4", date: "23.07.24", subject: "Syllabus", process: "Rejected", backgroundColor: "red" },
];

const ViewStatus = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={[styles.cellbutton, { backgroundColor: item.backgroundColor }]}>
        {item.process}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.headerimg}>
        <Image source={require("../assets/icons/jeclogo.png")} style={styles.logo} />
        <Image source={require("../assets/icons/notifications.png")} style={styles.logonot} />
      </View>

      {/* Title */}
      <Text style={styles.title}>View Status</Text>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>DATE</Text>
        <Text style={styles.headerText}>SUBJECT</Text>
        <Text style={styles.headerText}>PROCESS</Text>
      </View>

      {/* Table Data */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Staff")}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../assets/icons/profile.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A192F",
  },
  headerimg: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: width * 0.03, // 3% of screen width
  },
  logo: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.15, // 15% of screen width
    borderRadius: 50,
  },
  logonot: {
    width: width * 0.08, // 8% of screen width
    height: width * 0.08, // 8% of screen width
  },
  title: {
    color: "white",
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: height * 0.05, // 5% of screen height
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: width * 0.04, // 4% of screen width
    marginHorizontal: width * 0.03, // 3% of screen width
    borderWidth: 1,
    borderColor: "#444",
  },
  headerText: {
    color: "black",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.04, // 4% of screen width
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: width * 0.04, // 4% of screen width
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginHorizontal: width * 0.03, // 3% of screen width
  },
  cell: {
    color: "black",
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.035, // 3.5% of screen width
  },
  cellbutton: {
    color: "white",
    padding: width * 0.02, // 2% of screen width
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: height * 0.015, // 1.5% of screen height
  },
  homeimage: {
    height: height * 0.05, // 5% of screen height
    width: width * 0.1, // 10% of screen width
  },
  navLabel: {
    fontSize: width * 0.03, // 3% of screen width
    marginLeft: width * 0.01, // 1% of screen width
  },
});

export default ViewStatus;