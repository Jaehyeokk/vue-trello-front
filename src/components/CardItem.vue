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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: ['data'],

	computed: {
		bid(): number {
			return this.$store.state.board.id
		},
		cid(): number {
			return this.data.id
		},
	},

	methods: {
		onRemove() {
			if (!confirm(`Are you sure to delete this card '${this.data.title}'`))
				return
			this.$store.dispatch('DELETE_CARD', this.cid.toString())
		},
	},
})
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
