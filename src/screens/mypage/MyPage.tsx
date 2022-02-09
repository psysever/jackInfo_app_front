import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Mypage.css'
import img1 from '../../assets/img/logo.png'
import { me } from '../../components/__generated__/me'
import useUser from './../../components/useUser'

const ME_QUERY = gql`
  query me {
    me {
      id
      name
      avatar
      email
      phone
      addr
      d_addr
    }
  }
`

function Mypage() {
  const { data, error } = useQuery<any>(ME_QUERY, {
    fetchPolicy: 'network-only',
  })
  console.log(data)

  return (
    <div className="mypage">
      <div className="site_detail_top">
        <h2 className="en">My Page</h2>
        <div className="detail_top_left">
          <div className="detail_top_img">
            <img
              src={data?.me?.avatar === 'null' ? img1 : data?.me?.avatar}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mypage_info">
        <div className="mypage_box">
          <p>나의 정보</p>
          <ul className="mypage_box_info">
            <li>
              <p>{data?.me?.name}님</p>
              <p>프로필입니다.</p>
            </li>
            <li>
              <p>이름</p>
              <p>{data?.me?.name}</p>
            </li>
            <li>
              <p>휴대전화</p>
              <p>{data?.me?.phone}</p>
            </li>
            <li>
              <p>이메일</p>
              <p>{data?.me?.email}</p>
            </li>
          </ul>
        </div>
        <ul className="mypage_list">
          <li>
            <Link to="/signup_modify">
              <h4>회원정보 변경</h4>
              <p>고객님의 프로필 이미지 포함 개인정보를 관리하는 공간입니다.</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                alert('준비중입니다.')
              }}
              to="#"
            >
              <h4>비밀번호변경</h4>
              <p>비밀번호를 관리하는 공간입니다.</p>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                alert('준비중 입니다.')
              }}
              to="#"
            >
              <h4>회원 탈퇴</h4>
              <p>회원탈퇴를 관리하는 공간입니다.</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mypage
