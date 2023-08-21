import { ChannelAdmin, ChannelInfo, ChannelMember, SubscriptionModel } from '~/models'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface ChannelOwner {
    editChannelInfo(channelId: string, editedInfo: Partial<ChannelInfo>): Promise<any>;

    defineSubscription(channelId: string, subscriptions: SubscriptionModel[]): Promise<any>;

    getChannelMembers(channelId: string): Promise<ChannelMember[]>;

    promoteMemberToAdmin(channelId: string, member: ChannelMember, sharePercent: number);

    getChannelAdmins(channelId: string): Promise<ChannelAdmin[]>;

    dischargeAdmin(admin: ChannelAdmin): Promise<any>;

    setSharePercent(admin: ChannelAdmin, sharePercent: number): Promise<any>;

    removeChannel(channelId: string);
}

class ConcreteChannelManager extends OutsideVueComponent implements ChannelOwner {
  editChannelInfo (channelId: string, editedInfo: Partial<ChannelInfo>): Promise<any> {
    throw new Error('Method not implemented.')
  }

  defineSubscription (channelId: string, subscriptions: SubscriptionModel[]): Promise<any> {
    throw new Error('Method not implemented.')
  }

  getChannelMembers (channelId: string): Promise<ChannelMember[]> {
    throw new Error('Method not implemented.')
  }

  promoteMemberToAdmin (channelId: string, member: ChannelMember, sharePercent: number) {
    throw new Error('Method not implemented.')
  }

  getChannelAdmins (channelId: string): Promise<ChannelAdmin[]> {
    throw new Error('Method not implemented.')
  }

  dischargeAdmin (admin: ChannelAdmin): Promise<any> {
    throw new Error('Method not implemented.')
  }

  setSharePercent (admin: ChannelAdmin, sharePercent: number): Promise<any> {
    throw new Error('Method not implemented.')
  }

  removeChannel (channelId: string) {
    throw new Error('Method not implemented.')
  }
}

export const concreteChannelOwner = new ConcreteChannelManager()
