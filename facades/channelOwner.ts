/* eslint-disable */

import { REQUEST_METHODS, RequestParams } from '~/apis/backend';
import { ChannelAdmin, ChannelInfo, ChannelMember, SubscriptionModel } from '~/models'
import { GET_CHANNEL_URL, GET_CHANNEL_SUBSCRIPTION_URL, GET_CHANNEL_SUBSCRIBERS_URL, GET_CHANNEL_MEMBER_PROMOTION_URL, GET_CHANNEL_ADMINS_URL, GET_CHANNEL_ADMIN_MANAGEMENT_URL } from '~/urls/channel';
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface ChannelOwner {
    editChannelInfo(channelId: string, editedInfo: Partial<ChannelInfo>): Promise<any>;

    defineSubscription(channelId: string, subscriptions: SubscriptionModel[]): Promise<any>;

    removeSubscription(channelId: string): Promise<any>;

    getChannelMembers(channelId: string): Promise<ChannelMember[]>;

    promoteMemberToAdmin(channelId: string, member: ChannelMember, sharePercent: number);

    getChannelAdmins(channelId: string): Promise<ChannelAdmin[]>;

    dischargeAdmin(admin: ChannelAdmin): Promise<any>;

    setSharePercent(admin: ChannelAdmin): Promise<any>;

    removeChannel(channelId: string);
}

class ConcreteChannelManager extends OutsideVueComponent implements ChannelOwner {
    editChannelInfo(channelId: string, editedInfo: Partial<ChannelInfo>): Promise<any> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_URL(channelId), REQUEST_METHODS.PATCH, {
            withAuth: true,
            data: editedInfo
        }))
    }

    defineSubscription(channelId: string, subscriptions: SubscriptionModel[]): Promise<any> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_SUBSCRIPTION_URL(channelId), REQUEST_METHODS.POST, {
            withAuth: true,
            data: subscriptions
        }))
    }

    removeSubscription(channelId: string) {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_SUBSCRIPTION_URL(channelId), REQUEST_METHODS.DELETE, {
            withAuth: true,
        }))
    }

    getChannelMembers(channelId: string): Promise<ChannelMember[]> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_SUBSCRIBERS_URL(channelId), REQUEST_METHODS.GET, {
            withAuth: true,
        }))
    }

    promoteMemberToAdmin(channelId: string, member: ChannelMember, sharePercent: number) {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_MEMBER_PROMOTION_URL(channelId), REQUEST_METHODS.POST, {
            withAuth: true,
            data: {
                ghased: member.ghased.id,
                share: sharePercent
            }
        }))
    }

    getChannelAdmins(channelId: string): Promise<ChannelAdmin[]> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_ADMINS_URL(channelId), REQUEST_METHODS.GET, {
            withAuth: true,
        }))
    }

    dischargeAdmin(admin: ChannelAdmin): Promise<any> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_ADMIN_MANAGEMENT_URL(admin.id), REQUEST_METHODS.DELETE, {
            withAuth: true,
        }))
    }

    setSharePercent(admin: ChannelAdmin): Promise<any> {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_ADMIN_MANAGEMENT_URL(admin.id), REQUEST_METHODS.PUT, {
            withAuth: true,
            data: { share: admin.share }
        }))
    }

    removeChannel(channelId: string) {
        return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_URL(channelId), REQUEST_METHODS.DELETE, {
            withAuth: true,
        }))
    }
}

export const concreteChannelOwner = new ConcreteChannelManager()
