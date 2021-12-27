<template>
	<li>
		<h3 class="list-title">{{ data.title }}</h3>
		<div class="card-container">
			<div class="card-wrapper" v-for="card in data.cards" :key="card.id">
				<CardItem :data="card"></CardItem>
			</div>
		</div>
		<a href="" class="add-card-btn" @click.prevent="onAddCard"
			>&plus; Add Card...</a
		>
	</li>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
export default {
	props: ['data'],
	components: {
		CardItem,
	},
	methods: {
		onAddCard() {
			console.log('onAddCard')
		},
	},
}
</script>

<style scoped>
.list-title {
	padding: 0 10px;
	font-weight: 700;
	margin-bottom: 20px;
}

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
</style>
