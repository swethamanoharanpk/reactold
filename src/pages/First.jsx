import React from 'react'
import { Link } from 'react-router-dom'

function First() {
    var a = "swetha"
  return (
    <div>
    <Link to={`/second/${a}`}><button>click</button></Link>
    </div>
  )
}

export default First