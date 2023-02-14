import React from 'react'

const MyDetails = (props) => {
  const detailLabel = props.Label;
  const detailContent = props.Content
  return (
    <div>
      <h2>MyDetails</h2>
      <ul>
        {detailLabel.map((e,index) => (
          <li key={index}>{e}: {detailContent[index]}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyDetails