import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { ChannelContent, SentChannelContent } from '~/models'
import { GET_CHANNEL_CONTENTS_URL, GET_CHANNEL_URL, GET_CONTENT_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface ChannelManager {
    addContent(channelId: string, content: SentChannelContent);

    editContent(channelId: string, editedContent: Partial<ChannelContent>);

    removeContent(contentId: string);
}

class ConcreteChannelManager extends OutsideVueComponent implements ChannelManager {
  addContent (channelId: string, content: SentChannelContent) {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_CONTENTS_URL(GET_CHANNEL_URL(channelId)), REQUEST_METHODS.POST, {
      withAuth: true,
      data: content
    }))
  }

  editContent (channelId: string, editedContent: SentChannelContent) {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CHANNEL_CONTENTS_URL(GET_CHANNEL_URL(channelId)), REQUEST_METHODS.PATCH, {
      withAuth: true,
      data: editedContent
    }))
  }

  removeContent (contentId: string) {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_CONTENT_URL(contentId), REQUEST_METHODS.DELETE, {
      withAuth: true
    }))
  }
}

export const concreteChannelManager = new ConcreteChannelManager()
