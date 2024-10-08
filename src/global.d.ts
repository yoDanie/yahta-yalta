import { orderedBoatsData } from 'data'

declare global {
  type BoatData = {
    cabins?: number
    capacity: number
    isHighSpeed?: boolean
    length?: number
    model?: string
    name: string
    price: number
    sleeps?: number
    slug: string
    type: 'sailing' | 'motor' | 'catamaran'
    width?: number
    description: string
  }
}

export {}
