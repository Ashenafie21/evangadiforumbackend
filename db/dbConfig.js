const mysql2 = require("mysql2");
const connection = mysql2.createPool({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  host: '154.56.47.154',
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// console.log(process.env.JWT_SECRET);
// connection.execute("SELECT 'test'", (err, result) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports=connection.promise();
