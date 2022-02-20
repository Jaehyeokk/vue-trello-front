<template>
	<div class="login-page">
		<div class="container">
			<h2 class="title">Log in to Vrello</h2>
			<form class="login-form" @submit.prevent="onSubmit">
				<div class="input-wrapper">
					<label for="">E-mail</label>
					<input type="text" v-model="inputEmail" placeholder="test@test.com" />
				</div>
				<div class="input-wrapper">
					<label for="">Password</label>
					<input
						type="password"
						v-model="inputPassword"
						placeholder="123123"
						autocomplete="off"
					/>
				</div>
				<p class="error-msg">{{ error }}</p>
				<button type="submit" class="submit-btn">Login</button>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import bus from '@/utils/bus'

export default Vue.extend({
	data() {
		return {
			inputEmail: '',
			inputPassword: '',
			rPath: '' as string,
			error: '',
		}
	},

	methods: {
		...mapActions(['LOGIN']),
		onSubmit() {
			this.LOGIN({
				email: this.inputEmail,
				password: this.inputPassword,
			})
				.then(() => this.$router.push(this.rPath))
				.catch((err: any) => {
					this.error = err.data.error
					bus.$emit('spinner:stop')
				})
		},
	},

	created() {
		const rPath = this.$route.query.rPath as string
		this.rPath = rPath || '/'
	},
})
</script>

<style scoped>
.login-page .container {
	max-width: 350px;
	margin: 60px auto 0;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #fff;
	box-sizing: border-box;
}

.title {
	text-align: center;
	margin: 10px 0 30px;
	font-weight: 700;
	font-size: 21px;
	color: #333;
}

.login-form {
	padding: 16px;
}

.input-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
}

.input-wrapper input {
	padding: 6px 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

.error-msg {
	min-height: 14px;
	margin-bottom: 10px;
	text-align: center;
	font-weight: 500;
	font-size: 14px;
	color: red;
}

.submit-btn {
	width: 100%;
	padding: 12px 16px;
	border: 1px solid #fff;
	border-radius: 4px;
	background-color: rgb(2, 106, 167);
	color: #fff;
	cursor: pointer;
}

.submit-btn:focus,
.submit-btn:hover {
	color: rgba(255, 255, 255, 0.8);
}
</style>
