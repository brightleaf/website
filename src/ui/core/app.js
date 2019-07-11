import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'
import { Title } from '@brightleaf/elements'
const About = React.lazy(() => import('../features/about'))
const Home = React.lazy(() => import('../features/home'))
const Contact = React.lazy(() => import('../features/contact'))

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <React.Suspense fallback={<div>Loading</div>}>
          <Router>
            <Home path="/" />
            <Contact path="/contact" />
            <About path="/about" />
          </Router>
        </React.Suspense>
      </Fragment>
    )
  }
}
