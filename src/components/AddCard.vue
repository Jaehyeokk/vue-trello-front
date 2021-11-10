<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" v-model="inputTitle" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: [
    'listId',
  ],
  data() {
    return {
      inputTitle: '',
    }
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim()
    }
  },
  mounted() {
    this.$refs.inputText.focus()
    document.querySelector('body').addEventListener('click', this.setupClickOutside)
  },
  beforeDestroy() {
    document.querySelector('body').removeEventListener('click', this.setupClickOutside)
  },
  methods: {
    ...mapActions([
      'ADD_CARD'
    ]),
    onSubmit() {
      const {inputTitle,listId} = this
      const pos = this.newCardPos()
      this.ADD_CARD({
        title: inputTitle,
        listId,
        pos
      }).then(() => {
        this.inputTitle = ''
        this.$emit('close')
      })
    },
    setupClickOutside(e) {
      if (this.$el.contains(e.target)) return 
      this.$emit('close')
    },
    newCardPos() {
      const currentList = this.$store.state.board.lists.filter(l => l.id === this.listId)[0]
      if (!currentList) return 65535
      const {cards} = currentList
      if (!cards.length) return 65535
      return cards[cards.length -1].pos * 2
    },
  },
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
