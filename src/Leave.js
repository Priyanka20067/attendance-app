import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Import Logo (Fix for Spaces in Filename)
const Logo = require("../assets/icons/jeclogo.png"); // Rename if necessary

// Custom Navigation Bar (ONLY for Logo)
const CustomNavBar = () => {
  return (
    <View style={styles.navBar}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const Leave = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    regarding: "",
    content: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert("Leave/OD Request Submitted!");
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Custom NavBar */}
      <CustomNavBar />
      <View style={styles.form}>
        <Text style={styles.navTitle}>Leave Request</Text>
        <Text style={styles.label}>NAME / ROLL NO</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name/Roll No"
          placeholderTextColor="#666"
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <Text style={styles.label}>DEPARTMENT</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Department"
          placeholderTextColor="#666"
          value={formData.department}
          onChangeText={(text) => handleInputChange("department", text)}
        />

        <Text style={styles.label}>REGARDING</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Regarding"
          placeholderTextColor="#666"
          value={formData.regarding}
          onChangeText={(text) => handleInputChange("regarding", text)}
        />

        <Text style={styles.label}>CONTENT</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter Content"
          placeholderTextColor="#666"
          multiline
          numberOfLines={5}
          value={formData.content}
          onChangeText={(text) => handleInputChange("content", text)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbaritem}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Staff')}>
          <Image source={require("../assets/icons/home.png")} style={styles.homeimage} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
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
    backgroundColor: "#1A1E27",
  },
  navBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: hp('2%'), // 2% of screen height
  },
  logo: {
    width: wp('18%'), // 18% of screen width
    height: wp('18%'), // 18% of screen width (to maintain aspect ratio)
    marginLeft: wp('3%'), // 3% of screen width
  },
  navTitle: {
    fontSize: wp('5%'), // 5% of screen width
    fontWeight: "bold",
    color: "#fff",
    marginLeft: wp('3%'), // 3% of screen width
    marginTop: hp('2%'), // 2% of screen height
  },
  form: {
    marginTop: hp('3%'), // 3% of screen height
    marginLeft: wp('5%'), // 5% of screen width
    marginRight: wp('5%'), // 5% of screen width
  },
  label: {
    color: "#fff",
    fontSize: wp('4%'), // 4% of screen width
    marginBottom: hp('1%'), // 1% of screen height
    marginTop: hp('2%'), // 2% of screen height
  },
  input: {
    backgroundColor: "#D3D3D3",
    padding: wp('4%'), // 4% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    marginBottom: hp('2%'), // 2% of screen height
    color: "#000",
    fontSize: wp('4%'), // 4% of screen width
  },
  textArea: {
    backgroundColor: "#D3D3D3",
    padding: wp('4%'), // 4% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    height: hp('15%'), // 15% of screen height
    textAlignVertical: "top",
    marginBottom: hp('2%'), // 2% of screen height
    color: "#000",
    fontSize: wp('4%'), // 4% of screen width
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: wp('4%'), // 4% of screen width
    borderRadius: wp('2%'), // 2% of screen width
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: wp('50%'), // 50% of screen width
  },
  submitButtonText: {
    color: "#fff",
    fontSize: wp('4.5%'), // 4.5% of screen width
    fontWeight: "bold",
  },
  navbaritem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: hp('o.5%'), // 1.5% of screen height
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

export default Leave;