<template>
	<div class="card">{{ data.title }}</div>
</template>

<script>
export default {
	props: ['data'],
}
</script>

<style scoped>
.card {
	padding: 6px 4px;
	border-radius: 4px;
	background-color: #eee;
}
</style>
