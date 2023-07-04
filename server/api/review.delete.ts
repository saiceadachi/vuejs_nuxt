import client from './client'

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const id = query.id

    const response = client.delete({
        endpoint: 'reviews',
        contentId: String(id),
    })

    await response
        .then(function(res){
            setResponseStatus(event, 202)
        })
        .catch(function(err){
            setResponseStatus(event, 404)
        })
    return {processed:true}
})