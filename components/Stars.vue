<script lang="ts" setup>
    import {ref} from "vue"

    // prop
    interface Props {
    rating: number,
    size?: number,
    immutable?: boolean
    }
    interface Emits {
        (e: "update:rating", visible: number): void;
    }

    const props = withDefaults(
    defineProps<Props>(), { rating: 0, size: 32, immutable: false }
    );

    const emit = defineEmits<Emits>();

    const onClick = (r: number) => { 
        if(props.immutable) return
        console.log(r);
        currentValue.value=r
         emit('update:rating', r) 
        };

    const currentValue = ref (props.rating)

    const sequence = [...Array(5)].map((_:undefined, idx:number) => idx+1)

    const size = props.size
</script>

<template>
    <div style="display: inline-flex; flex-direction: row">
    <template v-for="index in sequence">
        <img v-if="currentValue>=index" :width="size" :height="size" v-on:click="()=>onClick(index)" src="../assets/img/star1.png" />
        <img v-else :width="size" :height="size" v-on:click="()=>onClick(index)" src="../assets/img/star0.png" />
    </template>
    </div>
</template>