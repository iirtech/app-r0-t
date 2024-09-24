CONST = require('./const.js');
var express = require('express')
,app = express()
,pMysql = require('promise-mysql')
,nsPsBundle = require('./namespace/ns-ps-bundle.js') //namespace
,info = require('./info.js')
,utils = require('./utils/util.js')
,dateUtils =  require('date-utils')
,timeout = require('connect-timeout')
,http = require('http')
,mysql = require('mysql')
process.setMaxListeners(15);
MYSQL = pMysql;
utils.extendObects();


DB_COON_POOL = mysql.createPool({
  host : info.MYSQL_SERVER_PROD,
  port : info.MYSQL_PORT,
  user : info.MYSQL_USER,
  password : info.MYSQL_PASSWORD,
  database : info.MYSQL_DATABASE,
  connectionLimit : info.MYSQL_CONNECTION_LIMIT
 });

 DB_COON_POOL.getConnection(function(err, conn) {
  if(!err) {
    //연결 성공
    console.log("Mysql connection Success!")
    DB_CONNECTION = conn;

  }else{
    console.log("Mysql connection Failed!")
  }
  // conn.release();
});


///[set up]
app.use(timeout('100000s'));
app.use(express.json({
    limit : "50mb"
}));
app.use(express.urlencoded({
    limit:"50mb",
    extended: false
}));
console.log("heap_size_limit:" + require('v8').getHeapStatistics().heap_size_limit);
///[end][set up]

//setting bundle
nsPsBundle.app = app;
nsPsBundle.nsQuerys = null
nsPsBundle.info = info;
nsPsBundle.utils = utils;
nsPsBundle.dateUtils = dateUtils;

///[apis] /////////////////////////////////////////////////////
//여기 api 나열 요망

require('./apis/api1.js').reqRes(nsPsBundle);

//////////////////////////////////////////////////////////////

var  server =  http.createServer(app);
server.listen(info.HTTP_PORT_PROD, '0.0.0.0', function(){
    console.log('### Created http ipv4 server port:', info.HTTP_PORT_PROD, '###');
    console.log('github action....1')
    console.log('github action....2')
    console.log('github action....3')

    // console.log('### Mysql server:', info.MYSQL_SERVER_PROD, '###');
});

