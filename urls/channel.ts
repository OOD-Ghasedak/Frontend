import { ROOT_URL } from '.'
import { Url } from '~/apis/backend'

export const SUBSCRIBE_URL = new Url('subscribe', ROOT_URL)
export const PURCHASED_SUBSCRIPTIONS_URL = new Url('purchased-subscriptions', SUBSCRIBE_URL)
export const PURCHASED_CONTENTS_URL = new Url('purchased-contents', SUBSCRIBE_URL)

export const JOINED_CHANNELS_URL = new Url('joined-channels', SUBSCRIBE_URL)

export const OWNED_OR_MANAGED_CHANNELS_URL = new Url('channel-management/managed-channels', ROOT_URL)

export const CHANNELS_URL = new Url('channels', ROOT_URL)

export const CREATE_CHANNEL_URL = new Url('create', CHANNELS_URL)

export const GET_CHANNEL_URL = (channelId: string) => { return new Url(channelId, CHANNELS_URL) }

export const GET_CHANNEL_CONTENTS_URL = (rootChannelURL: Url) => { return new Url('contents', rootChannelURL) }

export const GET_CONTENT_URL = (contentId: string) => { return new Url(contentId, GET_CHANNEL_CONTENTS_URL(CHANNELS_URL)) }

export const GET_JOIN_CHANNEL_URL = (channelId: string) => { return new Url(channelId, SUBSCRIBE_URL) }
export const GET_LEAVE_CHANNEL_URL = GET_JOIN_CHANNEL_URL

export const GET_CHANNEL_SUBSCRIPTION_URL = (channelId: string) => { return new Url('subscriptions', GET_CHANNEL_URL(channelId)) }

export const GET_CHANNEL_SUBSCRIBERS_URL = (channelId: string) => { return new Url('subscribers', GET_CHANNEL_URL(channelId)) }

export const CHANNEL_MANAGEMENT_URL = new Url('channel-management', ROOT_URL)
export const GET_MEMBER_PROMOTION_URL = (channelId: string) => { return new Url(channelId, CHANNEL_MANAGEMENT_URL) }

export const GET_CHANNEL_MEMBER_PROMOTION_URL = (channelId: string) => { return new Url('admins', GET_MEMBER_PROMOTION_URL(channelId)) }

export const GET_CHANNEL_ADMINS_URL = (channelId: string) => { return new Url('admins', GET_CHANNEL_URL(channelId)) }

export const GET_CHANNEL_ADMIN_MANAGEMENT_URL = (adminId: string) => { return new Url(`admins/${adminId}`, CHANNEL_MANAGEMENT_URL) }
