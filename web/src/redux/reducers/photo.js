
export default (photos = [], action) => {
	switch (action.type) {
		case 'LOAD_PHOTOS':
			console.log(action)
			return (action.photos)
		case 'ADD_PHOTO':
			console.log(action)
			return [action.photo, ...photos]
		case 'DELETE_PHOTO':
			return photos.filter((photo) => {
				return (photo.id !== action.id)
			})
		default:
			console.log(action)
			return (photos)
	}
}