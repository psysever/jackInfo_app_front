import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../assets/css/SignUp.css'
import PageTitle from '../../components/PageTitle'
import { useHistory } from 'react-router'
import DaumPostApi from './../../components/DaumPostApi'
import { editProfile, editProfileVariables } from './__generated__/editProfile'
import useUser from './../../components/useUser'

interface IForm {
  email: String
  pwd: String
  name: String
  phone: String
  ckpwd: String
  addr: String
  d_addr?: String
  avatar: any
}

const EDITPROFILE_MUTATION = gql`
  mutation editProfile(
    $email: String
    $name: String
    $phone: String
    $addr: String
    $d_addr: String
    $pwd: String
    $avatar: Upload
  ) {
    editProfile(
      email: $email
      name: $name
      phone: $phone
      addr: $addr
      d_addr: $d_addr
      pwd: $pwd
      avatar: $avatar
    ) {
      ok
      error
    }
  }
`

function SignUpModify() {
  //포토폴리오 올리기
  const [detailImageFile, setDetailImageFile] = useState<any>(null)
  console.log('detailImageFile')
  console.log(detailImageFile)

  const history = useHistory()
  const { data: dataUser }: any = useUser()

  const onCompleted = (data: any) => {
    const { email, pwd, name, phone, addr, d_addr }: any = getValues()
    const {
      editProfile: { ok, error },
    } = data
    if (ok) {
      alert('성공')
    }

    console.log('data')
    console.log(data)
  }

  const [editProfileMutation] = useMutation<editProfile, editProfileVariables>(
    EDITPROFILE_MUTATION,
    {
      onCompleted,
    },
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<IForm>({
    mode: 'onChange',
  })
  const pwd = useRef({})
  pwd.current = watch('pwd', '')

  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const { email, pwd, name, phone, addr, d_addr }: any = getValues()
    editProfileMutation({
      variables: {
        email: email,
        pwd: pwd,
        name: name,
        phone: phone,
        addr: addr,
        d_addr: d_addr,
        avatar: detailImageFile,
      },
    })

    console.log(data)
  }

  const [addr, setAddr] = useState<any>(dataUser?.me?.addr)
  const [addrPopup, setAddrPopup] = useState(false)

  return (
    <div className="join">
      <PageTitle title="modify_profile" />
      <h2>회원정보수정</h2>
      <div className="join_info">
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <div className="join_box">
            <ul className="join_input">
              <li>
                <h4>
                  이메일<span> *</span>
                </h4>
                <div className="input_box">
                  <input
                    {...register('email', {
                      pattern: {
                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'nopaattern',
                      },
                    })}
                    defaultValue={dataUser?.me?.email}
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                  />
                  {(errors.email as any)?.message === 'nopaattern' && (
                    <h3 className="alter">이메일 형식에 맞지않습니다.</h3>
                  )}
                  {(errors.email as any)?.message === 'existingEmail.' && (
                    <h3 className="alter">이메일이 이미 존재합니다.</h3>
                  )}
                </div>
              </li>
              <li>
                <h4>
                  이름<span> *</span>
                </h4>
                <input
                  {...register('name', {
                    minLength: {
                      value: 1,
                      message: 'noName',
                    },
                  })}
                  defaultValue={dataUser?.me?.name}
                  name="name"
                  type="text"
                  placeholder="이름을 입력해주세요"
                />
                {(errors.name as any)?.message === 'noName' && (
                  <h3 className="alter">이름을 입력해 주세요.</h3>
                )}
              </li>
              <li>
                <h4>프로필사진</h4>
                <input
                  name="avatar"
                  type="file"
                  id="logo_upload"
                  accept="image/*"
                  onChange={({
                    target: {
                      files: [file],
                    },
                  }: any) => {
                    setDetailImageFile(file)
                  }}
                  placeholder="프로필 사진을 등록해 주세요."
                  defaultValue={detailImageFile && detailImageFile.name}
                />
                {(errors.name as any)?.message === 'noName' && (
                  <h3 className="alter">이름을 입력해 주세요.</h3>
                )}
              </li>
              <li>
                <h4>
                  휴대전화<span> *</span>
                </h4>
                <div className="input_box">
                  <input
                    {...register('phone', {})}
                    name="phone"
                    type="text"
                    placeholder="- 제외한 숫자만 입력해주세요"
                    defaultValue={dataUser?.me?.phone}
                  />
                </div>
              </li>
              <li>
                <h4>
                  주소<span> *</span>
                </h4>
                <div className="input_box">
                  <input
                    value={addr}
                    {...register('addr', {
                      // minLength: {
                      //   value: 5,
                      //   message: 'addr should be longer than 5 chars.',
                      // },
                    })}
                    name="addr"
                    type="text"
                    placeholder="주소"
                  />
                  <span
                    onClick={() => {
                      setAddrPopup(!addrPopup)
                    }}
                  >
                    주소검색
                  </span>

                  <input
                    {...register('d_addr', {
                      // minLength: {
                      //   value: 5,
                      //   message: 'pwd should be longer than 5 chars.',
                      // },
                    })}
                    name="d_addr"
                    type="text"
                    placeholder="상세주를 입력해주세요"
                    defaultValue={dataUser?.me?.d_addr}
                  />
                  {addrPopup ? (
                    <DaumPostApi
                      setAddr={setAddr}
                      setAddrPopup={setAddrPopup}
                      addrPopup={addrPopup}
                    />
                  ) : null}
                </div>
              </li>
            </ul>
          </div>
          <div className="join_btn">
            <button type="submit" value="signUp_Modify">
              회원정보수정
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpModify
