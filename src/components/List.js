import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const Item = ({name, price}) => (
  <View style={styles.item}>
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>USD {price}</Text>
    </View>
  </View>
);

const CustomList = props => {
  let DATA = props.data;
  switch (props.sort) {
    case 'Asc':
      DATA = props.data.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case 'Desc':
      DATA = props.data.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    case 'Date':
      DATA = props.data.sort((a, b) => {
        return a.id - b.id;
      });
      break;
  }

  const renderItem = ({item}) => {
    return (
      <View>
        <Item name={item.name} price={item.price} />
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={DATA}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#EEEEEE',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 45,
  },
  title: {
    fontSize: 14,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    flex: 1,
  },
  price: {
    flex: 0,
  },
});

export default CustomList;
