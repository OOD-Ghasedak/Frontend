/* eslint-disable */

import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Money, UserWallet } from '~/models'
import { WALLET_URL } from '~/urls/financial'
import { OutsideVueComponent } from '~/utils/connectToNuxt'

export default interface Wallet {
  getWallet(): Promise<UserWallet>

  deposit(money: Money);

  withdraw(money: Money);
}

class ConcreteWallet extends OutsideVueComponent implements Wallet {
  getWallet (): Promise<UserWallet> {
    return this.mainConfig.$apis.backend.send(new RequestParams(
      WALLET_URL, REQUEST_METHODS.GET, {
        withAuth: true,
        retrieveAuth: true
      }
    ))
  }

  deposit (money: number) {
    throw new Error('Method not implemented.')
  }

  withdraw (money: number) {
    throw new Error('Method not implemented.')
  }
}

export const concreteWallet = new ConcreteWallet()
