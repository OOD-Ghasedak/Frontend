/* eslint-disable */

import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { JoinedChannel, OwnedOrManagedChannel, UserProfile, UserWallet } from '~/models'
import { PROFILE_URL } from '~/urls/account'
import { CREATE_CHANNEL_URL, JOINED_CHANNELS_URL, OWNED_OR_MANAGED_CHANNELS_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Ghased {
  logout(): Promise<any>;

  getProfile(): Promise<UserProfile>;

  editProfile(editInfo: Partial<UserProfile>): Promise<any>;

  changePassword(oldPassword: string, newPassword: string): Promise<any>;

  getJoinedChannels(): Promise<JoinedChannel[]>;

  getOwnedOrManagedChannels(): Promise<OwnedOrManagedChannel[]>;

  createChannel(name: string, description: string): Promise<any>;
}

class ConcreteGhased extends OutsideVueComponent implements Ghased {
  logout(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  
  getProfile (): Promise<UserProfile> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.GET, {
      withAuth: true,
      retrieveAuth: true
    }))
  }

  editProfile (editInfo: Partial<UserProfile>): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.PATCH, {
      withAuth: true,
      retrieveAuth: true,
      data: editInfo
    }))
  }

  changePassword (oldPassword: string, newPassword: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  getJoinedChannels (): Promise<JoinedChannel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(JOINED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true, retrieveAuth: true })).then((response) => {
      return response
    })
  }

  getOwnedOrManagedChannels (): Promise<OwnedOrManagedChannel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(OWNED_OR_MANAGED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true, retrieveAuth: true })).then((response) => {
      return response
    })
  }

  createChannel(name: string, description: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(CREATE_CHANNEL_URL, REQUEST_METHODS.POST, {
      withAuth: true,
      retrieveAuth: true,
      data: {
        name,
        description
      }
    }))
  }
}

export const concreteGhased = new ConcreteGhased()
