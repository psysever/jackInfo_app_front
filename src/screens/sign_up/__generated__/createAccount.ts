/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount {
  __typename: 'createAccountResult'
  ok: boolean
  token: string | null
  error: string | null
}

export interface createAccount {
  createAccount: createAccount_createAccount
}

export interface createAccountVariables {
  email: String
  name: String
  phone: String
  addr: String
  d_addr: String
  pwd: String
}
