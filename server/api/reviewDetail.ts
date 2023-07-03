import client from './client'
import { Review } from '../../typescript/review'

export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const id = params.id
    const data = client.getListDetail<Review>({
        endpoint: 'reviews',
        contentId: String(id),
    })
    return data
})