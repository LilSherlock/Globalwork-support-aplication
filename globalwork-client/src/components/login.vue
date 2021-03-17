<template>
    <div class="Login">   
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
            <button @click="login" class="button" type="submit">login</button>
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
        async login() {
        const response = await authService.login({
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
html {height: 100%;}
input {
    outline:none;
}
.Login {
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 50px 50px 5px;
    width: 650px;
    height: 560px;
    padding-top: 120px;
    background-color: rgba(243, 233, 233, 0.767);
}
.message-content {
    margin-bottom: 70px;
}
.message-content img {
    width: 400px;
}
.login-content input{
    border: none;
    height: 50px;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    width: 500px;
    margin-bottom: 30px;
}
.login-content input[type="email"]{
    border: none;
    height: 50px;
    font-size: 15px;
    padding-left: 20px;
    font-family: 'Rubik', sans-serif;
    width: 400px;
    margin-bottom: 30px;
}
.login-content input[type="email"]:focus{
    border: none;
    height: 50px;
    font-size: 15px;
    padding-left: 20px;
    font-family: 'Rubik', sans-serif;
    width: 500px;
    transition: 0.8s;
    margin-bottom: 30px;
}
.login-content input[type="password"]{
    border: none;
    height: 50px;
    font-size: 15px;
    padding-left: 20px;
    font-family: 'Rubik', sans-serif;
    width: 400px;
    margin-bottom: 30px;
    border: none;
}
.login-content input[type="password"]:focus{
    border: none;
    height: 50px;
    font-size: 15px;
    padding-left: 20px;
    font-family: 'Rubik', sans-serif;
    width: 500px;
    margin-bottom: 30px;
    transition: 0.8s;
    border: none;
}
.button {
    height: 60px;
    width: 120px;
    font-family: 'Rubik', sans-serif;
    border: none;
    outline:none;
}
.button:active {
    transform: translateY(2px);
    font-family: 'Rubik', sans-serif;
}
</style>
