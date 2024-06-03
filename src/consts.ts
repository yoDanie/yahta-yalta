import * as boatsData from 'data'
import SailIcon from 'icons/dark-sail-boat.svg'
import PeopleIcon from 'icons/users.svg'
import WalletIcon from 'icons/wallet2.svg'

import type { BoatName } from 'types'

export const HEADER_HEIGHT = 80

export const boatsNames = Object.keys(boatsData) as BoatName[]

export const boatTypeMapping = {
  sailing: 'парусно-моторная',
  motor: 'моторная',
  catamaran: 'катамаран',
}

export const boatIconMapping = {
  capacity: PeopleIcon,
  price: WalletIcon,
  type: SailIcon,
}
