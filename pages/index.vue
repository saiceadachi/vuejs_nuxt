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
        <label for="name">注文の商品名</label>
        <input v-model="name" type="text" name="name" class="textbox" />
        <div class="message" v-if="isInvalidName">{{ name }}は商品名として短すぎます</div>
        <div class="message" v-if="isBlank">何か入力してください</div>
        <button @click="order()" class="button-blue">注文</button> 
        <button @click="change()" class="button-red">変更</button>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  data: () =>{
  return {
    items: [{ message: 'たこ焼き', price: 400 }, { message: '串かつセット', price: 1200 }, { message: '男はつらいよ', price: 900 }, { message: '梅くらげ', price: 200 }],
    name: 'いつものやつ'
  }
  }, methods: {
    order: function () {
      alert(this.name+"をご注文");
    },
    change: function () {
      this.name = "いつものやつ";
    }
  }, computed: {
    isInvalidName(){
      return this.name.length < 4 && this.name.length > 0;
    },
    isBlank(){
      return this.name.length == 0;
    }
  }
}
</script>