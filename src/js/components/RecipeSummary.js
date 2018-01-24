import React from 'react'
import { withRouter } from 'react-router-dom'

const handleCook = (id, match, history) => {
  history.push(`${match.url}/${id}/cook`)
}
const handleEdit = (id, match, history) => {
  history.push(`${match.url}/${id}/edit`)
}

const RecipeSummary = (props) => {
  const { _id, title, history, match } = props
  return (
    <div>
      <h5>{title}</h5>
      <button onClick={() => handleCook(_id, match, history)}>Cook</button>
      <button onClick={() => handleEdit(_id, match, history)}>Edit</button>
    </div>
  )
}

export default withRouter(RecipeSummary)