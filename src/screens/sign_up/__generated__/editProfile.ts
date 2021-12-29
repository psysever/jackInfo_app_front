/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface editProfile_editProfile {
  __typename: 'createAccountResult'
  ok: boolean
  token: string | null
  error: string | null
}

export interface editProfile {
  editProfile: editProfile_editProfile
}

export interface editProfileVariables {
  email: String
  name: String
  phone: String
  addr: String
  d_addr: String
  pwd: String
  avatar: any
}
