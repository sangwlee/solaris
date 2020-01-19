import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  Alert
} from 'react-native'
// import { goAuth } from '../navigation'
import { Navigation } from 'react-native-navigation';
import { USER_KEY } from '../util'

interface props {
  componentId: string;
}

interface state {

}


export default class Home extends React.Component<props, state> {
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      // goAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }

  async componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              }
            });
          }}
          title="View next screen"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})