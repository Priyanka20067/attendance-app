import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
      {/* Header with Logo */}
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
    height: hp('10%'), // 10% of screen height
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: hp('2%'), // 2% of screen height
  },
  logo: {
    resizeMode: "contain",
    width: wp('12%'), // 12% of screen width
    height: wp('12%'), // 12% of screen width (to maintain aspect ratio)
  },
  header: {
    fontSize: wp('6%'), // 6% of screen width
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: hp('2%'), // 2% of screen height
    textAlign: 'center',
    marginTop: hp('5%'), // 5% of screen height
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    padding: wp('2%'), // 2% of screen width
    backgroundColor: 'white',
    marginHorizontal: wp('5%'), // 5% of screen width
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: hp('1.5%'), // 1.5% of screen height
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    backgroundColor: 'white',
    marginHorizontal: wp('5%'), // 5% of screen width
  },
  cell: {
    flex: 1,
    fontSize: wp('3.5%'), // 3.5% of screen width
    color: 'black',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: hp('15%'), // 15% of screen height (to avoid overlap with navbar)
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: wp('100%'), // 100% of screen width
    position: 'absolute',
    bottom: 0,
    left: 0,
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

export default InternalMark;