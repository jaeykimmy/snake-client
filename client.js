const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on("connect", () => {
    conn.write('Name: jae');
    console.log('hi');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};