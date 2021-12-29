import { gql } from '@apollo/client'

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    file
    id
    caption
    skils
    subject
    isLiked
    likes
  }
`

export const PHOTO_CSS_FRAGMENT = gql`
  fragment PhotoCssFragment on PhotoCss {
    file
    id
    caption
    skils
    subject
    isLiked
    likes
  }
`
