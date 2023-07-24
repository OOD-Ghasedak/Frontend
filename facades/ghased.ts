
interface UserProfile {

}

export default interface Ghased {
    getProfile(): Promise<UserProfile>;

    editProfile(editInfo: Partial<UserProfile>): Promise<any>;

    changePassword(oldPassword: string, newPassword: string): Promise<any>;
}

class ConcreteGhased implements Ghased {
  getProfile (): Promise<UserProfile> {
    throw new Error('Method not implemented.')
  }

  editProfile (editInfo: Partial<UserProfile>): Promise<any> {
    throw new Error('Method not implemented.')
  }

  changePassword (oldPassword: string, newPassword: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}

export const concreteGhased = new ConcreteGhased()
