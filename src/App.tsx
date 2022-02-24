import React, { useEffect, useState } from 'react'
import { Route, useLocation } from 'react-router'
import './App.css'

//헤더

import Header from './components/Header'
//네비

import Nav from './components/Nav'
//메인

import Home from '../src/screens/home/Home'
//에러메세지

import Error from './components/Error'
//풋터

import Footer from './components/Footer'
//로그인

import SignIn from './screens/sign_In/SignIn'
//회원가입

import SignUp from './screens/sign_up/SignUp'
//아이디 찾기, 비밀번호 찾기 변경

import IdFind from './screens/info_find/IdFind'
import IdInfo from './screens/info_find/IdInfo'
import PwFind from './screens/info_find/PwFind'
import PwReset from './screens/info_find/PwReset'

//About Me
import AboutMe from './screens/about_me/AboutMe'

//포토폴리오페이지

//마이페이지
import Mypage from './screens/mypage/MyPage'
import SignUpModify from './screens/sign_up/SignUpModify'
import PhotoPolios from './screens/photopolios/Photopolios'
import PhotoPoliosDetailNode from './screens/photopolios/photoPoliosDetailNode'

import PhotoPoliosDetailCss from './screens/photopolios/photoPoliosDetailCss'
import PhotoPoliosDetailRJ from './screens/photopolios/photoPoliosDetailRJ'
import PhotoPoliosDetailRN from './screens/photopolios/photoPoliosDetailRN'
import UploadFormCss from './screens/photopolios/createPhotoPolios/UploadFormCss'
import UploadFormRJ from './screens/photopolios/createPhotoPolios/UploadFormRJ'
import UploadFormRN from './screens/photopolios/createPhotoPolios/UploadFormRN'
import UploadFormNode from './screens/photopolios/createPhotoPolios/UploadFormNode'
import EditPhotoPoliosNode from './screens/photopolios/editPhotoPolios/EditPhotoPoliosNode'
import EditPhotoPoliosCss from './screens/photopolios/editPhotoPolios/EditPhotoPoliosCss'
import EditPhotoPoliosRJ from './screens/photopolios/editPhotoPolios/EditPhotoPoliosRJ'
import EditPhotoPoliosRN from './screens/photopolios/editPhotoPolios/EditPhotoPoliosRN'
import { gql, useMutation } from '@apollo/client'
import Cookies from 'js-cookie'

export const Visiter_Mutation = gql`
  mutation totalCounter($id: Int!, $count: Boolean) {
    totalCounter(id: $id, count: $count) {
      ok
      error
    }
  }
`

function App() {
  let location = useLocation()
  //-----useState------------

  // 네비
  const [navOpen, setNavOpen] = useState(false)
  // 스크롤
  const [scrollState, setScrollState] = useState(0)

  //스크롤 중심함수
  useEffect(() => {
    window.scrollTo(0, 0)
    setNavOpen(false)
  }, [location])
  const onScroll = (e: any) => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    setScrollState(scrollTop)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000)
  Cookies.set('visiter', {
    expires: inFifteenMinutes,
  })

  const [visiterMutation] = useMutation<any, any>(Visiter_Mutation)
  const formData = () => {
    visiterMutation({
      variables: {
        id: 1,
        count: true,
      },
    })
  }

  useEffect(() => {
    const getGetCookie = Cookies.get('visiter')
    console.log(getGetCookie)
    if (getGetCookie) {
      formData()
    }
  }, [])

  return (
    <div className="App" onScroll={onScroll}>
      <div id="wrap">
        {navOpen && <Nav setNavOpen={setNavOpen} />}
        {/* <TopBanner /> */}
        <Header setNavOpen={setNavOpen} scrollState={scrollState} />
        <div className="container">
          {/* 홈 */}
          <Route exact path="/" component={Home} />
          {/* 로그인 */}
          <Route path="/signIn" component={SignIn} />
          {/* 회원가입 */}
          <Route path="/signUp" component={SignUp} />
          {/* 아이디,비밀번호 찾기,변경 */}
          <Route path="/idFind" component={IdFind} />
          <Route path="/idInfo" component={IdInfo} />
          <Route path="/pwFind" component={PwFind} />
          <Route path="/pwReset" component={PwReset} />
          {/* About Me */}
          <Route path="/about_me" component={AboutMe} />
          {/* PhotoPoliosPage */}
          <Route path="/photopolios" component={PhotoPolios} />
          <Route
            path="/photopolios_detail_node"
            component={PhotoPoliosDetailNode}
          />
          <Route
            path="/photopolios_detail_css"
            component={PhotoPoliosDetailCss}
          />
          <Route
            path="/photopolios_detail_rj"
            component={PhotoPoliosDetailRJ}
          />
          <Route
            path="/photopolios_detail_rn"
            component={PhotoPoliosDetailRN}
          />
          {/* 게시물 등록하기 */}
          <Route path="/uploadform_css" component={UploadFormCss} />
          <Route path="/uploadform_rj" component={UploadFormRJ} />
          <Route path="/uploadform_rn" component={UploadFormRN} />
          <Route path="/uploadform_node" component={UploadFormNode} />
          {/* 게시물 수정하기 */}
          <Route
            path="/edit_photopolios_node"
            component={EditPhotoPoliosNode}
          />
          <Route path="/edit_photopolios_css" component={EditPhotoPoliosCss} />
          <Route path="/edit_photopolios_rj" component={EditPhotoPoliosRJ} />
          <Route path="/edit_photopolios_rn" component={EditPhotoPoliosRN} />
          {/* 마이페이지 */}
          <Route path="/mypage" component={Mypage} />
          <Route path="/signup_modify" component={SignUpModify} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
