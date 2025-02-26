import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const StaffTimeTable = ({ navigation }) => {
  const data = [
    { id: '1', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    { id: '2', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    { id: '3', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    { id: '4', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    { id: '5', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    { id: '6', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', time: '8:30AM-12:30PM' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.subCode}</Text>
      <Text style={styles.cell}>{item.subName}</Text>
      <Text style={styles.cell}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.containerimage}>
        <Image source={require('../assets/icons/jeclogo.png')} style={styles.logo} />
      </View>

      {/* Header Text */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CSE</Text>
        <Text style={styles.headerText}>2 YEAR</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>B </Text>
        <Text style={styles.headerText}>03</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <TextInput style={styles.input} placeholder="Add Title" placeholderTextColor="#999" />
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../assets/icons/file-folder.png')} style={styles.iconText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconname}>
          <Image source={require('../assets/icons/excel.png')} style={styles.iconText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* Table Section */}
      <Text style={styles.tableTitle}>Model Examination-1</Text>

      {/* Scrollable Table Container */}
      <View style={styles.tableContainer}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.cell, styles.headerCell]}>DATE</Text>
            <Text style={[styles.cell, styles.headerCell]}>SUB CODE</Text>
            <Text style={[styles.cell, styles.headerCell]}>SUB NAME</Text>
            <Text style={[styles.cell, styles.headerCell]}>TIME</Text>
          </View>

          {/* Table Data */}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.tableBody}
          />
        </View>
      </View>

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  containerimage: {
    display: 'flex',
    backgroundColor: 'white',
    height: height * 0.1, // 10% of screen height
    justifyContent: 'flex-start',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    resizeMode: 'contain',
    width: width * 0.1, // 10% of screen width
    height: height * 0.1, // 10% of screen height
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: -10,
    marginTop: height * 0.02, // 2% of screen height
  },
  headerText: {
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: width * 0.02, // 2% of screen width
    borderRadius: 30,
    minWidth: width * 0.35, // 35% of screen width
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height
    marginTop: height * 0.03, // 3% of screen height
    width: width * 0.9, // 90% of screen width
    marginLeft: width * 0.05, // 5% of screen width
  },
  input: {
    flex: 1,
    height: height * 0.06, // 6% of screen height
    backgroundColor: '#F0F0F0',
    paddingHorizontal: width * 0.02, // 2% of screen width
  },
  icon: {
    marginHorizontal: width * 0.02, // 2% of screen width
    backgroundColor: '#FDF2C3',
    padding: width * 0.02, // 2% of screen width
  },
  iconname: {
    marginHorizontal: width * 0.02, // 2% of screen width
    backgroundColor: '#B4FF66',
    padding: width * 0.02, // 2% of screen width
  },
  iconText: {
    height: height * 0.04, // 4% of screen height
    width: width * 0.08, // 8% of screen width
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#115DFC',
    padding: width * 0.03, // 3% of screen width
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tableTitle: {
    color: '#FFF',
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: 'bold',
    marginBottom: height * 0.01, // 1% of screen height
    textAlign: 'center',
  },
  tableContainer: {
    marginBottom: height * 0.1, // 10% of screen height (Space for the navbar)
  },
  table: {
    backgroundColor: 'white',
    padding: width * 0.02, // 2% of screen width
    color: 'black',
    marginLeft: width * 0.05, // 5% of screen width
    marginRight: width * 0.05, // 5% of screen width
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01, // 1% of screen height
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: height * 0.01, // 1% of screen height
  },
  cell: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontSize: width * 0.035, // 3.5% of screen width
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: width * 0.01, // 1% of screen width
  },
  headerCell: {
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: height * 0.015, // 1.5% of screen height
  },
  homeimage: {
    height: height * 0.06, // 6% of screen height
    width: width * 0.1, // 10% of screen width
  },
  navLabel: {
    fontSize: width * 0.03, // 3% of screen width
  },
});

export default StaffTimeTable;