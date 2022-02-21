const debug = {
  baseUrl: 'https://localhost:3000',
};

const stagingConfig = {
  baseUrl: 'https://localhost:3000',
};

const config = __DEV__ ? debug : stagingConfig;

export default config;
