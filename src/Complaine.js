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

const Complaine = ({navigation}) => {
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

      {/* subject Description  */}
      <Text style={styles.descriptionLabel}>SUBJECT</Text>
      <TextInput
        style={styles.textAreasmall}
        placeholder="Rgaring : Syllobus Difficult  issues"
        placeholderTextColor="Black"
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
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
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
    backgroundColor: "#121826",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "white",
    width: "100%",
    height: 80,
  },
  logo: {
    width: 60,
    height: 60,
  },
  complaintTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
  categoryLabel: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    paddingLeft:10,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: "white",
    width: "45%",
    borderRadius: 10,
  },
  othersButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  othersButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  descriptionLabel: {
    color: "white",
    fontSize: 16,
    marginVertical: 5,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    paddingLeft:10,
  },
  textArea: {
    backgroundColor: "lightgray",
    width: "90%",
    height: 100,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    marginVertical:10,
  },
  textAreasmall:{
    backgroundColor: "lightgray",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "white",
    padding:10,
    borderRadius: 10,
    marginVertical: 20,
  },
  submitButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    width:390,
    
    },
    homeimage:{
    height:42,
    width:40,
    },
    navLabel:{
      fontSize:10,
      marginLeft:5,
    },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    color: "white",
  },
  inputAndroid: {
    fontSize: 14,
    color: "white",
  },
};

export default Complaine;