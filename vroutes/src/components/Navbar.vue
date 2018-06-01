<template lang="html">
  <nav class="navbar">
    <ul>
      <li><router-link :to="{ name: 'Home', params: {} }">Home</router-link></li>
      <li><router-link :to="{ name: 'About', params: {} }">About</router-link></li>
    </ul>
    <h2>Profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link :to="{ name: 'ViewProfile', params: { user_id: id } }">
          <span>profile {{ id }}</span>
        </router-link>
      </li>
    </ul>
    <h2>Nav Ctrls</h2>
    <ul>
      <li><button @click="goHome">Redirect To Home</button></li>
      <li><button @click="goBack">Back</button></li>
      <li><button @click="goForward">Back</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      userIds: ['1', '2', '3', '4']
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    },
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    }
  }
}
</script>

<style lang="css">
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 10px;
  }
  a.router-link-exact-active {
    color: orange;
  }
</style>
