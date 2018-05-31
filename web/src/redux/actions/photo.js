export const loadPhotos = () => {
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
}

export const addPhoto = (photo) => {
	return {
		type: 'ADD_PHOTO',
		photo: photo
	}
}

export const deletePhoto = (id) => {
	return {
	type: 'DELETE_PHOTO',
	id: id
	}
}