import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native';

const InputArea = props => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  /* useEffect(() => {
    console.log('text: ' + text);
  }, [text]); */

  function handleInputData() {
    props.add({name, price});
    setName('');
    setPrice('');
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter an item"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Enter a price"
        keyboardType="numeric"
      />
      <Button
        onPress={handleInputData}
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#EEEEEE',
    borderColor: '#841584',
  },
});

export default InputArea;
