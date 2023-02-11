import React from 'react'
import CandidateDetail from './CandidateDetail'
import QuestionPallete from './QuestionPallete'
import LegendSection from './LegendSection'

const SidePanel = ({quesColor}) => {
  return (
    <div className='sidePanel'>
      <CandidateDetail />
      <QuestionPallete quesColor={quesColor} />
      <LegendSection />
    </div>
  )
}

export default SidePanel
