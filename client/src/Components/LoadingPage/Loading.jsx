import React from 'react'
import loading from '../../img/loadingGif.gif'
export default function Loading() {
  return (
      <div style={{ textAlign:'center', width:'100%', backgroundColor:'whitesmoke'}}>
          <img alt='loading...' src={loading} />
      </div>
  )
}