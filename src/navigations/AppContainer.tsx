import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Home } from '../scenes/Home'

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(31,134,255)',
      },
      headerTintColor: 'rgb(255,255,255)',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    initialRouteName: 'Home',
  },
)

export const AppContainer = createAppContainer(AppNavigator)
