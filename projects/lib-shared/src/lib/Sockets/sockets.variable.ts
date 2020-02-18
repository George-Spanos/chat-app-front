import { SocketIoConfig } from "ngx-socket-io";

const URL = 'https://nestchat.azurewebsites.net/'
const devUrl = 'http://localhost:3000'
export const SOCKETS_CONFIG: SocketIoConfig = { url: URL, options: {} };