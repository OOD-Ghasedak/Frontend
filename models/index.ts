import { ChannelContentType } from './channelContentTypes'
import { ChannelRole } from './channelRoles'
export type Money = number;

export interface ChannelInfo {
    name: string;
    description: string;
}
export interface Channel extends ChannelInfo {
    id: string;
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
    file: string | ArrayBuffer | null;
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

export enum SubscriptionDuration {
    ONE_MONTH = 'one month',
    THREE_MONTH = 'three month',
    SIX_MONTH = 'six month',
    TWELVE_MONTH = 'twelve month'
}
export interface SubscriptionModel {
    price: Int16Array;
    duration_choice: SubscriptionDuration;
}

export interface Subscription extends SubscriptionModel {
    id: string;
}

export interface Ghased {
    id: string;
    username: string;
    full_name: string;
}
export interface ChannelMember {
    id: string;
    ghased: Ghased;
}
export interface ChannelAdmin {
    id: string;
    ghased: Ghased;
    share: number;
}
