/* VLF/LF/SID OSINT MONITOR - DATA FILE */

var _TO="DHO38|23.4|53.132|7.614|Germany|~800kW|NATO VLF, Rhauderfehn\nNAA|24.0|44.645|-67.282|USA-Maine|~1800kW|Navy Cutler, strongest W.Hemisphere\nNLK|24.8|48.203|-121.917|USA-WA|~250kW|Jim Creek, Pacific fleet\nNPM|21.4|21.419|-158.028|USA-Hawaii|~425kW|Lualualei, Pacific Fleet subs\nNWC|19.8|-21.817|114.166|Australia|~1000kW|Exmouth HEH, global signal\nICV|20.27|40.9|9.73|Italy-Sardinia|~20kW|Tavolara, Italian Navy\nJJI|22.2|31.483|131.417|Japan-Ebino|~200kW|JMSDF, Western Pacific\nRDL|18.1|52.478|38.031|Russia|~400kW|Ramoshka, Western Fleet\nTBB|26.7|40.643|29.929|Turkey-Bafa|~100kW|Turkish Navy, VLF.it active\nSQA|18.6|-34.037|18.432|South Africa|~300kW|Simonstown, SAN\nVTX3|18.2|8.384|77.753|India|~100kW|INS Kattabomman, Southern Cmd\nLRA|17.2|-38.766|-62.135|Argentina|~200kW|Patagonia, Argentine Navy\nNML|25.2|47.766|-95.994|USA-MN|~500kW|Clam Lake, ex-ELF Sanguine site\nJXN|16.4|63.843|9.115|Norway|~100kW|Gildeskal, Norwegian Navy\nNIK|22.1|69.3|33.0|Russia-Kola|~200kW|Kola Peninsula, Northern Fleet\nGQD|19.6|54.916|-3.278|UK-Anthorn|~100kW|Post-GBR low-power at Anthorn\nFUO|21.75|43.378|-1.878|Spain|~30kW|Spanish Navy, VLF.it active\nATN|26.4|38.08|23.83|Greece|~50kW|Hellenic Navy, VLF.it active\nRWM|9.996|56.73|37.07|Russia-Taldom|~40kW|Standard time/freq signal\nTBB2|20.5|40.45|30.0|Turkey|?|Secondary Turkish VLF, unconfirmed\nCVT|21.0|38.75|-9.1|Portugal|?|Portuguese Navy, rarely observed\nAWA|25.0|55.75|37.62|Russia-Moscow|?|CBK Waw.pl detected, unconfirmed TX\nTAV|16.0|40.9|9.7|Italy-Sardinia|?|Possibly ICV secondary, CBK Waw.pl\nRSDN-20W|100LF|53.5|32.0|Russia-Bryansk|~1MW|Chayka GRI 8000 master, active eLORAN\nRSDN-20E|100LF|50.9|142.2|Russia-Sakhalin|~1MW|Chayka GRI 7950, Alexandrovsk-Sakhalinsky\nRSDN-20N|100LF|69.0|33.5|Russia-Murmansk|~500kW|Chayka GRI 5980, Northern Fleet coverage\nRSDN-20Ca|100LF|43.5|44.5|Russia-Caucasus|~300kW|Chayka southern chain slave/repeater";

var _TD="GBR|19.6|54.916|-3.278|UK-Anthorn|~750kW|Closed 2003, originally Rugby 1926-2003\nHWU|18.3|46.723|1.594|France-Rosnay|~2000kW|Closed ~2009, one of most powerful ever\nFTA|162LF|47.167|2.183|France-Allouis|~2000kW|LF longwave, closed 2016, demolished 2017\nNSS|21.4|38.379|-76.448|USA-MD|~1000kW|Annapolis, US Navy, closed 1976\nNDT|24.0|28.5|-80.5|USA-FL|~1000kW|Cape Canaveral, confirmed decommissioned\nSHF|21.8|42.7|132.0|Russia-Pacific|~200kW|Soviet Pacific Fleet VLF, may still operate sporadically\nOMA|50LF|50.13|14.58|Czech-Podbrady|~100kW|LF time signal, ceased ~1995\nRAB-99|11.905|44.4|40.2|Russia-Caucasus|?|VLF.it below-10kHz, status unknown\nUFT2|15.1|48.5|11.0|Germany-Bavaria|?|Experimental VLF 1970s-80s\nJX-Old|16.0|63.5|10.0|Norway|?|Pre-JXN Norwegian VLF\nNAA-Old|17.8|44.6|-67.3|USA-Maine|?|Original NAA freq, historical\nPKM-Old|18.0|55.0|82.9|Russia-Novosibirsk|?|Siberian VLF, post-Soviet decom\nIXS|22.0|41.9|12.5|Italy-Rome|?|Italian time/experimental, CBK Waw.pl\nEuro LORAN|100LF|53.3|9.0|Germany-Sylt|~1MW|NATO GRI 7490 master, shut down 31 Dec 2015\nNorway LORAN|100LF|63.5|10.5|Norway-Bo|~1MW|NATO GRI 7990 chain, shut down 2015\nMed LORAN|100LF|38.0|23.8|Greece-Kithira|~500kW|NATO Mediterranean chain, shut down 2015\nOmega ND|10.2|41.5|-98.4|USA-ND|~10kW|Omega ND station, global radionav, all 8 decom 1997";

