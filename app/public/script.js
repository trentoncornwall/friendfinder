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

	//form validation before sending it
	// if (
	// 	!name ||
	// 	!gender ||
	// 	!pref ||
	// 	!photo ||
	// 	!one ||
	// 	!two ||
	// 	!three ||
	// 	!four ||
	// 	!five ||
	// 	!six ||
	// 	!seven ||
	// 	!eight ||
	// 	!nine ||
	// 	!ten
	// ) {
	// 	console.log("incomplete form");
	// 	return false;
	// }
	const data = {
		name: name,
		photo: photo,
		gender: gender,
		preference: pref,
		photo: photo,
		scores: [one, two, three, four, five, six, seven, eight, nine, ten]
	};
	console.log(data);
	$.post("/api/friends", data, (err, res) => {
		if (err) throw err;
	});
});
