<template>
	<div class="card-item" :data-card-id="data.id" :data-card-pos="data.pos">
		<router-link class="card-container" :to="`${$route.path}/card/${data.id}`">
			<div class="card">{{ data.title }}</div>
			<a class="delete-btn" href="" @click.prevent="onDeleteCard">&times;</a>
		</router-link>
		<router-view></router-view>
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
