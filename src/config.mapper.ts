import { Config } from './types/appConfig.type';

export const mapConfig = (source: { [key: string]: string }): Config => {
  return {
    appPort: source.APP_PORT,
  };
};
