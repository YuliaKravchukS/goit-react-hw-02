import css from './Feedback.module.css'
const Feedback = ({values, totalFeedback, positiveFeedback}) => {
  return (
    <ul className={css.ul}>
          <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
          <li>Bad: {values.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
    </ul>
  )
}

export default Feedback