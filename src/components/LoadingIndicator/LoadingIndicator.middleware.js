import { loadingStart, loadingEnd } from './LoadingIndicator.actions'

const loadingIndicator = store => next => action => {
  const { type } = action;
  const { dispatch } = store;
  
  if(type.match(/REQUEST/) ) {
    dispatch(loadingStart())
  } else if (type.match(/ERROR/) || type.match(/SUCCESS/)) {
    dispatch(loadingEnd())
  }

  return next(action);
}

export default loadingIndicator;