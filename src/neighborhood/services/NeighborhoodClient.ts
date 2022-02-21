import Client from '../../main/services/Client';
import Neighborhood from '../domain/Neighborhood';
import { Location } from '../hooks/useNeighborhood';

export default class NeighborhoodClient {
  public static async getNeighborhood(location: Location): Promise<Neighborhood | undefined> {
    const client = new Client({ endpoint: `currentRegion?lat=${location.latitude}&lng=${location.longitude}` });
    console.log(client);
    try {
      const neighborhood = await client.get();
      return new Neighborhood(neighborhood.data.foundRegion);
    } catch (e) {
      console.error(e);
    }
  }
}
