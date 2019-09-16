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

	// form validation before sending it
	if (
		!name ||
		!gender ||
		!pref ||
		!photo ||
		!one ||
		!two ||
		!three ||
		!four ||
		!five ||
		!six ||
		!seven ||
		!eight ||
		!nine ||
		!ten
	) {
		console.log("incomplete form");
		return false;
	}
	const data = {
		name: name,
		photo: photo,
		gender: gender,
		preference: pref,
		photo: photo,
		scores: [one, two, three, four, five, six, seven, eight, nine, ten]
	};

	function matched(res) {
		$(".matchname").text(res.name);
		$(".matchphoto").attr("src", res.photo);

		// modal exposure and x button
		let modalc = document.querySelector(".modal-content");
		let modal = document.querySelector(".modal");
		let closeBtn = document.querySelector(".close-btn");
		modal.style.display = "block";
		modalc.style.display = "block";
		closeBtn.onclick = function() {
			modal.style.display = "none";
		};
		window.onclick = function(e) {
			if (e.target == modal) {
				modal.style.display = "none";
			}
		};
	}

	$.ajax({
		url: "/api/friends",
		data: data,
		dataType: "json",
		type: "post",
		success: function(res) {
			matched(res);
			console.log(res);
		}
	});
});
