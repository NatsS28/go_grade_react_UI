
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Yesorno({ eachQuestion}) {
    var answerValue,flag = true;

    const handleChange = (e) => {
        let repId = localStorage.getItem('repId');
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
      <div className='question-container' style={{ alignItems: 'center' }}>
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"><span>{eachQuestion?.question}</span></FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
              >
                  <div className='answers_yesorno'>
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" onChange={(e) => {
                          answerValue = e.target.value;
                          //console.log(e.target.value);
                          handleChange(e)
                      }} />
                      <FormControlLabel value="No" control={<Radio />} label="No" onChange={(e) => {
                          answerValue = e.target.value;
                          //console.log(e.target.value);
                          handleChange(e)
                      }} />
                  </div>
              </RadioGroup>
          </FormControl>

    </div>
  )
}

export default Yesorno