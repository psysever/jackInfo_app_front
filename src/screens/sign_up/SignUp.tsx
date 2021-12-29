import React, { useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../assets/css/SignUp.css'
import PageTitle from '../../components/PageTitle'
import {
  createAccount,
  createAccountVariables,
} from './__generated__/createAccount'
import { useHistory } from 'react-router'
import DaumPostApi from './../../components/DaumPostApi'

interface IForm {
  email: String
  pwd: String
  name: String
  phone: String
  ckpwd: String
  addr: String
  d_addr?: String
}

const SIGNUP_MUTATION = gql`
  mutation createAccount(
    $email: String!
    $name: String!
    $phone: String!
    $addr: String!
    $d_addr: String
    $pwd: String!
  ) {
    createAccount(
      email: $email
      name: $name
      phone: $phone
      addr: $addr
      d_addr: $d_addr
      pwd: $pwd
    ) {
      ok
      error
    }
  }
`

function SignUp() {
  const history = useHistory()

  const onCompleted = (data: any) => {
    const { email, pwd } = getValues()
    const {
      createAccount: { ok, error },
    } = data
    if (ok) {
      history.push('/signIn', {
        message: '회원가입이 완료되었습니다.',
        email,
        pwd,
      })
    }
    if (!ok && { error: 'existingEmail' }) {
      setError('email', {
        message: 'existingEmail.',
      })
    }
  }

  const [signUpMutation] = useMutation<createAccount, createAccountVariables>(
    SIGNUP_MUTATION,
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
    setError,
  } = useForm<IForm>({
    mode: 'onBlur',
  })
  const pwd = useRef({})
  pwd.current = watch('pwd', '')

  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const { email, pwd, name, phone, addr, d_addr }: any = getValues()
    signUpMutation({
      variables: {
        email: email,
        pwd: pwd,
        name: name,
        phone: phone,
        addr: addr,
        d_addr: d_addr,
      },
    })

    console.log(data)
  }

  console.log(errors)

  const [addr, setAddr] = useState<any>('')
  const [addrPopup, setAddrPopup] = useState(false)

  return (
    <div className="join">
      <PageTitle title="Sign Up" />
      <h2>회원가입</h2>
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
                      required: 'pwd is required',
                      pattern: {
                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'nopaattern',
                      },
                    })}
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
                  비밀번호<span> *</span>
                </h4>
                <input
                  {...register('pwd', {
                    required: 'pwd is required',
                    minLength: {
                      value: 6,
                      message: 'Nopwd',
                    },
                  })}
                  name="pwd"
                  type="password"
                  placeholder="비밀번호는 6자 이상입니다."
                />

                {(errors.pwd as any)?.message === 'Nopwd' && (
                  <h3 className="alter">비밀번호 형식에 맞지 않습니다.</h3>
                )}
              </li>
              <li>
                <h4>
                  비밀번호 확인<span> *</span>
                </h4>
                <input
                  {...register('ckpwd', {
                    required: 'pwd is required',
                    validate: (value) => value === pwd.current || 'NotMatch',
                  })}
                  name="ckpwd"
                  type="password"
                  placeholder="비밀번호 확인"
                />
                {(errors.ckpwd as any)?.message === 'NotMatch' && (
                  <h3 className="alter">
                    입력하신 비밀번호와 동일하지 않습니다.
                  </h3>
                )}
              </li>
              <li>
                <h4>
                  이름<span> *</span>
                </h4>
                <input
                  {...register('name', {
                    required: 'name is required',
                    minLength: {
                      value: 1,
                      message: 'noName',
                    },
                  })}
                  name="name"
                  type="text"
                  placeholder="이름을 입력해주세요"
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
                    {...register('phone', {
                      required: 'phone is required',
                    })}
                    name="phone"
                    type="text"
                    placeholder="- 제외한 숫자만 입력해주세요"
                  />
                  <span>인증하기</span>
                  <input type="text" placeholder="인증번호를 입력해주세요" />
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
                      required: 'addr is required',
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
                      required: false,
                      // minLength: {
                      //   value: 5,
                      //   message: 'pwd should be longer than 5 chars.',
                      // },
                    })}
                    name="d_addr"
                    type="text"
                    placeholder="상세주를 입력해주세요"
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
            <button type="submit" value="Sing up">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
