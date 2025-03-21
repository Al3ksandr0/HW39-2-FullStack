import { useState } from "react";
import { smiles } from "./smiles";
// import SmileCard from "./SmileCard";
import SmileCardClass from "./SmileCardClass";
import { getResultMessage } from "./getResultMessage";
import { resetVotes } from "./resetVotes";
import "./styles.css";

const SmileVoting = () => {
    const [votes, setVotes] = useState(resetVotes(smiles.length));
    const [showResults, setShowResults] = useState(false); //типо как флаг для показа результата 

    const handleVote = (index) => {
        // проверка что пока голоса не показаны
        if (!showResults) {
            // то будем их увелчивать по индексу 
            setVotes(votes.map((vote, i) => (i === index ? vote + 1 : vote))); // по индексу увелчиваем голоса определенного
        }
    };

    // тут сброс 
    const handleReset = () => {
        setVotes(resetVotes(smiles.length));
        setShowResults(false);
    };

    return (
        <div className="voting-container">

            <h2>Голосуй за лучший смайл</h2>

            {
                smiles.map((smile, index) => (

                    // <SmileCard
                    //     key={smile.id}
                    //     smile={smile}
                    //     votes={votes[index]}
                    //     onVote={() => handleVote(index)}
                    //     disabled={showResults}
                    // />

                    <SmileCardClass
                        key={smile.id}
                        smile={smile}
                        votes={votes[index]}
                        onVote={() => handleVote(index)}
                        disabled={showResults}
                    />
                ))
            }

            <div className="button-container">
                {
                    // если фолс показываем Show Results
                    !showResults ? (
                        <button
                            className="control-button show-button"
                            onClick={() => setShowResults(true)}>

                            Show Results
                        </button>
                    ) : (
                        // если тру показываем Reset
                        <button className="control-button reset-button" onClick={handleReset}>
                            Reset
                        </button>
                    )
                }
            </div>

            {
                showResults && (
                    <h3 className="winner-message">{getResultMessage(votes, smiles)}</h3>
                )
            }
        </div>
    );
};

export default SmileVoting;
