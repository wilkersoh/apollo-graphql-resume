import {ApolloServer} from 'apollo-server-micro'
import {schema} from 'src/schema';

const server = new ApolloServer({schema});

// handler - what actually receives reqeust from the user
const handler = server.createHandler({path: '/api/graphql'});

export const config = {
  api: {
    bodyParser: false,
  }
}

export default handler;