import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Student data
const studentData = {
  name: "Nisha",
  regNo: "110823040",
  branch: "BE",
  dept: "CSE",
  semester: "03",
};

// Attendance data
const attendanceData = [
  { id: "1", date: "18-12-2024", present: false },
  { id: "2", date: "18-12-2024", present: true },
  { id: "3", date: "18-12-2024", present: true },
  { id: "4", date: "18-12-2024", present: true },
  { id: "5", date: "18-12-2024", present: true },
  { id: "6", date: "18-12-2024", present: true },
  { id: "7", date: "18-12-2024", present: true },
  { id: "8", date: "18-12-2024", present: true },
];

const StdAttendance = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.containerimage}>
        <Image source={require("../assets/icons/jeclogo.png")} style={styles.logo} />
      </View>

      {/* Student Details Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Name: {studentData.name}</Text>
        <Text style={styles.text}>Reg No: {studentData.regNo}</Text>
        <Text style={styles.text}>Branch: {studentData.branch}</Text>
        <Text style={styles.text}>Dept: {studentData.dept}</Text>
        <Text style={styles.text}>Semester: {studentData.semester}</Text>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>SNo</Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Status</Text>
      </View>

      {/* Attendance List */}
      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.date}</Text>
            <Icon
              name={item.present ? "check-circle" : "cancel"}
              size={20}
              color={item.present ? "green" : "red"}
              style={styles.icon}
            />
          </View>
        )}
      />

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Staff")}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
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
    backgroundColor: "#001F3F",
  },
  containerimage: {
    display: "flex",
    backgroundColor: "white",
    height: height * 0.1, // 10% of screen height
    justifyContent: "flex-start",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    resizeMode: "contain",
    width: width * 0.1, // 10% of screen width
    height: height * 0.1, // 10% of screen height
  },
  card: {
    backgroundColor: "#002A4E",
    padding: width * 0.04, // 4% of screen width
    borderRadius: 10,
    margin: width * 0.03, // 3% of screen width
    elevation: 5,
  },
  title: {
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: "bold",
    color: "#fff",
    marginBottom: height * 0.01, // 1% of screen height
  },
  text: {
    fontSize: width * 0.04, // 4% of screen width
    color: "#fff",
    marginBottom: height * 0.005, // 0.5% of screen height
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: width * 0.03, // 3% of screen width
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginHorizontal: width * 0.03, // 3% of screen width
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: width * 0.04, // 4% of screen width
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: width * 0.03, // 3% of screen width
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginHorizontal: width * 0.03, // 3% of screen width
  },
  cell: {
    flex: 1,
    fontSize: width * 0.04, // 4% of screen width
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: height * 0.01, // 1% of screen height
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

export default StdAttendance;