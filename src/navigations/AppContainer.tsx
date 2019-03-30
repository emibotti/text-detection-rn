import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Home } from '../scenes/Home'

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5c6668',
      },
      headerTintColor: '#60C3AD',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'Home',
  },
)

export const AppContainer = createAppContainer(AppNavigator)
