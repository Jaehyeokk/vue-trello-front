<template>
	<div class="login-page">
		<div class="form-wrapper clear">
			<form @submit.prevent="onSubmit" class="form">
				<div class="form-container">
					<div class="input-wrapper">
						<label for="">ID :</label>
						<input type="text" placeholder="test@test.com" />
					</div>
					<div class="input-wrapper">
						<label for="">PW :</label>
						<input type="text" placeholder="123123" />
					</div>
					<button class="submit-btn" type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onSubmit() {
			console.log('submit')
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
