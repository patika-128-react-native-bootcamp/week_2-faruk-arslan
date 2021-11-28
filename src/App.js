import InputArea from './components/InputArea';
import CustomList from './components/List';
import FilterArea from './components/FilterArea';
import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  let [DATA, setData] = useState([
    {
      id: '0',
      name: 'Sample Item',
      price: '5',
    },
  ]);
  let [sort, setSort] = useState('');

  function addItem(data) {
    if (!data.name.trim() || !data.price.trim()) {
      alert('Please fill all the fields');
      return;
    }
    if (isNaN(data.price.trim())) {
      alert('Please enter a numberic value as price');
      return;
    }
    setData(prev => {
      return [
        ...prev,
        {
          id: Math.floor(Math.random() * 100),
          name: data.name,
          price: data.price,
        },
      ];
    });
  }

  function sortItems(key) {
    switch (key) {
      case 'priceAsc':
        /* setData(prev => {
          console.log(prev);
          return tempData.sort((a, b) => {
            return a.price - b.price;
          });
        }); */
        setSort('Asc');
        break;
      case 'priceDesc':
        setSort('Desc');
        break;
      case 'byDate':
        setSort('Date');
        break;
    }
  }

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={[styles.filerView]}>
          <FilterArea sort={sortItems} />
        </View>
        <View style={styles.listView}>
          <CustomList data={DATA} sort={sort} style={[styles.list]} />
        </View>
        <View style={styles.inputAreaView}>
          <InputArea add={addItem} style={[styles.inputArea]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    minHeight: '100%',
  },
  filerView: {
    flex: 0,
  },
  listView: {
    flex: 2.6,
    marginTop: 0,
  },
  inputAreaView: {
    flex: 1,
    marginTop: 10,
  },
});

export default App;
