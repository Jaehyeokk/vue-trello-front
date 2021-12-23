<template>
	<div class="login-page">
		<div class="container">
			<h2 class="title">Login to Vrello</h2>
			<form class="login-form">
				<div class="input-wrapper">
					<label for="">E-mail</label>
					<input type="text" placeholder="test@test.com" />
				</div>
				<div class="input-wrapper">
					<label for="">Password</label>
					<input type="password" placeholder="123123" />
				</div>
				<button type="submit" class="submit-btn">Login</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
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
