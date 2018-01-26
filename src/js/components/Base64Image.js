'use strict'

import React from 'react'

const Base64Image = ({ data, width = 150, height = 150 }) => {
  let imageSrc = `http://placehold.it/${width}x${height}`

  if (data) {
    imageSrc = "data:image/pngbase64," + data
  }

  return (<img src={imageSrc} />)
}

export default Base64Image