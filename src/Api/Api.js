import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// method where the conection to the GraphQL API is created
const httpLink = createHttpLink({ uri: process.env.REACT_APP_GITHUB_URL });
const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    }
}));

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
