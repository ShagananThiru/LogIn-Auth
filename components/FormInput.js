import React from "react";
import { Input } from "react-native-elements";
import { StyleSheet, 
  View,
  TextInput
 } from "react-native";
import { color } from "react-native-reanimated";


const FormInput = ({
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  style,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      {...rest}
      placeholderTextColor="grey"
      name={name}
      inputStyle={styles.textInputStyle}
      // containerStyle = {{ paddingHorizontal: 10 }}
      placeholder={placeholder}
      // style={styles.input}
      style=
        {{
          height: 60, 
          borderColor: '#2A2C36', 
          borderWidth: 1, 
          color : "white",
          backgroundColor: '#2A2C36',
          margin: 10,
          marginBottom: 0,
          paddingLeft: 10
        }}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 0
  },
  input:{
    backgroundColor: "#2A2C36"
    // backgroundColor: "#fff"
  },
  textInputStyle: {
    flex: 1
  },
  iconStyle: {
    marginRight: 10
  }
});

export default FormInput;
