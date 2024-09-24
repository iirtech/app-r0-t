exports.reqRes = function(nsPsBundle) {
	//set from bundle
	var app = nsPsBundle.app;
	var info = nsPsBundle.info;
	
  app.post('/apis/voca/merge', (req, res, next) => {
    res.writeHead(200, {
      'Content-Type' : 'application/json; charset=utf-8'
    });

    ///payload body
    var jsonObj = req.body;
    console.log("jsonObj", jsonObj)
    
    let stmt = 'SELECT * FROM  cb_word_dictionary'
  
    console.log('query--' + stmt);
    let qResponse = DB_COON_POOL.query(stmt, (err, response)=>{
      console.log(qResponse)

      let result = {
        "result" : CONST.code.success,
        "instance" : info.SERVER_INSTANCE,
          "items" : response
      };
  
    // http 응답
    res.end(JSON.stringify(result));  

    })

  });	//[end] app.post()

};
