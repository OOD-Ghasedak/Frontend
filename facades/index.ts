import Ghased, { concreteGhased } from './ghased'
import VisitingUser, { concreteVisitingUser } from './visitingUser'

export interface Facades {
    visitingUser: VisitingUser,
    ghased: Ghased
}

export const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser,
  ghased: concreteGhased
}
