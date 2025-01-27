import React from 'react'
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [Text, onChangeText] = React.useState('Name');
  const [Age, onChangeNumber] = React.useState ('');
  const [Address, onChangeAddress] = React.useState ('');      
  const [School, onChangeSchool] = React.useState ('');
  const [Course, onChangeCourse] = React.useState ('');
  const [Email, onChangeEmail] = React.useState ('');
  const [Contact, onChangeContact] = React.useState ('');
  return (
    <SafeAreaProvider>
    <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={Text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={Age}
        placeholder= "Age"
        keyboardType="numeric"
        />
         <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={Address}
        placeholder= "Address"
        />
         <TextInput
        style={styles.input}
        onChangeText={onChangeSchool}
        value={School}
        placeholder= "School"
        
        />
         <TextInput
        style={styles.input}
        onChangeText={onChangeCourse}
        value={Course}
        placeholder= "Course"
        
        /> <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder= "Email"
        keyboardType="email-adress"
        /> <TextInput
        style={styles.input}
        onChangeText={onChangeContact}
        value={Contact}
        placeholder= "Contact NO:"
        keyboardType="phone-pad"
        /> 
        </SafeAreaView>
        </SafeAreaProvider>

  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});

export default TextInputExample;