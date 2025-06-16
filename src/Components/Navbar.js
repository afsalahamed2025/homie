import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Profile from './Profile';
// import Main from './Main';
import Login from './Login';
// import Lists from './Lists';
import Home from './Home';
// import Design_Pages from './Design_Pages';
import Break from './Breakdown'
import BreakdownCards from './BreakdownCards';
import  BottomSheet  from './BottomSheet';
import BottomSheetcopy from './BottomSheet copy';
// import Async_Methud from './Async_Methud';

const Stack = createStackNavigator();

const Navigationfiles = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Main" component={Main} /> */}
        <Stack.Screen name="Login" component={Login}  c />
        {/* <Stack.Screen name="Lists" component={Lists} /> */}
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        {/* <Stack.Screen name="Design" component={Design_Pages} /> */}
        <Stack.Screen name="Break" component={Break}/>
        <Stack.Screen name='Breakdown'   component={BreakdownCards}/>
        {/* <Stack.Screen name='Async' component={Async_Methud}/> */}
         <Stack.Screen name='BottomSheet'   component={BottomSheet} options={{ headerShown: false }} />
           <Stack.Screen name='BottomSheetcopy'   component={BottomSheetcopy}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigationfiles