import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const RewardScreen = () => {
  const [points, setPoints] = useState(0);

  // Fetch user points from backend (dummy function for now)
  useEffect(() => {
    fetchUserPoints();
  }, []);

  const fetchUserPoints = async () => {
    try {
      const response = await fetch('http://<YOUR-IP>:5000/rewards/points?userId=123');
      const data = await response.json();
      setPoints(data.points);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not fetch points');
    }
  };

  const redeemReward = async () => {
    try {
      const response = await fetch('http://<YOUR-IP>:5000/rewards/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: '123' }),
      });
      const data = await response.json();
      if (data.success) {
        setPoints(data.newPoints);
        Alert.alert('Success', 'Reward redeemed!');
      } else {
        Alert.alert('Not enough points', 'Earn more to redeem!');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to redeem reward');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Points: {points}</Text>
      <Button title="Redeem 50 Points" onPress={redeemReward} />
    </View>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
