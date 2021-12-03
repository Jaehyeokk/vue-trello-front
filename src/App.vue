<template>
	<div id="app">
		<NavBar />
		<router-view />
	</div>
</template>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import NavBar from '@/components/NavBar.vue'
export default {
	components: {
		NavBar,
	},
}
</script>
