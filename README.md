# redux-create-reducer-curry

[![Build Status](https://travis-ci.org/eyasliu/redux-create-reducer.svg?branch=master)](https://travis-ci.org/eyasliu/redux-create-reducer)

create fast, save, readability reducer with fp curry

# install

```
npm i -S redux-create-reducer-curry
```

# API

## createReducer([initState: any])([actions: obj])

- initState
  + default: {}
  + reducer init state
- actions 
  + default: {}
  + a plain obj with function for action
    - key is action type, val is action to change reducer
    - function: (state, action) => {}
      * state: the reducer state
      * action: the action
- @return reducer function
  + reducer for redux

# usage

```js
import createReducer

// reducer
export default createReducer({isDemo: true})({
  TOGGLE: (state, action) => ({isDemo: !state.isDemo})
})

// action
function toggle(){
  return {
    type: 'TOGGLE'
  }
}
```
