/* eslint-disable react/prop-types */
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomeScreen from './screens/HomeScreen'

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup component={'main'}>
      <CSSTransition
        classNames={'animation-forward'}
        timeout={500}
        key={location.pathname}
      >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomeScreen} />
          {/*TODO <Route exact path="/pay/info" component={TodoListScreen} />
          <Route exact path="/pay/result" component={AnalyticsScreen} /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
})

export default Routes
