import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Channel, ChannelContent, Subscription } from '~/models'
import { GET_CHANNEL_URL, GET_CHANNEL_CONTENTS_URL, GET_CONTENT_URL, GET_LEAVE_CHANNEL_URL, GET_CHANNEL_SUBSCRIPTION_URL, PURCHASED_SUBSCRIPTIONS_URL, PURCHASED_CONTENTS_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Subscriber {
  getChannel(channelId: string): Promise<Channel>;

  getChannelContents(channelId: string): Promise<ChannelContent[]>;

  getChannelContent(contentId: string): Promise<ChannelContent>;

  getChannelSubscriptions(channelId: string): Promise<Subscription[]>;

  buySubscription(subscriptionId: string): Promise<any>;

  buyContent(contentId: string): Promise<any>;

  leaveChannel(channelId: string): Promise<any>;
}

class ConcreteSubscriber extends OutsideVueComponent implements Subscriber {
  getChannel (channelId: string): Promise<Channel> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_URL(channelId), REQUEST_METHODS.GET, {
      withAuth: true
    }))
  }

  getChannelContents (channelId: string): Promise<ChannelContent[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_CONTENTS_URL(GET_CHANNEL_URL(channelId)), REQUEST_METHODS.GET, {
      withAuth: true
    })).then((response) => {
      return response.results
    })
  }

  getChannelContent (contentId: string): Promise<ChannelContent> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CONTENT_URL(contentId), REQUEST_METHODS.GET, {
      withAuth: true
    }))
  }

  getChannelSubscriptions (channelId: string): Promise<Subscription[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_SUBSCRIPTION_URL(channelId), REQUEST_METHODS.GET, {
      withAuth: true
    }))
  }

  buySubscription (subscriptionId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PURCHASED_SUBSCRIPTIONS_URL, REQUEST_METHODS.POST, {
      withAuth: true,
      data: { subscription: subscriptionId }
    }))
  }

  buyContent (contentId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PURCHASED_CONTENTS_URL, REQUEST_METHODS.POST, {
      withAuth: true,
      data: { content: contentId }
    }))
  }

  leaveChannel (channelId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_LEAVE_CHANNEL_URL(channelId), REQUEST_METHODS.DELETE, {
      withAuth: true
    }))
  }
}

export const concreteSubscriber = new ConcreteSubscriber()
