import { Message, isMessageStart } from "./Message";
import { LogModule } from "./LogModule";

export class Logs {
    // Platform: string
    // Electron_Version: string
    // Chromium_Version: string
    // Circuit_Meeting_Room_Version: String
    // Web_Client_Version: String
    // Server_Address: String
    // Client_Timezone: String
    // User_name: string
    // Tenant_ID: string
    // User_ID: string
    // Account: string

    Messages: Message[];
    Modules: LogModule[];

    constructor(inputtext: string) {
        this.Messages = [];
        this.Modules = [];

        if (inputtext) {
            const lines = inputtext.split('\n')

            let msg: Message;
            lines.forEach((line) => {
                if (isMessageStart(line)) {
                    msg = new Message(line);
                    this.Messages.push(msg);
                } else if (msg) {
                    // fill message
                    msg.TextAppend(line);
                }
            });

            this.Modules = LogModule.GetAllModules();
            // this.Messages.forEach(moduls => moduls.moduls.forEach(modul => {
            //     const foundModule = this.Modules.filter(m => m.name === modul);
            //     if (foundModule.length === 0) this.Modules.push(new LogModule(modul));
            // }));
        }
    }
}
