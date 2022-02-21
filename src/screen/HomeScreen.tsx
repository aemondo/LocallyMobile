import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../neighborhood/components/Map';
import useCurrentLocation from '../neighborhood/hooks/useCurrentLocation';
import useNeighborhood from '../neighborhood/hooks/useNeighborhood';

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

const DEFAULT_LAT_DELTA = 0.0922;
const DEFAULT_LNG_DELTA = 0.04;

function HomeScreen() {
  const { currentLocation } = useCurrentLocation();
  const {
    selectors: { region },
  } = useNeighborhood(currentLocation ? { location: { latitude: currentLocation.latitude, longitude: currentLocation.longitude } } : {});

  console.log('region', region);
  return (
    <View style={styles.container}>
      <Map
        currentLocation={
          currentLocation
            ? {
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: DEFAULT_LAT_DELTA,
                longitudeDelta: DEFAULT_LNG_DELTA,
              }
            : undefined
        }
      />
    </View>
  );
}
export default HomeScreen;
