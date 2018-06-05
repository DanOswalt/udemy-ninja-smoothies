<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }}</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title"/>
      </div>
      <div class="field" v-for="(ingredient, i) in smoothie.ingredients" :key="i">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[i]">
        <i class="material-icons delete" @click="deleteIngredient(ingredient)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add Ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="another"/>
      </div>
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
      <div class="field center-align">
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditSmoothie',
  data () {
    return {
      smoothie: null,
      another: null,
      feedback: null
      }
  },
  methods: {
    editSmoothie () {
      if (this.smoothie.title) {
        this.feedback = null
        this.smoothie.slug = slugify(this.smoothie.title, { 
          replacement: '-', 
          remove: /[$*_+~.()'"!\-:@]/g, 
          lower: true })
        db.collection('smoothies').doc(this.smoothie.id)
        .update({ 
          title: this.smoothie.title, 
          ingredients: this.smoothie.ingredients, 
          slug: this.smoothie.slug
        })
        .then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    },
    addIngredient () {
      if(this.another) {
        this.smoothie.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = "You need to enter something"
      }
    },
    deleteIngredient (deleted) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => ingredient !== deleted)
    }
  },
  created () {
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>

<style>
  .edit-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
  }

  .edit-smoothie h2 {
    font-size: 2em;
    margin: 20px auto;
  }

  .edit-smoothie .field {
    margin: 20px auto;
    position: relative;
  }

  .edit-smoothie .delete {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
  }
</style>