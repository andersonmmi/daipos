import web3Infura from '../../singletons/web3/infura'
import ACTIONS from '../actionTypes'
import selector from '../../redux/selectors'

const initialize = () => {
  return async dispatch => {
    setInterval(() => {
      dispatch(updateBalance())
    }, 1000)
  }
}

const updateBalance = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const oldBalance = selector.getWalletBalance(state)
    const newBalance = await web3Infura.getBalance()
    if (oldBalance.toString() !== newBalance.toString()) {
      dispatch({ type: ACTIONS.UPDATE_WALLET_BALANCE, payload: newBalance })
    }
  }
}

export default { initialize }
