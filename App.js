import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (


      <NavigationContainer>
        <Stack.Navigator>
              
               <Stack.Screen
                 name='Login '
                 component={Login}
                 />
                 <Stack.Screen
                 name='Register'
                 component={Register}
                 />
                  <Stack.Screen
               name='Home'
               component={Home}
               options={{
                headerBackVisible:false, 
                title:'Active users',
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'900'}
              }}
               />
               <Stack.Screen
               name='Chat'
               component={Chat}
               options={({route}) => ({
                headerBackVisible:false,
                title:route.params.name,
                headerTitleStyle:{fontWeight:'bold'},
                headerTitleAlign:'center'


               })}
               />

        </Stack.Navigator>
        

             
          

           
          
            


        
      </NavigationContainer>
    // </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
