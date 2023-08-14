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

export interface ChannelContent {
    price;
    summary;
    type;
    data;
}

export interface UserProfile {
    phone_number: string;
    user_name: string;
    email: string;
}

export interface UserWallet {
    balance: number
}

export type Money = number;
