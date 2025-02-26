import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Complaine = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View style={styles.container}>
      {/* Top Gray Bar with Logo */}
      <View style={styles.topBar}>
        <Image
          source={require('../assets/icons/jeclogo.png')}
          style={styles.logo}
        />
      </View>

      {/* Complaint Title */}
      <Text style={styles.complaintTitle}>COMPLAINT</Text>

      {/* Category Section */}
      <Text style={styles.categoryLabel}>CATEGORY :</Text>

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={[
              { label: "Syllabus", value: "syllabus" },
              { label: "Courses", value: "courses" },
              { label: "Exams", value: "exams" },
            ]}
            placeholder={{ label: "Academic", value: null }}
            style={pickerSelectStyles}
          />
        </View>

        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={[
              { label: "Faculty Behaviour", value: "faculty_behaviour" },
              { label: "Teaching Methods", value: "teaching_methods" },
            ]}
            placeholder={{ label: "Faculty", value: null }}
            style={pickerSelectStyles}
          />
        </View>
      </View>

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={[
              { label: "College Services", value: "college_services" },
              { label: "Fees", value: "fees" },
              { label: "Documents", value: "documents" },
            ]}
            placeholder={{ label: "Administration", value: null }}
            style={pickerSelectStyles}
          />
        </View>

        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCategory(value)}
            items={[
              { label: "Campus", value: "campus" },
              { label: "Infrastructure", value: "infrastructure" },
              { label: "Hostel", value: "hostel" },
              { label: "Library", value: "library" },
            ]}
            placeholder={{ label: "Facilities", value: null }}
            style={pickerSelectStyles}
          />
        </View>
      </View>

      {/* Other Category Button */}
      <TouchableOpacity style={styles.othersButton}>
        <Text style={styles.othersButtonText}>Others</Text>
      </TouchableOpacity>

      {/* Subject Description */}
      <Text style={styles.descriptionLabel}>SUBJECT</Text>
      <TextInput
        style={styles.textAreasmall}
        placeholder="Regarding: Syllabus Difficult Issues"
        placeholderTextColor="black"
      />

      {/* Complaint Description */}
      <Text style={styles.descriptionLabel}>DESCRIPTION OF COMPLAINT :</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Type your complaint here..."
        placeholderTextColor="gray"
        multiline={true}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} >
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>

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
    backgroundColor: "#121826",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "white",
    width: "100%",
    height: hp('10%'), // 10% of screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('15%'), // 15% of screen width
    height: wp('15%'), // 15% of screen width (to maintain aspect ratio)
  },
  complaintTitle: {
    color: "white",
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: hp('2%'), // 2% of screen height
  },
  categoryLabel: {
    color: "white",
    fontSize: wp('4%'), // 4% of screen width
    marginTop: hp('2%'), // 2% of screen height
    paddingLeft: wp('5%'), // 5% of screen width
    alignSelf: 'flex-start',
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp('90%'), // 90% of screen width
    marginTop: hp('2%'), // 2% of screen height
  },
  dropdown: {
    backgroundColor: "white",
    width: wp('43%'), // 43% of screen width
    borderRadius: wp('2%'), // 2% of screen width
  },
  othersButton: {
    backgroundColor: 'white',
    padding: wp('3%'), // 3% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    marginVertical: hp('2%'), // 2% of screen height
  },
  othersButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: wp('4%'), // 4% of screen width
  },
  descriptionLabel: {
    color: "white",
    fontSize: wp('4%'), // 4% of screen width
    marginVertical: hp('1%'), // 1% of screen height
    alignSelf: 'flex-start',
    paddingLeft: wp('5%'), // 5% of screen width
  },
  textArea: {
    backgroundColor: "lightgray",
    width: wp('90%'), // 90% of screen width
    height: hp('15%'), // 15% of screen height
    borderRadius: wp('2%'), // 2% of screen width
    padding: wp('3%'), // 3% of screen width
    textAlignVertical: "top",
    marginVertical: hp('1%'), // 1% of screen height
  },
  textAreasmall: {
    backgroundColor: "lightgray",
    width: wp('90%'), // 90% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    padding: wp('3%'), // 3% of screen width
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "white",
    padding: wp('3%'), // 3% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    marginVertical: hp('2%'), // 2% of screen height
  },
  submitButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: wp('4%'), // 4% of screen width
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: wp('100%'), // 100% of screen width
    position: 'absolute',
    bottom: 0,
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

const pickerSelectStyles = {
  inputIOS: {
    fontSize: wp('4%'), // 4% of screen width
    color: "black",
  },
  inputAndroid: {
    fontSize: wp('4%'), // 4% of screen width
    color: "black",
  },
};

export default Complaine;