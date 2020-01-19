import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TextInput
} from 'react-native'

import { goAuth, goHome } from '../../navigation'
import { USER_KEY } from '../../util'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface props {
  user: {
    firstname: string,
    lastname: string,
  },
}

interface state {
}

export default class Row extends React.Component<props,state> {
  state = {
    isActive: false,
    searchStr: '',
  }

  render() {
    const { firstname, lastname } = this.props.user

    return (
      <TouchableOpacity style={styles.rowContainer}>
        <Text>{`${firstname} ${lastname}`}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    margin: 10,
    marginVertical: 5,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  }
})