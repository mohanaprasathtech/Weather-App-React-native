import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Src/Home';
import Details from './Src/Details';
import {FetchResponse} from './types';

const Stack = createNativeStackNavigator();
function App() {
  const [fetchdata, setFetchdata] = useState<FetchResponse | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => (
            <Home
              navigation={props.navigation}
              fetchData={fetchdata}
              setFetchData={setFetchdata}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Info">
          {props => (
            <Details navigation={props.navigation} fetchData={fetchdata} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
