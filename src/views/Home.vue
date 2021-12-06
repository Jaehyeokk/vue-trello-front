<template>
	<div class="home container">
		<h2 class="title">Personal Boards</h2>
		<ul class="board-list">
			<li
				class="board-item"
				v-for="board in boards"
				:key="board.id"
				:data-bgcolor="board.bgColor"
				ref="boardItem"
			>
				<router-link :to="`/board/${board.id}`">
					<p class="board-item-title">{{ board.title }}</p>
				</router-link>
			</li>
			<li class="board-item board-item-new">
				<a class="new-board-btn" href="" @click.prevent="SET_IS_ADDBOARD(true)"
					>Create new board...</a
				>
			</li>
		</ul>
		<AddBoard v-if="isAddBoard"></AddBoard>
	</div>
</template>

<script>
import AddBoard from '@/components/Addboard.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
	name: 'Home',
	components: {
		AddBoard,
	},
	computed: {
		...mapState(['boards', 'isAddBoard']),
	},
	created() {
		this.fetchData()
	},
	updated() {
		this.$refs.boardItem.forEach(el => {
			el.style.backgroundColor = el.dataset.bgcolor
		})
	},
	methods: {
		...mapMutations(['SET_IS_ADDBOARD']),
		...mapActions(['FETCH_BOARDS']),
		fetchData() {
			this.FETCH_BOARDS()
		},
	},
}
</script>

<style scoped>
.container {
	padding: 20px;
}

.title {
	padding-bottom: 20px;
	font-weight: 700;
	font-size: 24px;
	color: #333;
}

.board-list {
	display: flex;
	flex-wrap: wrap;
}

.board-item {
	margin: 0 15px 15px 0;
	width: 200px;
	height: 100px;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: skyblue;
}

.board-item a {
	display: block;
	width: 100%;
	height: 100%;
	padding: 20px;
	font-weight: 700;
	color: #fff;
	box-sizing: border-box;
}

.board-item.board-item-new {
	background-color: #eee;
}

.board-item.board-item-new a {
	color: #333;
}
</style>
