// @flow

import type { IdType } from 'constants/firebase'
import type { DispatchType } from 'constants/redux'

import * as ReactRedux from 'react-redux'
import * as ReactRouter from 'react-router'
import * as Reselect from 'reselect'

import selectors from 'redux/selectors'
import currentUserAction from 'redux/actions/current-user'
import shopAction from 'redux/actions/shop'

import * as Profile from '../index'

type OwnPropsType = ReactRouter.ContextRouter

const mapStateToProp = Reselect.createStructuredSelector({
  authError: selectors.getAuthError,
  email: selectors.users.current,
  erc20Asset: selectors.wallet.erc20Asset,
  walletAddress: selectors.wallet.address,
  store: selectors.shop.current,
  storeId: selectors.users.currentStoreId,
})

const mapDispatchToProps = (dispatch: DispatchType) => ({
  signOut: () => dispatch(currentUserAction.signOut()),

  onUpdateAddress: async ({
    erc20Asset,
    walletAddress,
    storeId,
  }: {
    erc20Asset: string,
    walletAddress: string,
    storeId: IdType,
  }) => {
    const data = { erc20Asset, walletAddress }
    await dispatch(shopAction.update({ storeId, data }))
  },
})

export default ReactRedux.connect<Profile.PropsType, OwnPropsType, _, _, _, _>(
  mapStateToProp,
  mapDispatchToProps
)(Profile.default)
