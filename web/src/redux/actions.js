let actions = {
	photoPhoto: function(photo) {
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
	}
}
  
export default actions