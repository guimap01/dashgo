import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

export type UserType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserType>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
};
