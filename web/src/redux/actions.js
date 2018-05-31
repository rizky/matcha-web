let actions = {
	loadPhotos: function(photos) {
		return {
			type: 'LOAD_PHOTOS',
			photos: photos
		}
	},
	addPhoto: function(photo) {
		return {
			type: 'ADD_PHOTO',
			photo: photo
		}
	},
	deletePhoto: function(id) {
		return {
		type: 'DELETE_PHOTO',
		id: id
		}
	},
	loadPhotosAsync: function() {
		return (dispatch) => {
			fetch (`http://localhost:81/photos`)
			.then ( result => {
				return result.json()
			}).then( photos => {
				dispatch(photos);
			})
		}
	}
}
  
export default actions