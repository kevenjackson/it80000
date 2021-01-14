/* md5验证程序 */ 
var hex_chr="0123456789ABCDEF"; 
function rhex(num) 
{str=""; 
for(j=0; j <= 3; j++) 
str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + 
hex_chr.charAt((num >> (j * 8)) & 0x0F); 
return str;} 
function str2blks_MD5(str) 
{nblk=((str.length + 8) >> 6) + 1; 
blks=new Array(nblk * 16); 
for(i=0; i < nblk * 16; i++) blks[i]=0; 
for(i=0; i < str.length; i++) 
blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8); 
blks[i >> 2] |= 0x80 << ((i % 4) * 8); 
blks[nblk * 16 - 2]=str.length * 8; 
return blks;} 
function add(x, y) 
{var lsw=(x & 0xFFFF) + (y & 0xFFFF); 
var msw=(x >> 16) + (y >> 16) + (lsw >> 16); 
return (msw << 16) | (lsw & 0xFFFF);} 
function rol(num, cnt) 
{return (num << cnt) | (num >>> (32 - cnt));} 
function cmn(q, a, b, x, s, t) 
{return add(rol(add(add(a, q), add(x, t)), s), b);} 
function ff(a, b, c, d, x, s, t) 
{return cmn((b & c) | ((~b) & d), a, b, x, s, t);} 
function gg(a, b, c, d, x, s, t) 
{return cmn((b & d) | (c & (~d)), a, b, x, s, t);} 
function hh(a, b, c, d, x, s, t) 
{return cmn(b ^ c ^ d, a, b, x, s, t);} 
function ii(a, b, c, d, x, s, t) 
{return cmn(c ^ (b | (~d)), a, b, x, s, t);} 
function MD5(str) 
{x=str2blks_MD5(str); 
var a=1732584193; 
var b=-271733879; 
var c=-1732584194; 
var d=271733878; 
for(i=0; i < x.length; i += 16) 
{var olda=a; 
var oldb=b; 
var oldc=c; 
var oldd=d; 
a=ff(a, b, c, d, x[i+ 0], 7 , -680876936); 
d=ff(d, a, b, c, x[i+ 1], 12, -389564586); 
c=ff(c, d, a, b, x[i+ 2], 17, 606105819); 
b=ff(b, c, d, a, x[i+ 3], 22, -1044525330); 
a=ff(a, b, c, d, x[i+ 4], 7 , -176418897); 
d=ff(d, a, b, c, x[i+ 5], 12, 1200080426); 
c=ff(c, d, a, b, x[i+ 6], 17, -1473231341); 
b=ff(b, c, d, a, x[i+ 7], 22, -45705983); 
a=ff(a, b, c, d, x[i+ 8], 7 , 1770035416); 
d=ff(d, a, b, c, x[i+ 9], 12, -1958414417); 
c=ff(c, d, a, b, x[i+10], 17, -42063); 
b=ff(b, c, d, a, x[i+11], 22, -1990404162); 
a=ff(a, b, c, d, x[i+12], 7 , 1804603682); 
d=ff(d, a, b, c, x[i+13], 12, -40341101); 
c=ff(c, d, a, b, x[i+14], 17, -1502002290); 
b=ff(b, c, d, a, x[i+15], 22, 1236535329); 
a=gg(a, b, c, d, x[i+ 1], 5 , -165796510); 
d=gg(d, a, b, c, x[i+ 6], 9 , -1069501632); 
c=gg(c, d, a, b, x[i+11], 14, 643717713); 
b=gg(b, c, d, a, x[i+ 0], 20, -373897302); 
a=gg(a, b, c, d, x[i+ 5], 5 , -701558691); 
d=gg(d, a, b, c, x[i+10], 9 , 38016083); 
c=gg(c, d, a, b, x[i+15], 14, -660478335); 
b=gg(b, c, d, a, x[i+ 4], 20, -405537848); 
a=gg(a, b, c, d, x[i+ 9], 5 , 568446438); 
d=gg(d, a, b, c, x[i+14], 9 , -1019803690); 
c=gg(c, d, a, b, x[i+ 3], 14, -187363961); 
b=gg(b, c, d, a, x[i+ 8], 20, 1163531501); 
a=gg(a, b, c, d, x[i+13], 5 , -1444681467); 
d=gg(d, a, b, c, x[i+ 2], 9 , -51403784); 
c=gg(c, d, a, b, x[i+ 7], 14, 1735328473); 
b=gg(b, c, d, a, x[i+12], 20, -1926607734); 
a=hh(a, b, c, d, x[i+ 5], 4 , -378558); 
d=hh(d, a, b, c, x[i+ 8], 11, -2022574463); 
c=hh(c, d, a, b, x[i+11], 16, 1839030562); 
b=hh(b, c, d, a, x[i+14], 23, -35309556); 
a=hh(a, b, c, d, x[i+ 1], 4 , -1530992060); 
d=hh(d, a, b, c, x[i+ 4], 11, 1272893353); 
c=hh(c, d, a, b, x[i+ 7], 16, -155497632); 
b=hh(b, c, d, a, x[i+10], 23, -1094730640); 
a=hh(a, b, c, d, x[i+13], 4 , 681279174); 
d=hh(d, a, b, c, x[i+ 0], 11, -358537222); 
c=hh(c, d, a, b, x[i+ 3], 16, -722521979); 
b=hh(b, c, d, a, x[i+ 6], 23, 76029189); 
a=hh(a, b, c, d, x[i+ 9], 4 , -640364487); 
d=hh(d, a, b, c, x[i+12], 11, -421815835); 
c=hh(c, d, a, b, x[i+15], 16, 530742520); 
b=hh(b, c, d, a, x[i+ 2], 23, -995338651); 
a=ii(a, b, c, d, x[i+ 0], 6 , -198630844); 
d=ii(d, a, b, c, x[i+ 7], 10, 1126891415); 
c=ii(c, d, a, b, x[i+14], 15, -1416354905); 
b=ii(b, c, d, a, x[i+ 5], 21, -57434055); 
a=ii(a, b, c, d, x[i+12], 6 , 1700485571); 
d=ii(d, a, b, c, x[i+ 3], 10, -1894986606); 
c=ii(c, d, a, b, x[i+10], 15, -1051523); 
b=ii(b, c, d, a, x[i+ 1], 21, -2054922799); 
a=ii(a, b, c, d, x[i+ 8], 6 , 1873313359); 
d=ii(d, a, b, c, x[i+15], 10, -30611744); 
c=ii(c, d, a, b, x[i+ 6], 15, -1560198380); 
b=ii(b, c, d, a, x[i+13], 21, 1309151649); 
a=ii(a, b, c, d, x[i+ 4], 6 , -145523070); 
d=ii(d, a, b, c, x[i+11], 10, -1120210379); 
c=ii(c, d, a, b, x[i+ 2], 15, 718787259); 
b=ii(b, c, d, a, x[i+ 9], 21, -343485551); 
a=add(a, olda); 
b=add(b, oldb); 
c=add(c, oldc); 
d=add(d, oldd); } 
return rhex(a) + rhex(b) + rhex(c) + rhex(d); }




