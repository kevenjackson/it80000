<!doctype html><html><head><meta charset="UTF-8">
<title>current rate inquery当前汇率查询</title>

<link rel="stylesheet" type="text/css" href="/cnstyle.css" /></head><body>

<form action="http://qq.ip138.com/hl.asp" method="get" onsubmit="return chkQ()"><span class="font181">
select</span><input size="20" value="100" onkeypress="javascript:{if ((event.keyCode &gt; 27 &amp;&amp; event.keyCode &lt; 45) || (event.keyCode &gt; 46 &amp;&amp; event.keyCode &lt; 48) || (event.keyCode &gt; 57 &amp;&amp; event.keyCode &lt; 127)) event.returnValue = false;}" /><br>
<select onmouseover="this.focus();" size="10" style="width: 100%">
<optgroup label="常用货币">
<option value="CNY">人民币Chinese Yuan RMB-CNY￥</option>
<option value="HKD">港元Hong Kong Dollar-HKD$</option>
<option value="TWD">台币Taiwan Dollar-TWD</option>
<option value="EUR">欧元Euro-EUR&euro;</option>
<option value="USD" selected="selected">美元US Dollar-USD$</option>
<option value="GBP">英镑British Pound-GBP￡</option>
<option value="AUD">澳元Australian Dollar-AUD$</option>
<option value="KRW">韩元South-Korean Won-KRW</option>
<option value="JPY">日元Japanese Yen-JPY(J.￥)</option></optgroup>
<optgroup label="A">
<option value="ALL">阿尔巴尼亚列克Albanian Lek-ALL</option>
<option value="DZD">阿尔及利亚第纳尔Algerian Dinar-DZD</option>
<option value="ARS">阿根廷比索Argentine Peso-ARS</option>
<option value="AWG">阿鲁巴岛弗罗林Aruba Florin-AWG</option>
<option value="AUD">澳元Australian Dollar-AUD$</option>
<option value="EGP">埃及镑Egyptian Pound-EGP</option>
<option value="ETB">埃塞俄比亚比尔Ethiopian Birr-ETB</option>
<option value="MOP">澳门元Macau Pataca-MOP</option>
<option value="OMR">阿曼里亚尔Omani Rial-OMR</option>
<option value="AED">阿联酋迪拉姆UAE Dirham-AED</option></optgroup>
<optgroup label="B">
<option value="BSD">巴哈马元Bahamian Dollar-BSD</option>
<option value="BHD">巴林第纳尔Bahraini Dinar-BHD</option>
<option value="BBD">巴巴多斯元Barbados Dollar-BBD</option>
<option value="BYR">白俄罗斯卢布 Belarus Ruble . BYR</option>
<option value="BZD">伯利兹元Belize Dollar-BZD</option>
<option value="BMD">百慕大元Bermuda Dollar-BMD</option>
<option value="BTN">不丹卢比Bhutan Ngultrum-BTN</option>
<option value="BOB">玻利维亚诺Bolivian Boliviano-BOB</option>
<option value="BWP">博茨瓦纳普拉Botswana Pula-BWP</option>
<option value="BRL">巴西里亚伊Brazilian Real-BRL</option>
<option value="BGN">保加利亚列瓦Bulgarian Lev-BGN</option>
<option value="BIF">布隆迪法郎Burundi Franc-BIF</option>
<option value="ISK">冰岛克朗Iceland Krona-ISK</option>
<option value="PKR">巴基斯坦卢比Pakistani Rupee-PKR</option>
<option value="PAB">巴拿马巴尔博亚Panama Balboa-PAB</option>
<option value="PGK">巴布亚新几内亚基那Papua New Guinea Kina-PGK</option>
<option value="PYG">巴拉圭瓜拉尼Paraguayan Guarani-PYG</option>
<option value="PLN">波兰兹罗提Polish Zloty-PLN</option></optgroup>
<optgroup label="C">
<option value="KPW">朝鲜圆North Korean Won-KPW</option></optgroup>
<optgroup label="D">
<option value="XOF">多哥非洲共同体法郎CFA Franc BCEAO-XOF</option>
<option value="DKK">丹麦克朗Danish Krone-DKK</option>
<option value="DOP">多米尼加比索Dominican Peso-DOP</option></optgroup>
<optgroup label="E">
<option value="RUB">俄罗斯卢布Russian Rouble-RUB</option></optgroup>
<optgroup label="F">
<option value="CVE">佛得角埃斯库多Cape Verde Escudo-CVE</option>
<option value="FKP">福克兰群岛镑Falkland Islands Pound-FKP</option>
<option value="FJD">斐济元Fiji Dollar-FJD</option>
<option value="PHP">菲律宾比索Philippine Peso-PHP</option></optgroup>
<optgroup label="G">
<option value="XAF">刚果中非共同体法郎CFA Franc BEAC-XAF</option>
<option value="COP">哥伦比亚比索Colombian Peso-COP</option>
<option value="CRC">哥斯达黎加科朗Costa Rica ColonCRC</option>
<option value="CUP">古巴比索Cuban PesoCUP</option>
<option value="XCD">格林纳达东加勒比元East Caribbean Dollar-XCD</option>
<option value="GMD">冈比亚达拉西Gambian Dalasi-GMD</option>
<option value="GYD">圭亚那元Guyana Dollar-GYD</option></optgroup>
<optgroup label="H">
<option value="HTG">海地古德Haiti Gourde-HTG</option>
<option value="HNL">洪都拉斯伦皮拉Honduras Lempira-HNL</option>
<option value="KZT">哈萨克斯坦腾格Kazakhstan Tenge-KZT</option></optgroup>
<optgroup label="J">
<option value="KHR">柬埔寨利尔斯Cambodia Riel-KHR</option>
<option value="CAD">加拿大元Canadian Dollar-CAD</option>
<option value="CZK">捷克克朗Czech Koruna-CZK</option>
<option value="DJF">吉布提法郎Dijibouti Franc-DJF</option>
<option value="GNF">几内亚法郎Guinea Franc-GNF</option>
<option value="ZWD">津巴布韦元Zimbabwe Dollar-ZWD</option></optgroup>
<optgroup label="K">
<option value="KMF">科摩罗法郎Comoros Franc-KMF</option>
<option value="HRK">克罗地亚库纳Croatian Kuna-HRK</option>
<option value="KES">肯尼亚先令Kenyan Shilling-KES</option>
<option value="KWD">科威特第纳尔Kuwaiti Dinar-KWD</option>
<option value="QAR">卡塔尔利尔Qatar Rial-QAR</option></optgroup>
<optgroup label="L">
<option value="LAK">老挝基普Lao Kip-LAK</option>
<option value="LVL">拉脱维亚拉图Latvian Lats-LVL</option>
<option value="LBP">黎巴嫩镑Lebanese Pound-LBP</option>
<option value="LSL">莱索托洛提Lesotho Loti-LSL</option>
<option value="LRD">利比里亚元Liberian Dollar-LRD</option>
<option value="LYD">利比亚第纳尔Libyan Dinar-LYD</option>
<option value="LTL">立陶宛里塔斯Lithuanian Litas-LTL</option>
<option value="ANG">列斯荷兰盾Neth Antilles Guilder-ANG</option>
<option value="RON">罗马尼亚新列伊Romanian New Leu-RON</option>
<option value="RWF">卢旺达法郎Rwanda Franc-RWF</option></optgroup>
<optgroup label="M">
<option value="BDT">孟加拉塔卡Bangladesh Taka-BDT</option>
<option value="MKD">马其顿第纳尔Macedonian Denar-MKD</option>
<option value="MWK">马拉维克瓦查Malawi Kwacha-MWK</option>
<option value="MYR">马来西亚林吉特Malaysian Ringgit-MYR</option>
<option value="MVR">马尔代夫卢非亚Maldives Rufiyaa-MVR</option>
<option value="MRO">毛里塔尼亚乌吉亚Mauritania Ougulya-MRO</option>
<option value="MUR">毛里求斯卢比Mauritius Rupee-MUR</option>
<option value="MXN">墨西哥比索Mexican Peso-MXN</option>
<option value="MDL">摩尔多瓦列伊Moldovan Leu-MDL</option>
<option value="MNT">蒙古图格里克Mongolian Tugrik-MNT</option>
<option value="MAD">摩洛哥道拉姆Moroccan Dirham-MAD</option>
<option value="MMK">缅甸元Myanmar Kyat-MMK</option>
<option value="PEN">秘鲁索尔Peruvian Nuevo Sol-PEN</option></optgroup>
<optgroup label="N">
<option value="NAD">纳米比亚元Namibian Dollar-NAD</option>
<option value="NPR">尼泊尔卢比Nepalese Rupee-NPR</option>
<option value="NIO">尼加拉瓜科多巴Nicaragua CordobaNIO</option>
<option value="NGN">尼日利亚奈拉Nigerian Naira-NGN</option>
<option value="NOK">挪威克朗Norwegian Kroner-NOK</option>
<option value="ZAR">南非兰特South African Rand-ZAR</option></optgroup>
<optgroup label="R">
<option value="SEK">瑞典克朗Swedish Krona-SEK</option>
<option value="CHF">瑞士法郎Swiss Franc-CHF</option></optgroup>
<optgroup label="S">
<option value="SVC">萨尔瓦多科朗El Salvador Colon-SVC</option>
<option value="WST">萨摩亚塔拉Samoa Tala-WST</option>
<option value="STD">圣多美多布拉Sao Tome Dobra-STD</option>
<option value="SAR">沙特阿拉伯里亚尔Saudi Arabian Riyal-SAR</option>
<option value="SCR">塞舌尔法郎Seychelles Rupee-SCR</option>
<option value="SLL">塞拉利昂利昂Sierra Leone Leone-SLL</option>
<option value="SBD">所罗门群岛元Solomon Islands Dollar-SBD</option>
<option value="SOS">索马里先令Somali Shilling-SOS</option>
<option value="LKR">斯里兰卡卢比Sri Lanka Rupee-LKR</option>
<option value="SHP">圣赫勒拿群岛磅St Helena Pound-SHP</option>
<option value="SZL">斯威士兰里兰吉尼Swaziland Lilageni-SZL</option></optgroup>
<optgroup label="T">
<option value="TRY">土耳其新里拉New Turkish Lira-TRY</option>
<option value="XPF">太平洋法郎Pacific Franc-XPF</option>
<option value="TZS">坦桑尼亚先令Tanzanian Shilling-TZS</option>
<option value="THB">泰国铢Thai Baht-THB</option>
<option value="TOP">汤加潘加Tonga Pa'anga-TOP</option>
<option value="TTD">特立尼达和多巴哥元Trinidad&amp;Tobago Dollar-TTD</option>
<option value="TND">突尼斯第纳尔Tunisian Dinar-TND</option></optgroup>
<optgroup label="W">
<option value="BND">文莱元Brunei Dollar . BND</option>
<option value="GTQ">危地马拉格查尔Guatemala Quetzal-GTQ</option>
<option value="UAH">乌克兰赫夫米Ukraine Hryvnia-UAH</option>
<option value="UYU">乌拉圭新比索Uruguayan New Peso-UYU</option>
<option value="VUV">瓦努阿图瓦图Vanuatu Vatu-VUV</option>
<option value="VND">越南盾Vietnam Dong-VND</option></optgroup>
<optgroup label="X">
<option value="HUF">匈牙利福林Hungarian Forint-HUF</option>
<option value="NZD">新西兰元New Zealand Dollar-NZD</option>
<option value="SGD">新加坡元Singapore Dollar-SGD</option>
<option value="SYP">叙利亚镑Syrian Pound-SYP</option></optgroup>
<optgroup label="Y">
<option value="INR">印度卢比Indian Rupee-INR</option>
<option value="IDR">印度尼西亚卢比(盾)Indonesian Rupiah-IDR</option>
<option value="IRR">伊朗里亚尔Iran Rial-IRR</option>
<option value="IQD">伊拉克第纳尔Iraqi Dinar-IQD</option>
<option value="ILS">以色列镑Israeli Shekel-ILS</option>
<option value="JMD">牙买加元Jamaican Dollar-JMD</option>
<option value="JOD">约旦第纳尔Jordanian Dinar-JOD</option>
<option value="YER">也门里亚尔Yemen Riyal-YER</option></optgroup>
<optgroup label="Z">
<option value="CLP">智利比索Chilean Peso-CLP</option>
<option value="GIP">直布罗陀镑Gibraltar Pound-GIP</option>
<option value="ZMK">赞比亚克瓦查Zambian Kwacha-ZMK</option></optgroup>
<optgroup label="贵金属">
<option value="XAL">铝价盎司Aluminium Ounces-XAL</option>
<option value="XCP">铜价盎司Copper Ounces-XCP</option>
<option value="XAU">金价盎司Gold Ounces-XAU</option>
<option value="XPD">钯价盎司Palladium Ounces-XPD</option>
<option value="XPT">铂价盎司Platinum Ounces-XPT</option>
<option value="XAG">银价盎司Silver Ounces-XAG</option></optgroup></select><br>

