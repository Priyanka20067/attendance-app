import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const examData = [
  { id: '1', date: '29-01-25', subCode: 'MA3351', subName: 'DISCRETE AND MATHS', Mark: '83' },
  { id: '2', date: '30-01-25', subCode: 'CS3391', subName: 'OOPS', Mark: '34' },
  { id: '3', date: '31-01-25', subCode: 'CS3591', subName: 'DATASCIENCE', Mark: '45' },
  { id: '4', date: '01-02-25', subCode: 'CS3359', subName: 'DPCO', Mark: '45' },
  { id: '5', date: '02-02-25', subCode: 'CS3355', subName: 'DATA STRUCTURE', Mark: '34' },
];

const InternalMark = ({ navigation }) => {
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.subCode}</Text>
      <Text style={styles.cell}>{item.subName}</Text>
      <Text style={styles.cell}>{item.Mark}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerimage}>
        <Image source={require('../assets/icons/jeclogo.png')} style={styles.logo} />
      </View>
      

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>MODEL EXAMINATION-1</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.cell}>DATE</Text>
          <Text style={styles.cell}>SUB CODE</Text>
          <Text style={styles.cell}>SUB NAME</Text>
          <Text style={styles.cell}>MARK</Text>
        </View>
        <FlatList data={examData} renderItem={renderRow} keyExtractor={(item) => item.id} />

        <Text style={styles.header}>MODEL EXAMINATION-2</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.cell}>DATE</Text>
          <Text style={styles.cell}>SUB CODE</Text>
          <Text style={styles.cell}>SUB NAME</Text>
          <Text style={styles.cell}>MARK</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
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
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    marginTop: 40,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    padding: 5,
    color: 'black',
    backgroundColor:'white',
    marginHorizontal:20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    backgroundColor:'white',
    marginHorizontal:20,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    color:'black',
  },
  scrollContent: {
    paddingBottom: 100, // Adding space to avoid overlap with navbar
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  homeimage: {
    height: 42,
    width: 40,
  },
  navLabel: {
    fontSize: 10,
    marginLeft: 5,
  },
});

export default InternalMark;
