<template>
	<Modal>
		<div slot="header">
			<input :value="card.title" type="text" readonly />
			<a href="" @click.prevent="onClose">&times;</a>
		</div>
		<div slot="body">
			<textarea :value="card.description" readonly></textarea>
		</div>
		<div slot="footer"></div>
	</Modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from '@/components/Modal.vue'
export default {
	components: {
		Modal,
	},
	computed: {
		...mapState(['board', 'card']),
	},
	created() {
		const cid = this.$route.params.cid
		this.FETCH_CARD(cid)
	},
	methods: {
		...mapActions(['FETCH_CARD']),
		onClose() {
			this.$router.push(`/board/${this.board.id}`)
		},
	},
}
</script>

<style></style>
