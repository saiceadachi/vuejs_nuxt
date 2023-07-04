<script setup lang="ts">
const route = useRoute();

const title = ref('')
const rating = ref(1)
const content = ref('')

const submitForm = async () => {
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
            <div>
                Title: <input class="bg-gray-50 border" type="text" name="title" v-model="title">
            </div>
            <div>
                Rating: <input class="bg-gray-50 border" type="number" name="rating" v-model="rating">
            </div>
            <div>
                <textarea cols=20 rows=10 class="bg-gray-50 border" name="body" v-model="content"></textarea>
            </div>
            <input class="button-blue" type="submit" value="送信">
        </form>
    </div>
</template>