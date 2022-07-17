import React, { useState } from 'react'

import '../../assets/css/AboutMe.css'
import face from '../../assets/img/face.png'

function AboutMe() {
  // 탭
  const [tabNow, setTabNow] = useState(1)

  // 페이지네이션
  const [page, setPage] = useState(1)

  return (
    <div className="my_list">
      <h2>Who am I?</h2>
      <ul className="my_tab">
        <li
          onClick={() => setTabNow(1)}
          className={tabNow === 1 ? 'nowpage' : ''}
        >
          About Me
        </li>
        <li
          onClick={() => setTabNow(2)}
          className={tabNow === 2 ? 'nowpage' : ''}
        >
          research
        </li>
        <li
          onClick={() => setTabNow(3)}
          className={tabNow === 3 ? 'nowpage' : ''}
        >
          Awards
        </li>
        <li
          onClick={() => setTabNow(4)}
          className={tabNow === 4 ? 'nowpage' : ''}
        >
          Travel log
        </li>
      </ul>
      {tabNow === 1 && (
        <div className="my_list_info">
          <div className="my_item_list">
            <img src={face} alt="" />
          </div>
          <div className="info_story">
            <ul className="info_story_list">
              <li>
                <div className="info_story_text">
                  <h4 className="en">--소개--</h4>
                  <br />
                  <br />
                  <h3 className="en">-이름 : 정창모</h3>
                  <br />
                  <h3 className="en">-나이 : 1991.02.13</h3>
                  <br />
                  <h3 className="en">-주소 : 인천광역시 연수구 송도동</h3>
                  <br />
                  <h3 className="en">
                    -병역: 해병대 만기 전역 (2010.06 ~2012.03){' '}
                  </h3>
                  <br />
                  <h3 className="en">-입사시기 : 즉시가능</h3>
                  <br />
                  <h3 className="en">
                    -학력사항(대학교) : 호서대학교 로봇공학과 졸업 (2009. 03 –
                    2016. 02)
                  </h3>
                  <br />
                  <h3 className="en">
                    -학력사항(고등학교) : 신송고등학교 이과 졸업 (2006. 03 -
                    2009. 02)
                  </h3>
                  <br />
                </div>
                <div className="info_story_texttwo">
                  <h4 className="en">--경력사항--</h4>
                  <br />
                  <br />
                  <h4 className="en">-체인랩스아이티 2022.03 - Ing... </h4>
                  <br />
                  <br />
                  <h3>- 개발팀원</h3>
                  <br />
                  <h3>- 풀스택개발자</h3>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h4 className="en">
                    - 더빌드 소프트 2021.06 - 2022.01 (8개월 근무)
                  </h4>
                  <br />
                  <br />
                  <h3>- 개발팀원</h3>
                  <br />
                  <h3>- FrontEnd개발자</h3>
                  <br />
                  <br />
                  <br />
                  <h4 className="en">
                    - Chandler Macleod Company(호주) 2018. 07 - 2019. 08 (13개월
                    근무)
                  </h4>
                  <br />
                  <br />
                  <h3>- 사원</h3>
                  <br />
                  <h3>- 품질체크 , 서브 엔지니어</h3>
                  <br />
                  <br />
                  <h4 className="en">
                    - Quad Ltc Company(호주) 2017. 06 - 2018. 06 (13개월 근무)
                  </h4>
                  <br />
                  <br />
                  <h3>- 슈퍼바이져</h3>
                  <br />
                  <h3>- 팀장, 고객미팅, 제안서/견적서 작성, 고객대응</h3>
                  <br />
                  <br />
                  <h4 className="en">
                    - 세한소방 2016. 02 - 2016. 12 (10개월 근무)
                  </h4>
                  <br />
                  <br />
                  <h3>- 사원</h3>
                  <br />
                  <h3>- 품질체크 , 서브 엔지니어</h3>
                  <br />
                  <br />
                  <h4 className="en">
                    -일진 LED 2012. 03 - 2013. 03 (12개월 근무)
                  </h4>
                  <br />
                  <br />
                  <h3>- 사원</h3>
                  <br />
                  <h3>- 품질체크 , 서브 엔지니어</h3>
                  <br />
                </div>
                <div className="info_story_texttwo">
                  <h4 className="en">--보유기술--</h4>
                  <br />
                  <br />
                  <h3>
                    -FrontEnd :
                    Html,CSS,JavaScript,TypeScript,ReactJS,ReactNative,Redux
                  </h3>
                  <br />
                  <h3>
                    -BackEnd :
                    TypeScript,JavaScript,Node.Js,GraphQL-Apollo-server-express,Prisma
                  </h3>
                  <br />
                  <h3>-DB : postgreSQL,MongGoDB</h3>
                  <br />
                </div>
                <div className="info_story_texttwo">
                  <h4 className="en">--활동사항--</h4>
                  <br />
                  <br />
                  <h4 className="en">
                    - 호서대학교(아산, 천안캠퍼스) 2015.01 - 2015.12 (12개월)
                  </h4>
                  <br />
                  <br />
                  <h3>- 제31대 총학생회 대외협력장 역임</h3>
                  <br />
                  <h3>- 학내/외 행사 및 사업 추진/관리, 국가 행사 참여 등 </h3>
                  <br />
                  <h3>
                    - 모바일 학생증 도입, 천안 지역 쿠폰북 제작/배포 등
                    학생복지활동 실현
                  </h3>
                  <br />
                  <h3>- 호서대학교 최초 양 캠퍼스 축제 진행 </h3>
                  <br />
                  <br />
                  <h4 className="en">
                    - 호서대학교(아산캠퍼스 공과대학) 2014.01 - 2014.12 (12개월)
                  </h4>
                  <br />
                  <br />
                  <h3>- 제8대 로봇공학과 임원 역임</h3>
                  <br />
                  <h3>- 학내 행사 진행 및 학과 관리</h3>
                  <br />
                  <h3>- 교수진과 학생들간 친목 관계 형성</h3>
                  <br />
                  <h3>
                    - 선후배간 마찰이 없는 학생들이 다니고 싶은 학과 만들기 추진
                  </h3>
                  <br />
                  <br />
                </div>
                <div className="info_story_text3">
                  <h4 className="en">--자격증 및 교육활동--</h4>
                  <br />
                  <br />
                  <h4>- 정보처리기사 실기 예정 중(2022.05)</h4>
                  <br />
                  <h4>- 국제영어능력시험 IELTS -IELTS 5.5 취득 (2020. 04)</h4>
                  <br />
                  <h4>
                    - 더조은컴퓨터학원 빅테이터 분석을 위한 머신러닝 딥러닝
                    교육이수 (2020.08 - 2021.03 (8개월))
                  </h4>
                  <br />
                  <h4>- 운전면허증 1종 보통 (2009. 02)</h4>
                  <br />
                  <br />
                </div>
                <div className="info_story_texttwo">
                  <h4 className="en">--수상내역--</h4>
                  <br />
                  <br />
                  <h4 className="en">
                    - 인천상공회의소 EBS주최 상장 (2009.06)
                  </h4>
                  <br />
                  <br />
                  <h3>- 배틀로봇부문 1위 우승 2회</h3>
                  <br />
                  <br />
                  <h4 className="en">
                    - 국제로봇컨테스트(IRC) 상장 (2009. 09)
                  </h4>
                  <br />
                  <br />
                  <h3 className="en">- 전투로봇부문 4위 입상 </h3>
                  <br />
                  <br />
                  <h4 className="en">- 리더십 우수자 상장 (2015. 05 )</h4>
                  <br />
                  <br />
                  <h3>- 호서대학교 </h3>
                  <br />
                  <br />
                  <h4 className="en">- 공로상 (2016. 02)</h4>
                  <br />
                  <br />
                  <h3>- 호서대학교 </h3>
                  <br />
                  <br />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutMe
