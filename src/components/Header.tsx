import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/m-black-logo.png'
import w_logo from '../assets/img/logo.png'
import i_hamberger from '../assets/img/m-bl-hamberger-icon.png'
import i_w_hamberger from '../assets/img/hamberger-icon.png'

import '../assets/css/Header.css'
import { isLoggedInVar, logUserOut } from '../apollo'
import useUser from './useUser'
import { useReactiveVar } from '@apollo/client'

function Header({ setNavOpen, scrollState }: any) {
  const { pathname } = window.location
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const { data }: any = useUser()

  return (
    <>
      <div
        className={
          pathname !== '/' ? 'header_wrap active_header_wrap' : 'header_wrap'
        }
      >
        <div className={scrollState > 30 ? 'header active_header' : 'header'}>
          <h1>
            <Link to="/">
              <img
                src={pathname !== '/' || scrollState > 30 ? logo : w_logo}
                alt=""
              />
            </Link>
          </h1>
          <div className="header_right">
            <ul className="header_nav pc">
              <li>
                <Link to="/about_me">about Me</Link>
              </li>
              <li>
                <Link to="/photopolios">photopolio</Link>
              </li>

              {isLoggedIn ? (
                <li>
                  <Link to="/mypage">myPage</Link>
                </li>
              ) : null}
              {isLoggedIn ? null : (
                <li>
                  <Link
                    onClick={() => {
                      alert('열람을 위해 잠시 block하였습니다.')
                    }}
                    to="/#"
                  >
                    Join
                  </Link>
                </li>
              )}

              {isLoggedIn ? (
                <li>
                  <Link onClick={logUserOut} to="/">
                    logOut
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    onClick={() => {
                      alert('열람을 위해 잠시 block하였습니다.')
                    }}
                    to="/#"
                  >
                    logIn
                  </Link>
                </li>
              )}
              {isLoggedIn ? (
                <li>
                  <p>
                    <span>{data?.me?.name}님</span>
                    <hr></hr>환영합니다.
                  </p>
                </li>
              ) : null}
            </ul>
            <div className="header_icon">
              <div onClick={() => setNavOpen(true)} className="i_hamberger">
                <img
                  src={
                    pathname !== '/' || scrollState > 30
                      ? i_hamberger
                      : i_w_hamberger
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
