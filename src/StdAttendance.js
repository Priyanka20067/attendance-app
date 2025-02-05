import React from "react";
import { View, Text, FlatList, StyleSheet ,Image ,TouchableOpacity,} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const studentData = {
  name: "Nisha",
  regNo: "110823040",
  branch: "BE",
  dept: "CSE",
  semester: "03",
};

const attendanceData = [
  { id: "1", date: "18-12-2024", present: false },
  { id: "2", date: "18-12-2024", present: true },
  { id: "3", date: "18-12-2024", present: true },
  { id: "4", date: "18-12-2024", present: true },
  { id: "5", date: "18-12-2024", present: true },
  { id: "6", date: "18-12-2024", present: true },
  { id: "7", date: "18-12-2024", present: true },
  { id: "8", date: "18-12-2024", present: true },
];

const StdAttendance = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerimage}>
                <Image source={require('../assets/icons/jeclogo.png')} style={styles.logo}/>
              </View>
      <View style={styles.card}>
        <Text style={styles.title}>Name: {studentData.name}</Text>
        <Text style={styles.text}>Reg No: {studentData.regNo}</Text>
        <Text style={styles.text}>Branch: {studentData.branch}</Text>
        <Text style={styles.text}>Dept: {studentData.dept}</Text>
        <Text style={styles.text}>Semester: {studentData.semester}</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>SNo</Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Status</Text>
      </View>

      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.date}</Text>
            <Icon
              name={item.present ? "check-circle" : "cancel"}
              size={20}
              color={item.present ? "green" : "red"}
              style={styles.icon}
            />
          </View>
        )}
      />
      {/* Navbar/Footer */}
            <View style={styles.navbar}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001F3F",
  },
  containerimage:{
    display:'flex',
    backgroundColor:'white',
    height:70,
    justifyContent:'flex-start',
    top:0,
    left:0,
    right:0,
  },
  logo:{
    resizeMode: "contain",
    width:50,
    height:50,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
   borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginLeft:10,
    marginRight:10,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginLeft:10,
    marginRight:10,
  },
  cell: {
    flex: 1,
    fontSize: 14,
   
  },
  icon: {
    alignSelf: "center",
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right:0,
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

export default StdAttendance;