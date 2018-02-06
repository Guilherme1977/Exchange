import { createAction } from 'redux-act'

import log from 'Utilities/log'
import walletService from 'Services/Wallet'
import { getAllAssets } from 'Selectors'

export const walletUpdated = createAction('WALLET_UPDATED', (wallet) => ({
  id: wallet.getId(),
  type: wallet.type,
  address: wallet.isSingleAddress() ? wallet.getFreshAddress() : '',
  isBlockstack: wallet.isBlockstack,
  supportedAssets: wallet.getSupportedAssetSymbols(),
  subwallets: wallet.type === 'MultiWallet' ? wallet.wallets.map((w) => w.getId()) : [],
}))
export const walletRemoved = createAction('WALLET_REMOVED')
export const allWalletsRemoved = createAction('ALL_WALLETS_REMOVED')

export const walletBalancesUpdated = createAction('WALLET_BALANCES_UPDATED', (walletId, balancesByAsset) => ({
  id: walletId,
  balances: balancesByAsset
}))

export const addWallet = (wallet) => (dispatch) => Promise.resolve()
  .then(() => walletService.add(wallet))
  .then(() => dispatch(walletUpdated(wallet)).payload)

export const removeWallet = (walletId) => (dispatch) => Promise.resolve()
  .then(() => walletService.remove(walletId))
  .then(() => dispatch(walletRemoved({ id: walletId })))

export const removeAllWallets = () => (dispatch) => Promise.resolve()
  .then(() => walletService.removeAll())
  .then(() => dispatch(allWalletsRemoved()))

export const restoreAllWallets = () => (dispatch, getState) => Promise.resolve()
  .then(() => walletService.setAssetProvider(() => getAllAssets(getState())))
  .then(() => walletService.restoreAll())
  .then((restoredWallets) => restoredWallets.map((w) => dispatch(walletUpdated(w)).payload))

export const updateWalletBalances = (walletId) => (dispatch) => Promise.resolve()
  .then(() => {
    const wallet = walletService.get(walletId)
    if (!wallet) {
      log.error('no wallet with id', walletId)
      throw new Error('failed to load balances')
    }
    return wallet.getAllBalances()
  })
  .then((symbolToBalance) => {
    dispatch(walletBalancesUpdated(walletId, symbolToBalance))
    return symbolToBalance
  })