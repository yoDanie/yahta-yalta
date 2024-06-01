import * as boatsData from 'data'
import * as BoatsImages from 'images'
import { useRouter } from 'next/router'

import type { BoatData, BoatName } from 'types'

export const useBoatData = (name?: BoatName) => {
  const router = useRouter()
  const boatName = (router.query.name as BoatName) || name

  const data: BoatData = boatsData[boatName] || {}
  const images = BoatsImages[boatName] || []
  const mainImage = images[0]

  return { data, images, mainImage }
}
