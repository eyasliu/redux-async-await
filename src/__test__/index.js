import asyncAwait from '../index';
import * as actions from './helper/actions';
import expect from 'expect';
import {createStore, bindActionCreators, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(asyncAwait)(createStore)
const initState = {
  isDemo: true,
  text: 'default status'
}
const reducer = (state = initState, action) => {
  switch(action.type){
    case 'reset': return initState;
    case 'test': return {...state, ...action}
    default: return state;
  }
}


describe('redux-async-await middleware', () => {
  let store;
  beforeEach(() => {
    store = createStoreWithMiddleware(reducer);
  })
  afterEach(() => {
    store.dispatch({type: 'reset'})
  })

  it('resolve promise', done => {
    const testText = 'the resolve action'
    const promise = store.dispatch(actions.asyncWillResolve(testText))

    promise.then((action) => {
      expect(store.getState().text).toEqual(testText)
      done();
    })
    expect(store.getState()).toEqual(initState)
  })

  it('reject promise', () => {
    const testText = 'the reject action'
    const promise = store.dispatch(actions.asyncWillReject(testText))
    
    promise.then(() => {
      expect(store.getState().error).toEqual(testText)
      console.log('promise ok')
      done();
    })
    expect(store.getState()).toEqual(initState)
  })


})