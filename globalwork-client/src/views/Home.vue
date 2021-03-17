<template>
    <div class="Home">
        <Header/>
        <div class="content">
            <forms/>
            <register/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import register from '@/components/register.vue'
import forms from '@/components/form.vue'
export default {
    name: 'home',
    components: {
        Header,
        register,
        forms
    }
}
</script>

<style>
.content {
    display: flex;
    justify-content: space-evenly;
}
</style>
