import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StaffInternal = ({ navigation }) => {
  const data = [
    { id: '1', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', Mark: '83' },
    { id: '2', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', Mark: '34' },
    { id: '3', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', Mark: '45' },
    { id: '4', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', Mark: '45' },
    { id: '5', date: '18-12-24', subCode: 'MA3351', subName: 'Discrete and Maths', Mark: '34' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.subCode}</Text>
      <Text style={styles.cell}>{item.subName}</Text>
      <Text style={styles.cell}>{item.Mark}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Logo */}
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
            <Text style={[styles.cell, styles.headerCell]}>MARK</Text>
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

      {/* Bottom Navigation */}
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
    height: hp('10%'), // 10% of screen height
    justifyContent: 'flex-start',
    paddingTop: hp('2%'), // 2% of screen height
    paddingLeft: wp('3%'), // 3% of screen width
  },
  logo: {
    resizeMode: "contain",
    width: wp('12%'), // 12% of screen width
    height: wp('12%'), // 12% of screen width (to maintain aspect ratio)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp('-1%'), // -1% of screen height
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
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'), // 2% of screen height
    marginTop: hp('3%'), // 3% of screen height
    width: wp('90%'), // 90% of screen width
    marginLeft: wp('3%'), // 3% of screen width
  },
  input: {
    flex: 1,
    height: hp('6%'), // 6% of screen height
    backgroundColor: '#F0F0F0',
    paddingHorizontal: wp('3%'), // 3% of screen width
  },
  icon: {
    marginHorizontal: wp('2%'), // 2% of screen width
    backgroundColor: '#FDF2C3',
    padding: wp('2.5%'), // 2.5% of screen width
  },
  iconname: {
    marginHorizontal: wp('2%'), // 2% of screen width
    backgroundColor: '#B4FF66',
    padding: wp('2.5%'), // 2.5% of screen width
  },
  iconText: {
    height: wp('8%'), // 8% of screen width
    width: wp('8%'), // 8% of screen width
  },
  saveButton: {
    backgroundColor: '#115DFC',
    padding: wp('3%'), // 3% of screen width
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: wp('3.5%'), // 3.5% of screen width
  },
  tableTitle: {
    color: '#FFF',
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: 'bold',
    marginBottom: hp('1%'), // 1% of screen height
    textAlign: 'center',
  },
  tableContainer: {
    marginBottom: hp('10%'), // 10% of screen height (space for the navbar)
  },
  table: {
    backgroundColor: 'white',
    padding: wp('3%'), // 3% of screen width
    marginLeft: wp('3%'), // 3% of screen width
    marginRight: wp('3%'), // 3% of screen width
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('0.5%'), // 0.5% of screen height
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: hp('1%'), // 1% of screen height
  },
  cell: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontSize: wp('3%'), // 3% of screen width
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: wp('1%'), // 1% of screen width
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
    paddingVertical: hp('1.5%'), // 1.5% of screen height
  },
  homeimage: {
    height: hp('6%'), // 6% of screen height
    width: wp('10%'), // 10% of screen width
  },
  navLabel: {
    fontSize: wp('3%'), // 3% of screen width
  },
});

export default StaffInternal;