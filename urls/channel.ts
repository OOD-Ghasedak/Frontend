import { ROOT_URL } from '.'
import { Url } from '~/apis/axiosRequest'

export const JOINED_CHANNELS_URL = new Url('subscribe/joined-channels', ROOT_URL)

export const OWNED_OR_MANAGED_CHANNELS_URL = new Url('channel-management/managed-channels', ROOT_URL)

export const CREATE_CHANNEL_URL = new Url('channel/create', ROOT_URL)
