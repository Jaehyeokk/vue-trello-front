<template>
	<div id="app">
		<NavBar></NavBar>
		<div class="view-container">
			<router-view></router-view>
		</div>
		<div v-if="loading" class="spinner-wrapper">
			<RingLoader :loading="loading"></RingLoader>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import bus from '@/utils/bus'

export default Vue.extend({
	name: 'App',

	components: {
		NavBar,
		RingLoader,
	},

	data() {
		return {
			loading: false,
		}
	},

	methods: {
		startSpinner() {
			this.loading = true
		},
		stopSpinner() {
			this.loading = false
		},
	},

	created() {
		bus.$on('spinner:start', this.startSpinner)
		bus.$on('spinner:stop', this.stopSpinner)
	},

	beforeDestroy() {
		bus.$off('spinner:start')
		bus.$off('spinner:stop')
	},
})
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
html,
body,
#app {
	height: 100%;
}
#app {
	display: flex;
	flex-direction: column;
}

#app > .view-container {
	flex-grow: 1;
}

#app > .spinner-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.1);
}
</style>
