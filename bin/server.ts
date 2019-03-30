import App from '../app';
import ServerUtil from './serverUtils';

const serverUtil = new ServerUtil();

const port = serverUtil.normalizePort(process.env.PORT || 8080);

App.app.listen(port, () => serverUtil.runLog(port));
