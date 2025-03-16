import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function ReportWasteScreen() {
  const [location, setLocation] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = () => {
    if (!location || !wasteType) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    // You can send this data to backend or Firebase here
    console.log({ location, wasteType, description, imageUri });
    Alert.alert('Success', 'Waste location reported successfully!');
    setLocation('');
    setWasteType('');
    setDescription('');
    setImageUri(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Waste Location</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Type of Waste (e.g., Plastic, Organic)"
        value={wasteType}
        onChangeText={setWasteType}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Additional Description (optional)"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Upload Image</Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, marginBottom: 12, backgroundColor: '#fff',
  },
  textArea: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, backgroundColor: '#fff', marginBottom: 12,
    height: 100, textAlignVertical: 'top',
  },
  imageButton: {
    backgroundColor: '#4CAF50', padding: 10, borderRadius: 8, marginBottom: 12,
  },
  imageButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  image: { width: '100%', height: 200, marginTop: 8, borderRadius: 8 },
  submitButton: {
    backgroundColor: '#2196F3', padding: 12, borderRadius: 8, marginTop: 20,
  },
  submitButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
