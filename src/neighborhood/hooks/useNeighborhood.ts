import NeighborhoodClient from '../services/NeighborhoodClient';
import { useQuery } from 'react-query';
import { Region } from 'react-native-maps';

interface ProducerSelectors {
  region?: Region;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  isSuccess: boolean;
}

interface ProducerActions {
  refetch: () => void;
}

export interface NeighborhoodHook {
  selectors: ProducerSelectors;
  actions: ProducerActions;
}

export interface Location {
  latitude: number;
  longitude: number;
}

interface Props {
  location?: Location;
}

const useNeighborhood: (props: Props) => NeighborhoodHook = ({ location }: Props) => {
  const { data, isLoading, isError, isFetching, isSuccess, refetch } = useQuery(
    ['getNeighborhood', location],
    () => (location ? NeighborhoodClient.getNeighborhood(location) : Promise.reject()),
    {
      keepPreviousData: false,
    },
  );

  return { selectors: { region: data as Region, isLoading: isLoading, isError, isFetching, isSuccess }, actions: { refetch } };
};

export default useNeighborhood;
