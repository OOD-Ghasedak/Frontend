import { ROOT_URL } from '.'
import { Url } from '~/apis/backend'

const FINANCIAL_URL = new Url('financial', ROOT_URL)

export const WALLET_URL = new Url('wallet', FINANCIAL_URL)

export const WITHDRAW_URL = new Url('withdraw', FINANCIAL_URL)
export const DEPOSIT_URL = new Url('deposit', FINANCIAL_URL)
