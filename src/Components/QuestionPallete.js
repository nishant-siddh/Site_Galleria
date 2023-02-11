import React from 'react'

const QuestionPallete = ({quesColor}) => {
  return (
    <div className='questionPallete'>
      <p>Question Pallete</p>
      <div className='questionGridContainer'>
        <button className='questionNo ques1' style={{backgroundColor: quesColor}}>1</button>
        <button className='questionNo ques2'>2</button>
        <button className='questionNo ques3'>3</button>
        <button className='questionNo ques4'>4</button>
        <button className='questionNo ques5'>5</button>
        <button className='questionNo ques6'>6</button>
        <button className='questionNo ques7'>7</button>
        <button className='questionNo ques8'>8</button>
        <button className='questionNo ques9'>9</button>
        <button className='questionNo ques10'>10</button>
      </div>
    </div>
  )
}

export default QuestionPallete
