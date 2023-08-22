import { ROOT_URL } from '.'
import { Url } from '~/apis/backend'

const ACCOUNTS_URL = new Url('accounts', ROOT_URL)

export const VERIFY_SIGNUP_URL = new Url('verify-signup', ACCOUNTS_URL)
export const SIGNUP_URL = new Url('signup', ACCOUNTS_URL)

export const LOGIN_URL = new Url('login', ACCOUNTS_URL)

export const PROFILE_URL = new Url('profile', ACCOUNTS_URL)

export const CHANGE_PASSWORD_URL = new Url('change-password', ACCOUNTS_URL)
