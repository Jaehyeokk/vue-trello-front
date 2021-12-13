<template>
	<div class="list">
		<div class="list-header">
			<h4 class="list-title">{{ data.title }}</h4>
			<a href="" @click.prevent="onDeleteList">&times;</a>
		</div>
		<div class="card-section-wrapper">
			<ul class="card-section">
				<li class="card-wrapper" v-for="card in data.cards" :key="card.id">
					<Card :data="card"></Card>
				</li>
				<li v-if="isAddCard">
					<AddCard :listId="data.id"></AddCard>
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
import Card from '@/components/Card.vue'
import AddCard from '@/components/AddCard.vue'

export default {
	props: ['data'],
	components: {
		Card,
		AddCard,
	},
	data() {
		return {
			isAddCard: false,
		}
	},
	methods: {
		...mapActions(['DELETE_LIST']),
		onDeleteList() {
			if (!confirm(`Are you sure to delete list ${this.data.title}`)) return
			const lid = this.data.id
			this.DELETE_LIST(lid)
		},
	},
}
</script>

<style scoped>
.list-header {
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
