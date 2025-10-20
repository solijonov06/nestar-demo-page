import {ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

//no subscription logic required

const httpLink = createHttpLink({
    uri: "http://localhost:3007/graphql", //replace with your graphql endpoint
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default client; 