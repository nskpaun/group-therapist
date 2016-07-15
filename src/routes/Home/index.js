import { injectReducer } from '../../store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      // const reducer = require('./modules/counter').default
      //
      const hostReducer = require('../../modules/Host').default;
      injectReducer(store, { key: 'host', reducer: hostReducer });

      /*  Return getComponent   */
      const Home = require('../../components/Home').default
      cb(null, Home)

    }, 'home')
  }
})
