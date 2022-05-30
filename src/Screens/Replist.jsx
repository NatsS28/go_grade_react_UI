import React,{useState} from 'react'
import Dropdown from '../Components/Dropdown';
import Header from '../Components/Header';
import '../styles/Replist.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function Replist() {
    const userName = localStorage.getItem('username');
    const [selected, setSelected] = useState("");
    const [selectedRepId, setSelectedRepId] = useState("");
    let navigate = useNavigate();
    

    const navigateTo = () => {
        if (selected === '') {
            console.log("please select");
            swal("Please select Representative", "", "error");
        } else {
            console.log(selected, selectedRepId);
            if (selected !== "" && selectedRepId !== "") {
                localStorage.setItem("repUserName", selected);
                localStorage.setItem("repId", selectedRepId);
                createJson();
            }
            navigate('/app/catagories')
        } 
    }

    const createJson = () => {
        const resultJson = [
            {
                id: '',
                mentorId: '',
                repId: selectedRepId,
                assessmentDate: new Date().toLocaleDateString(),
                assessmentStart: new Date().toLocaleTimeString(),
                assessmentEnd: '',
                questions: [{
                    id: '',
                    mainCatid: '',
                    mainCatname: '',
                    subCatid: '',
                    subCatname: '',
                    questionId: '',
                    questiontype: '',
                    question: '',
                    answer: ''
                }],
                remarks: [{
                    id: '',
                    mainCatid: '',
                    mainCatname: '',
                    mainCatResponce: ''
                }]
            }
        ]
        const FinalresultJson = [
            {
                id: '',
                mentorId: '',
                repId: selectedRepId,
                assessmentDate: new Date().toLocaleDateString(),
                assessmentStart: new Date().toLocaleTimeString(),
                assessmentEnd: '',
                questions: [],
                remarks: []
            }
        ]
        localStorage.setItem('resultJson', JSON.stringify(resultJson));
        localStorage.setItem('FinalresultJson', JSON.stringify(FinalresultJson));
    }

    return (
        <>
            <Header />
            <div className='replist'>
                <div className='welcome_text'>Welcome <span className='welcome_note'>{userName}</span></div>
                <div className='dropDown'>
                    <Dropdown selected={selected} setSelected={setSelected} setSelectedRepId={setSelectedRepId} />
                </div>
                <button onClick={(e)=>{navigateTo()}} className='welcome_text button'>Go<span className='welcome_note'>Grade</span></button>
            </div>
        </>
  )
}

export default Replist