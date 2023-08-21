import { ROOT_URL } from '.'
import { Url } from '~/apis/backend'

export const SUBSCRIBE_URL = new Url('subscribe', ROOT_URL)

export const JOINED_CHANNELS_URL = new Url('joined-channels', SUBSCRIBE_URL)

export const OWNED_OR_MANAGED_CHANNELS_URL = new Url('channel-management/managed-channels', ROOT_URL)

export const CHANNEL_URL = new Url('channels', ROOT_URL)

export const CREATE_CHANNEL_URL = new Url('create', CHANNEL_URL)

export const GET_CHANNEL_URL = (channelId: string) => { return new Url(channelId, CHANNEL_URL) }

export const GET_CHANNEL_CONTENTS_URL = (rootChannelURL: Url) => { return new Url('contents', rootChannelURL) }

export const GET_CONTENT_URL = (contentId: string) => { return new Url(contentId, GET_CHANNEL_CONTENTS_URL(CHANNEL_URL)) }

export const GET_JOIN_CHANNEL_URL = (channelId: string) => { return new Url(channelId, SUBSCRIBE_URL) }
export const GET_LEAVE_CHANNEL_URL = GET_JOIN_CHANNEL_URL
