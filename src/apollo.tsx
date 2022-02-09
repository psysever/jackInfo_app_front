import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
const TOKEN = 'authorization'
export const isLoggedInVar: any = makeVar(localStorage.getItem(TOKEN))
export const logUserIn = (token: any) => {
  localStorage.setItem(TOKEN, token)
  isLoggedInVar(true)
}
export const logUserOut = () => {
  localStorage.removeItem(TOKEN)
  window.location.replace('/')
  alert('로그아웃되셧습니다.')
}

const uploadHttpLink = createUploadLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://jackinfo-app-backend.herokuapp.com/graphql'
      : 'http://localhost:4000/graphql',
})

const authLink = setContext((_: any, { headers }: any) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem(TOKEN),
    },
  }
})

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('GraphQL Error', graphQLErrors)
  }
  if (networkError) {
    console.log('Network Error', networkError)
  }
})

export const client = new ApolloClient({
  link: authLink.concat(onErrorLink).concat(uploadHttpLink),
  cache: new InMemoryCache(),
})
