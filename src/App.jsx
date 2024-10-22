import Home from "./component/Home/Home"
import Quiz from "./component/Quiz/Quiz"
import Option from "./component/Option/Option"
import {useState, useEffect } from 'react'
function App(){

  const [page, setPage] = useState(false);
  const [selectQuestionType, setSelectQuestionType] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  //https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple
  
  function getApiUrl(url){
    setApiUrl(url);
    console.log(`App.jsx: URL passed from Option: ${apiUrl}`);

    if(selectQuestionType){
      setPage(true); // change to quiz page
    }
  }

  function resetQuiz(){
    setPage(false);
    setApiUrl('');
  }

  useEffect(()=> {
    console.log(`App.jsx: Updated apiUrl: ${apiUrl}`)
  }, [apiUrl]);

  function changeOption(){
    setSelectQuestionType(prevOption => !prevOption);
  }



return(
  page ? (
    apiUrl ? 
      <Quiz apiUrl={apiUrl} resetQuiz={resetQuiz}/> 
        :
       <Option getApiUrl = {getApiUrl}/>
    ) 
    : 
    (
      selectQuestionType ? 
        <Option getApiUrl = {getApiUrl}/> 
        : 
        <Home redirect = {()=> changeOption()}/>
    )
);

}


export default App