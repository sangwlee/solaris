import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initialising'
      }
    },
  });
});