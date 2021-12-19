<template>
	<Modal>
		<div slot="header">
			<input
				:value="card.title"
				type="text"
				:readonly="!toggleTitle"
				@click.prevent="toggleTitle = true"
				@blur="onBlurTitle"
				ref="inputTitle"
			/>
			<a href="" @click.prevent="onClose">&times;</a>
		</div>
		<div slot="body">
			<textarea
				:value="card.description"
				:readonly="!toggleDesc"
				@click.prevent="toggleDesc = true"
				@blur="onBlurDesc"
				ref="inputDesc"
			></textarea>
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
	data() {
		return {
			toggleTitle: false,
			toggleDesc: false,
		}
	},
	computed: {
		...mapState(['board', 'card']),
	},
	created() {
		const cid = this.$route.params.cid
		this.FETCH_CARD(cid)
	},
	methods: {
		...mapActions(['FETCH_CARD', 'UPDATE_CARD']),
		onClose() {
			this.$router.push(`/board/${this.board.id}`)
		},
		onBlurTitle() {
			const lid = this.card.listId
			const cid = this.card.id
			const title = this.$refs.inputTitle.value()
			if (title === this.card.title) return
			this.UPDATE_CARD({ lid, cid, title })
		},
		onBlurDesc() {
			const lid = this.card.listId
			const cid = this.card.id
			const description = this.$refs.inputDesc.value()
			if (description === this.card.description) return
			this.UPDATE_CARD({ lid, cid, description })
		},
	},
}
</script>

<style></style>
