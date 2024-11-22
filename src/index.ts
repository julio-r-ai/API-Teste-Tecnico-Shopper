import { server } from "./server/Server";

server.listen(process.env.PORT || 8080, ()=>{console.log(`Servidor rodando na porta ${process.env.PORT || 8080}`)});