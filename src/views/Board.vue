<template>
	<div class="board">
		<div class="board-header">
			<input
				v-if="isEditTitle"
				v-model="inputTitle"
				type="text"
				ref="inputTitle"
				@blur="onSubmitTitle"
			/>
			<h2 v-else class="board-title" @click="onClickTitle">
				{{ board.title }}
			</h2>
			<a
				class="board-setting-btn"
				href=""
				@click.prevent="SET_IS_BOARDSETTING(true)"
				>Setting</a
			>
		</div>
		<div class="list-section-wrapper">
			<ul class="list-section">
				<li class="list-wrapper" v-for="list in board.lists" :key="list.id">
					<List :data="list"></List>
				</li>
			</ul>
		</div>
		<BoardSetting v-if="isBoardSetting" />
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import List from '@/components/List.vue'
import BoardSetting from '@/components/BoardSetting.vue'
export default {
	components: {
		List,
		BoardSetting,
	},
	data() {
		return {
			inputTitle: '',
			isEditTitle: false,
		}
	},
	computed: {
		...mapState(['board', 'isBoardSetting']),
	},
	created() {
		const bid = this.$route.params.bid
		this.FETCH_BOARD(bid).then(() => (this.inputTitle = this.board.title))
		this.SET_IS_BOARDSETTING(false)
	},
	methods: {
		...mapMutations(['SET_IS_BOARDSETTING']),
		...mapActions(['FETCH_BOARD', 'UPDATE_BOARD']),
		onClickTitle() {
			this.isEditTitle = true
			this.$nextTick(() => this.$refs.inputTitle.focus())
		},
		onSubmitTitle() {
			this.isEditTitle = false
			this.inputTitle = this.inputTitle.trim()
			if (!this.inputTitle) return
			const bid = this.board.id
			const title = this.inputTitle
			if (title === this.board.title) return
			this.UPDATE_BOARD({ bid, title })
		},
	},
}
</script>

<style scoped>
.board-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
}

.board-title {
	font-weight: 700;
	font-size: 18px;
}

.board-setting-btn {
	font-weight: 700;
	font-size: 16px;
	color: #333;
}

.board-setting-btn:hover {
	color: #555;
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
