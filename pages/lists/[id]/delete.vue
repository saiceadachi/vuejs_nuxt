<script setup lang="ts">
const route = useRoute();
const id = String(route.params.id);
const { data: article } = await useFetch(`/api/review`, {
    params: { id: id },
});

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
const submitForm = async () => {
    const resp = await useFetch('/api/review', {
        method: 'delete',
        query: {id: id},
        onResponse({request, response, options}) {
            if (response.status === 202) {
                navigateTo('/lists/');
            }
        },
        onResponseError({request, response, options}) {
            if (response.status === 404) {
                alert('削除できませんでした（既に削除されている可能性があります）');
            }
        }
    })
}
</script>

<template>
    <div>
    <h4>下記のレビューを削除します</h4>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div class="flex-topaligned">
                Title: <input class="bg-gray-50 border" type="text" disabled name="title" v-model="article.title">
            </div>
            <div class="flex-centeraligned">
                Rating: <Stars :rating="article?.rating.valueOf()" :immutable="true" />
            </div>
            <div class="flex-topaligned">
                Content: <textarea cols=80 rows=20 class="bg-gray-50 border" disabled name="body" v-model="article.body"></textarea>
            </div>
            <input class="button-red" type="submit" value="削除">
        </form>
    </div>
    </div>
</template>