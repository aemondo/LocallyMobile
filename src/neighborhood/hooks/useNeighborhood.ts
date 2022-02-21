import NeighborhoodClient from '../services/NeighborhoodClient';
import { useQuery } from 'react-query';
import Neighborhood from '../domain/Neighborhood';

interface ProducerSelectors {
  neighborhood?: Neighborhood;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  isSuccess: boolean;
}

interface NeighborhoodActions {
  refetch: () => void;
}

export interface NeighborhoodHook {
  selectors: ProducerSelectors;
  actions: NeighborhoodActions;
}

export interface Location {
  latitude: number;
  longitude: number;
}

interface Props {
  location?: Location;
}

const useNeighborhood: (props: Props) => NeighborhoodHook = ({ location }: Props) => {
  const { data, isLoading, isError, isFetching, isSuccess, refetch } = useQuery<Neighborhood | undefined>(
    ['getNeighborhood', location],
    () => (location ? NeighborhoodClient.getNeighborhood(location) : Promise.reject()),
    {
      keepPreviousData: false,
    },
  );

  return { selectors: { neighborhood: data, isLoading: isLoading, isError, isFetching, isSuccess }, actions: { refetch } };
};

export default useNeighborhood;
