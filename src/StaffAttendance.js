import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StaffAttendance = ({ navigation }) => {
  // Sample data for the table
  const [attendanceData, setAttendanceData] = useState(
    new Array(10).fill(null).map(() => ({ date: "18-12-2024", present: null }))
  );

  const toggleAttendance = (index, isPresent) => {
    const updatedData = [...attendanceData];
    updatedData[index].present = isPresent;
    setAttendanceData(updatedData);
  };

  return (
    <View style={styles.container}>
      {/* Navbar with Logo */}
      <View style={styles.navbar}>
        <Image
          source={require("../assets/icons/jeclogo.png")}
          style={styles.logo}
        />
      </View>

      {/* Header Section */}
      <View style={styles.headerMatrix}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CSE</Text>
          <Text style={styles.headerText}>2 YEAR</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>B </Text>
          <Text style={styles.headerText}>03</Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.columnSno]}>S.NO</Text>
          <Text style={[styles.tableHeaderText, styles.columnDate]}>DATE</Text>
          <Text style={[styles.tableHeaderText, styles.columnAttendance]}>PRESENT/ABSENT</Text>
        </View>
        <FlatList
          data={attendanceData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.tableRow}>
              <Text style={[styles.tableRowText, styles.columnSno]}>{index + 1}</Text>
              <Text style={[styles.tableRowText, styles.columnDate]}>{item.date}</Text>
              <View style={[styles.attendanceIconsRow, styles.columnAttendance]}>
                <TouchableOpacity
                  style={[styles.tickBox, item.present === true && styles.activeTickBox]}
                  onPress={() => toggleAttendance(index, true)}
                >
                  <Icon name="check" size={wp('5%')} color="green" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.crossBox, item.present === false && styles.activeCrossBox]}
                  onPress={() => toggleAttendance(index, false)}
                >
                  <Icon name="close" size={wp('5%')} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navbarItem}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require("../assets/icons/profile.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366", // Dark blue background
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    paddingHorizontal: wp('3%'), // 3% of screen width
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: wp('12%'), // 12% of screen width
    height: wp('12%'), // 12% of screen width (to maintain aspect ratio)
    resizeMode: "contain",
  },
  headerMatrix: {
    marginVertical: hp('2%'), // 2% of screen height
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('2%'), // 2% of screen height
  },
  headerText: {
    fontSize: wp('4%'), // 4% of screen width
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: wp('2.5%'), // 2.5% of screen width
    borderRadius: wp('7.5%'), // 7.5% of screen width
    minWidth: wp('35%'), // 35% of screen width
    marginLeft: wp('2%'), // 2% of screen width
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: wp('3%'), // 3% of screen width
    marginTop: hp('2%'), // 2% of screen height
    backgroundColor: "#fff",
    borderRadius: wp('2%'), // 2% of screen width
    overflow: "hidden",
    elevation: 2,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableHeaderText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  columnSno: {
    flex: 1,
  },
  columnDate: {
    flex: 2,
  },
  columnAttendance: {
    flex: 3,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
   
  },
  tableRowText: {
    textAlign: "center",
    color: "#000",
  },
  attendanceIconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tickBox: {
    width: wp('8%'), // 8% of screen width
    height: wp('8%'), // 8% of screen width
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: wp('1%'), // 1% of screen width
    marginHorizontal: wp('1%'), // 1% of screen width
  },
  crossBox: {
    width: wp('8%'), // 8% of screen width
    height: wp('8%'), // 8% of screen width
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: wp('1%'), // 1% of screen width
    marginHorizontal: wp('1%'), // 1% of screen width
  },
  activeTickBox: {
    backgroundColor: "#d4f4d4",
  },
  activeCrossBox: {
    backgroundColor: "#f4d4d4",
  },
  navbarItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    
    
  },
  homeimage: {
    height: hp('6%'), // 6% of screen height
    width: wp('10%'), // 10% of screen width
  },
  navLabel: {
    fontSize: wp('3%'), // 3% of screen width
    marginLeft: wp('1%'), // 1% of screen width
  },
});

export default StaffAttendance;