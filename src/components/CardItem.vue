<template>
	<div
		class="card-item-wrapper"
		:data-card-id="data.id"
		:data-card-pos="data.pos"
	>
		<router-link :to="`/b/${bid}/c/${cid}`" class="card-item">{{
			data.title
		}}</router-link>
		<a href="" class="remove-btn" @click.prevent="onRemove">&times;</a>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	props: ['data'],
	computed: {
		...mapState({
			bid: state => state.board.id,
		}),
		cid() {
			return this.data.id
		},
	},
	methods: {
		...mapActions(['DELETE_CARD']),
		onRemove() {
			if (!confirm(`Are you sure to delete this card '${this.data.title}'`))
				return
			this.DELETE_CARD(this.cid)
		},
	},
}
</script>

<style scoped>
.card-item-wrapper {
	position: relative;
}
.card-item {
	display: block;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 4px;
	text-decoration: none;
	color: #333;
	background-color: #fafafa;
}

.remove-btn {
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	padding: 5px;
	font-size: 21px;
	text-decoration: none;
	color: #333;
}
</style>
