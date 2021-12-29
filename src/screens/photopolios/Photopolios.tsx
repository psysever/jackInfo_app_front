import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import item from '../../assets/img/product-img-1.png'
import '../../assets/css/Photopolios.css'
import { gql, useMutation, useQuery } from '@apollo/client'
import { PHOTO_CSS_FRAGMENT, PHOTO_FRAGMENT } from '../../components/frgments'
import Pagenaition from '../../components/Pagenation'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubmitHandler, useForm } from 'react-hook-form'

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      Photo {
        ...PhotoFragment
      }
      PhotoCss {
        ...PhotoCssFragment
      }
      totalCount
    }
  }
  ${PHOTO_FRAGMENT}
  ${PHOTO_CSS_FRAGMENT}
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

function PhotoPolios({ id }: any) {
  const history = useHistory()
  // 탭
  const [tabNow, setTabNow] = useState(1)
  const [pInfo, setPinfo] = useState<any>()
  const [pInfoCss, setPinfoCss] = useState<any>()

  // 페이지네이션
  const [maxNum, setMaxNum] = useState<any>(1)
  //sort 스테이트
  const [sortPageList, setSortPageList] = useState<any>({
    nowPage: 1,
    s_no: 1,
  })

  const [pId, setPid] = useState<any>()
  const [cpId, setcpIdid] = useState<any>(true)
  const [pIdCss, setPidCss] = useState<any>()
  const [cpIdCss, setcpIdidCss] = useState<any>(true)
  const [isLiked, setIsLiked] = useState<any>(false)
  const [likes, setlikes] = useState<any>(false)
  const { data } = useQuery<any>(FEED_QUERY, {
    fetchPolicy: 'network-only',
  })

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

  useEffect(() => {
    if (data) {
      setPinfo(data.seeFeed.Photo)
      setPinfoCss(data.seeFeed.PhotoCss)
      setMaxNum(data.seeFeed.totalCount)
    }
  }, [data])
  console.log(data)
  console.log(pId)
  return (
    <div className="my_list">
      <h2>PhotoPolios</h2>
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
          <p>
            총 <span>{maxNum && maxNum}</span>
            개의 포토폴리오가 있습니다.
          </p>
          <div className="product_list_add">
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
              게시글 올리기
            </Link>
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
                        pathname: `/photopoliosDetail/${i}`,
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
            <li>
              <Link to="/photopoliosDetail">
                <div className="product_img">
                  <img src={item} alt="" />
                </div>
                <div className="product_text">
                  <h5>허리 스트레칭 기구</h5>
                  <p>
                    곧은 척추를 위한 스트레칭 기구입니다. 바른 자세를 위해
                    사용해보세요.
                  </p>
                  <p className="pay">
                    72,900원<span>191,000원</span>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        )}
        {/* React Native */}
        {tabNow === 3 && (
          <ul className="product_item_list">
            <li>
              <Link to="/product">
                <div className="product_img">
                  <img src={item} alt="" />
                </div>
                <div className="product_text">
                  <h5>허리 스트레칭 기구</h5>
                  <p>
                    곧은 척추를 위한 스트레칭 기구입니다. 바른 자세를 위해
                    사용해보세요.
                  </p>
                  <p className="pay">
                    72,900원<span>191,000원</span>
                  </p>
                </div>
              </Link>
            </li>
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
                       pathname: `/photopoliosDetail/${i}`,
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

        <Pagenaition
          maxNum={maxNum}
          setSortPageList={setSortPageList}
          sortPageList={sortPageList}
        />
      </div>
    </div>
  )
}

export default PhotoPolios
