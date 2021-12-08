<template>
	<div class="board-setting">
		<div class="board-setting-header">
			<h2 class="title">Menu</h2>
			<a class="close-btn" href="" @click.prevent="onClose">&times;</a>
		</div>
		<div class="board-setting-menu">
			<ul class="board-setting-list">
				<li>
					<a href="" @click.prevent="onDelete">Delete Board</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
	computed: {
		...mapState(['board']),
	},
	methods: {
		...mapMutations(['SET_IS_BOARDSETTING']),
		...mapActions(['DELETE_BOARD']),
		onClose() {
			this.SET_IS_BOARDSETTING(false)
		},
		onDelete() {
			if (!confirm(`Are you sure to delete ${this.board.title}`)) return
			const bid = this.board.id
			this.DELETE_BOARD(bid).then(() => {
				this.onClose()
				this.$router.push('/')
			})
		},
	},
}
</script>

<style scoped>
.board-setting {
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	width: 300px;
	padding: 20px;
	box-sizing: border-box;
	background-color: #fafafa;
}

.board-setting-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.board-setting-header .close-btn {
	font-size: 24px;
}
</style>
