fetch("/vesti", {
	method: "PUT",
	headers: {
		"Content-type": "application/json",
	},
	body: JSON.stringify({
		firstName: "Marko",
		lastName: "Jokic",
		age: 28,
		email: "zoran@gmail.com",
	}),
})
	.then((res) => {
		console.log(res.text);
	})
	.catch((error) => {
		console.log(error);
	});