var _TU="UNK-16.4|16.4|55.0|38.0|Russia(prob.)|?|Narrowband CW, possible Navy reserve\nUNK-18.1x|18.1|52.0|40.0|Russia(prob.)|?|FSK near RDL, different modulation\nUNK-19.0|19.0|35.0|139.0|Japan(prob.)|Low|Weak CW correlates JJI, JMSDF test?\nUNK-20.9|20.9|60.0|30.0|Russia-NW|?|Intermittent FSK during exercises\nUNK-22.5|22.5|38.0|-97.0|USA(prob.)|?|Rare CW, DARPA/CONUS test?\nUNK-25.0|25.0|-33.0|18.5|South Africa(prob.)|?|Near SQA, harmonic or experimental\nUNK-27.5|27.5|41.0|29.0|Turkey(prob.)|Low|Near TBB, spurious or experimental\nUNK-14.9|14.9|65.0|15.0|Norway/Sweden|V.low|Lower VLF, EISCAT or amateur\nUNK-20.0|20.0|-20.0|47.0|Indian Ocean|?|Possible CN/IN naval relay\nUNK-23.0|23.0|25.0|55.0|UAE/Oman|?|Persian Gulf, naval ops?\nSAQ(occ.)|17.2|59.83|17.63|Sweden-Grimeton|~200kW|Alexanderson alternator, UNESCO, special events\nUNK-28.5|28.5|22.0|114.0|China(prob.)|?|Upper VLF, possible PLAN development\nUNK-18.8|18.8|37.0|140.0|Japan-E coast|Low|Not JJI, possible JMSDF secondary\nUNK-24.4|24.4|52.0|20.0|Poland/Belarus|V.low|Intermittent, VLF.it 20-25kHz\nUNK-26.0|26.0|30.0|31.0|Egypt(prob.)|?|Mediterranean DF, military?\nUNK-12.5|12.5|50.0|30.0|Ukraine area|V.low|VLF.it below-10kHz, pre-2022, now silent\nUNK-14.2|14.2|55.0|25.0|Baltic area|V.low|VLF.it below-10kHz, possible Kaliningrad\nUNK-10.2|10.2|45.0|14.0|Adriatic area|V.low|VLF.it below-10kHz, heater artifact?";

var _TC="VDL|~20-25|64.7|40.7|Russia-Arkhangelsk|~500kW|Northern Fleet backup, declassified US intel\nGoliath-2|~15-30|42.83|132.0|Russia-Primorsky|~1000kW|Pacific Fleet, massive antenna on satellite imagery\nNZh-44|~14-30|70.9|53.5|Russia-NovayaZemlya|?|US declassified NZh series, Arctic\nSevastopol|~18-24|44.6|33.5|Russia-Crimea|~200kW|Black Sea Fleet, post-2014 DF\nNovorossiysk|~20|44.7|37.8|Russia-Krasnodar|?|Secondary Black Sea, European DF\nVLFC-1|~18-22|18.8|110.0|China-Hainan|~500kW|PLAN SSBN VLF, Sanya, satellite imagery\nVLFC-2|~20|18.2|109.7|China-Hainan|~300kW|Secondary PLAN, ~15km from Sanya\nPLAN Qingdao|~18-25|36.0|120.3|China-Shandong|~300kW|North Sea Fleet, KR/JP DF\nPLAN HainanMt|~22|19.1|109.5|China-Hainan|?|Third Hainan site ~40km inland, sat imagery\nVLFC-3|~20-24|9.9|114.0|China-Spratlys|?|Artificial island antenna arrays, sat imagery\nVLFC-4|~20|16.5|112.0|China-Paracel|?|Woody Island comms infra, sat imagery\nDhahran|~22-26|26.25|50.0|Saudi Arabia|?|Vinnell/BAE SEC filing VLF system\nIDF Haifa|~20-25|32.8|35.0|Israel|~200kW|IDF sub comms, GR/TR DF\nIDF South|~22|31.2|34.8|Israel-Negev|?|Secondary IDF, ClimateViewer Negev\nIRIN Bandar|~18-24|27.2|56.3|Iran|~200kW|IRIN Navy, UAE/Oman DF\nIRIN Jask|~20|25.6|57.8|Iran|?|Second IRIN VLF, Jask sub base\nPN Karachi|~18-22|24.9|67.0|Pakistan|~100kW|Pakistan Navy, Indian DF\nEGY Alex|~20-24|30.9|29.9|Egypt|~100kW|Egyptian Navy, GR/IT DF\nUKR Mykolaiv|~18-22|46.95|32.0|Ukraine|?|Ukrainian Navy, destroyed post-2022\nBRZ Rio|~22-26|-22.9|-43.2|Brazil|~100kW|Brazilian Navy, AR DF\nKPN|~20-25|40.5|129.0|North Korea|?|Possible KPN, KR/JP DF, speculative\nUNK-CBK-A|~19.4|55.0|60.0|Russia-Urals|?|CBK Waw.pl detected, unknown TX\nUNK-CBK-B|~23.8|48.0|70.0|Kazakhstan|?|CBK Waw.pl, Central Asian direction";

