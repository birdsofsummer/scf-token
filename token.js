var jwt = require('jsonwebtoken');

const {TOKEN_KEY,TOKEN_LIFE,AUD,SUB}=process.env

const token_life=()=>Math.floor(Date.now() / 1000) + parseInt(TOKEN_LIFE)

const create_token=(data={user:"admin",password:"123456"} ,key=TOKEN_KEY)=>{
    let a={
       data,
      "alg": "HS256",
      "typ": "JWT",
      aud: AUD,
      sub: SUB,
      exp:token_life(),
      //"iat": <NumericDate>,
      //"nbf": <NumericDate>,
    }
    return jwt.sign(a, key);
}

const parse_token=(s="",k=TOKEN_KEY)=>{
    try {
        let decoded = jwt.verify(s, k);
        return {ok:true,data:decoded}
    } catch(err) {
        return {ok:false,data:{}}
    }
}

module.exports={
    create_token,
    parse_token,
}
