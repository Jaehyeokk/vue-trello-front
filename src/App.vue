<template>
	<div id="app">
		<NavBar></NavBar>
		<div class="view-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'

export default Vue.extend({
	name: 'App',

	components: {
		NavBar,
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
</style>
