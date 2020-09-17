const Command = ReqAssistent('../../../Manager.js')

module.exports = class PingCommand extends Command {
    constructor (client) {
        super(client, {
            name: "ping",
            aliases: [],
            category: "Informação",
            usage: "<prefix>ping",
            description: "Latência do Bot."
        })
    }

    async run ({ Message }) {
        Message('📡 | Minha latência é de: `' + Number(this.client.ws.ping).toFixed() + 'ms`.')
    }
}
