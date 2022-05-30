import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating'

function Ratingstar({ eachQuestion }) {
    
    const [rating, setRating] = useState(0);
    var answerValue,flag=true;

    const changeRating = (newRating) => {
        setRating(newRating);
        answerValue /= 20;
        console.log(answerValue)
        toJSON();
    }

    const toJSON = () => {

        let mc = (JSON.parse(localStorage.getItem('mainCategories')));
        result.mainCatid = eachQuestion.mainCatId;
        result.mainCatname = mc[eachQuestion.mainCatId - 1]?.mainCatName;
        result.subCatid = eachQuestion.subListId;
        result.subCatname = eachQuestion.subListName;
        result.questionId = eachQuestion.questionId;
        result.question = eachQuestion.question;
        result.questiontype = eachQuestion.questionType;
        result.answer = answerValue;
        //console.log(result);
        var resultJson = JSON.parse(localStorage.getItem('resultJson'));
        var finalResultJson = JSON.parse(localStorage.getItem('FinalresultJson'));

        if (finalResultJson[0].questions.length === 0) {
            finalResultJson[0].questions.push(result);
            localStorage.setItem('FinalresultJson', JSON.stringify(finalResultJson));
            return;
        }

        finalResultJson[0].questions.forEach((question) => {
            if (question.mainCatid === result.mainCatid && question.questionId === result.questionId && question.subCatid === result.subCatid) {
                question.answer = result.answer;
                localStorage.setItem('FinalresultJson', JSON.stringify(finalResultJson));
                console.log("existing");
                flag = false;
                return true;
            }
        })
        if (flag) {
            console.log("new Appended")
            finalResultJson[0].questions.push(result);
        }

        localStorage.setItem('FinalresultJson', JSON.stringify(finalResultJson));
        console.log(finalResultJson)
    }

    const result = {
        id: '',
        mainCatid: '',
        mainCatname: '',
        subCatid: '',
        subCatname: '',
        questionId: '',
        questiontype: '',
        question: '',
        answer: '',
    };

  return (
      <div className='question-container'>
          <div className='question'>{eachQuestion?.question}</div>
          <Rating onClick={(e) => {
              answerValue = e;
              changeRating()
          }} ratingValue={rating}/>
      </div>
  )
}

export default Ratingstar