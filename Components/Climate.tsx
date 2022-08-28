/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  fetchData: any;
}
const Climate: React.FC<Props> = props => {
  var bg: string;
  var message: string;
  var url: string;
  if (props.fetchData?.humidity > 80 && props.fetchData?.humidity < 130) {
    bg = '#344f70';
    message = 'Rainy Climate';
    url =
      'https://cdn1.iconfinder.com/data/icons/flat-mobile-app-icons/128/weather-512.png';
  } else if (
    props.fetchData?.humidity <= 80 &&
    props.fetchData?.humidity >= 50
  ) {
    bg = '#54b3d1';
    message = 'Chill Climate';
    url = 'https://icon-library.com/images/cooling-icon/cooling-icon-14.jpg';
  } else if (
    props.fetchData?.humidity <= 45 &&
    props.fetchData?.humidity >= 10
  ) {
    bg = '#f4c679';
    message = 'Very Hot';
    url =
      'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-weather-forecast-image_1197280.jpg';
  } else {
    bg = '#f4c679';
    message = 'Normal';
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
          }>{`${props.fetchData?.location?.name}, ${props.fetchData?.location?.country}`}</Text>
        {props.fetchData?.humidity > 80 && props.fetchData?.humidity < 130 ? (
          <Image source={{uri: url}} style={styles.image} />
        ) : props.fetchData?.humidity <= 80 &&
          props.fetchData?.humidity >= 50 ? (
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
          props.fetchData?.current?.temp_c,
        )} °C`}</Text>
        <Text style={styles.cityCountryText}>{message}</Text>
        <Text style={styles.minmax}>{`Min ${Math.round(
          props.fetchData?.current?.temp_c,
        )} °C / Max ${Math.round(props.fetchData?.current?.temp_f)} °C`}</Text>
      </View>
      <View style={styles.row1}>
        <View>
          <Text style={styles.titletext}>Wind Speed</Text>
          <Text style={styles.detailtext}>
            {`${props.fetchData?.current?.wind_kph} km/h`}
          </Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={styles.titletext}>Precipitation</Text>
          <Text style={styles.detailtext}>
            {props.fetchData?.current?.precip_mm}
          </Text>
        </View>
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
    height: 200,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
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
    marginTop: 4,
  },
  temp: {
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  minmax: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  row1: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    marginLeft: -18,
  },
  detailtext: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  titletext: {
    fontSize: 19,
    color: 'white',
  },
});
export default Climate;
