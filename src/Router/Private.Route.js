import React from 'react'
import { Route } from 'react-router-dom'

import { PrivateLayout } from 'Components'

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      )}
    />
  )
}
export default PublicRoute
