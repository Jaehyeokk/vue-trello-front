<template>
	<Modal>
		<div slot="header" class="modal-header">
			<p>Add board...</p>
			<a href="" @click.prevent="close">&times;</a>
		</div>
		<div slot="body" class="modal-body">
			<input
				v-model="inputTitle"
				type="text"
				placeholder="Board title"
				ref="inputTitle"
				@keyup.enter="onSubmit"
			/>
		</div>
		<div slot="footer" class="modal-footer">
			<a href="" @click.prevent="onSubmit">Add</a>
		</div>
	</Modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'

export default Vue.extend({
	components: {
		Modal,
	},

	data() {
		return {
			inputTitle: '',
		}
	},

	methods: {
		...mapActions(['CREATE_BOARD']),
		close() {
			this.$emit('@close')
		},
		onSubmit() {
			const inputTitle = this.inputTitle.trim()
			if (inputTitle === '') return
			this.CREATE_BOARD({ title: inputTitle }).then((data: any) =>
				this.$router.push(`/b/${data.item.id}`),
			)
		},
	},

	mounted() {
		const inputTitle = this.$refs.inputTitle as HTMLInputElement
		inputTitle.focus()
	},
})
</script>

<style scoped>
.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.modal-header a {
	font-size: 24px;
	text-decoration: none;
	color: #333;
}

.modal-body input {
	width: 100%;
	padding: 6px 16px;
	box-sizing: border-box;
}

.modal-footer {
	display: flex;
	justify-content: flex-end;
}

.modal-footer a {
	padding: 6px 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	text-decoration: none;
	color: #fff;
	background-color: blue;
}

.modal-footer a:hover,
.modal-footer a:focus {
	color: rgba(255, 255, 255, 0.8);
}
</style>
