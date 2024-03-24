import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  if (!isLoggedIn) return (<Redirect href={'/login'}/>)
  return (
    <View>
      <Text>Home Page</Text>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({})