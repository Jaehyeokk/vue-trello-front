<template>
	<div class="board-setting">
		<div class="board-setting-header">
			<h2 class="title">Menu</h2>
			<a class="close-btn" href="" @click.prevent="onClose">&times;</a>
		</div>
		<div class="board-setting-menu">
			<ul class="board-setting-list">
				<li class="board-setting-item">
					<a href="" @click.prevent="onDelete">Delete Board</a>
				</li>
				<li class="board-setting-item">
					<p class="setting-name">Change background</p>
					<div class="color-picker">
						<a
							href=""
							data-value="rgb(0, 121, 191)"
							@click.prevent="onChangeBgColor"
						></a>
						<a
							href=""
							data-value="rgb(210, 144, 52)"
							@click.prevent="onChangeBgColor"
						></a>
						<a
							href=""
							data-value="rgb(81, 152, 57)"
							@click.prevent="onChangeBgColor"
						></a>
						<a
							href=""
							data-value="rgb(176, 70, 50)"
							@click.prevent="onChangeBgColor"
						></a>
					</div>
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
	mounted() {
		this.$el.querySelectorAll('.color-picker a').forEach(el => {
			console.log(el)
			el.style.background = el.dataset.value
		})
	},
	methods: {
		...mapMutations(['SET_IS_BOARDSETTING', 'SET_THEME']),
		...mapActions(['UPDATE_BOARD', 'DELETE_BOARD']),
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
		onChangeBgColor(e) {
			const bid = this.board.id
			const bgColor = e.target.dataset.value
			this.UPDATE_BOARD({ bid, bgColor }).then(() => this.SET_THEME(bgColor))
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

.board-setting-item {
	margin-top: 20px;
}

.color-picker {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.color-picker a {
	width: 120px;
	height: 120px;
	margin-top: 10px;
	background-color: #aaa;
}
</style>
