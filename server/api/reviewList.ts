import client from './client'
import { Review } from '../../typescript/review'

export default defineEventHandler(async (event) => {
    const data = await client
        .getList<Review>({
            endpoint: 'reviews',
        })
    return data
})