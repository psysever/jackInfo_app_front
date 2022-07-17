import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import item from '../../assets/img/product-img-1.png'
import '../../assets/css/Photopolios.css'
import { gql, useMutation, useQuery, useReactiveVar } from '@apollo/client'
import {
  PHOTO_CSS_FRAGMENT,
  PHOTO_FRAGMENT,
  PHOTO_RJ_FRAGMENT,
  PHOTO_RN_FRAGMENT,
} from '../../components/frgments'
import Pagenaition from '../../components/Pagenation'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isLoggedInVar } from '../../apollo'

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      Photo {
        ...PhotoFragment
      }
      PhotoCss {
        ...PhotoCssFragment
      }
      PhotoRJ {
        ...PhotoRJFragment
      }
      PhotoRN {
        ...PhotoRNFragment
      }
      totalCount
    }
  }
  ${PHOTO_FRAGMENT}
  ${PHOTO_CSS_FRAGMENT}
  ${PHOTO_RJ_FRAGMENT}
  ${PHOTO_RN_FRAGMENT}
`
const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`
const TOGGLE_LIKE_CSS_MUTATION = gql`
  mutation toggleLikeCss($id: Int!) {
    toggleLikeCss(id: $id) {
      ok
      error
    }
  }
`
const TOGGLE_LIKE_RJ_MUTATION = gql`
  mutation toggleLikeRJ($id: Int!) {
    toggleLikeRJ(id: $id) {
      ok
      error
    }
  }
`
const TOGGLE_LIKE_RN_MUTATION = gql`
  mutation toggleLikeRN($id: Int!) {
    toggleLikeRN(id: $id) {
      ok
      error
    }
  }
`

