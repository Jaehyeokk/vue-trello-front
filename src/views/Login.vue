<template>
	<div class="login-page">
		<div class="form-wrapper clear">
			<form @submit.prevent="onSubmit" class="form">
				<div class="form-container">
					<div class="input-wrapper">
						<label for="">ID :</label>
						<input type="text" v-model="email" placeholder="test@test.com" />
					</div>
					<div class="input-wrapper">
						<label for="">PW :</label>
						<input type="password" v-model="password" placeholder="123123" />
					</div>
					<button class="submit-btn" type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			email: '',
			password: '',
			rPath: '',
		}
	},
	created() {
		this.rPath = this.$route.query.rPath || '/'
	},
	methods: {
		...mapActions(['LOGIN']),
		onSubmit() {
			this.LOGIN({ email: this.email, password: this.password }).then(() => {
				this.$router.push(this.rPath)
			})
		},
	},
}
</script>

<style scoped>
.login-page .form-wrapper {
	width: 360px;
	margin: 100px auto 0;
	border: 1px solid #eee;
	padding: 20px;
	box-sizing: border-box;
}

.input-wrapper {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

.submit-btn {
	float: right;
}
</style>
