import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from '../../router'

function NoFound() {
  return (
    <div className="NoFound">
      <header className="NoFound-header">
        <h1>hahah</h1>
        <Link to="/discover">发现音乐</Link>
      </header>
    </div>
  )
}

export default NoFound
