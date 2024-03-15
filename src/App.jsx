import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const state={
  good: 0,
	neutral: 0,
	bad: 0
  }
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-clicks");
    if (savedValues !== null){
      return JSON.parse(savedValues);
    }
    return state;
  })
  
  const updateFeedback = (feedbackType) => {
		setValues({
		...values,
		[feedbackType]: values[feedbackType] + 1
	});
  };
  const resetValues = () => {
    setValues(state)
  }

   useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral ) / totalFeedback) * 100)
  return (
    <>
      <h1>Sip Happens Café</h1>
            <p className="">
        Please leave your feedback about our service by selecting one of the options below.
      </p>
      <Options onUpdateFeedback={updateFeedback} totalFeedback={totalFeedback} onResetValues={resetValues} />
      {totalFeedback !== 0 ? <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />: <Notification/>}
      
    </>
  )
}

export default App
