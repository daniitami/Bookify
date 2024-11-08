import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './screen/Welcome';
import SignUp from './screen/SignUp';
import LogIn from './screen/LogIn';
import Home from './screen/Home';
import Profile from './screen/Profile';
import Settings from './screen/Settings';
import Popular from './screen/Popular';
import Search from './screen/Search';
import Help from './screen/Help';
import EditProfile from './screen/EditProfile';
import Saved from './screen/Saved';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Popular') {
            iconName = focused
              ? 'compass'
              : 'compass-outline';
          } else if (route.name === 'Search') {
            iconName = focused
              ? 'search'
              : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="SignUp" component={SignUp} /> 
        <Tab.Screen name="LogIn" component={LogIn} /> 
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Help" component={Help} />
        <Tab.Screen name="EditProfile" component={EditProfile} /> 
        <Tab.Screen name="Saved" component={Saved} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: '#003b6e'
  }
});
