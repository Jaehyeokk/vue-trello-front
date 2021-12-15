<template>
	<div class="list">
		<div class="list-header">
			<div v-if="isUpdateTitle">
				<input
					type="text"
					v-model="inputTitle"
					ref="inputTitle"
					@blur="clearListInput"
					@keyup.enter="onUpdateListTitle"
				/>
			</div>
			<div v-else class="title-container">
				<h4 class="list-title" @click.prevent="activeTitleInput">
					{{ data.title }}
				</h4>
				<a href="" @click.prevent="onDeleteList">&times;</a>
			</div>
		</div>
		<div class="card-section-wrapper">
			<ul class="card-section">
				<li class="card-wrapper" v-for="card in data.cards" :key="card.id">
					<CardItem :data="card"></CardItem>
				</li>
				<li v-if="isAddCard">
					<AddCard :listId="data.id" @@closeAddCard="closeAddCard"></AddCard>
				</li>
				<li v-else>
					<a href="" @click.prevent="isAddCard = true">
						&plus; Add a card...
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import CardItem from '@/components/CardItem.vue'
import AddCard from '@/components/AddCard.vue'

export default {
	props: ['data'],
	components: {
		CardItem,
		AddCard,
	},
	data() {
		return {
			isAddCard: false,
			isUpdateTitle: false,
			inputTitle: '',
		}
	},
	methods: {
		...mapActions(['UPDATE_LIST', 'DELETE_LIST']),
		onDeleteList() {
			if (!confirm(`Are you sure to delete list ${this.data.title}`)) return
			const lid = this.data.id
			this.DELETE_LIST(lid)
		},
		closeAddCard() {
			this.isAddCard = false
		},
		activeTitleInput() {
			this.isUpdateTitle = true
			this.$nextTick(() => this.$refs.inputTitle.focus())
		},
		clearListInput() {
			this.inputTitle = ''
			this.isUpdateTitle = false
		},
		onUpdateListTitle() {
			const lid = this.data.id
			const title = this.inputTitle.trim()
			if (!title) return
			if (title === this.data.title) return this.clearListInput()
			this.UPDATE_LIST({ lid, title }).then(() => this.clearListInput())
		},
	},
}
</script>

<style scoped>
.title-container {
	display: flex;
	justify-content: space-between;
}

.list-title {
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 16px;
	color: #fff;
}

.card-wrapper {
	margin-bottom: 10px;
}
</style>
