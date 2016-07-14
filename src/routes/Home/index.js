import { injectReducer } from '../../store/reducers'
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('../../components/Home').default
      // const reducer = require('./modules/counter').default
      //
      // /*  Add the reducer to the store on key 'counter'  */

      const nextHappyHour = (previousState = 1, action) => {
        switch (action.type) {
          case 'SET_HAPPY_HOUR':
            return previousState + 1
          default:
            return previousState;
        }
      }

      const onCall = (previousState = 'Eithan', action) => {
        switch (action.type) {
          case 'SET_ONCALL':
            return action.onCall;
          default:
            return previousState;
        }
      }

      const reducer = combineReducers({nextHappyHour, onCall})

      injectReducer(store, { key: 'home', reducer });
      injectReducer(store, {key: 'form', reducer: formReducer});

      /*  Return getComponent   */
      cb(null, Home)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
