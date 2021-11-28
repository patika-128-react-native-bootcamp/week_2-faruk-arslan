import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, TextInput, StyleSheet} from 'react-native';

const FilterArea = props => {
  function callSortingFunc(key) {
    props.sort(key);
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => {
          callSortingFunc('priceAsc');
        }}
        title="Price Asc"
        color="#841584"
        accessibilityLabel="Sort by prices as ascending"
      />
      <Button
        style={styles.button}
        onPress={() => {
          callSortingFunc('priceDesc');
        }}
        title="Price Desc"
        color="#841584"
        accessibilityLabel="Sort by prices as descending"
      />
      <Button
        style={styles.button}
        onPress={() => {
          callSortingFunc('byDate');
        }}
        title="By Date"
        color="#841584"
        accessibilityLabel="Sort by date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {},
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

export default FilterArea;
