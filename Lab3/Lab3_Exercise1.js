const dns = require('dns');
const util = require('util');

//1.
dns.resolve4('mum.edu',(err, ip) => {
    if(err)
        throw err;
    console.log(ip);
});

//2.
const resolve4Async = util.promisify(dns.resolve4)

resolve4Async('mum.edu').then(res => {console.log(res);})
                      .catch(rej => {console.log(rej)})

//3. If we don't have question 2, we need this line of code: const resolve4Async = util.promisify(dns.resolve4)
async function main() {
    try{
        const ip = await resolve4Async('mum.edu');
        console.log(ip);
    }
    catch (err) {
        console.log(err);
    }
}

main();