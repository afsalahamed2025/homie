import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// API call panna async function
async function getUserData(userKey) {
  try {
    // API URL la userKey send pannrom
    const url = `https://smartfm.cloud/Android_GlobalService/CollectCurrentReleaseURL1.php?ProjectKey=${userKey}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    // Response error check pannuvom
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // JSON-a convert pannuvom
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// React component
export default function UserProfile({ userKey }) {
  // State variables - data, loading, error store panna
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect - component load aana apram api call panna
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);              // Loading spinner start
        const data = await getUserData(userKey);  // API call
        setUserData(data);             // Data state update
        setError(null);                // Error clear
      } catch (err) {
        setError(err.message);         // Error state set
      } finally {
        setLoading(false);             // Loading spinner hide
      }
    }

    fetchData();
  }, [userKey]);  // userKey change aana api call repeat

  // Loading spinner display
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Error message display
  if (error) {
    return <Text style={{ color: 'red' }}>Error: {error}</Text>;
  }

  // API data display
  return (
    <View style={{ padding: 20 }}>
      <Text>User Name: {userData?.name ?? 'Afsal'}</Text>
      <Text>User Email: {userData?.email ?? 'afsa@gmailcmoc'}</Text>
      {/* Innum data venumna inga add pannunga */}
    </View>
  );
}