/*网站okex java调用程序*/
var okCoinWebSocket={};
    okCoinWebSocket.init=function(uri, apiKey, secretKey){
this.wsUri=uri;
this.apiKey=apiKey;
this.secretKey=secretKey;
this.lastHeartBeat=new Date().getTime();
this.overtime=8000;
		
okCoinWebSocket.websocket=new WebSocket(okCoinWebSocket.wsUri);
okCoinWebSocket.websocket.onopen=function(evt){onOpen(evt)};
okCoinWebSocket.websocket.onclose=function(evt){onClose(evt)};
okCoinWebSocket.websocket.onmessage=function(evt){onMessage(evt)};
okCoinWebSocket.websocket.onerror=function(evt){onError(evt)};}
	
//设置连接测试;
function checkConnect(){websocket.send("{'event':'ping'}");
if ((new Date().getTime() - okCoinWebSocket.lastHeartBeat) > okCoinWebSocket.overtime){onsole.log("socket 连接断开，正在尝试重新建立连接");}}

function onOpen(evt){print("CONNECTED");
doSend("{'event':'addChannel','channel':'ok_sub_spotcny_btc_kline_1min'}");

//现货交易、合约交易测试tradeTest();
//********测试数*******/
//////////////////现货行情//////////////////////////////////////////////////
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_ticker'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_ticker'}");	
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_depth_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_depth_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_depth_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_depth_60'}");	
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_trades'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_trades'}");	
//doSend("{'event':'addChannel','channel':'ok_btcusd_kline_3min'}");	
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_3min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_5min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_15min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_30min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_1hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_2hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_4hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_6hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_12hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_3day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_btc_kline_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_3min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_5min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_15min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_30min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_1hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_2hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_4hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_6hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_12hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_3day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_spotusd_ltc_kline_week'}");

//////////////////现货行情、合约行情//////////////////////////////////////////////////////
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_this_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_next_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_ticker_quarter'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_ticker_this_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_ticker_next_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_ticker_quarter'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_3min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_5min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_15min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_30min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_1hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_2hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_4hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_6hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_12hour'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_3day'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_this_week_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_next_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_kline_quarter_1min'}");	
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_kline_this_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_kline_next_week_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_kline_quarter_1min'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_this_week_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_this_week_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_next_week_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_next_week_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_quarter_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_depth_quarter_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_this_week_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_this_week_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_next_week_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_next_week_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_quarter_20'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_depth_quarter_60'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_trade_this_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_trade_next_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_trade_quarter'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_trade_this_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_trade_next_week'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_trade_quarter'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_btc_index'}");
//doSend("{'event':'addChannel','channel':'ok_sub_futureusd_ltc_index'}");
//////////////合约行情//////////////////////////////////////////////////////
}
	
function tradeTest(){
//现货交易
//spotTrade();
//spotCancelOrder(100);
//spotUserInfo();
//spotOrderInfo();
//spotTrades();
//spotUserinfos();
		
//合约交易
//futureTrade();
//futureCancelOrder(100);
//futureUserInfo();
//futureOrderInfo(100);
//futureTrades();
//futureUserinfos();
//futurePositions();
}

function onClose(evt){print("DISCONNECTED");}
function onMessage(e){console.log(new Date().getTime() + ": " + e.data)
var array=JSON.parse(e.data);
for (var i=0; i < array.length; i++){
for (var j=0;j < array[i].length; j++){
var isTrade=false;
var isCancelOrder=false;
				
if (array[i][j] == 'ok_spotusd_trade' || array[i][j] == 'ok_spotcny_trade'){isTrade=true;}
else if (array[i][j] == 'ok_spotusd_cancel_order'|| array[i][j] == 'ok_spotcny_cancel_order'){isCancelOrder=true;}
var order_id=array[i][j].order_id;
if (typeof (order_id) != 'undefined'){
if (isTrade){console.log("orderId is  " + order_id);}
//下单成功 业务代码
else if (isCancelOrder){console.log("order  " + order_id + " is now cancled");}}}}
//取消订单成功 业务代码
if (array.event == 'pong'){okCoinWebSocket.lastHeartBeat=new Date().getTime();}
else {createTable(array);}}
function onError(evt){print('<span style="color: red;">ERROR:</span> ' + evt.data);}
function doSend(message){print("SENT: " + message);
okCoinWebSocket.websocket.send(message);}
function print(message){
var status=document.getElementById("status");
status.style.wordWrap="break-word";
status.innerHTML += message + "<br>";}

