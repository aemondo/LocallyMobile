import axios, { AxiosResponse } from 'axios';
import config from '../../../config';

const BASE_URL = config.baseUrl;

type Body = { [key: string]: unknown } | FormData;

interface Url {
  baseUrl?: string;
  endpoint: string;
  token?: string;
}

interface Params {
  body?: Body;
  params?: { [key: string]: string | string[] | number | number[] | boolean | undefined };
}

interface Headers {
  [key: string]: string;
}

class Client {
  public baseUrl: string;
  public endpoint: string;
  public body?: Body;
  public token?: string;

  constructor({ baseUrl = BASE_URL, endpoint, token }: Url) {
    this.token = token;
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  public getHeaders(): Headers | undefined {
    const tokenHeader: Headers = this.token ? { Authorization: `Bearer ${this.token}` } : {};

    return { ...tokenHeader };
  }

  public async get({ params }: Params = {}): Promise<AxiosResponse> {
    return axios.get(this.endpoint, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }

  public async post({ body, params }: Params): Promise<AxiosResponse> {
    return axios.post(this.endpoint, body, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }

  public async put({ body, params }: Params): Promise<AxiosResponse> {
    return axios.put(this.endpoint, body, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }

  public async delete({ params }: Params): Promise<AxiosResponse> {
    return axios.delete(this.endpoint, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }

  public async patch({ body, params }: Params): Promise<AxiosResponse> {
    return axios.patch(this.endpoint, body, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }

  public async head({ params }: Params): Promise<AxiosResponse> {
    return axios.head(this.endpoint, { baseURL: this.baseUrl, params, headers: this.getHeaders() });
  }
}

export default Client;
