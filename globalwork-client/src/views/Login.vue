<template>
    <div class="home">
            <Login/>
    </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/login.vue'
export default {
    name: 'Home',
    components: {
        Login
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
html {
    height: 100%;
}
img {
    width: 20%;
    height: 40%;
}

/* ------------------------------------------------------ */

/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
}
</style>
