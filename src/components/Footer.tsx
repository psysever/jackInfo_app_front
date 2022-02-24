import React from 'react'
import '../assets/css/Footer.css'
import insta from '../assets/img/btn_instar.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>연락처</p>
        <h5>010-3863-3811</h5>
      </div>
      <div className="footer_right">
        <div className="company">
          <p>
            <span>이름 : 정창모</span>
          </p>
          <p>
            <span>이메일 : wlfah99@gmail.com</span>
          </p>
          <p>
            <span>주소 : 인천광역시 연수구 송도동</span>
          </p>
          <a
            onClick={() =>
              window.open('https://www.instagram.com/j.c___m/?hl=ko', '_blank')
            }
          >
            <img className="instaimg" src={insta} alt="" />
          </a>
          <p className="copyright en">&#169; I can do it</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
