import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';

import {SCREENS} from '../screens';
import Home from '../../screens/home';
import VideoViewer from '../../screens/videoViewer';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.home}>
      <Stack.Screen name={SCREENS.home} component={Home} />
      <Stack.Screen name={SCREENS.videoViewer} component={VideoViewer} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
