import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goAuth, goHome } from '../navigation'
import { USER_KEY } from '../util'
import Search from './Search'

export default class Students extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Text style={styles.welcome}>Students</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    height: '100%',
    width: '100%',
    marginTop: 35,
  }
})