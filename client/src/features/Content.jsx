import React from 'react'
import ListCard from './ListCard'
import './content.css'

const Content = () => {
  return (
      <div className="contentWrapper">
        <ListCard date="2022 01 01" todo="Consider adding an error boundary to your tree to customize error handling behavior." priority={true} />

        <ListCard date="2022 01 01" todo="Consider adding an error boundary to your tree to customize error handling behavior." priority={true} />

        <ListCard date="2022 01 01" todo="Consider adding an error boundary to your tree to customize error handling behavior." priority={true} />

        <ListCard date="2022 01 01" todo="Consider adding an error boundary to your tree to customize error handling behavior." priority={true} />

        <ListCard date="2022 01 01" todo="Consider adding an error boundary to your tree to customize error handling behavior." priority={true} />

      </div>

  )
}

export default Content