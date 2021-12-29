import request from './request'
import Cookies from 'js-cookie'

//토큰값 얻기

export const getToken = () => {
  return Cookies.get('token')
}

//3. 로그인

export const loginApi = async (id: any, password: any) => {
  return request(
    'sign-in',
    'post',
    {},
    {
      u_id: id,
      u_pw: password,
    },
  )
}

//7. 로그인_유저정보

export const headerInfoApi = async () => {
  const token = await getToken()
  return request('company/user-info', 'get', { authorization: token }, null)
}
