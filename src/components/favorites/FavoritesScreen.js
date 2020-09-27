import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';

class FavoritesScreen extends Component {
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
