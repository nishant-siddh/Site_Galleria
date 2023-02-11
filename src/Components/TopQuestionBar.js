import React, { useRef } from 'react'

const TopQuestionBar = () => {
    return (
        <div className='topQuestionBar'>
            <span>Q No.: 1</span>

            <div className='language'>
                <label id='language'>View in: </label>
                <select name="language" id="language">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
        </div>
    )
}

export default TopQuestionBar
