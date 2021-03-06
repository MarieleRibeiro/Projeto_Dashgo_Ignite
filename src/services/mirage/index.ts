import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer, // consigo enviar os dados, enviar os relacionamentos tudo numa requisição só, não vale so para envio mas tambem para recebimento
    },
    // quais dados eu quero armazenar dentro do meu banco de dados ficticío que o mirage cria
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    }, // são formas de a gente consegui gerar dados em massa

    seeds(server) {
      server.createList("user", 200); // vai criar automatizada 200 usuarios
    },

    routes() {
      this.namespace = "api";
      this.timing = 750; //toda chamada feita pra api demore 750

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page); // ex: 3-1= 2x10 = vai começar no 20
        const pageEnd = pageStart + Number(per_page); // ex: 20 + 10= 30

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      }); //(Shorthands)
      this.get("/users/:id");
      this.post("/post");

      this.namespace = "";
      this.passthrough(); // faz com que todas as chamadas se sejam enviadas para o enderço api, passem pelo mirage e se não forem
      // detectadas pelas rotas do mirage, elas passem adiante para rota original
    },
  });

  return server;
}

// -> Partial = usa quando eu não preciso usar todos os campos do meu type

// -> bibliotaca do javascript FAKER(yarn add faker)= biblioteca de geração de dados ficticios
