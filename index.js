const request = require('request');
const base_url = "https://minesweeper-api-stefaniaive.herokuapp.com/api/minesweeper"


exports.startNewGame = function(sizeX, sizeY, mines) {
	request.post(base_url, {
	  json: {
	  	"sizeX": sizeX,
		"sizeY": sizeY,
		"mines": mines	  
		}
	}, (error, res, body) => {
	  if (error) {
	    console.error(error)
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(body)
	})


}

exports.clickCell = function(id, posX, posY) {
	request.patch(base_url + "/" + id, {
	  json: {
	    "posX": posX,
    	"posY": posY
		}
	}, (error, res, body) => {
	  if (error) {
	    console.error(error)
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(body)
	})
}