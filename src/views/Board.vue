<template>
	<div class="board-container">
		<div v-if="!isInputTitle" class="board-header">
			<h2 class="board-title" @click.prevent="onInputTitle">
				{{ board.title }}
			</h2>
			<a href="" class="setting-btn" @click.prevent="onBoardSetting(true)"
				>Setting</a
			>
		</div>
		<div class="board-header" v-else>
			<input
				type="text"
				v-model="inputTitle"
				ref="inputTitle"
				@blur="onSubmit"
			/>
		</div>
		<div class="list-container">
			<div class="list-wrapper">
				<ListItem
					v-for="list in board.lists"
					:key="list.id"
					:data="list"
					class="list-item"
				></ListItem>
				<AddList class="list-item add-list"></AddList>
			</div>
		</div>
		<BoardSetting
			v-if="isBoardSetting"
			@@close="onBoardSetting(false)"
		></BoardSetting>
		<router-view></router-view>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ListItem from '@/components/ListItem.vue'
import AddList from '@/components/AddList.vue'
import BoardSetting from '@/components/BoardSetting.vue'
export default {
	components: {
		ListItem,
		AddList,
		BoardSetting,
	},
	data() {
		return {
			isBoardSetting: false,
			isInputTitle: false,
			inputTitle: '',
		}
	},
	computed: {
		...mapState(['board']),
		bid() {
			return this.$route.params.bid
		},
	},
	created() {
		const bid = this.bid
		this.FETCH_BOARD(bid).then(() => {
			this.inputTitle = this.board.title
			this.SET_THEME(this.board.bgColor)
		})
	},
	methods: {
		...mapMutations(['SET_THEME']),
		...mapActions(['FETCH_BOARD', 'UPDATE_BOARD']),
		onBoardSetting(toggle) {
			this.isBoardSetting = toggle
		},
		onInputTitle() {
			this.isInputTitle = true
			this.$nextTick(() => this.$refs.inputTitle.focus())
		},
		onSubmit() {
			const inputTitle = this.inputTitle.trim()
			if (inputTitle === '') return (this.isInputTitle = false)
			if (inputTitle === this.board.title) return (this.isInputTitle = false)
			const bid = this.bid
			const data = {
				title: inputTitle,
			}
			this.UPDATE_BOARD({ bid, data }).then(() => (this.isInputTitle = false))
		},
	},
}
</script>

<style scoped>
.board-container {
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
}
.board-header {
	display: flex;
	padding: 20px;
}
.board-title {
	width: 100%;
	font-weight: 700;
	font-size: 18px;
}
.setting-btn {
	font-weight: 700;
	font-size: 14px;
	text-decoration: none;
	color: #666;
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
.add-list a {
	height: fit-content;
}
input {
	padding: 6px 16px;
	border: none;
	border-radius: 4px;
	outline: 2px solid skyblue;
}
</style>
