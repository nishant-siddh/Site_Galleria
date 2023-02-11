import React from 'react'

const Question = () => {
  return (
    <div className='questionContainer'>
      <p>QUESTION</p>
      <div className='question'>
        <p>A block of mass m is projected with velocity Vo as shown
          fig. The distance between free ends is lo. Maximum
          displacement of the block during the motion.</p>

        <div className='options'>
          <div>
            <input type="radio" name='answerOption' id="optionA" />
            <label htmlFor="optionA">Option A</label>
          </div>
          <div>
            <input type="radio" name='answerOption' id="optionB" />
            <label htmlFor="optionB">Option B</label>
          </div>
          <div>
            <input type="radio" name='answerOption' id="optionC" />
            <label htmlFor="optionC">Option C</label>
          </div>
          <div>
            <input type="radio" name='answerOption' id="optionD" />
            <label htmlFor="optionD">Option D</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
