import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from "react-native-paper";
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
      name='index'
      />
    </Stack>
  )
}