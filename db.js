const mysql = require('mysql2');
const config = {
    "host": "localhost",
    "user": "root",
    "password": "rlawnaks12341!@",
    "database": "study",
    "connectionLimit": 30
  }
const pool = mysql.createPool(config);


module.exports = (callback) => {
    pool.getConnection((err, conn) => {
      if (!err) {
        console.log('database success')
        callback(conn)
      } else {
        console.log(err)
      }
    })
  };

//   pool((sql) => {
//     //가져온 DB 정보가 row에 배열 형식으로 담김
//     sql.query("select * from tbl_user", (err, row) => {
//         //err가 없으면 결과를 보내줌
//         err ? console.log(err) : res.send({result : row})
//     })
//     //DB 연결 해제
//     sql.release()
// })