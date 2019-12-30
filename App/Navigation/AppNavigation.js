import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../Container/Home'
import Detail from '../Container/Detail'

const MainNavigator = createStackNavigator({
    Home: { screen: Home, navigationOptions: { header: null } },
    Detail: { screen: Detail, navigationOptions: { header: null } },
}, {
    headerMode: 'screen',
    initialRouteName: 'Home',
    // transitionConfig: () => fromLeft(500),
});

export default createAppContainer(MainNavigator);
