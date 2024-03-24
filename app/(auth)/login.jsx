import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View style={styles.container}>
      <View className="w-fit items-center mt-8">
        <Image style={styles.logo} source={require('../../assets/logo-2.png')}/>
      </View>
      <Text className="text-2xl font-bold mt-4">Log into your account</Text>

    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
  logo: {
    marginTop: 20,
    
    width: 150,
    height: 100,
    objectFit: 'contain'
  }
})