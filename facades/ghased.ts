import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Channel, UserProfile } from '~/models'
import { CHANGE_PASSWORD_URL, PROFILE_URL } from '~/urls/account'
import { CHANNELS_URL, CREATE_CHANNEL_URL, GET_JOIN_CHANNEL_URL, JOINED_CHANNELS_URL, OWNED_OR_MANAGED_CHANNELS_URL } from '~/urls/channel'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Ghased {
  logout(): Promise<any>;

  getProfile(): Promise<UserProfile>;

  editProfile(editInfo: Partial<UserProfile>): Promise<any>;

  changePassword(oldPassword: string, newPassword: string, repeatNewPassword: string): Promise<any>;

  getJoinedChannels(): Promise<Channel[]>;

  getOwnedOrManagedChannels(): Promise<Channel[]>;

  createChannel(name: string, description: string): Promise<any>;

  searchChannel(search_name: string): Promise<Channel[]>;

  joinChannel(channelId: string): Promise<any>;
}

class PasswordValidator {
  validate (newPassword: string, repeatNewPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (newPassword === repeatNewPassword) {
        resolve('Success')
      } else {
        reject(new Error('رمز عبورهای جدید مطابق هم نیستند'))
      }
    })
  }
}

class ConcreteGhased extends OutsideVueComponent implements Ghased {
  private readonly passwordValidator = new PasswordValidator()

  logout (): Promise<any> {
    return new Promise((resolve) => {
      this.mainConfig.$stores.main.setAccessToken(null)
      this.mainConfig.$stores.main.setRefreshToken(null)
      resolve('Success')
    })
  }

  getProfile (): Promise<UserProfile> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.GET, {
      withAuth: true
    }))
  }

  editProfile (editInfo: Partial<UserProfile>): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(PROFILE_URL, REQUEST_METHODS.PATCH, {
      withAuth: true,
      data: editInfo
    }))
  }

  changePassword (oldPassword: string, newPassword: string, repeatNewPassword: string): Promise<any> {
    return this.passwordValidator.validate(newPassword, repeatNewPassword).then(() => {
      return this.mainConfig.$apis.backend.send(new RequestParams(CHANGE_PASSWORD_URL, REQUEST_METHODS.POST, {
        withAuth: true,
        data: { old_password: oldPassword, new_password: newPassword }
      }))
    })
  }

  getJoinedChannels (): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(JOINED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true })).then((response) => {
      return response
    })
  }

  getOwnedOrManagedChannels (): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(OWNED_OR_MANAGED_CHANNELS_URL, REQUEST_METHODS.GET, { withAuth: true })).then((response) => {
      return response
    })
  }

  createChannel (name: string, description: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(CREATE_CHANNEL_URL, REQUEST_METHODS.POST, {
      withAuth: true,
      data: {
        name,
        description
      }
    }))
  }

  searchChannel (searchName: string): Promise<Channel[]> {
    return this.mainConfig.$apis.backend.send(new RequestParams(CHANNELS_URL, REQUEST_METHODS.GET, {
      withAuth: true,
      config: {
        params: {
          search: searchName
        }
      }
    })).then((response) => { return response.results })
  }

  joinChannel (channelId: string): Promise<any> {
    return this.mainConfig.$apis.backend.send(new RequestParams(GET_JOIN_CHANNEL_URL(channelId), REQUEST_METHODS.POST, {
      withAuth: true,
      data: {}
    }))
  }
}

export const concreteGhased = new ConcreteGhased()
