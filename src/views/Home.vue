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
				<a class="new-board-btn" href="" @click.prevent="onAddBoard"
					>Create new board...</a
				>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'Home',
	computed: {
		...mapState(['boards']),
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
		...mapActions(['FETCH_BOARDS']),
		fetchData() {
			this.FETCH_BOARDS()
		},
		onAddBoard() {
			alert('clicked add board')
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
}

.board-item {
	margin-right: 15px;
	width: 200px;
	height: 100px;
	padding: 20px;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: skyblue;
	box-sizing: border-box;
}

.board-item a {
	display: block;
	width: 100%;
	height: 100%;
	font-weight: 700;
	color: #fff;
}

.board-item.board-item-new {
	background-color: #eee;
}

.board-item.board-item-new a {
	color: #333;
}
</style>
