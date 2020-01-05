import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../Container/Splash'
import Home from '../Container/Home';
import Detail from '../Container/Detail';

const MainNavigator = createStackNavigator(
  {
    Splash : {screen : Splash,navigationOptions:{header : null}},
    Home: {screen: Home, navigationOptions: {header: null}},
    Detail: {
      screen: Detail,
      navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#ff9800',
          elevation:0
        },
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(MainNavigator);
