import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';

const StaffTimeTable = ({navigation}) => {
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
      <View style={styles.containerimage}>
        <Image source={require('../assets/icons/jeclogo.png')} style={styles.logo} />
      </View>
      {/* Header Section */}
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
        <TextInput style={styles.input} placeholder="Add Title" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  containerimage: {
    display: 'flex',
    backgroundColor: 'white',
    height: 70,
    justifyContent: 'flex-start',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: -10,
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
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    width: 330,
    marginLeft: 15,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: '#FDF2C3',
    padding: 10,
    paddingLeft: 10,
  },
  iconname: {
    marginHorizontal: 10,
    backgroundColor: '#B4FF66',
    padding: 10,
  },
  iconText: {
    height: 30,
    width: 30,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#115DFC',
    padding: 15,
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tableTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableContainer: {
    marginBottom: 80,  // Space for the navbar
  },
  table: {
    backgroundColor: 'white',
    padding: 10,
    color: 'black',
    marginLeft: 15,
    marginRight: 15,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  tableBody: {
    
  },
  cell: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding:5,
  },
  cellin: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    bottom:15,
    left: 0,
    right:0,
  },
  homeimage: {
    height: 42,
    width: 40,
  },
  navLabel: {
    fontSize: 10,
  },
});

export default StaffTimeTable;
