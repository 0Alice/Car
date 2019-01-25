import React from 'react';
import {createStackNavigator} from 'react-navigation';
import CarScreen from '../screens/CarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RepairScreen from '../screens/RepairScreen';
import HomeScreen from '../screens/HomeScreen';
import AddCarScreen from '../screens/AddCarScreen';
import NumbersScreen from '../screens/NumbersScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import CostsScreen from '../screens/CostsScreen';
import ImageBrowser from '../screens/ImageBrowser';

export default createStackNavigator({
  Home:{screen:HomeScreen},
  Car: {screen: CarScreen},
  Profile: {screen: ProfileScreen},
  Repair:{screen:RepairScreen},
  AddCar:{screen:AddCarScreen},
  Numbers:{screen:NumbersScreen},
  Documents:{screen:DocumentsScreen},
  Costs:{screen:CostsScreen},
  ImageBrowser: { screen: ImageBrowser },
});