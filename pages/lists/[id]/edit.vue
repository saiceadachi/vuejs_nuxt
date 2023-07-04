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
    if(article.value.title===''){
        alert('タイトルを入力してください');
        return;
    }
    if(article.value.body===''){
        alert('本文を入力してください');
        return;
    }
    await useFetch('/api/review', {
        method: 'put',
        body: { 
            id: id,
            title: article?.value?.title,
            body: article?.value?.body,
            rating: article?.value?.rating
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
const updateRating = async(r :number) => {
    if(article && article.value){
        article.value.rating = r;
    }
}
</script>

<template>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div style="display: flex; flex-direction: row; align-items: start; column-gap: 0.5rem;">
                Title: <input class="bg-gray-50 border" type="text" name="title" v-model="article.title">
            </div>
            <div style="display: flex; flex-direction: row; align-items: center; column-gap: 0.5rem;">
                Rating: <input class="bg-gray-50 border" type="hidden" name="rating" v-model="article.rating">
                <Stars :rating="article?.rating.valueOf()" @update:rating="updateRating($event)" />
            </div>
            <div style="display: flex; flex-direction: row; align-items: start; column-gap: 0.5rem;">
                Content: <textarea cols=80 rows=20 class="bg-gray-50 border" name="body" v-model="article.body"></textarea>
            </div>
            <input class="button-blue" type="submit" value="更新">
        </form>
    </div>
</template>