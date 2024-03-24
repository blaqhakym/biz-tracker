import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
    </Stack>
  );
}

export default layout

const styles = StyleSheet.create({})