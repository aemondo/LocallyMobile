import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE, Region } from 'react-native-maps';

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

interface Props {
  currentLocation?: Region;
  neighborhood?: Polygon;
}

const MONTREAL_CENTER = {
  latitude: 45.523737,
  longitude: -73.609671,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map: React.FC<Props> = ({ currentLocation }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType='terrain'
        showsUserLocation
        initialRegion={MONTREAL_CENTER}
        region={currentLocation}
        scrollDuringRotateOrZoomEnabled
        pitchEnabled={false}
        showsCompass
        rotateEnabled={false}>
        <Polygon coordinates={[]} />
      </MapView>
    </View>
  );
};
export default Map;
