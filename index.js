const {
    create_token,
    parse_token,
}=require("./token")
const {Router} = require("./router")

const app=async (e, context, callback) => {
    let r=new Router("/token")
    r.get("/parse",async({body,headers,httpMethod,queryString, path}, context, callback)=>{
        let {ok,data}=parse_token(queryString.token)
        return  ok ? r.json(data) : r.error(data)
    })
     r.post("/create",async({body,headers,httpMethod,queryString, path}, context, callback)=>r.json(create_token(JSON.parse(body))))
 //  r.get("/echo",async(e, context, callback)=>r.json(e))
    //console.log(process.env)
     return await r.run(e, context, callback)
};

exports.main_handler =app
