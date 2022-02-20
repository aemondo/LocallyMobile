import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../main/components/Button';
import Label from '../main/components/Label';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType='terrain'
        initialRegion={{
          latitude: 45.523737,
          longitude: -73.609671,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
export default HomeScreen;
