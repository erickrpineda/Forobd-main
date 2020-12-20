import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Forobd',
  connector: 'mongodb',
  url: 'mongodb+srv://cluster0.nhcd9.mongodb.net/Forobd',
  host: 'cluster0.nhcd9.mongodb.net',
  port: 27017,
  user: 'ErickPineda',
  password: 'Temporal+1',
  database: 'Forobd',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Foro2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Forobd';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Forobd', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
