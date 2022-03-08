import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import i_close from '../../../assets/img/w-cancel-icon.png'
import '../../../assets/css/pop.css'
//css
import '../../../assets/css/DeletePhotopoilo.css'
import { gql, useMutation } from '@apollo/client'
import { SubmitHandler, useForm } from 'react-hook-form'

const DELETE_PHOTO_CSS_MUTATION = gql`
  mutation deletePhotoCss($id: Int!) {
    deletePhotoCss(id: $id) {
      ok
      error
    }
  }
`

export default function DeletePhotoPolioCss({
  pInfo,
  delPhoto,
  setDelPhoto,
}: any) {
  //삭제후 돌아가기
  const onCompleted = (data: any) => {
    if (data) {
      alert('게시물이 삭제되었습니다.')
      window.location.replace('/portfolios')
    } else {
    }
    console.log(data)
  }

  const [delPhotoCssMutaion] = useMutation<any>(DELETE_PHOTO_CSS_MUTATION, {
    onCompleted,
  })
  const onSubmitValid: SubmitHandler<any> = (data: any) => {
    delPhotoCssMutaion({
      variables: {
        id: pInfo.id,
      },
    })
  }

  return (
    <div className="pop">
      <div className="contract_terms_pop my_info_edit_pw_pop my_info_withdrawal_pop">
        <div className="close" onClick={() => setDelPhoto(false)}>
          <img src={i_close} alt="" />
        </div>
        <h3 className="pop_tit">게시물삭제</h3>
        <form className="edit_pw_input_form">
          <div>
            <h4>한번 삭제된 게시물은 복구 할 수 없습니다.</h4>
            <h4>그래도 삭제하시겠습니까?</h4>
          </div>
        </form>
        <div className="terms_pop_btn btn_box">
          <div className="cancel">
            <p onClick={() => setDelPhoto(false)}>취소</p>
          </div>
          <div className="ok" onClick={onSubmitValid}>
            <p>확인</p>
          </div>
        </div>
      </div>
    </div>
  )
}
