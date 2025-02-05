import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const StaffAttendance = ({navigation}) => {
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
                  <Icon name="check" size={20} color="green" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.crossBox, item.present === false && styles.activeCrossBox]}
                  onPress={() => toggleAttendance(index, false)}
                >
                  <Icon name="close" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navbarItem}>
                                     <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                                       <Image source={require("../assets/icons/home.png")} style={styles.homeimage}/>
                                       <Text style={styles.navLabel}>Home</Text> 
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
                                       <Image source={require("../assets/icons/profile.png")} style={styles.homeimage}/>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  headerMatrix: {
    marginVertical: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    minWidth: 150,
    marginLeft:10,
  },
  tableContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
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
    paddingVertical: 10,
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
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  crossBox: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeTickBox: {
    backgroundColor: "#d4f4d4",
  },
  activeCrossBox: {
    backgroundColor: "#f4d4d4",
  },
  navbarItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    marginTop:20,
    width:355,
  left:0,
    bottom:0,
    right:-10,
    },
    homeimage:{
    height:42,
    width:40,
    },
    navLabel:{
      fontSize:10,
    },
});

export default StaffAttendance;