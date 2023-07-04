import client from './client'
import { Review } from '../../typescript/review'

export default defineEventHandler(async (event) => {
    const params = await readBody(event)
    const title = params.title
    const body = params.body
    const rating = params.rating

    const response = client.create<Review>({
        endpoint: 'reviews',
        content:{
            title: String(title),
            body: String(body),
            rating: Number(rating)
        }
    })

    await response
        .then(function(res){
            setResponseStatus(event, 200)
        })
        .catch(function(err){
            setResponseStatus(event, 400)
        })
    return {processed:true}
})