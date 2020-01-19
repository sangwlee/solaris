import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goAuth, goHome } from '../navigation'
import { USER_KEY } from '../util'
import { connect } from 'react-redux'
import Search from './Search'

interface props {
  teachers: object[],
}

interface state {

}

class Teachers extends React.Component<props, state> {
  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Text style={styles.welcome}>{JSON.stringify(this.props.teachers)}</Text>
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
    teachers: state.teachers,
  }),
  null
)(Teachers)