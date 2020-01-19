import { Navigation } from 'react-native-navigation';

export const goAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'bottomTabsAuthenticate',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
              }}},
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
              }}},
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'bottomTabsHome',
      children: [
        {
          component: {
            name: 'Calendar',
            options: {
              bottomTab: {
                text: 'Calendar',
                fontSize: 12,
              }}},
        },
        {
          component: {
            name: 'Teachers',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Teachers',
              }}},
        },
        {
          component: {
            name: 'Students',
            options: {
              bottomTab: {
                text: 'Students',
                fontSize: 12,
              }}},
        },
      ],
    }
  }
})