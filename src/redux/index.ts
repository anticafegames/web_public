import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducer'
import history from '../history'
import rootSaga from './saga'
import isReduxOffPage from '../core/config/redux-off-pages'
import { moduleName as GameCommonModule } from '../core/ducks/games-common'

export default () => {

  const reducer = createReducer(history)
  if(isReduxOffPage) return createStore(reducer)

  const sagaMiddleware = createSagaMiddleware()

  const logger = createLogger({
    stateTransformer: (state) => {
      state['game'] = state['game-common']['game']
      return state
    }
  })

  const enhancer = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
    logger
  )

  const store = createStore(reducer, enhancer)

  sagaMiddleware.run(rootSaga)
  return store
}
