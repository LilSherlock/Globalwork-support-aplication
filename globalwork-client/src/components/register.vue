<template>
    <div class="register">
        <div class="register-container">
            <div class="register-main">
                <i class="far fa-user-circle fa-5x"></i>
                <h1>Regissstro</h1>
            </div>
            <div class="register-content">
                <i class="fas fa-user"></i>
                <input type="email" placeholder="nombre" v-model="name" name="name" autocomplete="off">
            </div>
            <div class="register-content">
                <i class="fas fa-user"></i>
                <input type="email" placeholder="apellidos" v-model="last_name" name="last_name" autocomplete="off">
            </div>
            <div class="register-content">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="email" v-model="email" name="email" autocomplete="off">
            </div>
            <div class="register-content">
                <i class="fas fa-key"></i>
                <input type="password" v-model="password" placeholder="password" name="password" autocomplete="off">
            </div>
            <div class="error" v-html="error"/>
            <div class="button-register">
                <label><input type="checkbox" v-model="check" name="checkbox" value="value">¿Registrar como nuevo soporte?</label>
            </div>
            <div class="button-register">
                <button @click="register" class="button" type="submit">Registrar</button>
            </div>

        </div>
    </div>
</template>

<script>
import authService from '@/service/authenticationService'
export default {
    data () {
        return {
        name: '',
        last_name: '',
        error: null,
        email: '',
        password: '',

        check: false
        }
    },
    methods: {
        async register () {
            try{
                const response = await authService.register({
                    first_name: this.name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    supporter: this.check
            })
            console.log(response)} catch (error) {
                this.error = error.response.data.error
                } 
            }
    },
    name: 'register'

}
</script>

<style>
html {
    height: 100%;
}
.register {
    width: 450px;
    padding: 1%;
    box-shadow: 0px 50px 50px 5px;
    position: relative;
    background-color: rgba(243, 233, 233, 0.767);
    height: 550px;

}
.register-main {
    margin-bottom: 5%;

}

.register-container {
    padding: 4% 0% 0% 0%;

}
.register-content input {
    margin-bottom: 1.5%;
    background-color: transparent;
    color: #0c1821;
    width: 35%;
    padding: 2%;
    border: none;
    border-width: 20px;
    outline:0px ;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
}
.register-content input:focus {
    margin-bottom: 1.5%;
    background-color: transparent;
    color: #565264;
    width: 50%;
    border-width: 0 0 1px;
    padding: 2%;
    outline:0px ;
    -webkit-appearance: none;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    transition: 0.8s;
}

.button-register {
    font-family: 'Rubik', sans-serif;
    margin-bottom: 4%;
    font-weight: 500;
    padding: 1%;
    color: #0c1821;
    font-size: 15px;
}

.button {
    height: 60px;
    width: 120px;
    font-family: 'Rubik', sans-serif;
    border: none;
}
.button:active {
    transform: translateY(2px);
    font-family: 'Rubik', sans-serif;
}

.error {
    color: red;
    padding: 20px;
}
</style>
