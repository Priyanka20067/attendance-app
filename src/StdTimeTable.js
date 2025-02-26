import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Exam data
const examData = [
  { id: '1', date: '29-01-25', subCode: 'MA3351', subName: 'DISCRETE AND MATHS', time: '8.30AM-12.30PM' },
  { id: '2', date: '30-01-25', subCode: 'CS3391', subName: 'OOPS', time: '8.30AM-12.30PM' },
  { id: '3', date: '31-01-25', subCode: 'CS3591', subName: 'DATASCIENCE', time: '8.30AM-12.30PM' },
  { id: '4', date: '01-02-25', subCode: 'CS3359', subName: 'DPCO', time: '8.30AM-12.30PM' },
  { id: '5', date: '02-02-25', subCode: 'CS3355', subName: 'DATA STRUCTURE', time: '8.30AM-12.30PM' },
];

const StdTimeTable = ({ navigation }) => {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Model Examination 1 */}
        <Text style={styles.header}>MODEL EXAMINATION-1</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>DATE</Text>
          <Text style={styles.headerCell}>SUB CODE</Text>
          <Text style={styles.headerCell}>SUB NAME</Text>
          <Text style={styles.headerCell}>TIME</Text>
        </View>
        <FlatList data={examData} renderItem={renderRow} keyExtractor={(item) => item.id} />

        {/* Model Examination 2 */}
        <Text style={styles.header}>MODEL EXAMINATION-2</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>DATE</Text>
          <Text style={styles.headerCell}>SUB CODE</Text>
          <Text style={styles.headerCell}>SUB NAME</Text>
          <Text style={styles.headerCell}>TIME</Text>
        </View>
        <FlatList data={examData} renderItem={renderRow} keyExtractor={(item) => item.id} />
      </ScrollView>

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
    backgroundColor: '#0a192f',
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
    fontSize: width * 0.06, // 6% of screen width
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: height * 0.02, // 2% of screen height
    textAlign: 'center',
    marginTop: height * 0.05, // 5% of screen height
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    padding: width * 0.02, // 2% of screen width
    backgroundColor: '#ffffff',
    marginHorizontal: width * 0.03, // 3% of screen width
    borderRadius: 5,
  },
  headerCell: {
    flex: 1,
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: height * 0.015, // 1.5% of screen height
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    backgroundColor: '#ffffff',
    marginHorizontal: width * 0.03, // 3% of screen width
    borderRadius: 5,
  },
  cell: {
    flex: 1,
    fontSize: width * 0.035, // 3.5% of screen width
    color: '#000000',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: height * 0.15, // 15% of screen height (space for navbar)
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
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

export default StdTimeTable;