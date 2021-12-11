<template>
	<div>
		<input v-if="isAddList" v-model="inputTitle" @keyup.enter="onAddList" />
		<a v-else href="" @click.prevent="isAddList = true">Add list...</a>
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
			const title = this.inputTitle
			const boardId = this.board.id
			const pos = 65535
			this.CREATE_LIST({ title, boardId, pos }).then(() => {
				this.inputTitle = ''
				this.isAddList = false
			})
		},
	},
}
</script>

<style></style>