function createTable(array)
{var str='<table id="tdata" border="1">\r\n<tr id="tr0">\r\n';
for ( var index in array[0]){str += '<th>' + index + '</th>\r\n';}
str += '</tr>\r\n';
for ( var i=0; i < array.length; i++)
{str += '<tr id="tr' + (i+1) + '">\r\n';
for ( var j in array[i])
{str += '<td>' + JSON.stringify(array[i][j]) + '</td>\r\n';
//if(typeof array[i][j] == 'string' && array[i][j].indexOf("ok_") >= 0){//console.log(array[i][j]);//}
}
str += '</tr>\r\n';}
str += '</table>\r\n';
document.getElementById("output").innerHTML=str;}
//现货下单
function spotTrade(){
var sign=MD5("amount=0.1&api_key=" + okCoinWebSocket.api_key + "&symbol=ltc_usd&type=sell_market&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_spotusd_trade','parameters':{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "','symbol':'ltc_usd','type':'sell_market','amount':0.1}}");}
//现货取消订单
function spotCancelOrder(orderId){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&order_id=" + orderId + "&symbol=ltc_usd&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_spotusd_cancel_order','parameters':{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "','symbol':'ltc_usd','order_id':'" + orderId + "'}}");}
//现货个人信息
function spotUserInfo(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_spotusd_userinfo','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
	
//查询订单信息
function spotOrderInfo(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&order_id=20914907&secret_key=" + okCoinWebSocket.secret_key + "&symbol=ltc_usd");
doSend("{'event':'addChannel','channel':'ok_spotusd_orderinfo','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','symbol':'ltc_usd','order_id':'20914907','sign':'" + sign + "'}}");}
//订阅交易数据
function spotTrades(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_sub_spotusd_trades','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
//订阅账户信息
function spotUserinfos(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_sub_spotusd_userinfo','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
//合约下单
function futureTrade(){
var sign=MD5("amount=1&api_key=" + okCoinWebSocket.api_key +  "&contract_type=this_week&lever_rate=20&match_price=1&price=1.5&symbol=ltc_usd&type=0&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event': 'addChannel','channel':'ok_futureusd_trade','parameters': {'api_key': '" + okCoinWebSocket.api_key + "','sign': '" + sign + "','symbol': 'ltc_usd','contract_type': 'this_week','amount': '1','price': '1.5','type': '0','match_price': '1','lever_rate': '20'}}");}
//合约取消订单
function futureCancelOrder(orderId){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&contract_type=this_week&order_id=" + orderId + "&symbol=ltc_usd&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event': 'addChannel','channel': 'ok_futureusd_cancel_order','parameters': {'api_key': '" + okCoinWebSocket.api_key + "','sign': '" + sign + "','symbol': 'ltc_usd','order_id': '" + orderId + "','contract_type': 'this_week'}}");}
//合约个人信息
function futureUserInfo(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_futureusd_userinfo','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
//查询合约订单
function futureOrderInfo(orderId){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&contract_type=this_week&current_page=1&order_id=" + orderId + "&page_length=1&symbol=ltc_usd&secret_key=" + okCoinWebSocket.secret_key + "&status=1");
doSend("{'event': 'addChannel','channel': 'ok_futureusd_orderinfo','parameters': {'api_key': '" + okCoinWebSocket.api_key + "','sign': '" + sign + "','symbol': 'ltc_usd','order_id': '" + orderId + "','contract_type': 'this_week','status':'1','current_page':'1','page_length':'1'}}");}
	
//订阅合约交易数据
function futureTrades(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_sub_futureusd_trades','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
	
//订阅合约账户信息
function futureUserinfos(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_sub_futureusd_userinfo','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}
	
//订阅合约持仓信息
function futurePositions(){
var sign=MD5("api_key=" + okCoinWebSocket.api_key + "&secret_key=" + okCoinWebSocket.secret_key);
doSend("{'event':'addChannel','channel':'ok_sub_futureusd_positions','parameters' :{'api_key':'" + okCoinWebSocket.api_key + "','sign':'" + sign + "'}}");}

window.onload=okCoinWebSocket.init("wss://real.okcoin.cn:10440/websocket/okcoinapi", "#YOUR_API_KEY#", "#YOUR_SECRET_KEY#");