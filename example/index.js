const mvtk = require('../lib/index');

const endpoint = process.env.MVTK_ENDPOINT;
const accessKey = process.env.MVTK_ACCESS_KEY;

main().then((result)=>{
    console.log('DONE', result);
}).catch((err)=>{
    console.log('ERROR', err);
});

async function main() {
    const point = new mvtk.service.Point({
        endpoint: endpoint,
        accessKey: accessKey
    });
    const accountCreateResult = await point.accountCreate({
        kiinCd: '12345678'
    });
    const balanceResult = await point.balance({
        kiinCd: '18845678'
    });
    console.log(balanceResult);
    return;
}
