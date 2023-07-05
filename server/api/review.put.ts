import client from './client'
import { Review } from '../../typescript/review'

export default defineEventHandler(async (event) => {
    const params = await readBody(event)
    const id = params.id
    const title = params.title
    const body = params.body
    const rating = params.rating

    const response = client.update<Review>({
        endpoint: 'reviews',
        contentId: String(id),
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