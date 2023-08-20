import { ChannelContentType } from './channelContentTypes'
export type Money = number;

export interface Channel {
    id: string;
    name: string;
    description: string;
}

export interface JoinedChannel extends Channel {
    subscription_status;
}

export interface OwnedOrManagedChannel extends Channel {
    role;
}
export * from './channelContentTypes'
export interface ChannelCompleteContent {
    text: string;
    file?: string;
}
export interface ChannelContent {
    id: string;
    title: string;
    summary: string;
    is_premium: boolean;
    price: Money;
    content_type: ChannelContentType;
    complete_content?: ChannelCompleteContent;
}

export * from './channelRoles'

export interface UserProfile {
    phone_number: string;
    username: string;
    email: string;
}

export interface UserWallet {
    balance: Money
}
