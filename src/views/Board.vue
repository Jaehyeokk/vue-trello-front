<template>
	<div class="board">
		<div class="board-header">
			<input
				v-if="isEditTitle"
				v-model="inputTitle"
				type="text"
				ref="inputTitle"
				@blur="onSubmitTitle"
				@keyup.enter="onSubmitTitle"
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
				<li
					class="list-wrapper"
					v-for="list in board.lists"
					:key="list.id"
					:data-list-id="list.id"
					:data-list-pos="list.pos"
				>
					<List :data="list"></List>
				</li>
				<li class="list-wrapper add-list-wrapper">
					<AddList></AddList>
				</li>
			</ul>
		</div>
		<BoardSetting v-if="isBoardSetting" />
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import dragger from '@/utils/dragger.js'
import List from '@/components/List.vue'
import AddList from '@/components/AddList.vue'
import BoardSetting from '@/components/BoardSetting.vue'
export default {
	components: {
		List,
		AddList,
		BoardSetting,
	},
	data() {
		return {
			inputTitle: '',
			isEditTitle: false,
			cDragger: null,
			lDragger: null,
		}
	},
	computed: {
		...mapState(['board', 'isBoardSetting']),
	},
	created() {
		const bid = this.$route.params.bid
		this.FETCH_BOARD(bid)
			.then(() => (this.inputTitle = this.board.title))
			.then(() => this.SET_THEME(this.board.bgColor))
		this.SET_IS_BOARDSETTING(false)
	},
	updated() {
		this.setCardDragabble()
		this.setListDragabble()
	},
	methods: {
		...mapMutations(['SET_IS_BOARDSETTING', 'SET_THEME']),
		...mapActions([
			'FETCH_BOARD',
			'UPDATE_BOARD',
			'UPDATE_LIST',
			'UPDATE_CARD',
		]),
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
		setCardDragabble() {
			if (this.cDragger) this.cDragger.destroy()
			this.cDragger = dragger.init(
				Array.from(this.$el.querySelectorAll('.card-wrapper')),
			)
			this.cDragger.on('drop', (el, wrapper) => {
				const targetCard = {
					cid: el.dataset.cardId * 1,
					pos: 65535,
				}

				const { prev, next } = dragger.sibling({
					el,
					candidates: Array.from(wrapper.querySelectorAll('.card-item')),
					type: 'card',
				})

				if (!prev && next) targetCard.pos = next.pos / 2
				else if (!next && prev) targetCard.pos = prev.pos * 2
				else if (next && prev) targetCard.pos = (prev.pos + next.pos) / 2
				this.UPDATE_CARD(targetCard)
			})
		},
		setListDragabble() {
			if (this.lDragger) this.lDragger.destroy()
			const options = {
				invalid: (el, handle) => !/^list/.test(handle.className),
			}
			this.lDragger = dragger.init(
				Array.from(this.$el.querySelectorAll('.list-section')),
				options,
			)
			this.lDragger.on('drop', (el, wrapper) => {
				const targetList = {
					lid: el.dataset.listId * 1,
					pos: 65535,
				}

				const { prev, next } = dragger.sibling({
					el,
					candidates: Array.from(wrapper.querySelectorAll('.list-wrapper')),
					type: 'list',
				})
				if (!prev && next) targetList.pos = next.pos / 2
				else if (!next && prev) targetList.pos = prev.pos * 2
				else if (next && prev) targetList.pos = (prev.pos + next.pos) / 2
				this.UPDATE_LIST(targetList)
			})
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
	flex-direction: ;
}

.list-wrapper {
	min-width: 260px;
	padding: 20px;
	margin-right: 15px;
	border: 1px solid #eee;
	border-radius: 5px;
	background-color: skyblue;
}

.list-wrapper.add-list-wrapper {
	height: 20px;
	box-sizing: border-box;
}
</style>