<input type="submit" value="current rate inquiry" class="font181"/><br>
<select onmouseover="this.focus();" size="10" style="width: 100%">
<optgroup label="常用货币">
<option value="CNY">人民币Chinese Yuan RMB-CNY￥</option>
<option value="HKD">港元Hong Kong Dollar-HKD$</option>
<option value="TWD">台币Taiwan Dollar-TWD</option>
<option value="EUR" selected="selected">欧元Euro-EUR&euro;</option>
<option value="USD">美元US Dollar-USD$</option>
<option value="GBP">英镑British Pound-GBP￡</option>
<option value="AUD">澳元Australian Dollar-AUD$</option>
<option value="KRW">韩元South-Korean Won-KRW</option>
<option value="JPY">日元Japanese Yen.JPY(J.￥)</option></optgroup>
<optgroup label="A">
<option value="ALL">阿尔巴尼亚列克Albanian Lek-ALL</option>
<option value="DZD">阿尔及利亚第纳尔Algerian Dinar-DZD</option>
<option value="ARS">阿根廷比索Argentine Peso-ARS</option>
<option value="AWG">阿鲁巴岛弗罗林Aruba Florin-AWG</option>
<option value="AUD">澳元Australian Dollar-AUD</option>
<option value="EGP">埃及镑Egyptian Pound-EGP</option>
<option value="ETB">埃塞俄比亚比尔Ethiopian Birr-ETB</option>
<option value="MOP">澳门元Macau Pataca-MOP</option>

