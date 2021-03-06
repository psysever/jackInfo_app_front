import React from 'react'
import { Link } from 'react-router-dom'
import i_naver from '../../assets/img/sns-naver-icon.png'
import i_kakao from '../../assets/img/sns-kakao-icon.png'
import i_facebook from '../../assets/img/sns-facebook-icon.png'
import '../../assets/css/LogIn.css'
import { useLocation } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import PageTitle from '../../components/PageTitle'
import { gql, useMutation } from '@apollo/client'
import { login, loginVariables } from './__generated__/login'
import { logUserIn } from '../../apollo'

interface IForm {
  email: String
  pwd: String
  result: String
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $pwd: String!) {
    login(email: $email, pwd: $pwd) {
      ok
      token
      error
    }
  }
`

function SignIn() {
  const location: any = useLocation()
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IForm>({
    mode: 'onBlur',
    defaultValues: {
      email: location?.state?.email || '',
      pwd: location?.state?.pwd || '',
    },
  })

  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data
    if (token) {
      logUserIn(token)
      window.location.replace('/')
    }
    if (!ok && { error: 'User not found' }) {
      setError('email', {
        message: error,
      })
    }
    if (!ok && { error: 'Incorrect password' }) {
      setError('pwd', {
        message: error,
      })
    }
    if (!ok && { error: 'User not found' }) {
      setError('email', {
        message: error,
      })
    }

    console.log(data)
  }

  const [loginMutation, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    },
  )
  const onSubmitValid: SubmitHandler<IForm> = (data) => {
    const { email, pwd }: any = getValues()
    loginMutation({
      variables: {
        email: email,
        pwd: pwd,
      },
    })
  }

  return (
    <div className="login">
      <PageTitle title="Log In" />
      <h2>?????????</h2>
      <p className="pp">{location?.state?.message}</p>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <div className="login_info">
          <div className="login_box">
            <div className="login_input">
              <input
                {...register('email', {
                  required: 'Username is required',
                })}
                onFocus={() => clearErrors('result')}
                name="email"
                type="text"
                placeholder="?????????"
              />
              {errors.email && (
                <h3 className="alter">???????????? ?????? ????????? ?????????.</h3>
              )}
              <input
                {...register('pwd', {
                  required: 'pwd is required',
                })}
                onFocus={() => clearErrors('result')}
                name="pwd"
                type="password"
                placeholder="????????????"
              />
              {errors.pwd && (
                <h3 className="alter">??????????????? ?????? ????????????.</h3>
              )}
              <button type="submit" value="Log in">
                ?????????
              </button>
            </div>
            <ul className="login_list">
              <li>
                <Link to="/SignUp">????????????</Link>
              </li>
              <li>???</li>
              <li>
                <Link
                  onClick={() => {
                    alert('??????????????????.')
                  }}
                  to="#"
                >
                  ???????????????
                </Link>
              </li>
              <li>???</li>
              <li>
                <Link
                  onClick={() => {
                    alert('????????? ?????????.')
                  }}
                  to="#"
                >
                  ??????????????????
                </Link>
              </li>
            </ul>
          </div>
          <div className="login_sns">
            <p>SNS ???????????? ????????? ??????</p>
            <ul className="login_sns_list">
              <li>
                <Link
                  onClick={() => {
                    alert('????????? ?????????.')
                  }}
                  to="#"
                >
                  <img src={i_naver} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    alert('????????? ?????????.')
                  }}
                  to="#"
                >
                  <img src={i_kakao} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    alert('????????? ?????????.')
                  }}
                  to="#"
                >
                  <img src={i_facebook} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn
