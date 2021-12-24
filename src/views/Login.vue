<template>
	<div class="login-page">
		<div class="container">
			<h2 class="title">Login to Vrello</h2>
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

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			inputEmail: '',
			inputPassword: '',
			rPath: '',
			error: '',
		}
	},
	created() {
		this.rPath = this.$route.query.rPath || '/'
	},
	methods: {
		...mapActions(['LOGIN']),
		onSubmit() {
			this.LOGIN({
				email: this.inputEmail,
				password: this.inputPassword,
			})
				.then(() => this.$router.push(this.rPath))
				.catch(err => (this.error = err.data.error))
		},
	},
}
</script>

<style scoped>
.login-page .container {
	max-width: 320px;
	margin: 60px auto 0;
	padding: 20px;
	border-radius: 8px;
	background-color: #fafafa;
}

.title {
	text-align: center;
	margin-bottom: 30px;
	font-weight: 700;
	font-size: 21px;
	color: #333;
}

.login-form {
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 16px;
}

.input-wrapper {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
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
	padding: 4px 16px;
	border: 1px solid #eee;
	border-radius: 4px;
	background-color: skyblue;
	color: #fff;
	cursor: pointer;
}

.submit-btn:focus,
.submit-btn:hover {
	color: rgba(255, 255, 255, 0.8);
}
</style>
