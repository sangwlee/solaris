import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('Initialising', () => require('./Initialising').default);
  Navigation.registerComponent('Teachers', () => require('./tabs/Teachers').default);
  Navigation.registerComponent('Calendar', () => require('./tabs/Calendar').default);
  Navigation.registerComponent('Students', () => require('./tabs/Students').default);
}