<option value="OMR">阿曼里亚尔Omani Rial-OMR</option>
<option value="AED">阿联酋迪拉姆UAE Dirham-AED</option></optgroup>
<optgroup label="B">
<option value="BSD">巴哈马元Bahamian Dollar-BSD</option>
<option value="BHD">巴林第纳尔Bahraini Dinar-BHD</option>
<option value="BBD">巴巴多斯元Barbados Dollar-BBD</option>
<option value="BYR">白俄罗斯卢布Belarus Ruble-BYR</option>
<option value="BZD">伯利兹元Belize Dollar-BZD</option>
<option value="BMD">百慕大元Bermuda Dollar-BMD</option>
<option value="BTN">不丹卢比Bhutan Ngultrum-BTN</option>
<option value="BOB">玻利维亚诺Bolivian Boliviano-BOB</option>
<option value="BWP">博茨瓦纳普拉Botswana Pula-BWP</option>
<option value="BRL">巴西里亚伊Brazilian Real-BRL</option>
<option value="BGN">保加利亚列瓦Bulgarian Lev-BGN</option>
<option value="BIF">布隆迪法郎Burundi Franc-BIF</option>
<option value="ISK">冰岛克朗Iceland Krona-ISK</option>
<option value="PKR">巴基斯坦卢比Pakistani Rupee-PKR</option>
<option value="PAB">巴拿马巴尔博亚Panama Balboa-PAB</option>
<option value="PGK">巴布亚新几内亚基那Papua New Guinea Kina-PGK</option>
<option value="PYG">巴拉圭瓜拉尼Paraguayan Guarani-PYG</option>
<option value="PLN">波兰兹罗提Polish ZlotyPLN</option></optgroup>
<optgroup label="C">
<option value="KPW">朝鲜圆North Korean Won-KPW</option></optgroup>
<optgroup label="D">
<option value="XOF">多哥非洲共同体法郎CFA Franc BCEAO-XOF</option>
<option value="DKK">丹麦克朗Danish Krone-DKK</option>
<option value="DOP">多米尼加比索Dominican Peso-DOP</option></optgroup>
<optgroup label="E">
<option value="RUB">俄罗斯卢布Russian Rouble-RUB</option></optgroup>
<optgroup label="F">
<option value="CVE">佛得角埃斯库多Cape Verde Escudo-CVE</option>
<option value="FKP">福克兰群岛镑Falkland Islands Pound-FKP</option>
<option value="FJD">斐济元Fiji Dollar-FJD</option>
<option value="PHP">菲律宾比索Philippine Peso-PHP</option></optgroup>
<optgroup label="G">
<option value="XAF">刚果中非共同体法郎CFA Franc BEAC-XAF</option>
<option value="COP">哥伦比亚比索Colombian Peso-COP</option>
<option value="CRC">哥斯达黎加科朗Costa Rica Colon-CRC</option>
<option value="CUP">古巴比索Cuban Peso-CUP</option>
<option value="XCD">格林纳达东加勒比元 East Caribbean Dollar-XCD</option>
<option value="GMD">冈比亚达拉西Gambian Dalasi-GMD</option>
<option value="GYD">圭亚那元Guyana Dollar-GYD</option></optgroup>
<optgroup label="H">
<option value="HTG">海地古德Haiti Gourde-HTG</option>
<option value="HNL">洪都拉斯伦皮拉Honduras Lempira-HNL</option>
<option value="KZT">哈萨克斯坦腾格Kazakhstan Tenge-KZT</option></optgroup>
<optgroup label="J">
<option value="KHR">柬埔寨利尔斯Cambodia Riel-KHR</option>
<option value="CAD">加拿大元Canadian Dollar-CAD</option>
<option value="CZK">捷克克朗Czech Koruna-CZK</option>
<option value="DJF">吉布提法郎Dijibouti Franc-DJF</option>
<option value="GNF">几内亚法郎Guinea Franc-GNF</option>
<option value="ZWD">津巴布韦元Zimbabwe Dollar-ZWD</option></optgroup>
<optgroup label="K">
<option value="KMF">科摩罗法郎Comoros Franc-KMF</option>
<option value="HRK">克罗地亚库纳Croatian Kuna-HRK</option>
<option value="KES">肯尼亚先令Kenyan Shilling-KES</option>
<option value="KWD">科威特第纳尔Kuwaiti Dinar-KWD</option>
<option value="QAR">卡塔尔利尔Qatar Rial . QAR</option></optgroup>
<optgroup label="L">
<option value="LAK">老挝基普Lao Kip-LAK</option>
<option value="LVL">拉脱维亚拉图Latvian Lats-LVL</option>
<option value="LBP">黎巴嫩镑Lebanese Pound-LBP</option>
<option value="LSL">莱索托洛提Lesotho Loti-LSL</option>
<option value="LRD">利比里亚元Liberian Dollar-LRD</option>
<option value="LYD">利比亚第纳尔Libyan Dinar-LYD</option>
<option value="LTL">立陶宛里塔斯Lithuanian Litas-LTL</option>
<option value="ANG">列斯荷兰盾Neth Antilles Guilder-ANG</option>
<option value="RON">罗马尼亚新列伊Romanian New Leu-RON</option>
<option value="RWF">卢旺达法郎Rwanda Franc-RWF</option></optgroup>
<optgroup label="M">
<option value="BDT">孟加拉塔卡Bangladesh Taka-BDT</option>
<option value="MKD">马其顿第纳尔Macedonian Denar-MKD</option>
<option value="MWK">马拉维克瓦查Malawi Kwacha-MWK</option>
<option value="MYR">马来西亚林吉特Malaysian Ringgit-MYR</option>
<option value="MVR">马尔代夫卢非亚Maldives Rufiyaa-MVR</option>
<option value="MRO">毛里塔尼亚乌吉亚Mauritania Ougulya-MRO</option>
<option value="MUR">毛里求斯卢比Mauritius Rupee-MUR</option>
<option value="MXN">墨西哥比索Mexican Peso-MXN</option>
<option value="MDL">摩尔多瓦列伊Moldovan Leu-MDL</option>
<option value="MNT">蒙古图格里克Mongolian Tugrik-MNT</option>
<option value="MAD">摩洛哥道拉姆Moroccan Dirham-MAD</option>
<option value="MMK">缅甸元Myanmar Kyat-MMK</option>
<option value="PEN">秘鲁索尔Peruvian Nuevo Sol-PEN</option></optgroup>
<optgroup label="N">
<option value="NAD">纳米比亚元Namibian Dollar-NAD</option>
<option value="NPR">尼泊尔卢比Nepalese Rupee-NPR</option>
<option value="NIO">尼加拉瓜科多巴Nicaragua Cordoba-NIO</option>
<option value="NGN">尼日利亚奈拉Nigerian Naira-NGN</option>
<option value="NOK">挪威克朗Norwegian Kroner-NOK</option>
<option value="ZAR">南非兰特South African Rand-ZAR</option></optgroup>
<optgroup label="R">
<option value="SEK">瑞典克朗Swedish Krona-SEK</option>
<option value="CHF">瑞士法郎Swiss Franc-CHF</option></optgroup>
<optgroup label="S">
<option value="SVC">萨尔瓦多科朗El Salvador Colon-SVC</option>
<option value="WST">萨摩亚塔拉Samoa Tala-WST</option>
<option value="STD">圣多美多布拉Sao Tome Dobra-STD</option>
<option value="SAR">沙特阿拉伯里亚尔Saudi Arabian Riyal-SAR</option>
<option value="SCR">塞舌尔法郎Seychelles Rupee-SCR</option>
<option value="SLL">塞拉利昂利昂Sierra Leone Leone-SLL</option>
<option value="SBD">所罗门群岛元Solomon Islands Dollar-SBD</option>
<option value="SOS">索马里先令Somali Shilling-SOS</option>
<option value="LKR">斯里兰卡卢比Sri Lanka Rupee-LKR</option>
<option value="SHP">圣赫勒拿群岛磅St Helena Pound-SHP</option>
<option value="SZL">斯威士兰里兰吉尼Swaziland Lilageni-SZL</option></optgroup>
<optgroup label="T">
<option value="TRY">土耳其新里拉New Turkish Lira-TRY</option>
<option value="XPF">太平洋法郎Pacific Franc-XPF</option>
<option value="TZS">坦桑尼亚先令Tanzanian Shilling-TZS</option>
<option value="THB">泰国铢Thai Baht-THB</option>
<option value="TOP">汤加潘加 Tonga Pa'anga-TOP</option>
<option value="TTD">特立尼达和多巴哥元 Trinidad&amp;Tobago Dollar-TTD</option>
<option value="TND">突尼斯第纳尔 Tunisian Dinar-TND</option></optgroup>
<optgroup label="W">
<option value="BND">文莱元Brunei Dollar-BND</option>
<option value="GTQ">危地马拉格查尔Guatemala Quetzal-GTQ</option>
<option value="UAH">乌克兰赫夫米Ukraine Hryvnia-UAH</option>

