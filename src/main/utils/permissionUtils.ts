import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const hasLocationPermissionIOS = async (): Promise<boolean> => {
  try {
    const status = await Geolocation.requestAuthorization('whenInUse');
    return status === 'granted';
  } catch (error) {
    return false;
  }
};

const hasLocationPermissionAndroid = async (): Promise<boolean> => {
  if (Platform.Version < 23) {
    return true;
  }

  try {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (!hasPermission) {
      const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      return status === PermissionsAndroid.RESULTS.GRANTED;
    }

    return hasPermission;
  } catch (error) {
    return false;
  }
};

export const hasLocationPermission = (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    return hasLocationPermissionAndroid();
  }

  return hasLocationPermissionIOS();
};
