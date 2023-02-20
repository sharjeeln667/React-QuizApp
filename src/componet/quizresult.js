import React from "react";
import Quizdata from "./quizdata";

function Quizresult(props) {
    const { score, correctAns, pass } = props

    return (
        <>
            <div className="score-section" >
                <h2>Complete Quiz!!!</h2>
                <h4>Total score {score}/25</h4>
                <h4>your correct question {correctAns} out of {Quizdata.length} </h4>
                <h2>{pass}</h2>

            </div>
        </>
    )
}


export default Quizresult