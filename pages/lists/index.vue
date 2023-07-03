<script setup lang="ts">
    const {data:reviews} = await useFetch('/api/reviewList')
</script>

<template>
    <div class="flex flex-col">
        <div>
            <h1 style="
            font-size:30px;
            text-align:center;
            margin:10px 0 auto;
            ">当店のレビュー一覧</h1>
        </div>
        <nuxt-link class="button-blue" to="/lists/new">新規レビュー</nuxt-link>
        <ReviewList :reviews="reviews.contents" />
    </div>
</template>