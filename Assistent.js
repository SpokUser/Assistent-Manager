const Assistent = ReqAssistent('../src/Manager.js');
const config = ReqAssistent('./config.js');

const Manager = new Assistent(config);

Manager.start()
