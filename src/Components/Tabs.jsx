import { useState,useEffect } from "react";
import "../styles/Tabs.css";
import Ratingstar from "./Ratingstar";
import Yesorno from "./Yesorno";
import Axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Loader from "./Loader";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Tabs({ mainCategories}) {
    const [toggleState, setToggleState] = useState(1);
    const [subCategories, setSubCategories] = useState([]);
    const [subCategoriesList, setSubCategoriesList] = useState([]);


    const fetchSubCategoriesList = async () => {
        await Axios.get(`https://private-b258dc-repjointwork.apiary-mock.com/repAccessquestions`).then((data) => {
            setSubCategoriesList(data.data);
        })
    }

    const fetchSubCategories = async () => {
        await Axios.get(`https://private-b258dc-repjointwork.apiary-mock.com/repAccessSubCategory`).then((data) => {
            setSubCategories(data.data);
            
        })
    }

    useEffect(() => {
        fetchSubCategoriesList();
        fetchSubCategories();
    }, []);    

    const toggleTab = (index) => {
        console.log("toggling", index);
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                {mainCategories.map((category) => {
                    return (
                        <button
                            className={toggleState === parseInt(category.mainCatId) ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(parseInt(category.mainCatId))}
                        >{category.mainCatName}
                        </button>
                    )
                })
                } 
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    {
                        subCategories.filter((sub) => parseInt(sub.mainCatId) === 1).map((sub) => {
                            return (
                                <>
                                    <Accordion>
                                        <div className="main-category">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography><div className="heading">{sub.subCatName}</div></Typography>
                                            </AccordionSummary>
                                        </div>
                                        {subCategoriesList.filter((question) => parseInt(question.mainCatId) === 1 && sub.subListId === question.subListId).map((question) => {
                                            return (
                                                <>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {question.questionType === "YesNo" ? <Yesorno eachQuestion={question} /> : <Ratingstar eachQuestion={question} />}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </>
                                            )
                                        })}
                                    </Accordion>
                                </>

                            )
                        })
                    }
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    {
                        subCategories.filter((sub) => parseInt(sub.mainCatId) === 2).map((sub) => {
                            return (
                                <>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><div className="heading">{sub.subCatName}</div></Typography>
                                        </AccordionSummary>
                                        {subCategoriesList.filter((question) => parseInt(question.mainCatId) === 2 && sub.subListId === question.subListId).map((question) => {
                                            return (
                                                <>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {question.questionType === "YesNo" ? <Yesorno eachQuestion={question} /> : <Ratingstar eachQuestion={question} />}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </>
                                            )
                                        })}
                                    </Accordion>
                                </>

                            )
                        })
                    }

                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    {
                        subCategories.filter((sub) => parseInt(sub.mainCatId) === 3).map((sub) => {
                            return (
                                <>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography><div className="heading">{sub.subCatName}</div></Typography>
                                        </AccordionSummary>
                                    {subCategoriesList.filter((question) => parseInt(question.mainCatId) === 3 && sub.subListId === question.subListId).map((question) => {
                                        return (
                                            <>
                                                <AccordionDetails>
                                                    <Typography>
                                                        {question.questionType === "YesNo" ? <Yesorno eachQuestion={question} /> : <Ratingstar eachQuestion={question} />}
                                                    </Typography>
                                                </AccordionDetails>
                                            </>
                                        )
                                    })}
                                    </Accordion>
                                </>
                                
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Tabs;