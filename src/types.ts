import * as boatsData from 'data'

export type BoatName = keyof typeof boatsData

export type BoatData = {
  cabins?: number
  capacity: number
  isHighSpeed?: boolean
  length?: number
  model?: string
  name: BoatName
  price: number
  sleeps?: number
  slug: string
  type: 'sailing' | 'motor' | 'catamaran'
  width?: number
  description?: string
}
