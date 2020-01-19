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
import { connect } from 'react-redux'

interface props {
  students: object[],
}

interface state {

}

class Students extends React.Component<props, state> {
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Text style={styles.welcome}>{JSON.stringify(this.props.students)}</Text>
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

export default connect(
  state => ({
    students: state.students,
  }),
  null
)(Students)