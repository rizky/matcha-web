
let photoReducer = function(photos = [], action) {
	switch (action.type) {
		case 'ADD_PHOTO':
			return [{
				photo: action.photo,
				completed: false,
				id: action.photo.id
				}, ...photos]
		case 'DELETE_PHOTO':
			return photos.filter((photo) => {
				return photo.id !== action.id
			})
		default: 
			return photos;
	}
}

export default photoReducer