<script setup lang="ts">
const route = useRoute();

const title = ref('')
const rating = ref(0)
const content = ref('')

const submitForm = async () => {
    if(title.value===''){
        alert('タイトルを入力してください');
        return;
    }
    if(rating.value===0){
        alert('Ratingを入力してください');
        return;
    }
    if(content.value===''){
        alert('本文を入力してください');
        return;
    }
    const resp = await useFetch('/api/review', {
        method: 'post',
        body:{
            title: title.value,
            rating: rating.value,
            body: content.value
        },
        onResponse({request, response, options}) {
            if (response.status === 200) {
                navigateTo('/lists/');
            }
        },
        onResponseError({request, response, options}) {
            alert('追加できませんでした');
        }
    })
}
</script>

<template>
    <div class="flex flex-col">
        <form @submit.prevent="submitForm">
            <div class="flex-topaligned">
                Title: <input class="bg-gray-50 border" type="text" name="title" v-model="title">
            </div>
            <div class="flex-centeraligned">
                Rating: <input class="bg-gray-50 border" type="hidden" name="rating" v-model="rating">
                <Stars :rating="rating" @update:rating="rating = $event" />
            </div>
            <div class="flex-topaligned">
                Content:
                <textarea cols=80 rows=20 class="bg-gray-50 border" name="body" v-model="content"></textarea>
            </div>
            <input class="button-blue" type="submit" value="送信">
        </form>
    </div>
</template>