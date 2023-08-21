/* eslint-disable */

import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Channel, UserProfile } from '~/models'
import { PROFILE_URL } from '~/urls/account'
import { CHANNEL_URL, CREATE_CHANNEL_URL, GET_JOIN_CHANNEL_URL, JOINED_CHANNELS_URL, OWNED_OR_MANAGED_CHANNELS_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Ghased {
  logout(): Promise<any>;

  getProfile(): Promise<UserProfile>;

  editProfile(editInfo: Partial<UserProfile>): Promise<any>;

  changePassword(oldPassword: string, newPassword: string): Promise<any>;

  getJoinedChannels(): Promise<Channel[]>;

  getOwnedOrManagedChannels(): Promise<Channel[]>;

  createChannel(name: string, description: string): Promise<any>;

  searchChannel(search_name: string): Promise<Channel[]>;

  joinChannel(channelId: string): Promise<any>;
}

class ConcreteGhased extends OutsideVueComponent implements Ghased {
  logout(): Promise<any> {
    return new Promise((resolve) => {
      this.mainConfig.$stores.main.setAccessToken(null)
      this.mainConfig.$stores.main.setRefreshToken(null)
      resolve('Success')
    })
  }

  getProfile(): Promise<UserProfile> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.GET, {
      withAuth: true,
    }))
  }

  editProfile(editInfo: Partial<UserProfile>): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.PATCH, {
      withAuth: true,
      data: editInfo
    }))
  }

  changePassword(oldPassword: string, newPassword: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  getJoinedChannels(): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(JOINED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true })).then((response) => {
      return response
    })
  }

  getOwnedOrManagedChannels(): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(OWNED_OR_MANAGED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true })).then((response) => {
      return response
    })
  }

  createChannel(name: string, description: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(CREATE_CHANNEL_URL, REQUEST_METHODS.POST, {
      withAuth: true,
      data: {
        name,
        description
      }
    }))
  }

  searchChannel(searchName: string): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(CHANNEL_URL, REQUEST_METHODS.GET, {
      withAuth: true,
      config: {
        params: {
          search: searchName
        }
      }
    })).then(response => { return response.results })
  }

  joinChannel(channelId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_JOIN_CHANNEL_URL(channelId), REQUEST_METHODS.POST, {
      withAuth: true,
      data: {}
    }))
  }
}

export const concreteGhased = new ConcreteGhased()
