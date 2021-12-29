import { gql, useQuery, useReactiveVar } from '@apollo/client'
import { useEffect } from 'react'
import { isLoggedInVar } from '../apollo'
import { logUserOut } from './../apollo'
import { me } from './__generated__/me'

export const ME_QUERY = gql`
  query me {
    me {
      id
      name
      avatar
      email
      phone
      addr
      d_addr
    }
  }
`

export default function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar)
  const { data, error } = useQuery<me>(ME_QUERY, {
    skip: !hasToken,
  })
  useEffect(() => {
    if (data?.me && data.me == null) {
      logUserOut()
    }
  }, [data])
  return { data }
}
