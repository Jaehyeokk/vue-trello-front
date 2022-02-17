<template>
	<div>
		<a v-if="!isAddCard" href="" class="add-card-btn" @click.prevent="onAddCard"
			>&plus; Add Card...</a
		>
		<input
			v-else
			type="text"
			v-model="inputTitle"
			ref="inputTitle"
			@blur="onClose"
			@keyup.enter="onSubmit"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
	props: ['list'],

	data() {
		return {
			isAddCard: false,
			inputTitle: '',
		}
	},

	methods: {
		...mapActions(['CREATE_CARD']),
		onAddCard() {
			this.isAddCard = true
			this.$nextTick(() => {
				const inputTitle = this.$refs.inputTitle as HTMLInputElement
				inputTitle.focus()
			})
		},
		onClose() {
			this.isAddCard = false
			this.inputTitle = ''
		},
		onSubmit() {
			const title = this.inputTitle.trim()
			if (title === '') return
			const listId = this.list.id
			const lastCard = this.list.cards[this.list.cards.length - 1]
			const pos = lastCard ? lastCard.pos * 2 : 65535
			this.CREATE_CARD({ title, listId, pos }).then(() => this.onClose())
		},
	},
})
</script>

<style scoped>
.add-card-btn {
	display: inline-block;
	width: 100%;
	padding: 10px 10px;
	margin-top: 10px;
	font-weight: 700;
	font-size: 14px;
	color: #777;
	text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
	opacity: 0.8;
}

input {
	padding: 6px 16px;
	border: none;
	border-radius: 4px;
	outline: 2px solid skyblue;
}
</style>
