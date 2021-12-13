<template>
	<div class="card-container">
		<div class="card">{{ data.title }}</div>
		<a class="delete-btn" href="" @click.prevent="onDeleteCard">&times;</a>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['data'],
	methods: {
		...mapActions(['DELETE_CARD']),
		onDeleteCard() {
			if (!confirm(`Are you sure to delete card ${this.data.title}`)) return
			const cid = this.data.id
			this.DELETE_CARD(cid)
		},
	},
}
</script>

<style scoped>
.card-container {
	position: relative;
}

.card {
	padding: 6px 24px 6px;
	border-radius: 4px;
	background-color: #eee;
}

.delete-btn {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	right: 0;
	top: 0;
	width: 28px;
	height: 28px;
}
</style>
