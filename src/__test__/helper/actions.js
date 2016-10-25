export async function asyncWillResolve(str){
  const text = await new Promise(resolve => {
  	setTimeout(() => {
  		resolve(str)
  	}, 500)
  })
  return {
  	type: 'test',
  	text
  }
}

export async function asyncWillReject(str){
  const text = await new Promise((resolve, reject) => {
  	setTimeout(() => {
  		reject(str)
  	}, 500)
  })
  return {
  	type: 'test',
  	text
  }
}