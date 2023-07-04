<script setup lang="ts">
const route = useRoute();
const id = String(route.params.id);
const { data: article } = await useFetch(`/api/review`, {
    params: { id: id },
});
if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
    <div class="flex flex-col">
        <h1 class="title text-2xl font-bold">{{ article?.title }}</h1>
        <div style="display: flex; flex-direction: row; align-items: center; column-gap: 0.5rem;">
            Rating: <Stars :rating="article?.rating.valueOf()" :imutal="true"></Stars>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; column-gap: 0.5rem;">
            Content: <br />{{ article?.body }}</div>
        <nuxt-link class="button-blue" :to="`${id}/edit`">更新</nuxt-link>
    </div>
</template>