function pTX(s,cat){return s.split("\n").map(function(l){var p=l.split("|");return{n:p[0],f:p[1]+" kHz",la:+p[2],lo:+p[3],c:p[4],p:p[5],no:p[6]||"",cat:cat}})}
var AT=pTX(_TO,'official').concat(pTX(_TD,'decommissioned')).concat(pTX(_TU,'unofficial')).concat(pTX(_TC,'classified'));

/* === WWLLN 86 STATIONS (wwlln.net/spectra.html)
   X|X = coordinate sconosciuta → solo tabella, NON mappa
   76 mappate, 10 solo tabella === */
var _W="Dunedin (Otago NZ)|-45.87|170.51|Perth (Murdoch AU)|-31.95|115.86|Singapore (NUS)|1.35|103.82|Brisbane (Griffith AU)|-27.50|153.02|Suva (USP FJ)|-17.71|177.99|Los Alamos (LANL US)|35.88|-106.30|Seattle (Washington US)|47.61|-122.33|Boston (MIT US)|42.36|-71.06|Sao Paulo (INPE BR)|-23.55|-46.63|Tahiti (Polynesie PF)|-17.53|-149.57|Tel Aviv (TAU IL)|32.08|34.78|Lisbon (IPMA PT)|38.72|-9.14|Hermanus (MagObs SA)|-34.42|19.23|Huancayo (IGP PE)|-12.06|-75.32|Davis (AAD AU)|-68.58|77.97|Cordoba (UNC AR)|-31.42|-64.18|Pune (India)|18.52|73.86|Yerevan (Armenia)|40.18|44.51|Bryansk (Russia)|53.25|34.37|Honolulu (Hawaii US)|21.31|-157.86|Rothera (BAS UK)|-67.57|-68.12|Ascension (BGS UK)|-7.97|-14.39|Kingston (AAD AU)|-43.03|147.44|Boulder (USGS US)|40.01|-105.27|UCLA (US)|34.07|-118.45|Tallahassee (FloridaSt US)|30.44|-84.30|Costa Rica (UCR CR)|9.93|-84.08|Yakutsk (IKFIA RU)|62.03|129.72|Scott Base (Antarctica NZ)|-77.85|166.77|SANAE (BAS AQ)|-70.30|-2.37|Fairbanks (USGS US)|64.81|-147.87|Sodankyla (SGO FI)|67.37|26.63|R.Gallegos (CONICET AR)|-51.62|-69.23|Chofu (UEC JP)|35.66|139.54|Dakar (UCAD SN)|14.69|-17.44|Houghton (MTU US)|47.12|-88.59|Edmonton (Canada)|53.55|-113.49|Kamchatka (ICRWR RU)|52.97|158.25|Marion Island (SA)|-46.88|37.86|Valparaiso (ValparaisoU US)|41.73|-87.06|Osaka (Kindai JP)|34.69|135.50|Valencia (Valencia ES)|39.48|-0.35|Sheffield (Sheffield UK)|53.38|-1.47|MSSL (UCL UK)|51.22|-0.24|Tripura (TripuraU IN)|23.84|91.28|Buenos Aires (Argentina)|-34.60|-58.38|Narrabri (Australia)|-30.33|149.78|Bayamon (UPR PR)|18.40|-66.17|Tihany (Hungary)|46.90|17.89|St Johns (Canada)|47.56|-52.71|FUTA (Nigeria)|7.31|5.13|Doon University (India)|30.27|77.95|Czech Milesovka (Czech)|50.56|13.93|Dhaka (Bangladesh)|23.81|90.41|Quito (EPN EC)|-0.18|-78.47|Reykjavik (Iceland)|64.15|-21.94|Algiers (Algeria)|36.75|3.06|Guntur (India)|16.31|80.44|Western Sydney (Australia)|-33.74|150.80|Barrow (Alaska US)|71.29|-156.79|SRMIST Chennai (India)|12.82|80.04|Ny Alesund (Svalbard NO)|78.92|11.93|La Paz (UMSA BO)|-16.50|-68.13|Atuona (Fr.Polynesia)|-9.80|-139.02|Rikitea (Fr.Polynesia)|-23.12|-134.97|Gasu (GASU RU)|51.96|85.94|Vladivostok (ICRWR RU)|43.12|131.91|Gijon (Oviedo ES)|43.54|-5.66|Anchorage (Alaska US)|61.22|-149.90|Halley VIa (BAS AQ)|-75.58|-26.54|Trelew (UNP AR)|-43.25|-65.31|Belem (Brazil)|-1.46|-48.50|Magdeburg (Germany)|52.13|11.62|Almaty (Kazakhstan)|43.24|76.95|Guadalajara (Mexico)|20.67|-103.35|KNUST (Ghana)|6.67|-1.57|Monmouth|X|X|Bend|X|X|Chile|X|X|Transylvania|X|X|Coral Bay|X|X|Scott Base Ez|X|X|USM|X|X|Rochester|X|X|Krea|X|X|Colombia|X|X".split("|"),WL=[];
for(var i=0;i<_W.length;i+=3){
var la=_W[i+1],lo=_W[i+2];
WL.push({n:_W[i],la:la==='X'?null:+la,lo:lo==='X'?null:+lo});
}

var RXL=[{n:"U01 VLF Grabber",la:51.0,lo:7.5,c:"Germany"},{n:"DF6NM Loran/VLF",la:48.8,lo:11.3,c:"Germany"},{n:"W1VD Grabber",la:42.0,lo:-72.0,c:"USA-MA"},{n:"KL7L VLF",la:61.2,lo:-149.9,c:"USA-Alaska"},{n:"WWLLN Node",la:47.6,lo:-122.3,c:"USA-WA"}];

var RX=[
{id:"vu01m",n:"VLF U01 Main",l:"Germany",u:"https://vlf.u01.de/",t:"iframe",c:"VLF Spectrum",i:"fa-wave-square"},
{id:"vu01i",n:"VLF U01 Spectrum",l:"Germany",u:"https://vlf.u01.de/VLFgrabber/vlf10.jpg",t:"image",c:"VLF Spectrum",i:"fa-wave-square",ax:"vlf"},
{id:"dl0m",n:"Loran DL0AO Main",l:"Germany",u:"https://df6nm.de/LoranView/LoranGrabber_dl0ao.htm",t:"iframe",c:"Loran-C",i:"fa-tower-broadcast"},
{id:"dl0s",n:"Loran DL0AO Spec",l:"Germany",u:"https://vlf.u01.de/LF/LFgrabber/lorvw.jpg",t:"image",c:"Loran-C",i:"fa-tower-broadcast",ax:"loran"},
{id:"w1vm",n:"W1VD Main",l:"USA-MA",u:"https://www.w1vd.com/grabber.html",t:"iframe",c:"VLF Spectrum",i:"fa-wave-square"},
{id:"w1vs",n:"W1VD Spectrum",l:"USA-MA",u:"https://www.w1vd.com/grabupload.jpg",t:"image",c:"VLF Spectrum",i:"fa-wave-square",ax:"vlf"},
{id:"dvfm",n:"DF6NM VLF Main",l:"Germany",u:"https://df6nm.de/vlf/vlfgrabber.htm",t:"iframe",c:"VLF Spectrum",i:"fa-wave-square"},
{id:"dvfs",n:"DF6NM VLF Spec",l:"Germany",u:"https://df6nm.de/vlf/vlfwide.jpg",t:"image",c:"VLF Spectrum",i:"fa-wave-square",ax:"vlf"},
{id:"kl7i",n:"KL7L Alaska",l:"USA-Alaska",u:"https://kl7l.com/wbvlf00000.jpg",t:"image",c:"VLF Spectrum",i:"fa-wave-square",ax:"alaska"},
{id:"wwll",n:"WWLLN Spectra",l:"USA-WA",u:"https://wwlln.net/spectra.html",t:"iframe",c:"Lightning",i:"fa-bolt",ax:"wwlln"}
];

