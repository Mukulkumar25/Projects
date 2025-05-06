import { createContext, useState } from "react";
import runChat from "../config/gemini";
import { marked } from "marked";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  }

  const newChat = () =>{
    setLoading(false);
    setShowResult(false);

  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    }
    else{
      setPreviousPrompts(prev => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    
    let finalResponse = marked.parse(response);
    const responseArray = finalResponse.split(" ");
    for (let i = 0; i < responseArray.length; i++) {
      delayPara(i, responseArray[i] + " ");
    }
    setLoading(false);
    setInput("");
  }
  const contextValue = {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    showResult,
    loading,
    resultData,
    setResultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;