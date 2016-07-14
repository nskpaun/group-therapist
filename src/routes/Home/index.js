import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('../../containers/HomeContainer').default
      // const reducer = require('./modules/counter').default
      //
      // /*  Add the reducer to the store on key 'counter'  */
      // const reducer = (previousState, action) => {
      //   console.log('nspaun' + ' reducing');
      //   switch (action.type) {
      //     case 'SET_HAPPY_HOUR':
      //       return {
      //         ...previousState,
      //         nextHappyHour: previousState.nextHappyHour + 1
      //       };
      //     default:
      //       return state;
      //   }
      // }
      // injectReducer(store, { key: 'home', reducer })

      /*  Return getComponent   */
      cb(null, Home)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
