import React from 'react'

const PastEvent = () => {
  const events = ["Yoga day" , "womens day" , "Independence day" , "childrens day"]
  return (
    <div>
      {
        events.map((eve) => {
          return(
            <div>
              <button className="btn">{eve}</button>
           </div>
          )
        })
      }
    </div>
  )
}

export default PastEvent
