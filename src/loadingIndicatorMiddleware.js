const loadingIndicator = store => next => action => {
  const { type } = action;
  const { dispatch } = store;
  
  if(type.match(/REQUEST/) ) {
    dispatch({
      type: 'LOADING_START'
    })
  } else if (type.match(/ERROR/) || type.match(/SUCCESS/)) {
    dispatch({
      type: 'LOADING_END'
    })
  }

  return next(action);
}

export default loadingIndicator;