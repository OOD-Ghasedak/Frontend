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

export enum ChannelContentType {
    TEXT, IMAGE, VIDEO, VOICE
 }

export interface ChannelContent {
    id: string;
    name: string;
    price: Money;
    type: ChannelContentType;
    data: string;
    summary: string;
    is_monetary: boolean;
}

export enum ChannelRole {
    MEMBER, SPECIAL_MEMBER, ADMIN, OWNER
}

export interface UserProfile {
    phone_number: string;
    username: string;
    email: string;
}

export interface UserWallet {
    balance: number
}
