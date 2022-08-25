import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  fetchData: any;
  navigation: any;
}
const Details: React.FC<Props> = props => {
  const [climate, setclimate] = useState<boolean>(false);
  console.log(props.fetchData?.main?.humidity);

  useEffect(() => {
    if (props.fetchData?.main?.humidity > 50) {
      setclimate(true);
    }
  }, []);
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text
          style={
            styles.cityCountryText
          }>{`${props.fetchData?.name}, ${props.fetchData?.sys?.country}`}</Text>
        <Text style={styles.date}>{new Date().toLocaleString()}</Text>
        <Text style={styles.temp}>{`Temp: ${Math.round(
          props.fetchData?.main?.temp,
        )} °C`}</Text>
        <Text style={styles.minmax}>{`Min ${Math.round(
          props.fetchData?.main?.temp_min,
        )} °C / Max ${Math.round(props.fetchData?.main?.temp_max)} °C`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {backgroundColor: 'white', flex: 1},
  container: {
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cityCountryText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 22,
    marginVertical: 10,
    color: 'black',
  },
  temp: {
    fontSize: 38,
    marginVertical: 10,
    color: 'black',
  },
  minmax: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: '500',
    color: 'black',
  },
});
export default Details;
