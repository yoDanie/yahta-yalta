type BoatNames = 'alexandra' | 'maestro' | 'natatores' | 'josie'

// | 'altair'
// | 'alustar'
// | 'anadel'
// | 'aurelia'
// | 'barcelona'
// | 'eden'
// | 'ibiza'
// | 'juniorStar'
// | 'karolina'
// | 'label'
// | 'maestro'
// | 'mishor'
// | 'monika'
// | 'natatores'
// | 'nikole'
// | 'omega'
// | 'pharaoh'
// | 'raffaela'
// | 'raskat'
// | 'saintMary'
// | 'snafu'
// | 'vaynah'

declare global {
  type BoatData = {
    cabins?: number
    capacity: number
    isHighSpeed?: boolean
    length?: number
    model?: string
    name: BoatNames
    price: number
    sleeps?: number
    slug: string
    type: 'sailing' | 'motor' | 'catamaran'
    width?: number
  }
}

export {}
