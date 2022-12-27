const express = require('express')
const axios = require('axios')
var https = require('https');
var qs = require('querystring');
const cros = require('cors')

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'nkHDApwqW31QPTE9SnvVtc8U',
    'client_secret': 'VteII9xKkyw1saPjwMlsHu1889uMsmle'
});

const app = express()
app.use(cros())
app.listen(12306, () => {
    console.log('express server running')
})
app.get('/baidutoken', async (req, res) => {
    const ressopnse = await axios.get(`https://openapi.baidu.com/oauth/2.0/token?${param}`)
    console.log('ressopnse', ressopnse)
    // https.get(
    //     {
    //         hostname: 'aip.baidubce.com',
    //         path: '/oauth/2.0/token?' + param,
    //         agent: false
    //     },
    //     function (res) {
    //         // 在标准输出中查看运行结果
    //         // res.pipe(process.stdout);
    //         console.log('xxx res', res)
    //     }
    // )
    res.send({ token: ressopnse.data.refresh_token })
})