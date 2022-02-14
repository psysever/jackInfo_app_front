import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useHistory } from 'react-router-dom'
import '../../assets/css/PhotoPoliosDetail.css'
import DeletePhotoPolioCss from './deletePhotoPolios/DeletePhotopoiloCss'

function PhotoPoliosDetailCss(props: any) {
  const history = useHistory()
  const pInfo = props.location.state.pInfoCss
  console.log(pInfo)
  // 탭

  const [delPhoto, setDelPhoto] = useState(false)
  const [pInfoCss, setPInfo] = useState(pInfo)

  return (
    <div className="product">
      <div className="product_top">
        <div className="product_img">
          <img src={pInfo.file} alt="" />
        </div>
        <div className="product_text">
          <h4>{pInfo.subject}</h4>
          <p>{pInfo.skils}</p>
          {pInfo.isMine ? (
            <div className="buy_box">
              <div>
                <p
                  onClick={() => {
                    history.push({
                      pathname: '/edit_photopolios_css',
                      state: { pInfoCss: pInfoCss },
                    })
                  }}
                >
                  수정하기
                </p>
              </div>
              <div>
                <p onClick={() => setDelPhoto(true)}>삭제하기</p>
              </div>
            </div>
          ) : null}
          {delPhoto ? (
            <DeletePhotoPolioCss
              delPhoto={delPhoto}
              setDelPhoto={setDelPhoto}
              pInfo={pInfo}
            />
          ) : null}
        </div>
      </div>
      <div className="product_info">
        <div className="product_info_box">
          <div className="product_guide">
            <ul className="product_guide_list">
              {pInfo.file2 && (
                <li>
                  <h4>1.{pInfo.subject2}</h4>
                  {pInfo.file2 && pInfo.file2.split('.')[5] === 'mp4' ? (
                    <ReactPlayer controls url={pInfo.file2} />
                  ) : (
                    pInfo.file2 && <img src={pInfo.file2} alt="" />
                  )}
                </li>
              )}
              {pInfo.file3 && (
                <li>
                  <h4>2.{pInfo.subject3}</h4>
                  {pInfo.file3 && pInfo.file3.split('.')[5] === 'mp4' ? (
                    <ReactPlayer controls url={pInfo.file3} />
                  ) : (
                    pInfo.file3 && <img src={pInfo.file3} alt="" />
                  )}
                </li>
              )}
              <li>
                {pInfo.file4 && (
                  <li>
                    <h4>3.{pInfo.subject4}</h4>
                    {pInfo.file4 && pInfo.file4.split('.')[5] === 'mp4' ? (
                      <ReactPlayer controls url={pInfo.file4} />
                    ) : (
                      pInfo.file4 && <img src={pInfo.file4} alt={pInfo.file4} />
                    )}
                  </li>
                )}
              </li>
              <li>
                {pInfo.file5 && (
                  <li>
                    <h4>4.{pInfo.subject5}</h4>
                    {pInfo.file5 && pInfo.file5.split('.')[5] === 'mp4' ? (
                      <ReactPlayer controls url={pInfo.file5} />
                    ) : (
                      pInfo.file5 && <img src={pInfo.file5} alt={pInfo.file5} />
                    )}
                  </li>
                )}
              </li>
              <li>
                {pInfo.file6 && (
                  <li>
                    <h4>5.{pInfo.subject6}</h4>
                    {pInfo.file6 && pInfo.file6.split('.')[5] === 'mp4' ? (
                      <ReactPlayer controls url={pInfo.file6} />
                    ) : (
                      pInfo.file6 && <img src={pInfo.file6} alt={pInfo.file6} />
                    )}
                  </li>
                )}
              </li>
              <li>
                {pInfo.file7 && (
                  <li>
                    <h4>6.{pInfo.subject7}</h4>
                    {pInfo.file7 && pInfo.file7.split('.')[5] === 'mp4' ? (
                      <ReactPlayer controls url={pInfo.file7} />
                    ) : (
                      pInfo.file7 && <img src={pInfo.file7} alt={pInfo.file7} />
                    )}
                  </li>
                )}
              </li>
              <li>
                {pInfo.file8 && (
                  <li>
                    <h4>7.{pInfo.subject8}</h4>
                    {pInfo.file8 && pInfo.file8.split('.')[5] === 'mp4' ? (
                      <ReactPlayer controls url={pInfo.file8} />
                    ) : (
                      pInfo.file8 && <img src={pInfo.file8} alt={pInfo.file8} />
                    )}
                  </li>
                )}
              </li>
              <li>
                <h4>- 설명</h4>
                {pInfo.caption && (
                  <li>
                    <p>{pInfo.caption}</p>
                  </li>
                )}
              </li>
              <li>
                <h4>- 사용된 스킬</h4>
                {pInfo.skils && (
                  <li>
                    <p>{pInfo.skils}</p>
                  </li>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoPoliosDetailCss
