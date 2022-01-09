import React, { useRef, useState } from 'react'
import { gql, resetCaches, useMutation } from '@apollo/client'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../../assets/css/UploadForm.css'
import PageTitle from '../../../components/PageTitle'
import { uploadPhoto } from '../__generated__/uploadPhoto'
import { uploadPhotoVariables } from '../__generated__/uploadPhoto'
import { PHOTO_FRAGMENT } from '../../../components/frgments'

interface IForm {
  file: any
  file2: any
  file3: any
  file4: any
  file5: any
  file6: any
  file7: any
  file8: any
  subject: String
  subject2: String
  subject3: String
  subject4: String
  subject5: String
  subject6: String
  subject7: String
  subject8: String
  caption: String
  skils: String
}

const Edit_NODE_MUTATION = gql`
  mutation editPhoto(
    $id: Int!
    $file: Upload
    $file2: Upload
    $file3: Upload
    $file4: Upload
    $file5: Upload
    $file6: Upload
    $file7: Upload
    $file8: Upload
    $caption: String
    $skils: String
    $subject: String
    $subject2: String
    $subject3: String
    $subject4: String
    $subject5: String
    $subject6: String
    $subject7: String
    $subject8: String
  ) {
    editPhoto(
      id: $id
      file: $file
      file2: $file2
      file3: $file3
      file4: $file4
      file5: $file5
      file6: $file6
      file7: $file7
      file8: $file8
      caption: $caption
      skils: $skils
      subject: $subject
      subject2: $subject2
      subject3: $subject3
      subject4: $subject4
      subject5: $subject5
      subject6: $subject6
      subject7: $subject7
      subject8: $subject8
    ) {
      ok
      error
    }
  }
`

function EditPhotoPoliosNode(props: any) {
  const { register, handleSubmit, setValue, getValues } = useForm()
  const pInfo = props.location.state.pInfoNode
  const [pInfoFile2, setPInfoFile2] = useState<any>(pInfo.file2)
  const [pInfoFile3, setPInfoFile3] = useState<any>(pInfo.file3)
  const [pInfoFile4, setPInfoFile4] = useState<any>(pInfo.file4)
  const [pInfoFile5, setPInfoFile5] = useState<any>(pInfo.file5)
  const [pInfoFile6, setPInfoFile6] = useState<any>(pInfo.file6)
  const [pInfoFile7, setPInfoFile7] = useState<any>(pInfo.file7)
  const [pInfoFile8, setPInfoFile8] = useState<any>(pInfo.file8)

  const decodedUrl1 = decodeURI(pInfo.file).split('/')[4]
  const decodedUrl2 = decodeURI(pInfoFile2).split('/')[4]
  const decodedUrl3 = decodeURI(pInfoFile3).split('/')[4]
  const decodedUrl4 = decodeURI(pInfoFile4).split('/')[4]
  const decodedUrl5 = decodeURI(pInfoFile5).split('/')[4]
  const decodedUrl6 = decodeURI(pInfoFile6).split('/')[4]
  const decodedUrl7 = decodeURI(pInfoFile7).split('/')[4]
  const decodedUrl8 = decodeURI(pInfoFile8).split('/')[4]

  //포토폴리오 올리기
  const [detailImageFile, setDetailImageFile] = useState<any>(null)
  const [detailImageUrl, setDetailImageUrl] = useState<any>(null)
  const [detailImageFile2, setDetailImageFile2] = useState<any>(null)
  const [detailImageUrl2, setDetailImageUrl2] = useState<any>(null)
  const [detailImageFile3, setDetailImageFile3] = useState<any>(null)
  const [detailImageUrl3, setDetailImageUrl3] = useState<any>(null)
  const [detailImageFile4, setDetailImageFile4] = useState<any>(null)
  const [detailImageUrl4, setDetailImageUrl4] = useState<any>(null)
  const [detailImageFile5, setDetailImageFile5] = useState<any>(null)
  const [detailImageUrl5, setDetailImageUrl5] = useState<any>(null)
  const [detailImageFile6, setDetailImageFile6] = useState<any>(null)
  const [detailImageUrl6, setDetailImageUrl6] = useState<any>(null)
  const [detailImageFile7, setDetailImageFile7] = useState<any>(null)
  const [detailImageUrl7, setDetailImageUrl7] = useState<any>(null)
  const [detailImageFile8, setDetailImageFile8] = useState<any>(null)
  const [detailImageUrl8, setDetailImageUrl8] = useState<any>(null)

  //포토폴리오 올리기
  const setImageFromFile = async ({ file, setImageUrl, e }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile2 = async ({ file, setImageUrl2, e }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl2({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile3 = async ({ file, setImageUrl3 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl3({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile4 = async ({ file, setImageUrl4 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl4({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile5 = async ({ file, setImageUrl5 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl5({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile6 = async ({ file, setImageUrl6 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl6({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile7 = async ({ file, setImageUrl7 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl7({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }
  const setImageFromFile8 = async ({ file, setImageUrl8 }: any) => {
    let reader = new FileReader()
    reader.onload = function () {
      setImageUrl8({ result: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const onCompleted = (data: any) => {
    const {
      editPhoto: { ok, error },
    } = data
    if (ok) {
      alert('성공')
      window.location.replace('/photopolios')
    } else {
      alert('게시물 등록이 실패하였습니다.')
    }
  }

  const [editPhotoNodeMutaion] = useMutation<any>(Edit_NODE_MUTATION, {
    onCompleted,
  })
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const {
      caption,
      subject,
      subject2,
      subject3,
      subject4,
      subject5,
      subject6,
      subject7,
      subject8,
      skils,
    }: any = getValues()
    editPhotoNodeMutaion({
      variables: {
        id: pInfo.id,
        caption: caption,
        subject: subject,
        subject2: subject2,
        subject3: subject3,
        subject4: subject4,
        subject5: subject5,
        subject6: subject6,
        subject7: subject7,
        subject8: subject8,
        skils: skils,
        file: detailImageFile,
        file2: detailImageFile2,
        file3: detailImageFile3,
        file4: detailImageFile4,
        file5: detailImageFile5,
        file6: detailImageFile6,
        file7: detailImageFile7,
        file8: detailImageFile8,
      },
    })
  }

  const deletePhoto: any = (cache: any, result: any) => {
    console.log(cache)
    console.log(result)
  }

  const fileInput: any = useRef()

  const onClearAttachment = () => {
    fileInput.current.value = ''
  }

  return (
    <div className="join">
      <PageTitle title="Edit_Photo_Node" />
      <h2>Edit PhotoPolios</h2>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <div className="join_info">
          <h2>-1. 포토폴리오 메인사진제목(필수)</h2>
          <input
            placeholder="포토폴리오 메인사진제목"
            {...register('subject')}
            name="subject"
          ></input>
          <div className="detail_top_img">
            {detailImageFile ? (
              detailImageFile.name.split('.')[1] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={detailImageUrl} type="video/mp4" />
                </video>
              ) : (
                detailImageFile && (
                  <img src={detailImageUrl} alt={detailImageFile.name} />
                )
              )
            ) : pInfo.file.split('.')[5] === 'mp4' ? (
              <video width="320" height="240" controls>
                <source src={pInfo.file} type="video/mp4" />
              </video>
            ) : (
              <img src={pInfo.file} alt="" />
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
              메인 사진 업로드
            </label>
          </div>
          <h1>
            파일이름:{' '}
            {detailImageFile ? detailImageFile.name : pInfo.file && decodedUrl1}
          </h1>

          <div className="join_info">
            <h2>-2. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject2')}
              name="subject2"
            ></input>
            <div className="detail_top_img">
              {detailImageFile2 ? (
                detailImageFile2.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl2} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile2 && (
                    <img src={detailImageUrl2} alt={detailImageFile2.name} />
                  )
                )
              ) : pInfoFile2 && pInfoFile2.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile2} type="video/mp4" />
                </video>
              ) : (
                pInfoFile2 && <img src={pInfoFile2} alt="" />
              )}
              <input
                type="file"
                id="input-file2"
                ref={fileInput}
                style={{ display: 'none' }}
                onChange={({ target: { files }, e }: any) => {
                  if (files.length) {
                    setImageFromFile2({
                      file: files[0],
                      setImageUrl2: ({ result }: any) => {
                        setDetailImageFile2(files[0])
                        setDetailImageUrl2(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file2">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile2(null)
                  setDetailImageUrl2(null)
                  setPInfoFile2(null)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile2
                ? detailImageFile2.name
                : pInfoFile2 && decodedUrl2}
            </h1>
            <h2>-3. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject3')}
              name="subject3"
            ></input>
            <div className="detail_top_img">
              {detailImageFile3 ? (
                detailImageFile3.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl3} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile3 && (
                    <img src={detailImageUrl3} alt={detailImageFile3.name} />
                  )
                )
              ) : pInfoFile3 && pInfoFile3.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile3} type="video/mp4" />
                </video>
              ) : (
                pInfoFile3 && <img src={pInfoFile3} alt="" />
              )}
              <input
                type="file"
                id="input-file3"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile3({
                      file: files[0],
                      setImageUrl3: ({ result }: any) => {
                        setDetailImageFile3(files[0])
                        setDetailImageUrl3(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file3">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile3(null)
                  setDetailImageUrl3(null)
                  setPInfoFile3(null)
                  console.log('a')
                  console.log(detailImageFile2)
                  console.log(detailImageUrl2)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>

            <h1>
              파일이름:{' '}
              {detailImageFile3
                ? detailImageFile3.name
                : pInfoFile3 && decodedUrl3}
            </h1>
            <h2>-4. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject4')}
              name="subject4"
            ></input>
            <div className="detail_top_img">
              {detailImageFile4 ? (
                detailImageFile4.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl4} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile4 && (
                    <img src={detailImageUrl4} alt={detailImageFile4.name} />
                  )
                )
              ) : pInfoFile4 && pInfoFile4.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile4} type="video/mp4" />
                </video>
              ) : (
                pInfoFile4 && <img src={pInfoFile4} alt="" />
              )}
              <input
                type="file"
                id="input-file4"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile4({
                      file: files[0],
                      setImageUrl4: ({ result }: any) => {
                        setDetailImageFile4(files[0])
                        setDetailImageUrl4(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file4">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile4(null)
                  setDetailImageUrl4(null)
                  setPInfoFile4(null)
                  console.log('a')
                  console.log(detailImageFile2)
                  console.log(detailImageUrl2)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile4
                ? detailImageFile4.name
                : pInfoFile4 && decodedUrl4}
            </h1>
            <h2>-5. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject5')}
              name="subject5"
            ></input>
            <div className="detail_top_img">
              {detailImageFile5 ? (
                detailImageFile5.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl5} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile5 && (
                    <img src={detailImageUrl5} alt={detailImageFile5.name} />
                  )
                )
              ) : pInfoFile5 && pInfoFile5.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile5} type="video/mp4" />
                </video>
              ) : (
                pInfoFile5 && <img src={pInfoFile5} alt="" />
              )}
              <input
                type="file"
                id="input-file5"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile5({
                      file: files[0],
                      setImageUrl5: ({ result }: any) => {
                        setDetailImageFile5(files[0])
                        setDetailImageUrl5(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file5">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile5(null)
                  setDetailImageUrl5(null)
                  setPInfoFile5(null)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile5
                ? detailImageFile5.name
                : pInfoFile5 && decodedUrl5}
            </h1>
            <h2>-6. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject6')}
              name="subject6"
            ></input>
            <div className="detail_top_img">
              {detailImageFile6 ? (
                detailImageFile6.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl6} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile6 && (
                    <img src={detailImageUrl6} alt={detailImageFile6.name} />
                  )
                )
              ) : pInfoFile6 && pInfoFile6.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile6} type="video/mp4" />
                </video>
              ) : (
                pInfoFile6 && <img src={pInfoFile6} alt="" />
              )}
              <input
                type="file"
                id="input-file6"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile6({
                      file: files[0],
                      setImageUrl6: ({ result }: any) => {
                        setDetailImageFile6(files[0])
                        setDetailImageUrl6(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file6">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile6(null)
                  setDetailImageUrl6(null)
                  setPInfoFile6(null)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile6
                ? detailImageFile6.name
                : pInfoFile6 && decodedUrl6}
            </h1>
            <h2>-7. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject7')}
              name="subject7"
            ></input>
            <div className="detail_top_img">
              {detailImageFile7 ? (
                detailImageFile7.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl7} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile7 && (
                    <img src={detailImageUrl7} alt={detailImageFile7.name} />
                  )
                )
              ) : pInfoFile7 && pInfoFile7.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile7} type="video/mp4" />
                </video>
              ) : (
                pInfoFile7 && <img src={pInfoFile7} alt="" />
              )}
              <input
                type="file"
                id="input-file7"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile7({
                      file: files[0],
                      setImageUrl7: ({ result }: any) => {
                        setDetailImageFile7(files[0])
                        setDetailImageUrl7(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file7">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile7(null)
                  setDetailImageUrl7(null)
                  setPInfoFile7(null)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile7
                ? detailImageFile7.name
                : pInfoFile7 && decodedUrl7}
            </h1>
            <h2>-8. 동영상 || 사진 메인제목</h2>
            <input
              placeholder="포토폴리오 메인제목"
              {...register('subject8')}
              name="subject8"
            ></input>
            <div className="detail_top_img">
              {detailImageFile8 ? (
                detailImageFile8.name.split('.')[1] === 'mp4' ? (
                  <video width="320" height="240" controls>
                    <source src={detailImageUrl8} type="video/mp4" />
                  </video>
                ) : (
                  detailImageFile8 && (
                    <img src={detailImageUrl8} alt={detailImageFile8.name} />
                  )
                )
              ) : pInfoFile8 && pInfoFile8.split('.')[5] === 'mp4' ? (
                <video width="320" height="240" controls>
                  <source src={pInfoFile8} type="video/mp4" />
                </video>
              ) : (
                pInfoFile8 && <img src={pInfoFile8} alt="" />
              )}
              <input
                type="file"
                id="input-file8"
                style={{ display: 'none' }}
                onChange={({ target: { files } }: any) => {
                  if (files.length) {
                    setImageFromFile8({
                      file: files[0],
                      setImageUrl8: ({ result }: any) => {
                        setDetailImageFile8(files[0])
                        setDetailImageUrl8(result)
                      },
                    })
                  }
                }}
              />
              <label className="input-file-button" htmlFor="input-file8">
                동영상(mp4) || 사진 업로드
              </label>
              <div
                className="input-file-buttonReset"
                onClick={() => {
                  setDetailImageFile8(null)
                  setDetailImageUrl8(null)
                  setPInfoFile8(null)
                }}
              >
                동영상(mp4) || 사진 초기화
              </div>
            </div>
            <h1>
              파일이름:{' '}
              {detailImageFile8
                ? detailImageFile8.name
                : pInfoFile8 && decodedUrl8}
            </h1>
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
          </div>
          <div className="join_btn">
            <button type="submit" value="Upload">
              포토폴리오 수정 업로드
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditPhotoPoliosNode
