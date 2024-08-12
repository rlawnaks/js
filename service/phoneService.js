const pool = require("../config/db");

exports.save = async (data) => {
  const connection = await pool.getConnection();
  try {
    let sql = "insert into phone(name, phone, age) values(?, ?, ?)";
    await connection.query(sql, [data.name, data.phone, data.age]);
    return true;
  } catch (error) {
    console.log(err);
    return false;
  } finally {
    connection.release();
  }
};

exports.findAll = async () => {
  const connection = await pool.getConnection();
  try {
    let result;
    let sql = "select * from phone";
    [result] = await connection.query(sql);
    return result;
  } catch (error) {
    console.log(err);
    return false;
  } finally {
    connection.release();
  }
};
