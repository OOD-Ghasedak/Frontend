import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Channel, ChannelContent } from '~/models'
import { GET_CHANNEL_URL, GET_CHANNEL_CONTENTS_URL, GET_CONTENT_URL, GET_LEAVE_CHANNEL_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Subscriber {
  getChannel(channelId: string): Promise<Channel>;

  getChannelContents(channelId: string): Promise<ChannelContent[]>;

  getChannelContent(contentId: string): Promise<ChannelContent>;

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

  leaveChannel (channelId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_LEAVE_CHANNEL_URL(channelId), REQUEST_METHODS.DELETE, {
      withAuth: true
    }))
  }
}

export const concreteSubscriber = new ConcreteSubscriber()
