import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const signup = () => {
  const [haveAccount, setHaveAccount] = useState(false);

  return (
    <View>
      <Text>Welcome Ollybee</Text>
      <Text>This is your personal business manager assistant!</Text>

      <View className="">
        <Text>Choose a longterm password below</Text>
        <TextInput
          label="Password"
          type="outlined"
          secureTextEntry
          placeholder="Enter password"
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      {/* form */}
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({});
