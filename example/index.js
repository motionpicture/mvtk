const mvtk = require('../lib/index');

const endpoint = process.env.MVTK_ENDPOINT;
const accessKey = process.env.MVTK_ACCESS_KEY;

main().then(()=>{
    console.log('DONE');
}).catch((err)=>{
    console.log(err);
});

async function main() {
    const point = new mvtk.service.Point({
        endpoint: endpoint
    });
    const accountCreateResult = await point.accountCreate({
        accessKey: accessKey,
        kiinCd: '12345678'
    });
    console.log(accountCreateResult);
}
