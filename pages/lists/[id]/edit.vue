<script setup lang="ts">
const route = useRoute();
const id = String(route.params.id);
const { data: article } = await useFetch(`/api/review`, {
    params: { id: id },
});
console.log ("value from api:"+article.value)
if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
const submitForm = async () => {
    await useFetch('/api/review', {
        method: 'put',
        body: { 
            id: id,
            title: article.value.title,
            body: article.value.body,
            rating: article.value.rating
        },
        onResponse({request, response, options}) {
            if (response.status === 200) {
                navigateTo('/lists/');
            }
        },
        onResponseError({request, response, options}) {
            if (response.status === 400) {
                alert('編集に失敗しました');
            }
        }
    })
    await navigateTo('/lists/')
}
</script>

<template>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div>
                <input class="bg-gray-50 border" type="text" name="title" v-model="article.title">
            </div>
            <div>
                <input class="bg-gray-50 border" type="text" name="rating" v-model="article.rating">
            </div>
            <div>
                <textarea cols=20 rows=10 class="bg-gray-50 border" name="body" v-model="article.body"></textarea>
            </div>
            <input class="button-blue" type="submit" value="更新">
        </form>
    </div>
</template>