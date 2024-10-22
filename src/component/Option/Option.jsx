import { useState } from 'react';
import './Option.css'
import PropTypes from 'prop-types'

function Option({getApiUrl}){
    
    const baseUrl = 'https://opentdb.com/api.php?';
    const [amount, setAmount ] = useState('5');
    const [category, setCategory ] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] =useState('');

    const handelSubmit = (event) =>{
        event.preventDefault();
        let resultingApiUrl = '';

        resultingApiUrl = `${baseUrl}amount=${amount}`;

        if(category && difficulty && type){
            resultingApiUrl +=  `&category=${category}&difficulty=${difficulty}&type=${type}`
        } else if (category && difficulty ){
            resultingApiUrl += `&category=${category}&difficulty=${difficulty}`;
        } else if (difficulty){
            resultingApiUrl += `&difficulty=${difficulty}`;
        }

        if(category && difficulty && type){
            resultingApiUrl +=  `&category=${category}&difficulty=${difficulty}&type=${type}`
        } 
        else{
            if (category){
                resultingApiUrl += `&category=${category}`;
            }
            if (difficulty ){
                resultingApiUrl += `&difficulty=${difficulty}`;
            }
            if(type){
                resultingApiUrl += `&type=${type}`;
            }
        }


        console.log("Constructed API URL:",resultingApiUrl);
        getApiUrl(resultingApiUrl); // Pass the generated API URL to the parent
    };

    return(
        <div className="quiz-box">
            <h1>Quizzical</h1>
            <p>{`Set your question paper...`}</p>
            <form onSubmit={handelSubmit}>

                <label htmlFor="amount">Select Number of question:</label>
                <select 
                    name="amount" 
                    id="amount"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                >
                    <option value="5" defaultChecked >5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>

                <label htmlFor="category">Select a category:</label>
                <select 
                    name="category" 
                    id="category"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals & Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                </select>

                <label htmlFor="difficulty">Select question difficulty</label>
                <select 
                    name="difficulty" 
                    id="difficulty"
                    value={difficulty}
                    onChange={(e)=> setDifficulty(e.target.value)}
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <label htmlFor="type">Select type :</label>
                <select 
                    name="type" 
                    id="type"
                    value={type}
                    onChange={(e)=> setType(e.target.value)}
                >
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
                
                <button 
                    className="start-button"
                    type='submit'
                >
                    Continue
                </button>

            </form>

        </div>
    );

}

Option.propTypes = {
    getApiUrl: PropTypes.func,
}

export default Option;