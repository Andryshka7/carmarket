const makeFilter = (model: string, makes: string[]) => {
	if (!makes.length) return true
	for (let make of makes) {
		if (model.toLowerCase().includes(make.toLowerCase())) {
			return true
		}
	}
	return false
}

export default makeFilter
