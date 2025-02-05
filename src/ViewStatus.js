import React from "react";
import { View, Text, FlatList, StyleSheet, StatusBar ,Image ,TouchableOpacity ,} from "react-native";

const data = [
  { id: "1", date: "23.07.24", subject: "Syllabus", process: "Accepted", backgroundColor: "green" },
  { id: "2", date: "23.07.24", subject: "Fess", process: "Rejected",backgroundColor: "red" },
  { id: "3", date: "23.07.24", subject: "Syllabus", process: "Not view", backgroundColor: "blue" },
  { id: "4", date: "23.07.24", subject: "Syllabus", process: "Rejected", backgroundColor: "red" },
];

const ViewStatus = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={[styles.cellbutton, { backgroundColor: item.backgroundColor, fontWeight: "bold" }]}>
        {item.process}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor="#000" barStyle="light-content" />
     <View style={styles.headerimg}> 
              <Image
                source={require("../assets/icons/jeclogo.png")}
                style={styles.logo}
              />
              <Image
                source={require("../assets/icons/notifications.png")}
                style={styles.logonot}
              />
              </View>
      <Text style={styles.title}>View Status</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>DATE</Text>
        <Text style={styles.headerText}>SUBJECT</Text>
        <Text style={styles.headerText}>PROCESS</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
    backgroundColor: "#0A192F",
    
  },
  headerimg:{
    display:'flex',
    flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   backgroundColor:'white',
   padding:10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    
  },
  logonot:{
    width:30,
    height:30,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical:50,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
   borderWidth:1,
   borderColor:'#444',
    },
  headerText: {
    color: "black",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginHorizontal: 10,
    padding: 20,
  },
  cell: {
    color: "Black",
    flex: 1,
    textAlign: "center",
  },
  cellbutton:{
    color:'white',
    padding:10,
    borderRadius:20,
    flex: 1,
    textAlign: "center",
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

export default ViewStatus;