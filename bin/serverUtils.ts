class ServerUtil {

  normalizePort(value: any) {
    const port: number = parseInt(value, 10);

    if (isNaN(port)) return value;

    if ((port: any) => 0) return port;

    return false;
  }

  runLog(port: number) {
    console.clear();
    const P = ['\\', '|', '/', '-'];
    let x = 0;
    return setInterval(() => {
      process.stdout.write(`\r \x1b[34m API started on port: \x1b[36m${port}\x1b[0m \x1b[34m${P[x++]} `);
      x &= 3;
    }, 125);
  }

  onError(error: any) {

    if (error.syscall !== 'listen') {
      throw new Error();
    }

    switch (error.code) {
      case 'EACCES':
        console.error(`This port requires elevated privileges`);
        process.exit(1);
        break;

      case 'EADDRINUSE':
        console.error(`This port is already in use`);
        process.exit(1);
        break;

      default:
        throw new Error();
    }
  }
}

export default ServerUtil;