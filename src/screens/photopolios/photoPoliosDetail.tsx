import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img_1 from '../../assets/img/img1.png'
import i_cart from '../../assets/img/m-product-b-cart.png'
import '../../assets/css/PhotoPoliosDetail.css'

function PhotoPoliosDetail(props: any) {
  const pInfo = props.location.state.pInfo
  console.log(pInfo)
  // 탭
  const [tabNow, setTabNow] = useState(1)

  // 제품 구매
  const [buyOpen, setBuyOpen] = useState(false)
  const buy = () => {
    return setBuyOpen(!buyOpen)
  }

  return (
    <div className="product">
      <div className="product_top">
        <div className="product_img">
          <img src={pInfo.file} alt="" />
        </div>
        <div className="product_text">
          <h4>{pInfo.subject}</h4>
          <p>{pInfo.caption}</p>
          <div className="product_box pc">
            <div className="buy_box">
              <div>
                <Link to="/order">수정</Link>
              </div>
              <div>
                <Link to="/order">삭제하기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_info">
        <div className="product_info_box">
          <div className="product_guide">
            <ul className="product_guide_list">
              <li>
                <h4>배송안내</h4>
                <p>
                  공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.
                  공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.
                  공지사항 내용입니다. 공지사항 내용입니다. 공지사항 내용입니다.
                  공지사항 내용입니다. 공지사항 내용입니다.
                </p>
              </li>
              <li>
                <h4>교환 및 반품안내</h4>
                <p>
                  교환 및 반품안내 텍스트입니다. 교환 및 반품안내 텍스트입니다.
                  교환 및 반품안내 텍스트입니다. 교환 및 반품안내 텍스트입니다.
                  교환 및 반품안내 텍스트입니다. 교환 및 반품안내 텍스트입니다.
                  교환 및 반품안내 텍스트입니다. 교환 및 반품안내 텍스트입니다.
                  교환 및 반품안내 텍스트입니다. 교환 및 반품안내 텍스트입니다.
                  교환 및 반품안내 텍스트입니다.
                </p>
              </li>
              <li>
                <h4>환불안내</h4>
                <p>
                  환불안내 텍스트입니다. 환불안내 텍스트입니다. 환불안내
                  텍스트입니다. 환불안내 텍스트입니다. 환불안내 텍스트입니다.
                  환불안내 텍스트입니다. 환불안내 텍스트입니다. 환불안내
                  텍스트입니다. 환불안내 텍스트입니다. 환불안내 텍스트입니다.
                  환불안내 텍스트입니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoPoliosDetail
