import { ChannelContentType } from './channelContentTypes'
import { ChannelRole } from './channelRoles'
export type Money = number;

export interface Channel {
    id: string;
    name: string;
    description: string;
    role: ChannelRole;
    has_subscription: boolean;
}

export * from './channelRoles'

export interface ChannelCompleteContent {
    text: string;
    file?: string;
}

export interface ChannelContentModel {
    title: string;
    summary: string;
    is_premium: boolean;
    price: Money;
}

export interface SentChannelContent extends ChannelContentModel {
    text: string;
    file: string | null;
}

export interface ChannelContent extends ChannelContentModel {
    id: string;
    content_type: ChannelContentType;
    complete_content?: ChannelCompleteContent;
}
export * from './channelContentTypes'

export interface UserProfile {
    phone_number: string;
    username: string;
    email: string;
}

export interface UserWallet {
    balance: Money
}
