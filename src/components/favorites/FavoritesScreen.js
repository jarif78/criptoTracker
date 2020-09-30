import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';
import Storage from '../../libs/storage';

class FavoritesScreen extends Component {
  getFavorites = async () => {
    try {
      const allKeys = Storage.instance.getAllkeys();
      console.log('allkeys', allKeys);
    } catch (error) {
      console.log('get favorites error', error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
