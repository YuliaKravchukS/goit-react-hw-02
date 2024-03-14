const Options = ({onUpdateFeedback, totalFeedback, onResetVelues}) => {
  return (
      <div>
          <button onClick={()=>onUpdateFeedback('good')}>Good</button>
          <button onClick={()=>onUpdateFeedback('neutral')}>Neutral</button>
          <button onClick={()=>onUpdateFeedback('bad')}>Bad</button>
          {totalFeedback!==0 && <button onClick={()=>onResetVelues()}>Reset</button>}
          
    </div>
  )
}

export default Options