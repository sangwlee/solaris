import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TextInput,
  Alert,
} from 'react-native'

import { goAuth, goHome } from '../../navigation'
import { USER_KEY, searchFilter } from '../../util'
import { connect } from 'react-redux'
import Row from './Row'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface props {
  allTeachers: object[];
  allStudents: object[];
  fromTeachers: boolean;
  fromStudents: boolean;
}

interface state {

}

class Search extends React.Component<props,state> {
  state = {
    searchStr: '',
    isActive: false,
  }

  renderAllTeachers () {
    if (!this.state.isActive) { return <View/> }

    const users = this.props.fromStudents ? this.props.allStudents : this.props.allTeachers;

    return (
      <KeyboardAwareScrollView>
        {
          users.map(user => 
            searchFilter(this.state.searchStr, user) 
              ? <Row 
                  user={user} 
                  fromSearch
                  fromTeachers={this.props.fromTeachers}
                  fromStudents={this.props.fromStudents}
                />
              : <View/>
          )
        }
      </KeyboardAwareScrollView>
    )
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Search'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.setState({ searchStr: val })}
          onFocus={() => this.setState({ isActive: true })}
          onBlur={() => { this.setState({ isActive: false, searchStr: '' })}}
        />
        { this.renderAllTeachers() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'grey',
    margin: 10,
    padding: 20,
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

export default connect(
  state => ({
    allTeachers: state.allTeachers,
    allStudents: state.allStudents,
  })
)(Search)