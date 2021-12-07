<template>
	<div class="board">
		<div class="board-header">
			<h2 class="board-title">{{ board.title }}</h2>
		</div>
		<div class="list-section-wrapper">
			<ul class="list-section">
				<li class="list-wrapper" v-for="list in board.lists" :key="list.id">
					<List :data="list"></List>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import List from '@/components/List.vue'
export default {
	components: {
		List,
	},
	computed: {
		...mapState(['board']),
	},
	created() {
		const bid = this.$route.params.bid
		this.FETCH_BOARD(bid)
	},
	methods: {
		...mapActions(['FETCH_BOARD']),
		onClickMenu() {
			console.log('clicked')
		},
	},
}
</script>

<style scoped>
.board-header {
	padding: 20px;
}

.board-title {
	font-weight: 700;
	font-size: 18px;
}

.list-section-wrapper {
	padding: 20px;
}

.list-section {
	display: flex;
}

.list-wrapper {
	width: 260px;
	min-height: 200px;
	padding: 20px;
	margin-right: 15px;
	border: 1px solid #eee;
	border-radius: 5px;
	background-color: skyblue;
}
</style>
