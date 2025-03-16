import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const ITEMS_PER_PAGE = 5;

export default function CollectWasteScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTask, setSelectedTask] = useState(null);
  const [verificationImage, setVerificationImage] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTasks([
        { id: 1, location: 'City Park', wasteType: 'Plastic', amount: '5kg', status: 'pending' },
        { id: 2, location: 'Downtown', wasteType: 'Organic', amount: '10kg', status: 'pending' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets) {
        setVerificationImage(response.assets[0].uri);
      }
    });
  };

  const filteredTasks = tasks.filter(task => task.location.toLowerCase().includes(searchTerm.toLowerCase()));
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste Collection Tasks</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by area..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={paginatedTasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskTitle}>{item.location}</Text>
              <Text style={styles.taskText}>Waste Type: {item.wasteType}</Text>
              <Text style={styles.taskText}>Amount: {item.amount}</Text>
              <Text style={styles.taskText}>Status: {item.status}</Text>
              <TouchableOpacity
                style={[styles.button, styles.completeButton]}
                onPress={() => setSelectedTask(item)}
              >
                <Text style={styles.buttonText}>Collect Waste</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {selectedTask && (
        <View style={styles.verificationContainer}>
          <Text style={styles.verificationTitle}>Verify Collection</Text>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImageText}>Pick Image</Text>
          </TouchableOpacity>
          {verificationImage && (
            <Image source={{ uri: verificationImage }} style={styles.verificationImage} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  searchInput: {
    flex: 1, borderWidth: 1, padding: 8, borderRadius: 8, marginRight: 8,
    borderColor: '#ccc', backgroundColor: '#fff',
  },
  taskContainer: {
    padding: 16, marginBottom: 8, borderWidth: 1, borderRadius: 8,
    borderColor: '#ddd', backgroundColor: '#fff',
  },
  taskTitle: { fontSize: 16, fontWeight: 'bold' },
  taskText: { fontSize: 14, color: '#555' },
  button: { padding: 10, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  completeButton: { backgroundColor: 'green' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  verificationContainer: { padding: 16, backgroundColor: 'white', borderRadius: 8, marginTop: 16 },
  verificationTitle: { fontSize: 18, fontWeight: 'bold' },
  pickImageText: { color: 'blue', marginVertical: 8 },
  verificationImage: { width: 100, height: 100, marginVertical: 8 },
});
