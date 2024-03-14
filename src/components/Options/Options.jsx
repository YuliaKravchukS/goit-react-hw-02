const Options = ({onUpdateFeedback, totalFeedback, onResetValues}) => {
  return (
      <div>
          <button onClick={()=>onUpdateFeedback('good')}>Good</button>
          <button onClick={()=>onUpdateFeedback('neutral')}>Neutral</button>
          <button onClick={()=>onUpdateFeedback('bad')}>Bad</button>
          {totalFeedback!==0 && <button onClick={()=>onResetValues()}>Reset</button>}
          
    </div>
  )
}

export default Options