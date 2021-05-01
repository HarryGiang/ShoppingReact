import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { AppLoading, PrivateLayout } from 'Components'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loading = useStoreState((state) => state.auth.loading)
  const getUser = useStoreActions((actions) => actions.auth.getUser)

  useEffect(() => {
    getUser()
  }, [getUser])

  if (loading) return <AppLoading title="Loading Page" />
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
export default PrivateRoute
