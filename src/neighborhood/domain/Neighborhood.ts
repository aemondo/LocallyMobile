import { LatLng } from 'react-native-maps';

interface PlainRegion {
  name: string;
  shape: number[][][];
}

export default class Neighborhood {
  name: string;
  limits: LatLng[];

  constructor(plain: PlainRegion) {
    this.name = plain.name;
    this.limits = plain.shape[0].map((positions) => ({ latitude: positions[0], longitude: positions[1] }));
  }
}
