/**
 * 处理 promise 的 redux 中间件
 * 可处理 es7 的 async/await 语法
 * 可处理 原生 promise action
 */

 function isPromise(val) {
   return val && typeof val.then === 'function';
 }

 export default ({dispatch}) => next => action => isPromise(action) ? action
   .then(res => {
     dispatch(res)
   }).catch(error => {
     dispatch({
       ...action,
       error
     })
   }) : next(action)
