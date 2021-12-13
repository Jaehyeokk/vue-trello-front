<template>
	<div>
		<form @submit.prevent="onSubmit">
			<input v-model="inputTitle" type="text" ref="inputTitle" />
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['listId'],
	data() {
		return {
			inputTitle: '',
		}
	},
	mounted() {
		this.$refs.inputTitle.focus()
	},
	methods: {
		...mapActions(['CREATE_CARD']),
		onSubmit() {
			const title = this.inputTitle
			const listId = this.listId
			const pos = 65535
			this.CREATE_CARD({ title, listId, pos })
		},
	},
}
</script>

<style></style>
