/*
Description:
Preamble:
You were cleaning your virtual pantry and accidentally found a folder with a label on it: "Automaton v1.9".

Part 1:
You tried to launch Automaton but it didn't work. As an experienced engineer you noticed some "rust" and "dust" so you decided to clean it.

Your task is to "polish" and "clean" automaton so it starts working again.

Other episodes from series:
Automaton (Part 2)
Automaton (Part 3)
*/
function automaton(e) {
	if (typeof e === "string") {
		return e.replace(/[^aeiyuo]/g, "").length;
	} else if (typeof e === "number") {
		if (Math.round(e) != e + 1) return false;

		for (var i = 2; i < e; i++) if (e % i < 1) return false;

		return true;
	} else if (typeof e === "object") {
		var a = {};

		for (var k in e) a[e[k]] = e[k] + "";

		return a;
	}
}
