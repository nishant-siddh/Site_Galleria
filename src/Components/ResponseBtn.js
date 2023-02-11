import React from 'react'

const ResponseBtn = ({quesColor, setQuesColor}) => {

  const handleChangeColor = (e) => {
    const btn = e.target.value;
    if(btn === 'Next'){
      setQuesColor('#00c54e');
      // alert(quesColor);
    }
    if (btn === 'Review') {
      setQuesColor('yellow');
      // alert(quesColor);
    }
    if (btn === 'Dump') {
      setQuesColor('#cccccc');
      // alert(quesColor);
    }
  }

  return (
    <div className='response'>
        <button className='btn' value='Clear'>CLEAR RESPONSE</button>
        <button className='btn' value='Review' onClick={handleChangeColor}>REVIEW</button>
        <button className='btn' value='Dump' onClick={handleChangeColor}>DUMP</button>
        <button className='btn' value='Previous'>PREVIOUS</button>
        <button className='btn dark_btn' value='Next' onClick={handleChangeColor}>NEXT</button>
      </div>
  )
}

export default ResponseBtn
