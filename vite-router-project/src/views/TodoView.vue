<template>
  <h1>Todo API</h1>
  <div>
    <h2>註冊</h2>
    <input type="text" placeholder="Email" v-model="signupField.email">
    <input type="text" placeholder="Password" v-model="signupField.password">
    <input type="text" placeholder="Nickname" v-model="signupField.nickname">
    {{ signupField }}
    <button type="button" v-on:click="signup">註冊</button>
    {{ signupRes }}
  </div>

  <div>
    <h2>登入</h2>
    <input type="text" placeholder="Email" v-model="signInField.email">
    <input type="text" placeholder="Password" v-model="signInField.password">
    {{ signInField }}
    <button type="button" v-on:click="signIn">登入</button>
    {{ signInRes }}
  </div>

  <div>
    <h2>驗證</h2>
    <div v-if="user.uid">
      <p>UID:{{ user.uid }}</p>
      <p>Nickname:{{ user.nickname }}</p>
    </div>
    <div v-else>
      妳還沒有登入喔
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const api = 'htps://todolist-api.hexschool.io'

  // 註冊
  const signupField = ref({
    email: '',
    password: '',
    nickname: ''
  })

  const signupRes = ref('')

  const signup = async () => {
    try {
      const res = await axios.post(`${api}/users/sign_up`,
        signupField.value
      )
      signupRes.value = res.data.uid
    } catch (error) {
      console.log(error.message)
    }
  }

  // 登入
  const signInField = ref({
    email: '',
    password: ''
  })

  const signInRes = ref('')

  const signIn = async () => {
    try {
      const res = await axios.post(`${api}/users/sign_in`,
        signInField.value
      )
      signInRes.value = res.data.token
      document.cookie = `todoToken=${res.data.token};`;
    } catch (error) {
      console.log(error.message)
    }
  }

  const user = ref({
    status: '',
    uid: ''
  })
  // 驗證
  onMounted(async () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)todoToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    )
    console.log(token)
    
    const res = await axios.get(`${api}/users/check`,
      {
        headers: {
          Authorization: token
        }
      }
    )
    user.value = res.data
  })
</script>