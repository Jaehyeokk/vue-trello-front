<template>
	<div class="nav-bar">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vrello</router-link>
			</h1>
			<div class="links">
				<router-link v-if="!isAuth" to="login">Login</router-link>
				<a v-else href="" @click.prevent="logout">Logout</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters(['isAuth']),
	},
	methods: {
		...mapMutations(['LOGOUT']),
		logout() {
			this.LOGOUT()
			this.$router.push('/login')
		},
	},
}
</script>

<style scoped>
.nav-bar {
	background-color: skyblue;
}

.nav-bar .container {
	position: relative;
	height: 46px;
}

.nav-bar .logo {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.nav-bar .logo a {
	font-weight: 700;
	font-size: 24px;
	color: #fafafa;
	text-decoration: none;
}

.nav-bar .logo a:hover {
	color: #eee;
}

.nav-bar .links {
	float: right;
	line-height: 46px;
}

.nav-bar .links a {
	padding: 6px 16px;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
}

.nav-bar .links a:hover {
	color: #eee;
}
</style>
