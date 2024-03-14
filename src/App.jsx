import { useState } from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [values, setValues] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })
  
  const updateFeedback = (feedbackType) => {
		setValues({
		...values,
		[feedbackType]: values[feedbackType] + 1
	});
  };
  const rsetValues = () => {
    setValues({
  good: 0,
	neutral: 0,
	bad: 0
  })
  }

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral ) / totalFeedback) * 100)
  return (
    <>
      <h1>Sip Happens Café</h1>
            <p className="">
        Please leave your feedback about our service by selecting one of the options below.
      </p>
      <Options onUpdateFeedback={updateFeedback} totalFeedback={totalFeedback} onResetVelues={rsetValues} />
      {totalFeedback !== 0 ? <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />: <Notification/>}
      
    </>
  )
}

export default App
