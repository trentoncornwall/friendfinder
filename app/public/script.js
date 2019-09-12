$("#find").on("click", event => {
	event.preventDefault();
	let name = $("#name")
		.val()
		.trim();
	let gender = $("#gender").val();
	let pref = $("#pref").val();
	let photo = $("#photo")
		.val()
		.trim();
	let one = $("#one").val();
	let two = $("#two").val();
	let three = $("#three").val();
	let four = $("#four").val();
	let five = $("#five").val();
	let six = $("#six").val();
	let seven = $("#seven").val();
	let eight = $("#eight").val();
	let nine = $("#nine").val();
	let ten = $("#ten").val();
	const data = {
		name: name,
		photo: photo,
		gender: gender,
		preference: pref,
		photo: photo,
		scores: [one, two, three, four, five, six, seven, eight, nine, ten]
	};
	$.post("/api/friends", (err, res) => {});
});
