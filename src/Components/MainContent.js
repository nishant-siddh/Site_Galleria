import React from 'react'
import QuestionSection from './QuestionSection'
import ResponseBtn from './ResponseBtn'
import SubjectNameBtn from './SubjectNameBtn'

const MainContent = ({quesColor, setQuesColor}) => {
  return (
    <>
      <div className='mainContent'>
        <SubjectNameBtn />
        <hr />
        <QuestionSection />
        <ResponseBtn quesColor={quesColor} setQuesColor={setQuesColor} />
      </div>
    </>

  )
}

export default MainContent
