/* eslint-disable */

import { RequestParams } from "~/apis/axiosRequest";
import { JoinedChannel, OwnedOrManagedChannel } from "~/models";
import { JOINED_CHANNELS_URL, OWNED_OR_MANAGED_CHANNELS_URL } from "~/urls/channel";
import { OutsideVueComponent } from "~/utils/connectToNuxt";

interface UserProfile {
  phone_number: string;
  user_name: string;
  email: string;
}

export default interface Ghased {
  getProfile(): Promise<UserProfile>;

  editProfile(editInfo: Partial<UserProfile>): Promise<any>;

  changePassword(oldPassword: string, newPassword: string): Promise<any>;

  getJoinedChannels(): Promise<JoinedChannel[]>;

  getOwnedOrManagedChannels(): Promise<OwnedOrManagedChannel[]>;
}

class ConcreteGhased extends OutsideVueComponent implements Ghased {
  getProfile(): Promise<UserProfile> {
    throw new Error('Method not implemented.')
  }

  editProfile(editInfo: Partial<UserProfile>): Promise<any> {
    throw new Error('Method not implemented.')
  }

  changePassword(oldPassword: string, newPassword: string): Promise<any> {
    throw new Error('Method not implemented.')
  }

  getJoinedChannels(): Promise<JoinedChannel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(JOINED_CHANNELS_URL, '$get', { withAuth: true, retrieveAuth: true })).then((response) => {
      return response
    })
  }

  async getOwnedOrManagedChannels(): Promise<OwnedOrManagedChannel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(OWNED_OR_MANAGED_CHANNELS_URL, '$get', { withAuth: true, retrieveAuth: true })).then((response) => {
      return response
    })
  }
}

export const concreteGhased = new ConcreteGhased()
