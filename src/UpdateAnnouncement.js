import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const AddPost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle image selection
  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerimg}>
        <Image source={require("../assets/icons/jeclogo.png")} style={styles.logo} />
        <Image source={require("../assets/icons/notifications.png")} style={styles.logonot} />
      </View>

      {/* Header Text */}
      <Text style={styles.header}>UPDATE ANNOUNCEMENT</Text>

      {/* Title Input */}
      <Text style={styles.label}>TITLE :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      {/* Content Input */}
      <Text style={styles.label}>CONTENT :</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type the content"
        placeholderTextColor="#999"
        value={content}
        onChangeText={setContent}
        multiline
      />

      {/* Image Upload Section */}
      <Text style={styles.label}>UPLOAD :</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={selectImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadImage} />
        ) : (
          <Text style={styles.plusIcon}>+</Text>
        )}
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={styles.submitcenter}>
        <Button mode="contained" style={styles.submitButton} onPress={() => alert('Post Submitted!')}>
          SUBMIT
        </Button>
      </View>

      {/* Navbar/Footer */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Staff')}>
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
    backgroundColor: '#0D192F',
  },
  header: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: height * 0.02, // 2% of screen height
  },
  headerimg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: width * 0.03, // 3% of screen width
  },
  logo: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.15, // 15% of screen width
    borderRadius: 50,
  },
  logonot: {
    width: width * 0.08, // 8% of screen width
    height: width * 0.08, // 8% of screen width
  },
  label: {
    fontSize: width * 0.04, // 4% of screen width
    color: 'white',
    marginBottom: height * 0.01, // 1% of screen height
    marginHorizontal: width * 0.05, // 5% of screen width
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.03, // 3% of screen width
    fontSize: width * 0.04, // 4% of screen width
    marginBottom: height * 0.02, // 2% of screen height
    marginHorizontal: width * 0.05, // 5% of screen width
  },
  textArea: {
    height: height * 0.15, // 15% of screen height
    textAlignVertical: 'top',
  },
  uploadBox: {
    backgroundColor: '#E0E0E0',
    height: height * 0.15, // 15% of screen height
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height
    marginHorizontal: width * 0.05, // 5% of screen width
  },
  plusIcon: {
    fontSize: width * 0.08, // 8% of screen width
    color: '#666',
  },
  uploadImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  submitcenter: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: height * 0.015, // 1.5% of screen height
    width: width * 0.5, // 50% of screen width
    borderRadius: 5,
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
    height: height * 0.05, // 5% of screen height
    width: width * 0.1, // 10% of screen width
  },
  navLabel: {
    fontSize: width * 0.03, // 3% of screen width
    marginLeft: width * 0.01, // 1% of screen width
  },
});

export default AddPost;