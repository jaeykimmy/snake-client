let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key.toUpperCase() === 'W') {
    connection.write('Move: up');
  }
  if (key.toUpperCase() === 'S') {
    connection.write('Move: down');
  }
  if (key.toUpperCase() === 'A') {
    connection.write('Move: left');
  }
  if (key.toUpperCase() === 'D') {
    connection.write('Move: right');
  }
  if (key.toUpperCase() === 'Q') {
    connection.write('Say: hey there');
  }
};
module.exports = {setupInput};