import React, { useState } from "react";
import '../App.css'
import Quizdata from "./quizdata";
import Quizresult from "./quizresult";

function Quizapp() {

    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [score, setscore] = useState(0)
    const [correctAns, setcorrectAns] = useState(0)
    const [showResult, setshowResult] = useState(false)
    const [clicked, setclicked] = useState(false)
    const [pass, setpass] = useState('')

    let answerHandel = (correct) => {
        if (correct) {
            setscore(score + 5)
            setcorrectAns(correctAns + 1)
        }
        if (score < 15) {
            setpass("FAILD!!!")
        } else { setpass("CONGRATULATION PASSED") }

        setclicked(true)
    }

    let handel = () => {
        const nextquestion = currentQuestion + 1
        if (nextquestion < Quizdata.length) {
            setcurrentQuestion(nextquestion)
            setclicked(false)
        } else { setshowResult(true) }

    }

    let Quit = () => {
        setcurrentQuestion(0)
        setcorrectAns(0)
        setscore(0)
        setclicked(false)
    }


    return (
        <>
            <div className="app">
                {showResult ? <Quizresult correctAns={correctAns} score={score} pass={pass} /> : (
                    <>
                        <div className=" question-section">
                            <h1>score:{score}</h1>
                            <div className="question-count">
                                <span>question:{currentQuestion + 1} of {Quizdata.length} </span>
                            </div>
                            <div className="question-text">{Quizdata[currentQuestion].questionText}</div>
                        </div>
                        <div className="answer-section">
                            {Quizdata[currentQuestion].option.map((x, i) => {
                                return (
                                    <button className={`button ${clicked && x.correct ? "correct" : "button"}`} disabled={clicked} onClick={() => answerHandel(x.correct)} key={i}  >{x.answer} </button>
                                )
                            })}
                            <div className="actions">
                                <button onClick={Quit}>Quit</button>
                                <button disabled={!clicked} onClick={handel} >Next</button>
                            </div>
                        </div>
                    </>
                )
                }

            </div>


        </>


    )
}



export default Quizapp