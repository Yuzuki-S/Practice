import request from 'superagent'


export const showError = (errorMessage) => {
  return {
    type: "SHOW_ERROR",
    errorMessage: errorMessage
  }
}



export const  requestBag= (bag) => {
  return {
    type: 'REQ_BAG',
    payload:bag
  }
}


export const receiveBag = (bag) => {
  return {
    type:'REC_BAG',
    payload:bag
  }
}

export function addPackageAction(bag) { 
  return (dispatch) => {
    dispatch(requestBag(bag))
    return request
    .get('/add')
    .then(res => {(receiveBag(res.body))
  })
    .catch(err => {
      dispatch(showError(err.message))
    })
}
}