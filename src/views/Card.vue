<template>
	<Modal>
		<div slot="header">
			<div class="close-btn-wrapper">
				<router-link :to="`/b/${bid}`" class="close-btn">&times;</router-link>
			</div>
			<input
				type="text"
				v-model="inputTitle"
				:readonly="!isTitleEdit"
				@click.prevent="onTitleEdit"
				@blur="onSubmitTitle"
			/>
		</div>
		<div slot="body">
			<textarea
				v-model="inputDesc"
				:readonly="!isDescEdit"
				@click.prevent="onDescEdit"
				@blur="onSubmitDesc"
			/>
		</div>
		<div slot="footer"></div>
	</Modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'

export default Vue.extend({
	components: {
		Modal,
	},

	data() {
		return {
			isTitleEdit: false,
			isDescEdit: false,
			inputTitle: '',
			inputDesc: '',
		}
	},

	computed: {
		...mapState(['card']),
		bid() {
			return this.$route.params.bid
		},
		cid() {
			return this.$route.params.cid
		},
	},

	methods: {
		...mapActions(['FETCH_CARD', 'UPDATE_CARD']),
		onTitleEdit() {
			this.isTitleEdit = true
		},
		onDescEdit() {
			this.isDescEdit = true
		},
		onSubmitTitle() {
			const inputTitle = this.inputTitle.trim()
			if (inputTitle === this.card.title) return
			const cid = this.card.id
			const data = {
				listId: this.card.listId,
				title: inputTitle,
			}
			this.UPDATE_CARD({ cid, data })
		},
		onSubmitDesc() {
			if (this.inputDesc === null) return
			const inputDesc = this.inputDesc.trim()
			if (inputDesc === this.card.description) return
			const cid = this.card.id
			const data = {
				listId: this.card.listId,
				description: inputDesc,
			}
			this.UPDATE_CARD({ cid, data })
		},
	},

	created() {
		this.FETCH_CARD(this.cid).then(() => {
			this.inputTitle = this.card.title
			this.inputDesc = this.card.description
		})
	},
})
</script>

<style scoped>
.close-btn-wrapper {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
}
.close-btn {
	font-size: 27px;
	color: #333;
	text-decoration: none;
}

input,
textarea {
	width: 100%;
	padding: 6px 16px;
	border: none;
	border-radius: 4px;
	outline: 2px solid #ddd;
	box-sizing: border-box;
}

input:focus,
textarea:focus {
	outline: 2px solid skyblue;
}

textarea {
	min-height: 150px;
}
</style>
