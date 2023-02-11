import React from 'react'
import TopQuestionBar from './TopQuestionBar';
import QuestionInstruction from './QuestionInstruction';
import Question from './Question';

const QuestionSection = () => {
    return (
        <div className='questionSectionContainer'>
            <TopQuestionBar />
            <div className='questionSection'>
                <QuestionInstruction />
                <Question />
            </div>
        </div>
    )
}

export default QuestionSection;
