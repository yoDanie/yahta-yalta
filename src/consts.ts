import * as boatsData from 'data'

import type { BoatName } from 'types'

export const HEADER_HEIGHT = 80

export const boatsNames = Object.keys(boatsData) as BoatName[]

export const boatTypeMapping = {
  sailing: 'парусно-моторная',
  motor: 'моторная',
  catamaran: 'катамаран',
}
