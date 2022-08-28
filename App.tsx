import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Src/Home';
import Details from './Src/Details';
import {FetchResponse, Population} from './types';
import Country from './Src/Country';

const Stack = createNativeStackNavigator();
function App() {
  const [fetchdata, setFetchdata] = useState<FetchResponse | null>(null);
  const [population, setpopulation] = useState<Population | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <Home
              navigation={props.navigation}
              fetchData={fetchdata}
              setFetchData={setFetchdata}
              setpopulation={setpopulation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Country"
          options={{headerShown: true, headerTitle: 'Country Info'}}>
          {props => (
            <Country
              population={population}
              navigation={props.navigation}
              fetchData={fetchdata}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Info"
          options={{headerShown: true, headerTitle: 'Capital Info'}}>
          {props => (
            <Details navigation={props.navigation} fetchData={fetchdata} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
