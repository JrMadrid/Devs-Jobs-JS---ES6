import app from "./app.js";

app.set("port",3000)
const main = ()=>{
  app.listen(app.get("port"))
  console.log(`Server on: http://localhost:${app.get("port")}`);
}
main();
