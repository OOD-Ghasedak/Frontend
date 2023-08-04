import { ROOT_URL } from '.'
import { Url } from '~/apis/backend'

const ACCOUNT_URL = new Url('accounts', ROOT_URL)

export const VERIFY_SIGNUP_URL = new Url('verify-signup', ACCOUNT_URL)
export const SIGNUP_URL = new Url('signup', ACCOUNT_URL)

export const LOGIN_URL = new Url('login', ACCOUNT_URL)

export const PROFILE_URL = new Url('profile', ACCOUNT_URL)
