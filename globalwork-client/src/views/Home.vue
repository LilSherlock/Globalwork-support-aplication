<template>
  <div class="about">
    <bar/>
  </div>
</template>

<script type="text/javascript">
import bar from '@/components/navbar.vue'
export default {
  name: 'home',
  components: {
    bar
  }
}
</script>

<style media="screen">
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
</style>
