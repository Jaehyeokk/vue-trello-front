<template>
	<div>
		<a v-if="!isAddList" href="" class="add-list-btn" @click.prevent="onAddList"
			>&plus; Add List ...</a
		>
		<div v-else>
			<input
				type="text"
				v-model="inputTitle"
				@blur="onClose"
				@keyup.enter="onSubmit"
				ref="inputTitle"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	data() {
		return {
			isAddList: false,
			inputTitle: '',
		}
	},
	computed: {
		...mapState(['board']),
	},
	methods: {
		...mapActions(['CREATE_LIST']),
		onAddList() {
			this.isAddList = true
			this.$nextTick(() => this.$refs.inputTitle.focus())
		},
		onClose() {
			this.isAddList = false
			this.inputTitle = ''
		},
		onSubmit() {
			const title = this.inputTitle.trim()
			if (title === '') return this.onClose()
			const boardId = this.board.id
			const lastList = this.board.lists[this.board.lists.length - 1]
			const pos = lastList ? lastList.pos * 2 : 65535
			this.CREATE_LIST({ title, boardId, pos }).then(() => this.onClose())
		},
	},
}
</script>

<style scoped>
.add-list-btn {
	font-weight: 700;
	text-decoration: none;
	color: #777;
}

.add-list-btn:focus,
.add-list-btn:hover {
	opacity: 0.8;
}

input {
	padding: 6px 16px;
	border: none;
	border-radius: 4px;
	outline: 2px solid skyblue;
}
</style>
