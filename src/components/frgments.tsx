import { gql } from '@apollo/client'

export const PHOTO_FRAGMENT = gql`
  fragment PhotoFragment on Photo {
    file
    file2
    file3
    file4
    file5
    file6
    file7
    file8
    id
    caption
    skils
    subject
    subject2
    subject3
    subject4
    subject5
    subject6
    subject7
    subject8
    isLiked
    likes
    isMine
  }
`

export const PHOTO_CSS_FRAGMENT = gql`
  fragment PhotoCssFragment on PhotoCss {
    file
    file2
    file3
    file4
    file5
    file6
    file7
    file8
    id
    caption
    skils
    subject
    subject2
    subject3
    subject4
    subject5
    subject6
    subject7
    subject8
    isLiked
    likes
    isMine
  }
`
export const PHOTO_RJ_FRAGMENT = gql`
  fragment PhotoRJFragment on PhotoRJ {
    file
    file2
    file3
    file4
    file5
    file6
    file7
    file8
    id
    caption
    skils
    subject
    subject2
    subject3
    subject4
    subject5
    subject6
    subject7
    subject8
    isLiked
    likes
    isMine
  }
`
export const PHOTO_RN_FRAGMENT = gql`
  fragment PhotoRNFragment on PhotoRN {
    file
    file2
    file3
    file4
    file5
    file6
    file7
    file8
    id
    caption
    skils
    subject
    subject2
    subject3
    subject4
    subject5
    subject6
    subject7
    subject8
    isLiked
    likes
    isMine
  }
`
