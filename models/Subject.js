const pool = require("./db");
const Base = require('./Base')
class Subject extends Base {
  

  TABLE_NAME = 'subject'
   SELECT_ALL_QUERY = `SELECT * FROM ${this.TABLE_NAME}`;

   convertArrayToObject = (row) => {
    return new Subject(row)};

   save = async (data) => {
    try {
      const [result] = await pool.execute(
        "INSERT INTO subject VALUE(?,?,?)",
        [null, data.name, data.number_of_credits]
      );
      console.log(result);
      return result.insertId;
    } catch (error) {
      throw new Error(error);
    }
  };
   
  update = async () => {
    try {
      await pool.execute(
        "UPDATE subject SET name = ?, number_of_credits = ? WHERE id = ?",
        [this.name, this.number_of_credits, this.id]
      );
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = new Subject();
