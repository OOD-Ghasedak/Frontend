import { REQUEST_METHODS, RequestParams } from '~/apis/backend'
import { Money, UserWallet } from '~/models'
import { DEPOSIT_URL, WALLET_URL, WITHDRAW_URL } from '~/urls/financial'
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
        withAuth: true
      }
    ))
  }

  deposit (amount: Money) {
    return this.mainConfig.$apis.backend.send(new RequestParams(
      DEPOSIT_URL, REQUEST_METHODS.POST, {
        withAuth: true,
        data: { amount }
      }
    ))
  }

  withdraw (amount: Money) {
    return this.mainConfig.$apis.backend.send(new RequestParams(
      WITHDRAW_URL, REQUEST_METHODS.POST, {
        withAuth: true,
        data: { amount }
      }
    ))
  }
}

export const concreteWallet = new ConcreteWallet()
