/* eslint-disable */

import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { JoinedChannel, OwnedOrManagedChannel, UserProfile, UserWallet } from '~/models'
import { PROFILE_URL } from '~/urls/account'
import { JOINED_CHANNELS_URL, OWNED_OR_MANAGED_CHANNELS_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Ghased {
  getProfile(): Promise<UserProfile>;

  editProfile(editInfo: Partial<UserProfile>): Promise<any>;

  changePassword(oldPassword: string, newPassword: string): Promise<any>;

  getJoinedChannels(): Promise<JoinedChannel[]>;

  getOwnedOrManagedChannels(): Promise<OwnedOrManagedChannel[]>;
}

class ConcreteGhased extends OutsideVueComponent implements Ghased {
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
}

export const concreteGhased = new ConcreteGhased()
