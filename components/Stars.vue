<script lang="ts" setup>
    import {ref} from "vue"

    // prop
    interface Props {
    rating: number,
    size?: number,
    imutal?: boolean
    }
    interface Emits {
        (e: "update:rating", visible: number): void;
    }

    const props = withDefaults(
    defineProps<Props>(), { rating: 0, size: 32, imutal: false }
    );

    const emit = defineEmits<Emits>();

    const onClick = (r: number) => { 
        if(props.imutal) return
        console.log(r);
        currentValue.value=r
         emit('update:rating', r) 
        };

    const currentValue = ref (props.rating)

    const size = props.size
</script>

<template>
    <div style="display: inline-flex; flex-direction: row">
    <img v-if="currentValue>0" :width="size" :height="size" v-on:click="()=>onClick(1)" src="../assets/img/star1.png" />
    <img v-else :width="size" :height="size" v-on:click="()=>onClick(1)" src="../assets/img/star0.png" />
    <img v-if="currentValue>1" :width="size" :height="size" v-on:click="()=>onClick(2)" src="../assets/img/star1.png" />
    <img v-else :width="size" :height="size" v-on:click="()=>onClick(2)" src="../assets/img/star0.png" />
    <img v-if="currentValue>2" :width="size" :height="size" v-on:click="()=>onClick(3)" src="../assets/img/star1.png" />
    <img v-else :width="size" :height="size" v-on:click="()=>onClick(3)" src="../assets/img/star0.png" />
    <img v-if="currentValue>3" :width="size" :height="size" v-on:click="()=>onClick(4)" src="../assets/img/star1.png" />
    <img v-else :width="size" :height="size" v-on:click="()=>onClick(4)" src="../assets/img/star0.png" />
    <img v-if="currentValue>4" :width="size" :height="size" v-on:click="()=>onClick(5)" src="../assets/img/star1.png" />
    <img v-else :width="size" :height="size" v-on:click="()=>onClick(5)" src="../assets/img/star0.png" />
    </div>
</template>