import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TextInput
} from 'react-native'

import { goAuth, goHome } from '../navigation'
import { USER_KEY } from '../util'

export default class Search extends React.Component {
  state = {
    isActive: false,
    searchStr: '',
  }

  render() {
    if (this.state.isActive) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Search</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholder='Search'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.setState({ searchStr: val })}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  input: {
    height: 55,
    backgroundColor: 'grey',
    margin: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  }
})