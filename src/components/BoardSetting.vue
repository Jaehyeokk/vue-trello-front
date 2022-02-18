<template>
	<div class="board-setting-wrapper">
		<div class="header">
			<h3 class="title">Settings</h3>
			<a href="" class="close-btn" @click.prevent="onClose">&times;</a>
		</div>
		<div class="body">
			<ul class="setting-list">
				<li class="setting-item">
					<a href="" class="delete-btn" @click.prevent="onDelete"
						>Delete Board</a
					>
				</li>
				<li>
					<p class="menu-title">Change Theme</p>
					<div class="theme-color-list">
						<a
							href=""
							data-value="rgb(0, 121, 191)"
							class="theme-color-item"
							@click.prevent="onChangeTheme"
						></a>
						<a
							href=""
							data-value="rgb(210, 144, 52)"
							class="theme-color-item"
							@click.prevent="onChangeTheme"
						></a>
						<a
							href=""
							data-value="rgb(81, 152, 57)"
							class="theme-color-item"
							@click.prevent="onChangeTheme"
						></a>
						<a
							href=""
							data-value="rgb(176, 70, 50"
							class="theme-color-item"
							@click.prevent="onChangeTheme"
						></a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
	computed: {
		board() {
			return this.$store.state.board
		},
		bid() {
			return this.$route.params.bid
		},
	},

	methods: {
		...mapActions(['DELETE_BOARD', 'UPDATE_BOARD']),
		initTheme() {
			const items = Array.from(this.$el.querySelectorAll('.theme-color-item'))
			items.forEach(
				(item: any) => (item.style.backgroundColor = item.dataset.value),
			)
		},
		onClose() {
			this.$emit('@close')
		},
		onDelete() {
			const bid = Number(this.$route.params.bid)
			if (!confirm(`Are you sure to delete this board '${this.board.title}'`))
				return
			this.$store
				.dispatch('DELETE_BOARD', bid)
				.then(() => this.$router.push('/'))
		},
		onChangeTheme(el: any) {
			const bid = this.bid
			const data = {
				bgColor: el.target.dataset.value,
			}
			this.$store
				.dispatch('UPDATE_BOARD', { bid, data })
				.then(() => this.$store.commit('SET_THEME', data.bgColor))
		},
	},

	mounted() {
		this.initTheme()
	},
})
</script>

<style scoped>
.board-setting-wrapper {
	position: absolute;
	right: 0;
	top: 0;
	width: 250px;
	height: 100%;
	padding: 20px;
	background-color: #fff;
	box-sizing: border-box;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
.title {
	font-weight: 700;
	font-size: 14px;
}
.close-btn {
	font-size: 24px;
	color: #333;
	text-decoration: none;
}
.setting-item {
	margin-bottom: 20px;
}
.delete-btn {
	display: inline-block;
	padding: 10px 0;
	text-decoration: none;
	font-size: 14px;
	color: #333;
}
.menu-title {
	margin-bottom: 20px;
	font-size: 14px;
	color: #333;
}
.theme-color-list {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.theme-color-item {
	display: block;
	width: 100px;
	height: 100px;
	margin-bottom: 10px;
	border-radius: 4px;
	background-color: #eee;
}
</style>
