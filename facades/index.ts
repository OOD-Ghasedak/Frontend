import VisitingUser, { concreteVisitingUser } from './visitingUser'

export interface Facades {
    visitingUser: VisitingUser
}

export const concreteFacades: Facades = {
  visitingUser: concreteVisitingUser
}
