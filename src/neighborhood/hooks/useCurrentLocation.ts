import { useEffect, useState } from 'react';
import Geolocation, { clearWatch, GeoCoordinates, GeoPosition } from 'react-native-geolocation-service';

import { hasLocationPermission } from '../../main/utils/permissionUtils';

export interface CurrentLocationHook {
  currentLocation?: GeoCoordinates;
}

const useCurrentLocation = (): CurrentLocationHook => {
  const [hasPermission, setHasPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<Geolocation.GeoCoordinates | undefined>(undefined);

  useEffect(() => {
    hasLocationPermission().then((value) => setHasPermission(value));
  }, []);

  useEffect(() => {
    let watchId: number | undefined;

    if (hasPermission) {
      watchId = Geolocation.watchPosition(
        (position: GeoPosition) => setCurrentLocation(position.coords),
        () => setCurrentLocation(undefined),
        { enableHighAccuracy: true },
      );
    }

    return () => {
      if (clearWatch && watchId) {
        clearWatch(watchId);
      }
    };
  }, [hasPermission, setCurrentLocation]);

  return { currentLocation };
};

export default useCurrentLocation;
