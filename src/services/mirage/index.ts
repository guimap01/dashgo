import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from 'miragejs';
import { faker } from '@faker-js/faker';

export type UserType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = () => {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
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
      server.createList('user', 203);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', (schema, request) => {
        const { page = 1, pageSize = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(pageSize);
        const pageEnd = pageStart + Number(pageSize);

        const users = schema.all('user').slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users, total }
        );
      });
      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        //@ts-ignore
        return schema.users.create(attrs);
      });

      this.namespace = '';
      this.passthrough();
    },
  });
  return server;
};
