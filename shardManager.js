ReqAssistent('dotenv').load();
const API = ReqAssistent('discord.js');
const SELF = ReqAssistent('./package.json');
const PREPAREDB = ReqAssistent('./src/utils/Database/connect.js');

process.title = `AssistentManager: ${SELF['version']}`

class AssistentSharding { 
	constructor() {
		this.init();
	}

	init() {
		const shardManager = new API.ShardingManager('./Assistent.js', { 
			token: process.env.TOKEN
		});

		console.log(`[Shard Console] - Discord.JS ${API.version} Carregado com sucesso.`);
		console.log(`[Shard Console] - APIBot ${SELF['version']} Carregando.... `);

		shardManager.spawn();
		console.log(`[Shard Console] - Inicializando com [${shardManager.totalShards.toString()}] Shards! Dentro de [${(isNaN(shardManager.totalShards) ? 0 : shardManager.totalShards - 1) * 7.5}]`)
	}
}

if (process.argv.includes('--prepare')) {
	console.log('[Shard Console] - Carregando Database...');

	PREPAREDB().then(() => {
		console.log('[Shard Console] - Database Conectada! Bot pronto para uso!');

		process.exit();
	}).catch((err) => { 
		throw err;
	})
} else {
	new AssistentSharding();
}
