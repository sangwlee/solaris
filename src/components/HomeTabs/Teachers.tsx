import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goAuth, goHome } from '../../navigation'
import { USER_KEY } from '../../util'
import Search from './Search'
import { connect } from 'react-redux'
import Row from './Row'

interface props {
  teachers: object[],
}

interface state {

}

class Teachers extends React.Component<props, state> {
  render() {
    return (
      <View style={styles.container}>
        <Search fromTeachers />
        {
          this.props.teachers.map(user => <Row user={user}/>)
        }
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