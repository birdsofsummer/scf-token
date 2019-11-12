post=(u,d)=>fetch(u,{method:"POST",body:JSON.stringify(d)}).then(x=>x.json())

test_token=async ()=>{
    host="https://service-gdl2ihc7-1252957949.ap-shanghai.apigateway.myqcloud.com/release/token"
    d={"user":"admin","password":"123456"}
    r=await post(host+"/create",d)
    if (r.ok){
        token=r.data
        t1=await fetch(host+"/parse?token="+token)
        t2=await fetch(host+"/parse?token=123")
        console.log(token,t1,t2)
    }
}

test_token()