<option value="UYU">乌拉圭新比索Uruguayan New Peso-UYU</option>
<option value="VUV">瓦努阿图瓦图Vanuatu Vatu-VUV</option>
<option value="VND">越南盾Vietnam Dong-VND</option></optgroup>
<optgroup label="X">
<option value="HUF">匈牙利福林Hungarian Forint-HUF</option>
<option value="NZD">新西兰元New Zealand Dollar-NZD</option>
<option value="SGD">新加坡元Singapore Dollar-SGD</option>
<option value="SYP">叙利亚镑Syrian Pound-SYP</option></optgroup>
<optgroup label="Y">
<option value="INR">印度卢比Indian Rupee-INR</option>
<option value="IDR">印度尼西亚卢比(盾)Indonesian Rupiah-IDR</option>
<option value="IRR">伊朗里亚尔Iran Rial-IRR</option>
<option value="IQD">伊拉克第纳尔Iraqi Dinar-IQD</option>
<option value="ILS">以色列镑Israeli Shekel-ILS</option>
<option value="JMD">牙买加元Jamaican Dollar-JMD</option>
<option value="JOD">约旦第纳尔Jordanian Dinar-JOD</option>
<option value="YER">也门里亚尔Yemen Riyal-YER</option></optgroup>
<optgroup label="Z">
<option value="CLP">智利比索Chilean Peso-CLP</option>
<option value="GIP">直布罗陀镑Gibraltar Pound-GIP</option>
<option value="ZMK">赞比亚克瓦查Zambian Kwacha-ZMK</option></optgroup>
<optgroup label="贵金属">
<option value="XCP">铜价盎司Copper Ounces-XCP</option>
<option value="XAU">金价盎司Gold Ounces-XAU</option>
<option value="XPD">钯价盎司Palladium Ounces-XPD</option>
<option value="XPT">铂价盎司Platinum Ounces-XPT</option>
<option value="XAG">银价盎司Silver Ounces-XAG</option></optgroup></select></form>

</body></html>