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
					:data-list-id="list.id"
					:data-list-pos="list.pos"
					class="list-item"
				></ListItem>
				<AddList class="add-list"></AddList>
			</div>
		</div>
		<BoardSetting
			v-if="isBoardSetting"
			@@close="onBoardSetting(false)"
		></BoardSetting>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import dragger from '@/utils/dragger'
import ListItem from '@/components/ListItem.vue'
import AddList from '@/components/AddList.vue'
import BoardSetting from '@/components/BoardSetting.vue'
import { Drake } from 'dragula'

export default Vue.extend({
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
			cDragger: null as Drake | null,
			lDragger: null as Drake | null,
		}
	},

	computed: {
		board() {
			return this.$store.state.board
		},
		bid() {
			return Number(this.$route.params.bid)
		},
	},

	methods: {
		...mapActions([
			'FETCH_BOARD',
			'UPDATE_BOARD',
			'UPDATE_LIST',
			'UPDATE_CARD',
		]),
		onBoardSetting(toggle: boolean): void {
			this.isBoardSetting = toggle
		},
		onInputTitle(): void {
			this.isInputTitle = true
			this.$nextTick(() => {
				const inputTitle = this.$refs.inputTitle as HTMLInputElement
				inputTitle.focus()
			})
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
		setCardDragger(): void {
			if (this.cDragger) this.cDragger.destroy()
			const containers = Array.from(this.$el.querySelectorAll('.card-wrapper'))
			this.cDragger = dragger.init(containers)
			if (!this.cDragger) return
			this.cDragger.on('drop', (el: any, wrapper) => {
				const cid = el.dataset.cardId * 1
				const data = {
					pos: 63353,
				}
				const { prev, next } = dragger.sibling({
					el,
					candidates: Array.from(
						wrapper.querySelectorAll('.card-item-wrapper'),
					),
					type: 'card',
				})
				if (!prev && next) data.pos = next.pos / 2
				else if (!next && prev) data.pos = prev.pos * 2
				else if (next && prev) data.pos = (prev.pos + next.pos) * 2
				this.$store.dispatch('UPDATE_CARD', { cid, data })
			})
		},
		setListDragger() {
			if (this.lDragger) this.lDragger.destroy()
			const containers = Array.from(this.$el.querySelectorAll('.list-wrapper'))
			const options = {
				invalid: (el: any) => !el.classList.contains('list-item'),
			}
			this.lDragger = dragger.init(containers, options)
			if (!this.lDragger) return
			this.lDragger.on('drop', (el: any, wrapper: any) => {
				const lid = el.dataset.listId * 1
				const data = {
					pos: 63353,
				}
				const { prev, next } = dragger.sibling({
					el,
					candidates: Array.from(wrapper.querySelectorAll('.list-item')),
					type: 'list',
				})
				if (!prev && next) data.pos = next.pos / 2
				else if (!next && prev) data.pos = prev.pos * 2
				else if (next && prev) data.pos = (prev.pos + next.pos) * 2
				this.UPDATE_LIST({ lid, data })
			})
		},
	},

	created() {
		const bid = this.bid
		this.$store.dispatch('FETCH_BOARD', bid).then(() => {
			this.inputTitle = this.board.title
			this.$store.commit('SET_THEME', this.board.bgColor)
		})
	},

	updated() {
		this.setCardDragger()
		this.setListDragger()
	},
})
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
	color: #fafafa;
}
.setting-btn {
	font-weight: 700;
	font-size: 14px;
	text-decoration: none;
	color: #eee;
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
.add-list {
	display: inline-block;
	width: 250px;
	padding: 20px;
	background-color: #eee;
	border-radius: 4px;
	vertical-align: top;
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
