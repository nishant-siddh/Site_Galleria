import React from 'react'

const LegendSection = () => {
  return (
    <div className='legend'>
      <p>Legend(Click to View)</p>

      <div className='legendTopSection'>
        <div className='gridContainer'>
          <span className='gridItem gridItem-1'>4 answer</span>
          <span className='gridItem gridItem-2'>2 No Answer</span>
          <span className='gridItem gridItem-3'>1 Review+Ans</span>
          <span className='gridItem gridItem-4'>1 Review-Ans</span>
          <span className='gridItem gridItem-5'>1 Dump</span>
          <span className='gridItem gridItem-6'>1 No Visit</span>
        </div>
        <div>10 All Questions</div>
      </div>

      <div className='legendButtons'>
        <button className='btn'>Profile</button>
        <button className='btn'>Instr</button>
        <button className='btn'>Question</button>
        <button className='btn'>Submit</button>
      </div>

    </div>
  )
}

export default LegendSection
