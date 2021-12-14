<template>
	<div>
		<div v-if="isAddList">
			<input
				v-model="inputTitle"
				@keyup.enter="onSubmit"
				@blur="clear"
				ref="inputTitle"
			/>
			<button @click.prevent="onSubmit">Add</button>
		</div>
		<a v-else href="" @click.prevent="onAddList">Add list...</a>
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
		onSubmit() {
			const title = this.inputTitle
			const boardId = this.board.id
			const pos = 65535
			this.CREATE_LIST({ title, boardId, pos }).then(() => {
				this.clear()
			})
		},
		clear() {
			this.inputTitle = ''
			this.isAddList = false
		},
	},
}
</script>

<style></style>
