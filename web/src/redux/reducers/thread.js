
export default (selectedThread = null, action) => {
	switch (action.type) {
		case 'SELECT_THREAD':
			return (action.thread)
		default:
			return (selectedThread)
	}
}
