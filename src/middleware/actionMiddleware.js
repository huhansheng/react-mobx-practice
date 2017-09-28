
function actionMiddleware(store, action) {
  const { type, promise, payload, ...rest } = action;
  if(!promise) {
    return store.next(type, action);
  }
  const [LOAD, SUCCESS, ERROR] = type;
  store.next(LOAD);
  promise.then(async (results) => {
    let data = await results.json();
    if(data.result) {
      return store.next(SUCCESS, {...payload, result: data.result});
    }
    return store.next(ERROR, {result: data.result});
  }).catch((e) =>{
    return store.next(ERROR);
  })
}

export default actionMiddleware;