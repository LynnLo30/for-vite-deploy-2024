<template>
  <h1>登入</h1>
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
</template>

<script setup>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

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

  const router = useRouter()

  const signIn = async () => {
    try {
      const res = await axios.post(`${api}/users/sign_in`,
        signInField.value
      )
      signInRes.value = res.data.token

      router.push('/todo')

      document.cookie = `todoToken=${res.data.token};`;
    } catch (error) {
      console.log(error.message)
    }
  }

  const user = ref({
    status: '',
    uid: ''
  })
</script>