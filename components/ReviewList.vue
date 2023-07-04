<script setup lang="ts">
    import { Review } from '../typescript/review'
    const header = ref(["番号", "タイトル", "Rating",""])
    type Props = {
        reviews: Review[] | undefined;
    }
    const { reviews } = defineProps<Props>()
</script>

<template>
    <table>
        <thead>
        <tr>
            <th class="p-1" v-for="col in header">{{ col }}</th>
        </tr>
        </thead>

        <tbody>
            <tr class="tr-5 hover:bg-green-200" v-for="(review, index) in reviews">
                <th class="p-1">{{ index+1 }}</th>
                <td class="p-1">
                    <nuxt-link :to="`/lists/${review.id}`">
                        {{ review.title }}
                    </nuxt-link>
                </td>
                <td class="p-1"><Stars :rating="review.rating.valueOf()" :size="16" :immutable="true" /></td>
                <td class="p-1"><div><nuxt-link class="button-red" :to="`/lists/${review.id}/delete`">削除</nuxt-link></div></td>
            </tr>
        </tbody>
    </table>
</template>