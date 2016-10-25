# redux-async-await

[![Build Status](https://travis-ci.org/eyasliu/redux-async-await.svg?branch=master)](https://travis-ci.org/eyasliu/redux-async-await)

redux middleware deal with es7 async/await syntax action and promise action

# install

```
npm i -S redux-async-await
```

# usage

```js
// apply middleware
import {createStore, applyMiddleware} from 'redux';
import asyncAwait from 'redux-async-await';
const store = applyMiddleware(asyncAwait)(createStore)(yourRootReducer);

------------
// **actions.js**
// use async/await
export async function getInfo(id){
  const data = await fetch('/getUserInfo/' + id).then(res => res.json())
  return {
    type: 'GET_USERINFO',
    data
  }
}
export function getList(){
  return fetch('/getList').then(res => res.json()).then(data => ({
    type: 'GET_LIST',
    data
  }))
}

----------------
// dispatch
try{
  const data = await store.dispatch(getInfo(20)) // if resolve, data === action.data
} catch(e) {
  console.log(e) // if reject
}

```