var CHAT_U={notegpt:'https://notegpt.io/ai-chat',zai:'https://chat.z.ai'};

var _CB=[
["DEMETER 2006","https://users.cbk.waw.pl/~ewa/vlf/images/freq.gif","i","https://users.cbk.waw.pl/~ewa/vlf/","gn"],
["DEMETER 2010","https://sas2.elte.hu/urfiz_img/vlfbackgrnd_dmtall.png","m","https://sas2.elte.hu/urfiz_img/vlfbackgrnd_dmtall.png","cy"],
["NASA TECU ESC","https://swe.ssa.esa.int/EOA/IONMON/IONprod/final/latest/ANIMATION_TEC.gif","m","https://swe.ssa.esa.int/EOA/IONMON/IONprod/final/latest/ANIMATION_TEC.gif","am"],
["NASA RMS TECU","https://swe.ssa.esa.int/EOA/IONMON/IONprod/final/latest/ANIMATION_RMS.gif","m","https://swe.ssa.esa.int/EOA/IONMON/IONprod/final/latest/ANIMATION_RMS.gif","or"],
["DLR GNSS VTEC","https://impc.dlr.de/SWE/Total_Electron_Content/TEC_Near_Real-Time/DLR_GNSS_GCG_L4_VTEC-NTCM-SCM_NC_GLOBAL/v2.0.0/latest/DLR_GNSS_GCG_L4_VTEC-NTCM-SCM_NC_GLOBAL_latest_I.png","m","https://impc.dlr.de/products/total-electron-content/near-real-time-tec/near-real-time-tec-maps-global","pr"]
];

var _RL=[
["\u2139 Wiki VLF List","https://en.wikipedia.org/wiki/List_of_VLF_transmitters"],
["Stanford SID","https://solar-center.stanford.edu/SID/vlf-list.html"],
["VLF.it List","http://www.vlf.it/itulist/itulist.htm"],
["VLF.it Trond","http://www.vlf.it/trond2/list.html"],
["VLF.it <10kHz","http://www.vlf.it/trond2/below10.html"],
["VLF.it 10-15","http://www.vlf.it/trond2/10-15khz.html"],
["VLF.it 15-20","http://www.vlf.it/trond2/15-20khz.html"],
["VLF.it 20-25","http://www.vlf.it/trond2/20-25khz.html"],
["VLF.it 25-30","http://www.vlf.it/trond2/25-30khz.html"],
["CBK Waw.pl","https://users.cbk.waw.pl/~ewa/vlf/transmitters.html"],
["\u2139 CHAYKA/RSDN","https://en.wikipedia.org/wiki/CHAYKA"],
["SpectrumWiki","https://www.spectrumwiki.com/wiki/DisplayEntry.aspx?DisplyId=173"],
["SIGIDWiki","https://www.sigidwiki.com/wiki/Category:VLF"],
["ClimateViewer","https://climateviewer.org/history-and-science/atmospheric-sensors-and-emf-sites/maps/extremely-low-frequency-elf-ulf-vlf-transmission-sites/"],
["SID Stations","https://sidstation.loudet.org/stations-list-en.xhtml"],
["SID Data","https://sidstation.loudet.org/data-en.xhtml"],
["AAVSO SID","https://www.aavso.org/sid-monitoring-overview"],
["WWLLN","https://wwlln.net/"],
["NOAA SWPC","https://www.swpc.noaa.gov/"],
["\u2139 Wiki VLF","https://en.wikipedia.org/wiki/Very_low_frequency"],
["4X4XM SID","https://www.qsl.net/4x4xm/HF-Propagation.htm#SID"],
["4X4XM TEC","https://www.qsl.net/4x4xm/FAQ/What-is-Total-Electron-Content.htm"],
["ELTE VLF","https://sas2.elte.hu/urfiz_hullamkiserletek_1EN.html"],
["DLR NRT TEC","https://impc.dlr.de/products/total-electron-content/near-real-time-tec/near-real-time-tec-maps-global"]
];

console.log('[VLF DATA] OK - TX:'+AT.length+' WWLLN:'+WL.length+' (map:'+WL.filter(function(s){return s.la!==null}).length+') RX:'+RX.length+' CBK:'+_CB.length+' REF:'+_RL.length);
