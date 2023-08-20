
export enum ChannelContentType {
    TEXT = 'text', IMAGE = 'image', VIDEO = 'video', VOICE = 'audio'
}

export interface ChannelContentTypeProp {
    icon: string;
    content: {
        fileTag: string;
    } | false;
}

export const ChannelContentTypeProps: { [key in ChannelContentType]: ChannelContentTypeProp } = {
  [ChannelContentType.TEXT]: {
    icon: 'text',
    content: false
  },
  [ChannelContentType.IMAGE]: {
    icon: 'image',
    content: { fileTag: 'img' }
  },
  [ChannelContentType.VIDEO]: {
    icon: 'video',
    content: { fileTag: '' }
  },
  [ChannelContentType.VOICE]: {
    icon: 'voice',
    content: false
  }
}
