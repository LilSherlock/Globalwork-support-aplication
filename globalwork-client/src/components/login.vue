<template>
  <div class="Login">
    <div class="login-container">
      <div class="message-content">
        <img src="../assets/logobal.svg" alt="">
      </div>
      <div class="login-content">
        <input type="email" placeholder="email" v-model="email" name="email">
      </div>
      <div class="login-content">
        <input type="password" v-model="password" placeholder="password" name="password">
      </div>
      <div class="button-login">
        <button @click="register" class="button" type="submit">login</button>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/service/authenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const response = await authService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  },
  name: 'login'

}
</script>


<style>

.login-container {
  margin: auto;
  width: 50%;
  border-radius: 25px;
}
.message-content {
  padding-top: 2%;
  font-size: 25px;
  margin-bottom: 7%;
  transform: scale(2);
}
.login-content {
  padding-top: 5%;
  position: relative;
}
.button-login {
  padding-top: 5%;
  padding-bottom: 15%;
  position: relative;
}

input {
  width: 48%;
  padding: 30px;
  background-color: #eff6e0;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  box-shadow:none !important;
  border:2px solid #353535 !important;
  font-family: 'Rubik', sans-serif;
}
input:focus {
  width: 50%;
  padding: 30px 20px;
  background-color: #f7fff7;
  border: 1px solid black;
  border-radius: 25px;
  outline: none;
  box-shadow:none !important;
  border:2px solid #353535 !important;
  font-family: 'Rubik', sans-serif;
  transition: 0.8s;
}
button {
  width: 20%;
  padding: 15px;
  background-color: #fef9ef;
  border:2px solid #353535 !important;
  border-radius: 25px;
  outline: none;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 3px #999;
  text-align: center;
}

button:active {
  background-color: #eff6e0;
  box-shadow: 0 3px #666;
  transform: translateY(2px);
}

</style>
