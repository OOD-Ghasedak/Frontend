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

export enum ChannelContentType {}

export interface ChannelContent {
    name: string;
    price: Money;
    summary: string;
    type: ChannelContentType;
    data: string;
}

export enum ChannelRole {
    MEMBER, SPECIAL_MEMBER, ADMIN, OWNER
}

export interface UserProfile {
    phone_number: string;
    user_name: string;
    email: string;
}

export interface UserWallet {
    balance: number
}
