import React from 'react'
import { useParams } from 'react-router-dom'

function Second() {
    const a = useParams()
    console.log(a.id)
  return (
    <div>
    <h2>{a.id}</h2>

    </div>
  )
}

export default Second