import React from 'react'
import image from '../Image.webp';

const CandidateDetail = () => {
  return (
    <div className='candidateDetail'>
      <div className='candidateImage'>
        <img src={image} alt="" />
      </div>

      <div className='imgAndName'>
        <div className='time'>
          Time Left: <span>02:39:29</span>
        </div>
        <p className='candidateName'><em>Ashish Kumar</em></p>
      </div>
    </div>
  )
}

export default CandidateDetail
