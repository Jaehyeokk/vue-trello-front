<template>
	<div class="board-container">
		<div class="board-header">
			<h2 class="board-title">{{ board.title }}</h2>
		</div>
		<div class="list-container">
			<ul class="list-wrapper">
				<ListItem
					v-for="list in board.lists"
					:key="list.id"
					:data="list"
					class="list-item"
				></ListItem>
				<a href="" @click.prevent="onAddList" class="list-item add-list"
					>Add List...</a
				>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ListItem from '@/components/ListItem.vue'
export default {
	components: {
		ListItem,
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
		onAddList() {
			console.log('onAddList')
		},
	},
}
</script>

<style scoped>
.board-container {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.board-header {
	flex: none;
	padding: 20px;
}
.board-title {
	width: 100%;
	font-weight: 700;
	font-size: 18px;
}
.list-container {
	flex-grow: 1;
	position: relative;
	height: 100%;
}
.list-wrapper {
	height: 100%;
	padding: 0 20px;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}
.list-item {
	display: inline-block;
	width: 250px;
	margin-right: 20px;
	padding: 20px;
	background-color: #eee;
	border-radius: 4px;
	vertical-align: top;
}
.list-item:last-child {
	margin-right: 0;
}
.add-list {
	height: fit-content;
	font-weight: 700;
	text-decoration: none;
	color: #333;
}
.add-list:focus,
.add-list:hover {
	opacity: 0.8;
}
</style>
