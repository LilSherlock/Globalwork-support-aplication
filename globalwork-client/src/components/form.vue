<template>
    <div class="forms">
        <div class="forms-content">
            <div class="header">
                <h1>Generar reporte</h1>
            </div>
            <div class="form-title">
                <div class="title-content">
                    <h3>Titulo</h3>
                    <input type="text" v-model="title" placeholder="Ingrese un titulo de su caso">
                </div>
                <div class="priority-content">
                    <h4>prioridad</h4>
                    <select v-model="userPriority">
                        <option disabled value="">selecciona del 1 al 9</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div>
            <div class="form-description">
                <div class="description-content">
                    <h3>descripcion</h3>
                    <textarea cols="30" rows="10" v-model="description" placeholder="Ingrese una descripcion"></textarea>
                    <button @click="register" class="button" type="submit">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import authService from '@/service/authenticationService'
export default {
    data () {
        return {
        title: '',
        userPriority: '',
        description: ''
        }
    },
    methods: {
        async register() {
        const response = await authService.ticketRegister({
            title: this.title,
            userPriority: this.userPriority,
            description: this.description
        })
        console.log(response)
        }
    },
    name: 'forms'

}
</script>
<style>
html {
    height: 100%;
}
input[type="text"], textarea {
outline: none;
box-shadow:none !important;
border:1px solid #ccc !important;
}

.form-description {
    height: 30vh;
}
.form-description textarea {
    width: 80%;
    height: 60%;
    font-family: 'Rubik', sans-serif;
    padding: 1%;
    color: #0c1821;
    resize: none;
}
select {
    margin-top: 1px;
    border: none;
    height: 35px;
}
select:focus {
    border: none;
    outline: none;
}
.priority-content h4 {
    margin: 4%;
    font-family: 'Rubik', sans-serif;
    color: #0c1821;
}
.form-title h3 {
    margin: 1%;
    text-align: left;
    position: relative;
    left: 5%;
}
.title-content input {
    width: 95%;
    height: 35px;
    padding-left: 2%;
    color: #0c1821;
}
.forms {
    position: relative;
    height: 500px;
    box-shadow: 0px 50px 50px 5px;
    width: 650px;
    font-family: 'Rubik', sans-serif;
    background-color: rgba(243, 233, 233, 0.767);
}
.form-title {
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
}

.forms-content {
    margin-top: 4%;
}

.title-content {
    width: 70%;
}

button {
    width: 20%;
    padding: 15px;
    margin-top: 5%;
    background-color: #ffffff;
    color: #0c1821;
    outline: none;
    font-family: 'Rubik', sans-serif;
    text-align: center;
}

button:active {
    transform: translateY(2px);
    font-family: 'Rubik', sans-serif;
}

</style>