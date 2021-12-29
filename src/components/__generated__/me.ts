/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface me_me {
  __typename: 'User'
  email: String
  name: String
  phone: String
  addr: String
  d_addr: String
  bio: String
  avatar: String
  createdAt: String
  updatedAt: String
}

export interface me {
  me: me_me
}

export interface meVariables {
  email: string
  name: String
  phone: String
  addr: String
  d_addr: String
  bio: String
  avatar: String
  createdAt: String
  updatedAt: String
}
