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
import { fetchStudents, fetchTeachers, fetchAllTeachers, fetchAllStudents } from '../reducers'
import {connect} from 'react-redux';
import Home from './Home'

interface props {
  fetchStudents: typeof fetchStudents;
  fetchTeachers: typeof fetchTeachers;
  fetchAllTeachers: typeof fetchAllTeachers;
  fetchAllStudents: typeof fetchAllStudents;
}

interface state {

}


class Initialising extends React.Component<props, state> {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)

      if (!user) { return goAuth() }

      const { id } = JSON.parse(user)

      await Promise.all([
        await this.props.fetchStudents(id),
        await this.props.fetchTeachers(id),
        await this.props.fetchAllTeachers(),
        await this.props.fetchAllStudents(),
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
    fetchAllTeachers: fetchAllTeachers(dispatch),
    fetchAllStudents: fetchAllStudents(dispatch),
  })
)(Initialising)