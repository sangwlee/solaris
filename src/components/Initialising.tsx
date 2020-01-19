import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Alert
} from 'react-native'

import { goAuth, goHome } from '../navigation'
import { USER_KEY } from '../util'
import { fetchStudents, fetchTeachers } from '../reducers'
import {connect} from 'react-redux';
import Home from './Home'

interface props {
  fetchStudents: typeof fetchStudents;
  fetchTeachers: typeof fetchTeachers;
}

interface state {

}


class Initialising extends React.Component<props, state> {
  async componentDidMount() {
    // await AsyncStorage.removeItem(USER_KEY)
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)

      if (!user) { return goAuth() }

      const { id } = JSON.parse(user)

      await Promise.all([
        await this.props.fetchStudents(id),
        await this.props.fetchTeachers(id)
      ])

      return goHome()
    } catch (err) {
      console.log('error: ', err)
      goAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(
  null,
  dispatch => ({
    fetchStudents: fetchStudents(dispatch),
    fetchTeachers: fetchTeachers(dispatch),
  })
)(Initialising)