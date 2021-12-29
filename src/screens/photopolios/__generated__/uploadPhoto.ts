/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface uploadPhoto_uploadPhoto {
  __typename: 'photo'
  ok: boolean
  token: string | null
  error: string | null
}

export interface uploadPhoto {
  uploadPhoto: uploadPhoto_uploadPhoto
}

export interface uploadPhotoVariables {
  file: any
  caption: String
  skils: String
  subject: String
}
