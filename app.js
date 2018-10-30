var fibos = require('fibos');

// 开启 HTTP 服务对所有地址的 8889 端口监听
fibos.load("http", {
   "http-server-address": "0.0.0.0:8899"
});

// 开启 P2P 服务对所有地址的 9877 端口监听
fibos.load("net", {
    "p2p-listen-endpoint": "0.0.0.0:9877"
});
// 设置 FIBOS 服务启动时重置环境数据。如果不想重置则设置为false
fibos.load("chain", {
    "delete-all-blocks": true
});
fibos.load("chain_api");
fibos.load("producer", {
   'producer-name': 'eosio',
   'enable-stale-production': true
});
// FIBOS 配置以及数据目录
fibos.config_dir = "node/config_dir/";
fibos.data_dir = "node/data_dir/";
fibos.enableJSContract = true;
fibos.start();