import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from '../store';

export const registerScreens = () => {
  Navigation.registerComponentWithRedux('Home', () => require('../components/Home').default, Provider, store);
  Navigation.registerComponentWithRedux('SignUp', () => require('../components/SignUp').default, Provider, store);
  Navigation.registerComponentWithRedux('SignIn', () => require('../components/SignIn').default, Provider, store);
  Navigation.registerComponentWithRedux('Initialising', () => require('../components/Initialising').default, Provider, store);
  Navigation.registerComponentWithRedux('Teachers', () => require('../components/HomeTabs/Teachers').default, Provider, store);
  Navigation.registerComponentWithRedux('Calendar', () => require('../components/HomeTabs/Calendar').default, Provider, store);
  Navigation.registerComponentWithRedux('Students', () => require('../components/HomeTabs/Students').default, Provider, store);
}