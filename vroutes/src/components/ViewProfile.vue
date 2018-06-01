<template lang="html">
 <div class="vie-profile">
   <h2>profile for {{ userId }}</h2>
 </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data () {
    return {
      userId: this.$route.params.user_id
    }
  },
  methods: {
    updateId () {
      this.userId = this.$route.params.user_id
    }
  },
  watch: {
    $route: 'updateId'
  }
}
</script>

<style lang="css">
</style>
