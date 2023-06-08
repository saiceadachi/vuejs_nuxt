<template>
    <div class="text-4xl font-bold underline">トップ</div>
  <div class="flex flex-col"> 
    <div class="text-4xl font-bold underline">今日のおすすめ</div>
    <div class="m-3 bg-white rounded-lg shadow">
      <ul class="divide-y-2 divide-gray-100">
        <li class="p-3 hover:bg-blue-100" v-for="item in items">
        <span class="font-bold text-white bg-red-700" v-if="item.price > 1000">高級品</span>
          {{ item.message }}:　{{ item.price }}円
        </li>
      </ul>
    </div>
    <div id="app">
      <div class="col-5">
        <input v-model="name" type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <div class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">{{ name }}</div>
        <button @click="show()" class="m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">show</button> 
        <button @click="change()" class="m-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">change</button>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  data: () =>{
  return {
    items: [{ message: 'たこ焼き', price: 400 }, { message: '串かつセット', price: 1200 }, { message: '男はつらいよ', price: 900 }, { message: '梅くらげ', price: 200 }],
    name: 'this is name'
  }
  }, methods: {
    show: function () {
      alert(this.name);
    },
    change: function () {
      this.name = "test!!!";
    }
  }
}
</script>