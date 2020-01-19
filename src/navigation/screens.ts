import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from '../store';

export function registerScreens() {
  Navigation.registerComponentWithRedux('Home', () => require('../Home').default, Provider, store);
  Navigation.registerComponentWithRedux('SignUp', () => require('../SignUp').default, Provider, store);
  Navigation.registerComponentWithRedux('SignIn', () => require('../SignIn').default, Provider, store);
  Navigation.registerComponentWithRedux('Initialising', () => require('../Initialising').default, Provider, store);
  Navigation.registerComponentWithRedux('Teachers', () => require('../Teachers').default, Provider, store);
  Navigation.registerComponentWithRedux('Calendar', () => require('../Calendar').default, Provider, store);
  Navigation.registerComponentWithRedux('Students', () => require('../Students').default, Provider, store);
}