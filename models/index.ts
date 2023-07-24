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
