import { Dimensions } from 'react-native';
import { normalize } from '../utils/scaling';

const metrics = {
  spacing: {
    1: normalize(8),
    2: normalize(16),
    3: normalize(24),
    4: normalize(32),
    5: normalize(48),
    6: normalize(64),
    7: normalize(96),
  },
  iconSize: {
    1: normalize(8),
    2: normalize(16),
    3: normalize(24),
    4: normalize(32),
    5: normalize(48),
    6: normalize(64),
    7: normalize(96),
  },
  borderRadius: {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 24,
  },
  border: {
    small: '1px solid',
    medium: '2px solid',
    large: '4px solid',
    xlarge: '8px solid',
  },
  zIndex: {
    groundFloor: 1,
    firstFloor: 2,
    secondFloor: 3,
    roof: 10,
  },
  window: {
    ...Dimensions.get('window'),
  },
};

export default metrics;
