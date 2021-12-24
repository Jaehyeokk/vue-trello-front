<template>
	<div class="nav-bar">
		<div class="container">
			<h1 class="logo">
				<router-link to="/">Vrello</router-link>
			</h1>
			<router-link v-if="!isAuth" class="auth-btn" to="/login"
				>Login</router-link
			>
			<a v-else class="auth-btn" href="" @click.prevent="logout">Logout</a>
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

.nav-bar a {
	text-decoration: none;
	color: rgba(255, 255, 255, 1);
}

.nav-bar a:focus,
.nav-bar a:hover {
	color: rgba(255, 255, 255, 0.8);
}

.nav-bar .container {
	position: relative;
	width: 100%;
	height: 44px;
	background-color: rgba(0, 0, 0, 0.15);
}

.logo {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-weight: 700;
	font-size: 21px;
}

.auth-btn {
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	font-weight: 700;
	font-size: 14px;
}
</style>
