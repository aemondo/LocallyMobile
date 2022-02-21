const debug = {
  baseUrl: 'http://192.168.0.30:3000/',
};

const stagingConfig = {
  baseUrl: 'https://localhost:3000/',
};

const config = __DEV__ ? debug : stagingConfig;

export default config;
