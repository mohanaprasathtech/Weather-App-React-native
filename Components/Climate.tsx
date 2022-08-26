import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  fetchData: any;
}
const Climate: React.FC<Props> = props => {
  var bg: string;
  var message: string;
  var url: string;
  if (
    props.fetchData?.main?.humidity > 80 &&
    props.fetchData?.main?.humidity < 130
  ) {
    bg = '#344f70';
    message = 'Rainy Climate';
    url =
      'https://cdn1.iconfinder.com/data/icons/flat-mobile-app-icons/128/weather-512.png';
  } else if (
    props.fetchData?.main?.humidity <= 80 &&
    props.fetchData?.main?.humidity >= 50
  ) {
    bg = '#54b3d1';
    message = 'Chill Climate';
    url = 'https://icon-library.com/images/cooling-icon/cooling-icon-14.jpg';
  } else {
    bg = '#f4c679';
    message = 'Very Hot';
    url =
      'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-weather-forecast-image_1197280.jpg';
  }
  return (
    <View style={[styles.root, {backgroundColor: bg}]}>
      <View style={styles.container}>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Text
          style={
            styles.cityCountryText
          }>{`${props.fetchData?.name}, ${props.fetchData?.sys?.country}`}</Text>
        {props.fetchData?.main?.humidity > 80 &&
        props.fetchData?.main?.humidity < 130 ? (
          <Image source={{uri: url}} style={styles.image} />
        ) : props.fetchData?.main?.humidity <= 80 &&
          props.fetchData?.main?.humidity >= 50 ? (
          <Image
            source={{
              uri: url,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={{
              uri: url,
            }}
            style={styles.image}
          />
        )}
        <Text style={styles.temp}>{`${Math.round(
          props.fetchData?.main?.temp,
        )} °C`}</Text>
        <Text style={styles.cityCountryText}>{message}</Text>
        <Text style={styles.minmax}>{`Min ${Math.round(
          props.fetchData?.main?.temp_min,
        )} °C / Max ${Math.round(props.fetchData?.main?.temp_max)} °C`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {height: '100%'},
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  cityCountryText: {
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  date: {
    fontSize: 22,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 45,
  },
  temp: {
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
    marginTop: -10,
  },
  minmax: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});
export default Climate;
