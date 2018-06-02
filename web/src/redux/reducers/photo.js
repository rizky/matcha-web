
export default (photos = [], action) => {
	switch (action.type) {
		case 'LOAD_PHOTOS':
			return (action.photos)
		case 'ADD_PHOTO':
			return [action.photo, ...photos]
		case 'DELETE_PHOTO':
			return photos.filter((photo) => {
				return (photo.id !== action.id)
			})
		default:
			return (photos)
	}
}