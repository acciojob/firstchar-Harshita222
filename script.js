function firstChar(text) {
  // your code here
	if (text.length===0) {
		return ''
	}
	for (let i = 0; i < text.length; i++) {
		if (text[i] !==  ' ') {
			return text[i]
		}
	}

	return ''
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
