<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Blogs from './Blog'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  data () {
    return {
      msg: 'Heyyyyy'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

h1 {
  font-weight: normal;
  text-align: center;
}

</style>
