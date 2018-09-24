const packages = (state = [], action) => {
  switch (action.type) {
    case 'REQ_BAG': 
      return state
    case 'REC_BAG':
    console.log('gottem')
      return action.payload
    default:
      return state
  }
}

export default packages
