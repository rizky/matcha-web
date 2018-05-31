let actions = {
	loadPhotos: () => {
		return (dispatch) => {
			fetch (`http://localhost:81/photos`)
			.then ( result => {
				return result.json()
			}).then( photos => {
				dispatch({
					type: 'LOAD_PHOTOS',
					photos: photos
				});
			})
		}
	},
	addPhoto: (photo) => {
		return {
			type: 'ADD_PHOTO',
			photo: photo
		}
	},
	deletePhoto: (id) => {
		return {
		type: 'DELETE_PHOTO',
		id: id
		}
	},
}
  
export default actions