function PhotoPolios({ id }: any) {
  const history = useHistory()
  // 탭
  const [tabNow, setTabNow] = useState(1)
  const [pInfo, setPinfo] = useState<any>()
  const [pInfoCss, setPinfoCss] = useState<any>()
  const [pInfoRJ, setPinfoRJ] = useState<any>()
  const [pInfoRN, setPinfoRN] = useState<any>()
  const isLoggedIn = useReactiveVar(isLoggedInVar)

  // 페이지네이션
  const [maxNum, setMaxNum] = useState<any>(0)
  //sort 스테이트
  const [sortPageList, setSortPageList] = useState<any>({
    nowPage: 0,
    s_no: 0,
  })

  const [pId, setPid] = useState<any>()
  const [cpId, setcpIdid] = useState<any>(true)
  const [pIdCss, setPidCss] = useState<any>()
  const [cpIdCss, setcpIdidCss] = useState<any>(true)
  const [pIdRJ, setPidRJ] = useState<any>()
  const [cpIdRJ, setcpIdidRJ] = useState<any>(true)
  const [pIdRN, setPidRN] = useState<any>()
  const [cpIdRN, setcpIdidRN] = useState<any>(true)
  const [isLiked, setIsLiked] = useState<any>(false)
  const [likes, setlikes] = useState<any>(false)
  const { data } = useQuery<any>(FEED_QUERY, {
    fetchPolicy: 'network-only',
  })
  console.log(data)
  const fileUrl =
    'https://showjack-uploads.s3.ap-northeast-2.amazonaws.com/uploadPhotoNode/1-1641470076397-%EA%B0%80%EC%9E%85%ED%9B%84-%EA%B4%80%EB%A6%AC%EC%9E%90+%EC%8A%B9%EC%9D%B8+%EB%B0%9C%EB%A6%AC%EB%8D%B0%EC%9D%B4%EC%85%98.mp4'
  const decodeUrl = decodeURI(fileUrl)
  const folderName = 'uploadPhotoRJ'
  const filePath = decodeUrl.split('/')[4] // 파일명만 split 후 선택
  const fileName = `${folderName}/${filePath}`
  console.log(filePath)

  useEffect(() => {
    alert('무료배포이므로 데이터랜딩이 다소 느려 약 20초안으로 랜딩됩니다.')
  }, [])

  //NOde
  const updateToggleLike = (cache: any, result: any) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result
    if (ok) {
      const fragmentId = `Photo:${pId}`
      const fragment = gql`
        fragment BSName on Photo {
          isLiked
          likes
        }
      `
      const result = cache.readFragment({
        id: fragmentId,
        fragment,
      })
      console.log(result)
      if ('isLiked' in result && 'likes' in result) {
        const { isLiked: cacheIsLiked, likes: cacheLikes } = result
        cache.writeFragment({
          id: fragmentId,
          fragment,
          data: {
            isLiked: !cacheIsLiked,
            likes: cacheIsLiked ? cacheLikes - 1 : cacheLikes + 1,
          },
        })
      }
    }
  }

  //CSS
  const updateToggleLikeCss = (cache: any, result: any) => {
    const {
      data: {
        toggleLikeCss: { ok },
      },
    } = result
    if (ok) {
      const fragmentId = `PhotoCss:${pIdCss}`
      const fragment = gql`
        fragment BSName on PhotoCss {
          isLiked
          likes
        }
      `
      const result = cache.readFragment({
        id: fragmentId,
        fragment,
      })

      if ('isLiked' in result && 'likes' in result) {
        const { isLiked: cacheIsLiked, likes: cacheLikes } = result
        cache.writeFragment({
          id: fragmentId,
          fragment,
          data: {
            isLiked: !cacheIsLiked,
            likes: cacheIsLiked ? cacheLikes - 1 : cacheLikes + 1,
          },
        })
      }
    }
  }

  //RJ
  const updateToggleLikeRJ = (cache: any, result: any) => {
    const {
      data: {
        toggleLikeRJ: { ok },
      },
    } = result
    if (ok) {
      const fragmentId = `PhotoRJ:${pIdRJ}`
      const fragment = gql`
        fragment BSName on PhotoRJ {
          isLiked
          likes
        }
      `
      const result = cache.readFragment({
        id: fragmentId,
        fragment,
      })

      if ('isLiked' in result && 'likes' in result) {
        const { isLiked: cacheIsLiked, likes: cacheLikes } = result
        cache.writeFragment({
          id: fragmentId,
          fragment,
          data: {
            isLiked: !cacheIsLiked,
            likes: cacheIsLiked ? cacheLikes - 1 : cacheLikes + 1,
          },
        })
      }
    }
  }
  //RN
  const updateToggleLikeRN = (cache: any, result: any) => {
    const {
      data: {
        toggleLikeRN: { ok },
      },
    } = result
    if (ok) {
      const fragmentId = `PhotoRN:${pIdRN}`
      const fragment = gql`
        fragment BSName on PhotoRN {
          isLiked
          likes
        }
      `
      const result = cache.readFragment({
        id: fragmentId,
        fragment,
      })
      if ('isLiked' in result && 'likes' in result) {
        const { isLiked: cacheIsLiked, likes: cacheLikes } = result
        cache.writeFragment({
          id: fragmentId,
          fragment,
          data: {
            isLiked: !cacheIsLiked,
            likes: cacheIsLiked ? cacheLikes - 1 : cacheLikes + 1,
          },
        })
      }
    }
  }

  //NODE
  const [toggleLikeMutation] = useMutation<any>(TOGGLE_LIKE_MUTATION, {
    variables: {
      id: pId,
    },
    update: updateToggleLike,
  })

  useEffect(() => {
    if (pId) {
      toggleLikeMutation()
    }
  }, [pId, cpId])

  //CS

  const [toggleLikeCssMutation] = useMutation<any>(TOGGLE_LIKE_CSS_MUTATION, {
    variables: {
      id: pIdCss,
    },
    update: updateToggleLikeCss,
  })

  useEffect(() => {
    if (pIdCss) {
      toggleLikeCssMutation()
    }
  }, [pIdCss, cpIdCss])

  //RJ
  const [toggleLikeRJMutation] = useMutation<any>(TOGGLE_LIKE_RJ_MUTATION, {
    variables: {
      id: pIdRJ,
    },
    update: updateToggleLikeRJ,
  })

  useEffect(() => {
    if (pIdRJ) {
      toggleLikeRJMutation()
    }
  }, [pIdRJ, cpIdRJ])

  //RN
  const [toggleLikeRNMutation] = useMutation<any>(TOGGLE_LIKE_RN_MUTATION, {
    variables: {
      id: pIdRN,
    },
    update: updateToggleLikeRN,
  })

  useEffect(() => {
    if (pIdRN) {
      toggleLikeRNMutation()
    }
  }, [pIdRN, cpIdRN])

  useEffect(() => {
    if (data) {
      setPinfo(data.seeFeed.Photo)
      setPinfoCss(data.seeFeed.PhotoCss)
      setPinfoRJ(data.seeFeed.PhotoRJ)
      setPinfoRN(data.seeFeed.PhotoRN)
      setMaxNum(data.seeFeed.totalCount)
    }
  }, [data])

  //HeartVaildation
  const onClickHeartVaildation = () => {
    if (isLoggedIn === null) {
      return alert('로그인이 필요한 기능입니다.')
    }
    console.log(isLoggedIn)
  }

  console.log(data)

  return (
    <div className="my_list">
      <h2>Portfolio</h2>
      <ul className="product_tab">
        <li
          onClick={() => setTabNow(1)}
          className={tabNow === 1 ? 'nowpage' : ''}
        >
          SASS &amp;&amp; CSS
        </li>
        <li
          onClick={() => setTabNow(2)}
          className={tabNow === 2 ? 'nowpage' : ''}
        >
          React JS
        </li>
        <li
          onClick={() => setTabNow(3)}
          className={tabNow === 3 ? 'nowpage' : ''}
        >
          React Native
        </li>
        <li
          onClick={() => setTabNow(4)}
          className={tabNow === 4 ? 'nowpage' : ''}
        >
          Node.js
        </li>
      </ul>
      <div className="my_list_info">
        <div className="product_list_top">
          {tabNow === 1 ? (
            <p>
              총 <span>{pInfoCss && pInfoCss.length}</span>
              개의 포토폴리오가 있습니다.
            </p>
          ) : tabNow === 2 ? (
            <p>
              총 <span>{pInfoRJ && pInfoRJ.length}</span>
              개의 포토폴리오가 있습니다.
            </p>
          ) : tabNow === 3 ? (
            <p>
              총 <span>{pInfoRN && pInfoRN.length}</span>
              개의 포토폴리오가 있습니다.
            </p>
          ) : tabNow === 4 ? (
            <p>
              총 <span>{pInfo && pInfo.length}</span>
              개의 포토폴리오가 있습니다.
            </p>
          ) : (
            ''
          )}
          <div className="product_list_add">
            {isLoggedIn ? (
              <Link
                to={
                  tabNow === 1
                    ? '/uploadform_css'
                    : tabNow === 2
                    ? '/uploadform_RJ'
                    : tabNow === 3
                    ? '/uploadform_RN'
                    : tabNow === 4
                    ? '/uploadform_node'
                    : ''
                }
              >
                {tabNow === 1
                  ? 'CSS 게시글 올리기'
                  : tabNow === 2
                  ? 'RJ 게시글 올리기'
                  : tabNow === 3
                  ? 'RN 게시글 올리기'
                  : tabNow === 4
                  ? 'NODE 게시글 올리기'
                  : ''}
              </Link>
            ) : (
              <Link
                onClick={() => {
                  alert('로그인을 해주세요')
                }}
                to={
                  tabNow === 1
                    ? '#'
                    : tabNow === 2
                    ? '#'
                    : tabNow === 3
                    ? '#'
                    : tabNow === 4
                    ? '#'
                    : ''
                }
              >
                {tabNow === 1
                  ? 'CSS 게시글 올리기'
                  : tabNow === 2
                  ? 'RJ 게시글 올리기'
                  : tabNow === 3
                  ? 'RN 게시글 올리기'
                  : tabNow === 4
                  ? 'NODE 게시글 올리기'
                  : ''}
              </Link>
            )}
          </div>
          <select>
            <option value="상품정렬">정렬보기</option>
            <option value="신상순">최신순</option>
            <option value="인기순">좋아요순</option>
          </select>
        </div>
        {/* sass css */}
        {tabNow === 1 && (
          <ul className="product_item_list">
            {pInfoCss?.map((item: any, i: any) => {
              return (
                <li key={item.id} id={item.id}>
                  <div
                    className="photo"
                    onClick={() => {
                      history.push({
                        pathname: `/portfolios_detail_css/${i}`,
                        state: { pInfoCss: pInfoCss[i] },
                      })
                    }}
                  >
                    <div className="product_img">
                      <img src={item.file} alt="" />
                    </div>
                    <div className="product_text">
                      <h5>{item.subject}</h5>
                      <p>클릭하면 자세히 볼 수 있습니다.</p>
                    </div>
                  </div>
                  <div
                    className="likes"
                    onClick={() => {
                      setPidCss(item.id)
                      setcpIdidCss(!cpIdCss)
                      setIsLiked(item.isLiked)
                      setlikes(item.likes)
                      onClickHeartVaildation()
                    }}
                  >
                    <FontAwesomeIcon
                      size={'2x'}
                      style={{
                        color: item.isLiked ? 'tomato' : 'inherit',
                      }}
                      icon={item.isLiked ? SolidHeart : faHeart}
                    />
                    <p>{item.likes === 0 ? '0 like' : `${item.likes} likes`}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        {/* React Js */}
        {tabNow === 2 && (
          <ul className="product_item_list">
            {pInfoRJ?.map((item: any, i: any) => {
              return (
                <li key={item.id} id={item.id}>
                  <div
                    className="photo"
                    onClick={() => {
                      history.push({
                        pathname: `/portfolios_detail_rj/${i}`,
                        state: { pInfoRJ: pInfoRJ[i] },
                      })
                    }}
                  >
                    <div className="product_img">
                      <img src={item.file} alt="" />
                    </div>
                    <div className="product_text">
                      <h5>{item.subject}</h5>
                      <p>클릭하면 자세히 볼 수 있습니다.</p>
                    </div>
                  </div>
                  <div
                    className="likes"
                    onClick={() => {
                      setPidRJ(item.id)
                      setcpIdidRJ(!cpIdRJ)
                      setIsLiked(item.isLiked)
                      setlikes(item.likes)
                    }}
                  >
                    <FontAwesomeIcon
                      size={'2x'}
                      style={{
                        color: item.isLiked ? 'tomato' : 'inherit',
                      }}
                      icon={item.isLiked ? SolidHeart : faHeart}
                    />
                    <p>{item.likes === 0 ? '0 like' : `${item.likes} likes`}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        {/* React Native */}
        {tabNow === 3 && (
          <ul className="product_item_list">
            {pInfoRN?.map((item: any, i: any) => {
              return (
                <li key={item.id} id={item.id}>
                  <div
                    className="photo"
                    onClick={() => {
                      history.push({
                        pathname: `/portfolios_detail_rn/${i}`,
                        state: { pInfoRN: pInfoRN[i] },
                      })
                    }}
                  >
                    <div className="product_img">
                      <img src={item.file} alt="" />
                    </div>
                    <div className="product_text">
                      <h5>{item.subject}</h5>
                      <p>클릭하면 자세히 볼 수 있습니다.</p>
                    </div>
                  </div>
                  <div
                    className="likes"
                    onClick={() => {
                      setPidRN(item.id)
                      setcpIdidRN(!cpIdRN)
                      setIsLiked(item.isLiked)
                      setlikes(item.likes)
                    }}
                  >
                    <FontAwesomeIcon
                      size={'2x'}
                      style={{
                        color: item.isLiked ? 'tomato' : 'inherit',
                      }}
                      icon={item.isLiked ? SolidHeart : faHeart}
                    />
                    <p>{item.likes === 0 ? '0 like' : `${item.likes} likes`}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        {/* Node Js */}
        {tabNow === 4 && (
          <ul className="product_item_list">
            {pInfo?.map((item: any, i: any) => {
              return (
                <li key={item.id} id={item.id}>
                  <div
                    className="photo"
                    onClick={() => {
                      history.push({
                        pathname: `/portfolios_detail_node/${i}`,
                        state: { pInfo: pInfo[i] },
                      })
                    }}
                  >
                    <div className="product_img">
                      <img src={item.file} alt="" />
                    </div>
                    <div className="product_text">
                      <h5>{item.subject}</h5>
                      <p>클릭하면 자세히 볼 수 있습니다.</p>
                    </div>
                  </div>
                  <div
                    className="likes"
                    onClick={() => {
                      setPid(item.id)
                      setcpIdid(!cpId)
                      setIsLiked(item.isLiked)
                      setlikes(item.likes)
                    }}
                  >
                    <FontAwesomeIcon
                      size={'2x'}
                      style={{
                        color: item.isLiked ? 'tomato' : 'inherit',
                      }}
                      icon={item.isLiked ? SolidHeart : faHeart}
                    />
                    <p>{item.likes === 0 ? '0 like' : `${item.likes} likes`}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        {/* 
        <Pagenaition
          maxNum={maxNum}
          setSortPageList={setSortPageList}
          sortPageList={sortPageList}
        /> */}
      </div>
    </div>
  )
}

export default PhotoPolios
