import Client from '../../main/services/Client';
import { Location } from '../hooks/useNeighborhood';

export default class NeighborhoodClient {
  public static async getNeighborhood(location: Location): Promise<unknown> {
    const client = new Client({ endpoint: `/currentRegion?lat=${location.latitude}&lng=${location.longitude}` });

    try {
      const neighborhood = await client.get();
      return neighborhood;
    } catch (e) {
      console.log(e);
    }
  }
}
