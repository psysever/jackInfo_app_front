import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../assets/css/UploadForm.css'
import PageTitle from '../../components/PageTitle'
import img1 from '../assets/img/logo.png'
import { uploadPhoto, uploadPhotoVariables } from './__generated__/uploadPhoto'
import { PHOTO_FRAGMENT } from '../../components/frgments'
import { useHistory } from 'react-router'

interface IForm {
  file: any
  subject: String
  caption: String
  skils: String
}

const UPLOADNode_MUTATION = gql`
  mutation uploadPhotoNode(
    $file: Upload!
    $caption: String
    $skils: String
    $subject: String
  ) {
    uploadPhotoNode(
      file: $file
      caption: $caption
      skils: $skils
      subject: $subject
    ) {
      ...PhotoFragment
    }
  }
  ${PHOTO_FRAGMENT}
`

function UploadFormNode() {
  const history = useHistory()
  const { register, handleSubmit, setValue, getValues } = useForm()

  //포토폴리오 올리기
  const [detailImageFile, setDetailImageFile] = useState<any>(null)
  const [detailImageUrl, setDetailImageUrl] = useState<any>(null)

  const setImageFromFile = async ({ file, setImageUrl }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const onCompleted = (data: any) => {
    if (data) {
      history.push('/photopolios')
    } else {
      alert('게시물 등록이 실패하였습니다.')
    }
  }

  const [uploadPhotoNodeMutaion] = useMutation<uploadPhoto, uploadPhotoVariables>(
    UPLOADNode_MUTATION,
    {
      onCompleted,
    },
  )
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const { caption, subject, skils }: any = getValues()
    uploadPhotoNodeMutaion({
      variables: {
        caption: caption,
        subject: subject,
        skils: skils,
        file: detailImageFile,
      },
    })
  }

  return (
    <div className="join">
      <PageTitle title="Up_load" />
      <h2>Upload PhotoPolios</h2>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <div className="join_info">
          <h2>-포토폴리오 사진 또는 동영상</h2>
          <div className="detail_top_img">
            {detailImageFile && (
              <img src={detailImageUrl} alt={detailImageFile.name} />
            )}
            <input
              type="file"
              id="input-file"
              style={{ display: 'none' }}
              onChange={({ target: { files } }: any) => {
                if (files.length) {
                  setImageFromFile({
                    file: files[0],
                    setImageUrl: ({ result }: any) => {
                      setDetailImageFile(files[0])
                      setDetailImageUrl(result)
                    },
                  })
                }
              }}
            />
            <label className="input-file-button" htmlFor="input-file">
              업로드
            </label>
          </div>
          <h1>파일이름: {detailImageFile && detailImageFile.name}</h1>
          <h2>-포토폴리오 제목</h2>
          <input
            placeholder="포토폴리오 제목"
            {...register('subject')}
            name="subject"
          ></input>
          <h2>-포토폴리오 사용 기술</h2>
          <textarea
            {...register('skils')}
            placeholder="포토폴리오 사용기술"
            name="skils"
          ></textarea>
          <h2>-포토폴리오설명</h2>
          <textarea
            placeholder="포토폴리오를 설명"
            {...register('caption')}
            name="caption"
          ></textarea>
          <div className="join_btn">
            <button type="submit" value="Upload">
              포토폴리오 업로드
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UploadFormNode
