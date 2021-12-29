<template>
	<div>
		<div v-if="!isEditList" class="list-header" @click="onEditList">
			<h3 class="list-title">{{ data.title }}</h3>
			<a href="" class="delete-btn" @click.prevent="onDeleteList">&times;</a>
		</div>
		<div v-else class="list-header">
			<input
				v-model="inputTitle"
				type="text"
				ref="inputTitle"
				@blur="onClose"
				@keyup.enter="onSubmit"
			/>
		</div>
		<div class="card-container">
			<div class="card-wrapper" v-for="card in data.cards" :key="card.id">
				<CardItem :data="card"></CardItem>
			</div>
			<AddCard :list="data"></AddCard>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import AddCard from '@/components/AddCard.vue'
import CardItem from '@/components/CardItem.vue'
export default {
	props: ['data'],
	components: {
		AddCard,
		CardItem,
	},
	data() {
		return {
			isEditList: false,
			inputTitle: '',
		}
	},
	methods: {
		...mapActions(['UPDATE_LIST', 'DELETE_LIST']),
		onEditList() {
			this.isEditList = true
			this.$nextTick(() => this.$refs.inputTitle.focus())
		},
		onDeleteList() {
			if (!confirm(`Are you sure to delete this list '${this.data.title}'`))
				return
			const lid = this.data.id
			this.DELETE_LIST(lid)
		},
		onClose() {
			this.isEditList = false
			this.inputTitle = ''
		},
		onSubmit() {
			const lid = this.data.id
			const title = this.inputTitle.trim()
			if (title === '') return this.onClose()
			this.UPDATE_LIST({ lid, title }).then(() => this.onClose())
		},
	},
}
</script>

<style scoped>
.list-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	margin-bottom: 20px;
}
.delete-btn {
	font-size: 24px;
	text-decoration: none;
	color: #333;
}
.delete-btn:hover,
.delete-btn:focus {
	opacity: 0.8;
}
.list-title {
	font-weight: 700;
}
input {
	padding: 6px 16px;
	border: none;
	border-radius: 4px;
	outline: 2px solid skyblue;
}
</style>
