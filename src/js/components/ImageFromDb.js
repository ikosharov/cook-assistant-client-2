'use strict'

import React from 'react'
import { API_URL } from '../web.config'

const ImageFromDb = ({ id, width = 150, height = 150 }) => {
  let src = id ? `${API_URL}/images/${id}` : `http://placehold.it/${width}x${height}`

  return (<img src={src} width={width} height={height} />)
}

export default ImageFromDb