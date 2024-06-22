const pool = require("./db");
const Base = require('./Base')
//class Student kế thừa class Base
class Student extends Base {
  

  TABLE_NAME = 'student'
   SELECT_ALL_QUERY = `SELECT * FROM ${this.TABLE_NAME}`

  convertArrayToObject = (row) => {
    return new Student(row)
  };

   save = async (data) => {
    try {
      const [result] = await pool.execute(
        `INSERT INTO ${this.TABLE_NAME} VALUE(?,?,?,?)`,
        [null, data.name, data.birthday, data.gender]
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
        `UPDATE ${this.TABLE_NAME} SET name = ?, birthday = ?, gender = ? WHERE id = ?`,
        [this.name, this.birthday, this.gender, this.id]
      );
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
  
}

module.exports = new Student();
