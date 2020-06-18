import React, {Component} from 'react';
import 'typeface-roboto';
import './App.css';
import MapRoute from "./MapRoute";
import Routes from "./Routes";
import Info from "./Info";
import UploadRoute from './UploadRoute';
// import "~@feizheng/react-modal-manager/dist/style.scss";
// import ReactModalManager, { connect } from '../src/main';
// import './assets/style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      selectedRoute: JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"name\":\"LAW 13 (05) Poeldonk - A50\",\"desc\":\"'s Hertogenbosch (en Bossche Broek) - ’s-Hertogenbosch is de enige stad in ons land met een naam die verwijst naar de roem- ruchte historie van de hertogen. Logisch dat ze daar trots op zijn en veel inwoners niets willen weten van de naam Den Bosch. ’s-Hertogenbosch herinnert aan imposante jaren. En die waren er, want de stad was in de veertiende eeuw, op Utrecht na de grootste van het huidige Nederland.\"},\"geometry\":{\"type\":\"LineString\",\"coordinates\":[[5.36794,51.67959,6],[5.3679,51.67967,6],[5.36788,51.6799,6],[5.36784,51.68048,6],[5.36785,51.68055,6],[5.36791,51.68075,6],[5.36793,51.68081,6],[5.36796,51.68089,6],[5.36798,51.68095,6],[5.36799,51.68101,6],[5.36809,51.68099,6],[5.36833,51.68098,6],[5.36839,51.68107,6],[5.3682,51.68109,6],[5.36802,51.68112,6],[5.36805,51.6812,6],[5.36808,51.68128,6],[5.3681,51.68134,6],[5.36812,51.68143,6],[5.36814,51.68151,6],[5.36812,51.6816,6],[5.368,51.68227,6],[5.368,51.68237,6],[5.3679,51.68236,6],[5.3679,51.68269,6],[5.36807,51.68299,6],[5.36839,51.6833,6],[5.36891,51.68373,6],[5.36892,51.68372,6],[5.3693,51.68402,6],[5.36957,51.68423,6],[5.36963,51.68428,6],[5.36984,51.68445,5],[5.37013,51.6847,5],[5.37024,51.68479,4],[5.37031,51.68485,4],[5.37032,51.68486,4],[5.37099,51.68545,4],[5.37126,51.68568,5],[5.37167,51.68605,4],[5.37234,51.68665,4],[5.37302,51.68724,4],[5.37355,51.68771,3],[5.37369,51.68783,3],[5.37374,51.68787,3],[5.37383,51.68796,3],[5.37418,51.68782,3],[5.3745,51.68772,2],[5.37493,51.68759,2],[5.37503,51.68756,2],[5.37536,51.68745,2],[5.37563,51.68736,2],[5.37621,51.68717,2],[5.37647,51.68708,2],[5.37707,51.6869,2],[5.37724,51.68685,2],[5.3776,51.68675,2],[5.37777,51.6867,2],[5.37793,51.68664,2],[5.37799,51.68662,2],[5.37879,51.68635,2],[5.37897,51.68628,2],[5.37947,51.68608,2],[5.37961,51.686,2],[5.37996,51.68585,2],[5.38025,51.68565,2],[5.38039,51.68555,2],[5.38052,51.68544,2],[5.3808,51.68525,2],[5.38091,51.68517,2],[5.38104,51.68508,2],[5.38112,51.68503,2],[5.38145,51.6848,3],[5.38166,51.68464,2],[5.38183,51.68448,3],[5.38212,51.6842,3],[5.38238,51.68395,3],[5.38248,51.68386,3],[5.38327,51.68383,4],[5.38325,51.68372,4],[5.38323,51.68361,4],[5.38328,51.68353,4],[5.38321,51.68321,4],[5.38318,51.68316,4],[5.38313,51.68312,4],[5.38311,51.68303,4],[5.38313,51.68295,3],[5.38315,51.68283,3],[5.38314,51.68279,3],[5.38308,51.68234,3],[5.38303,51.68194,3],[5.38293,51.68116,3],[5.38292,51.68105,3],[5.38282,51.68039,2],[5.3828,51.68016,2],[5.38278,51.67998,2],[5.38273,51.67982,3],[5.38277,51.67982,3],[5.38284,51.67948,3],[5.38285,51.67941,3],[5.38299,51.67937,3],[5.38308,51.67936,3],[5.38388,51.67922,3],[5.38476,51.67906,2],[5.38565,51.67891,2],[5.38606,51.67884,2],[5.38654,51.67876,2],[5.3872,51.67865,2],[5.38743,51.67862,2],[5.38832,51.67847,2],[5.38904,51.67835,2],[5.38921,51.67834,2],[5.39,51.67834,3],[5.38999,51.67823,3],[5.38999,51.67812,3],[5.39001,51.67733,2],[5.39002,51.67674,3],[5.39008,51.67644,4],[5.39034,51.67567,5],[5.39035,51.67557,5],[5.39036,51.67548,5],[5.39034,51.6754,5],[5.39033,51.67534,5],[5.3903,51.67523,5],[5.39015,51.67498,5],[5.38997,51.6748,5],[5.38991,51.67474,5],[5.38928,51.67422,5],[5.38915,51.67411,5],[5.38898,51.67394,4],[5.38887,51.6737,4],[5.38885,51.67348,4],[5.38885,51.67342,5],[5.38888,51.6732,5],[5.38893,51.67305,5],[5.38903,51.67291,4],[5.38927,51.67275,5],[5.38933,51.67271,5],[5.38947,51.67262,5],[5.38964,51.67251,4],[5.39003,51.67226,5],[5.3901,51.67221,5],[5.3906,51.672,5],[5.39087,51.67195,5],[5.39142,51.67185,5],[5.39176,51.67182,4],[5.39225,51.67177,4],[5.3925,51.67175,4],[5.39265,51.67177,3],[5.39281,51.67178,3],[5.39303,51.67183,3],[5.39333,51.67194,3],[5.39351,51.67202,3],[5.39434,51.67238,3],[5.39463,51.67251,3],[5.39477,51.67257,3],[5.39486,51.67251,3],[5.39507,51.67237,3],[5.39512,51.67233,3],[5.39586,51.67182,4],[5.3966,51.6713,4],[5.39734,51.67079,5],[5.39743,51.67072,5],[5.39775,51.67048,5],[5.39788,51.67035,5],[5.39794,51.67016,5],[5.39794,51.67004,5],[5.39765,51.66931,5],[5.39751,51.66897,5],[5.39734,51.66879,5],[5.3971,51.66865,5],[5.39702,51.6686,5],[5.39679,51.6685,5],[5.39672,51.66848,5],[5.39648,51.66838,5],[5.39641,51.66835,5],[5.39627,51.6683,6],[5.39713,51.66802,5],[5.39799,51.66774,4],[5.39884,51.66746,4],[5.40059,51.66702,5],[5.40235,51.66669,5],[5.40413,51.66637,4],[5.40589,51.66603,6],[5.4066,51.66588,6],[5.40689,51.66577,6],[5.40684,51.66565,6],[5.40736,51.66529,6],[5.40736,51.66528,6],[5.4081,51.66477,8],[5.40839,51.66457,8],[5.40847,51.66452,8],[5.40865,51.66435,9],[5.40871,51.66429,9],[5.40875,51.66424,9],[5.40881,51.66421,9],[5.40894,51.66412,9],[5.40925,51.66393,9],[5.40955,51.6637,9],[5.40968,51.66359,10],[5.41001,51.66338,10],[5.40994,51.66332,10],[5.41,51.66328,10],[5.41014,51.6632,8],[5.41063,51.66292,8],[5.41053,51.6629,8],[5.41038,51.66286,8],[5.41031,51.66283,8],[5.4099,51.6626,10],[5.40996,51.66238,10],[5.41051,51.66194,8],[5.41078,51.66167,8],[5.41141,51.66103,6],[5.41159,51.66085,6],[5.41212,51.66047,6],[5.41285,51.65995,6],[5.41358,51.65943,6],[5.41393,51.65918,6],[5.41421,51.65906,6],[5.41437,51.65902,7],[5.41464,51.65897,7],[5.41518,51.65898,7],[5.41526,51.65898,7],[5.41527,51.65898,7],[5.41536,51.65894,7],[5.41522,51.65866,7],[5.41498,51.65754,6],[5.41511,51.65753,6],[5.41509,51.65743,6],[5.41507,51.65729,6],[5.41527,51.65714,6],[5.41535,51.65672,5],[5.41628,51.65646,5],[5.41687,51.65627,5],[5.41802,51.65603,4],[5.41976,51.65557,5],[5.42136,51.65515,4],[5.4215,51.65518,4],[5.42192,51.65576,4],[5.42292,51.65534,5],[5.42457,51.65463,4],[5.42627,51.65403,5],[5.42725,51.6538,5],[5.42803,51.65371,5],[5.42982,51.65346,6],[5.43131,51.65316,8],[5.43158,51.65323,7],[5.43172,51.65327,7],[5.43181,51.65329,8],[5.43191,51.65332,8],[5.43245,51.65345,8],[5.43332,51.65368,8],[5.43347,51.65371,9],[5.43419,51.6539,9],[5.43507,51.65412,9],[5.43522,51.65416,10],[5.4353,51.65418,10],[5.43554,51.65425,10],[5.43586,51.65399,10],[5.43617,51.65376,11],[5.4365,51.65352,10],[5.43659,51.65347,10],[5.43734,51.65297,9],[5.43812,51.65252,9],[5.43894,51.65214,9],[5.4394,51.65193,10],[5.43954,51.6523,9],[5.43986,51.65315,10],[5.43981,51.65316,10],[5.44038,51.65486,13],[5.44055,51.65537,12],[5.44181,51.65548,10],[5.44181,51.65547,10],[5.44216,51.6555,10],[5.44226,51.65551,10],[5.44237,51.65552,10],[5.44247,51.65553,9],[5.44271,51.65555,9],[5.44361,51.65561,9],[5.44387,51.65564,9],[5.44392,51.65567,9],[5.44403,51.65583,9],[5.44417,51.65619,10],[5.44449,51.65703,10],[5.44451,51.65709,10],[5.44453,51.65714,10],[5.44461,51.65737,11],[5.44464,51.65742,10],[5.44469,51.65752,10],[5.44473,51.65761,10],[5.44483,51.65786,9],[5.44501,51.65827,8],[5.44518,51.65869,7],[5.44549,51.65946,7],[5.44551,51.65953,7],[5.44584,51.66037,7],[5.44618,51.6612,7],[5.44621,51.66127,7],[5.44623,51.66133,7],[5.44625,51.66137,7],[5.44652,51.66204,7],[5.44687,51.66287,7],[5.44718,51.66364,7],[5.44721,51.6637,7],[5.44724,51.66378,7],[5.44754,51.66453,9],[5.44788,51.66537,12],[5.4479,51.66542,12],[5.44799,51.66542,12],[5.4481,51.66542,12],[5.44825,51.66543,12],[5.44838,51.66543,12],[5.4485,51.66543,13],[5.44954,51.66544,14],[5.44962,51.66545,14],[5.44981,51.66548,14],[5.45009,51.66547,14],[5.45051,51.66548,14],[5.45074,51.66548,13],[5.45129,51.66551,13],[5.45141,51.66551,13],[5.45217,51.66554,12],[5.45231,51.66553,12],[5.45259,51.66552,12],[5.45284,51.66552,12],[5.45304,51.66552,12],[5.45321,51.66549,12],[5.45347,51.66544,12],[5.45373,51.66541,12],[5.45389,51.66542,12],[5.4541,51.66544,12],[5.4542,51.66545,12],[5.455,51.6655,12],[5.4559,51.66557,12],[5.45617,51.6656,11],[5.45679,51.66564,11],[5.45722,51.66567,11],[5.45696,51.66606,11],[5.45645,51.6668,12],[5.45644,51.66681,12],[5.45733,51.66687,13],[5.45823,51.66693,13],[5.45912,51.66698,13],[5.45913,51.66698,13],[5.45948,51.66701,13],[5.46002,51.66704,13],[5.46076,51.6671,13],[5.46092,51.66711,13],[5.46182,51.66717,13],[5.46196,51.66719,13],[5.46204,51.66719,13],[5.46212,51.6672,13],[5.46272,51.66724,13],[5.46361,51.66731,13],[5.4643,51.66735,13],[5.46451,51.66736,13],[5.46541,51.66743,13],[5.46631,51.66749,12],[5.46661,51.66751,12],[5.46721,51.66755,12],[5.4681,51.66761,12],[5.469,51.66768,12],[5.46924,51.66769,12],[5.4699,51.66774,12],[5.47033,51.66777,12],[5.4708,51.6678,12],[5.4717,51.66786,12],[5.47209,51.66789,13],[5.47219,51.6674,13],[5.4723,51.6668,13],[5.47259,51.66682,12],[5.47341,51.66688,12],[5.47349,51.66689,11],[5.47349,51.66725,12],[5.47365,51.66766,12],[5.47367,51.66773,12],[5.47368,51.66775,12],[5.4737,51.66779,13],[5.47377,51.66802,13],[5.47402,51.66859,12],[5.4742,51.66902,12],[5.47425,51.66912,11],[5.47428,51.66917,11],[5.4743,51.66921,11],[5.47438,51.66941,11],[5.47455,51.66977,9],[5.47459,51.66987,9],[5.47463,51.66997,9],[5.47466,51.67003,9],[5.47475,51.67005,9],[5.47488,51.67007,9],[5.47549,51.67019,9],[5.47576,51.6702,9],[5.476,51.67021,10],[5.47666,51.67023,10],[5.47756,51.67026,11],[5.47846,51.6703,13],[5.47856,51.6703,13],[5.47936,51.67033,14],[5.48026,51.67036,13],[5.48116,51.6704,12],[5.48206,51.67043,13],[5.4824,51.67044,13],[5.48296,51.67046,13],[5.48357,51.67049,13],[5.4837,51.67049,13],[5.48386,51.6705,13],[5.48476,51.67053,13],[5.48494,51.67054,12],[5.48512,51.67053,12],[5.48542,51.67048,11],[5.48564,51.67043,11],[5.48652,51.67022,9],[5.48688,51.67014,9],[5.4874,51.67002,8],[5.48753,51.66999,8],[5.48763,51.66997,8],[5.48827,51.66981,8],[5.48833,51.6698,8],[5.48842,51.66978,8],[5.48887,51.66968,8],[5.48915,51.66963,8],[5.49004,51.66947,8],[5.49059,51.66939,8],[5.49089,51.66937,8],[5.49094,51.66937,8],[5.49149,51.66938,9],[5.49169,51.66939,9],[5.49183,51.66939,8],[5.49239,51.66944,8],[5.49255,51.66944,8],[5.49273,51.66943,8],[5.4929,51.66941,8],[5.49319,51.66933,8],[5.49331,51.66926,8],[5.49356,51.66911,7],[5.49362,51.66907,8],[5.49371,51.66902,8],[5.49432,51.66863,8],[5.49453,51.66849,8],[5.4951,51.66819,8],[5.4959,51.66776,9],[5.49661,51.66738,10],[5.4967,51.66735,10],[5.49723,51.66713,10],[5.49729,51.66711,10],[5.49724,51.66707,10],[5.4971,51.66695,10],[5.49702,51.66688,11],[5.49697,51.66684,11],[5.49705,51.66681,11],[5.49746,51.66631,11],[5.49767,51.66606,12],[5.49793,51.66574,12],[5.49796,51.66571,13],[5.49804,51.66561,12],[5.49857,51.66496,12],[5.4986,51.66491,12],[5.49914,51.66426,10],[5.49917,51.66421,10],[5.49957,51.66369,9],[5.49971,51.6635,8],[5.50024,51.66277,9],[5.5004,51.66254,9],[5.5008,51.66206,9],[5.50123,51.66154,10],[5.50129,51.66152,10],[5.50132,51.66146,10],[5.50137,51.66138,10],[5.50164,51.66124,9],[5.50171,51.66121,9],[5.50178,51.66118,10],[5.50218,51.66099,9],[5.50263,51.66079,9],[5.50301,51.66064,10],[5.50347,51.66045,9],[5.50385,51.66032,9],[5.50443,51.66011,8],[5.5047,51.66003,9],[5.50528,51.65987,9],[5.50545,51.65981,10],[5.50557,51.65983,10],[5.50569,51.65983,9],[5.50646,51.65971,10],[5.50674,51.65967,10],[5.50735,51.65963,11],[5.50789,51.65959,11],[5.50825,51.65965,12],[5.50838,51.65967,12],[5.50875,51.65976,12],[5.50914,51.65977,12],[5.50951,51.65978,12],[5.50961,51.65978,13],[5.51004,51.65979,12],[5.51014,51.65979,12],[5.51094,51.65982,12],[5.51183,51.6599,12],[5.5126,51.65996,12],[5.51273,51.65998,12],[5.51312,51.66006,12],[5.51328,51.66007,12],[5.51335,51.66008,12],[5.51335,51.66014,12],[5.51336,51.66079,14],[5.51336,51.66101,14],[5.51336,51.66106,14],[5.51345,51.66103,14],[5.51359,51.66097,14],[5.51443,51.66065,13],[5.51454,51.66061,13],[5.51489,51.66047,13],[5.5153,51.66044,14],[5.5162,51.66039,15],[5.5164,51.66037,15],[5.51671,51.66031,15],[5.51686,51.6603,16],[5.51709,51.66028,16],[5.51758,51.66025,16],[5.51799,51.66022,17],[5.51887,51.66017,16],[5.51889,51.66016,16],[5.51906,51.66015,16],[5.51978,51.6601,15],[5.52011,51.66008,14],[5.52068,51.66006,14],[5.52101,51.66006,12],[5.5211,51.66005,12],[5.52129,51.66004,12],[5.52158,51.66003,12],[5.52168,51.66003,12],[5.52248,51.65997,10],[5.52338,51.6599,9],[5.52376,51.65987,8],[5.52427,51.65982,8],[5.52448,51.6598,9],[5.52456,51.65979,9],[5.52479,51.66036,8],[5.52484,51.66049,8],[5.52498,51.66071,8],[5.5251,51.66083,9],[5.52536,51.66103,9],[5.52607,51.66158,9],[5.5266,51.66199,9],[5.52665,51.66203,9],[5.52682,51.66202,9],[5.52772,51.66197,9],[5.52861,51.66191,8],[5.52949,51.66185,8],[5.52951,51.66185,8],[5.53041,51.66179,8],[5.53131,51.66173,8],[5.53174,51.66171,8],[5.53221,51.66168,9],[5.53285,51.66164,8],[5.53297,51.66166,8],[5.53307,51.66167,8],[5.5331,51.66166,8],[5.53328,51.66161,8],[5.53399,51.66156,8],[5.53457,51.66152,9],[5.53489,51.66153,8],[5.53579,51.66157,9],[5.53628,51.6616,9],[5.53641,51.6616,9],[5.53661,51.66161,9],[5.53669,51.66161,9],[5.53759,51.66165,8],[5.53849,51.66168,8],[5.53939,51.66172,8],[5.54029,51.66175,8],[5.54038,51.66176,8],[5.54119,51.66178,9],[5.54209,51.66181,9],[5.54299,51.66184,9],[5.54389,51.66187,10],[5.5442,51.66182,10],[5.54438,51.66182,10],[5.54462,51.66188,10],[5.5446,51.66195,11],[5.54456,51.66201,11],[5.54405,51.66276,11],[5.54359,51.66343,12],[5.54354,51.6635,12],[5.54352,51.66351,12],[5.54363,51.66351,12],[5.5444,51.66353,12],[5.5453,51.66356,12],[5.5462,51.66358,12],[5.5471,51.6636,11],[5.54752,51.66361,11],[5.548,51.66362,11],[5.5489,51.66364,12],[5.5498,51.66367,13],[5.54989,51.66367,13],[5.5507,51.66369,13],[5.5516,51.66372,14],[5.55215,51.66374,14],[5.55232,51.66343,13],[5.55276,51.66265,12],[5.55286,51.66246,12],[5.55289,51.66241,12],[5.55352,51.66246,11],[5.55362,51.66246,11],[5.55374,51.66245,11],[5.55385,51.66244,11],[5.55403,51.66243,11],[5.5544,51.66253,11],[5.55459,51.66259,11],[5.55529,51.66268,11],[5.55618,51.66279,12],[5.55707,51.6629,12],[5.55797,51.66301,11],[5.55837,51.66307,11],[5.55886,51.66313,11],[5.55975,51.66324,10],[5.56065,51.66336,11],[5.56122,51.66343,11],[5.56133,51.66344,11],[5.56133,51.66334,11],[5.56143,51.66331,11],[5.56219,51.66316,12],[5.5623,51.66311,12],[5.5624,51.66302,12],[5.56313,51.66284,12],[5.56316,51.6629,12],[5.56321,51.66295,12],[5.56326,51.66299,12],[5.56333,51.66301,12],[5.56341,51.66303,12],[5.56351,51.66309,13],[5.56358,51.66314,13],[5.56372,51.66317,13],[5.56383,51.66325,13],[5.56395,51.66328,13],[5.56416,51.66328,13],[5.56428,51.66329,14],[5.56444,51.66332,14],[5.5646,51.66339,14],[5.56474,51.66348,14],[5.5648,51.6635,14],[5.5649,51.66354,14],[5.56524,51.66366,14],[5.56541,51.66374,14],[5.56551,51.66382,14],[5.56561,51.66388,14],[5.56578,51.664,14],[5.56588,51.66411,14],[5.56592,51.66418,14],[5.56599,51.66426,15],[5.56616,51.66438,15],[5.56628,51.66447,13],[5.56637,51.66459,13],[5.56641,51.66472,13],[5.56648,51.66493,13],[5.56647,51.66501,12],[5.56656,51.6651,12],[5.56669,51.66522,12],[5.56692,51.66552,11],[5.56703,51.66561,11],[5.56713,51.66561,11],[5.56739,51.66547,12],[5.56824,51.66521,14],[5.56894,51.6649,15],[5.56917,51.66499,15],[5.56986,51.66537,15],[5.57147,51.66616,13],[5.57264,51.66654,15],[5.57313,51.66683,16],[5.57324,51.66717,16],[5.57324,51.66778,16],[5.57369,51.66847,16],[5.57408,51.66899,16],[5.57425,51.66915,16],[5.57477,51.66948,17],[5.57504,51.6696,17],[5.57525,51.66969,17],[5.57566,51.67001,18],[5.5759,51.67104,20],[5.57601,51.67152,20],[5.57614,51.67163,20],[5.57617,51.67179,20],[5.57572,51.67264,18],[5.5757,51.67267,18],[5.57613,51.67311,19],[5.57616,51.67323,19],[5.57577,51.67398,18],[5.57577,51.67416,18],[5.57576,51.67485,17],[5.57575,51.67499,17],[5.57574,51.67506,16],[5.57573,51.67507,16],[5.57581,51.67516,16],[5.57584,51.67528,14],[5.57586,51.6754,14],[5.57583,51.67572,14],[5.57576,51.67591,14],[5.57562,51.67629,12],[5.57559,51.67635,12],[5.57544,51.67676,11],[5.57515,51.67751,11],[5.57511,51.6776,11],[5.57497,51.67786,10],[5.57472,51.67823,11],[5.57467,51.67837,10],[5.57458,51.67864,10],[5.57456,51.6787,10],[5.57454,51.67876,10],[5.57436,51.67921,10],[5.57402,51.68005,10],[5.57375,51.68073,10],[5.57368,51.68088,10],[5.57335,51.68172,10],[5.57301,51.68256,10],[5.57292,51.68279,10],[5.5729,51.68284,10],[5.57278,51.68312,11],[5.57264,51.68337,11],[5.57261,51.68342,11],[5.57258,51.68347,11],[5.57269,51.6835,11],[5.57335,51.68364,11],[5.57422,51.68383,11],[5.57511,51.68402,12],[5.57566,51.68414,12],[5.57599,51.68416,12],[5.57689,51.68424,13],[5.57712,51.68426,13],[5.57725,51.68429,13],[5.5774,51.68431,13],[5.57778,51.68438,13],[5.57794,51.68441,13],[5.57827,51.68447,13],[5.57855,51.68453,14],[5.57866,51.68456,14],[5.57883,51.6846,14],[5.57953,51.68479,15],[5.57988,51.68489,15],[5.57993,51.68494,15],[5.58007,51.68498,16],[5.58038,51.68503,17],[5.58058,51.68507,17],[5.58086,51.6851,17],[5.58121,51.68512,18],[5.58125,51.68509,18],[5.58126,51.68508,18],[5.58146,51.68509,18],[5.58178,51.6851,18],[5.58272,51.68509,19],[5.58271,51.68516,19],[5.58283,51.68517,19],[5.58296,51.68517,19],[5.58306,51.68516,19],[5.58317,51.68513,19],[5.58323,51.68511,19],[5.58349,51.68499,19],[5.58356,51.68498,19],[5.58382,51.68497,20],[5.58384,51.68497,20],[5.58416,51.68494,19],[5.5843,51.68492,19],[5.58439,51.68491,19],[5.58471,51.68483,19],[5.58472,51.68483,19],[5.58522,51.68469,19],[5.58547,51.6846,19],[5.58556,51.68456,19],[5.58578,51.68447,19],[5.58605,51.68438,20],[5.58629,51.68432,20],[5.58643,51.68429,20],[5.58653,51.68427,20],[5.58678,51.68424,20],[5.58709,51.68422,20],[5.58732,51.68422,20],[5.58744,51.68422,20],[5.58775,51.68426,21],[5.58802,51.6843,21],[5.5882,51.68435,21],[5.58821,51.68433,21],[5.58886,51.68454,20]]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"dungense brug\",\"desc\":\"Bushalte dungense brug\\nVoor meer informatie en haltetijden verwijzen wij u naar <a href= 'http://www.9292ov.nl' target='_blank'>www.9292ov.nl</a>\",\"type\":\"Bushalte\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.367553,51.678733,5]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.366796,51.680513,5]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"90715\",\"desc\":\"ANWB Wegwijzer Nr 90715\",\"type\":\"Wegwijzer\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.368442,51.681653,6]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"hasseltsedijk\",\"desc\":\"Bushalte hasseltsedijk\\nVoor meer informatie en haltetijden verwijzen wij u naar <a href= 'http://www.9292ov.nl' target='_blank'>www.9292ov.nl</a>\",\"type\":\"Bushalte\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.375761,51.690054,5]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.377009,51.689093,3]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"De Aa\",\"desc\":\"Aa betekent eigenlijk zoiets als water, en er zijn dus meer rivieren met deze naam. De Brabantse Aa is duizenden jaren oud, en er zijn op meerdere plaatsen langs de loop ook resten van nederzettingen gevonden, onder meer van de Romeinen. Oorspronkelijk was de Aa een sterk meanderende rivier, maar vooral vanaf de jaren dertig van de vorige eeuw is hij bijna overal recht getrokken en soms ook verlegd. Destijds met honderden mannen die in het kader van werkverschaffingsprojecten aan de slag moesten, gewapend met alleen schop en kruiwagen. De Aa komt in ‘s-Hertogenbosch samen met de Zuid-Willemsvaart en de Dommel in de Dieze, die uitmondt op de Maas.\",\"type\":\"Landschapselement\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.377517,51.688101,2]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.391348,51.68213,7]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Kasteel Seldensate\",\"desc\":\"Landhuizen en kastelen waren voor de gegoede stedelingen eeuwenlang een plek om de stad, met zijn ziekten en rioolstank, te ontvluchten. Tientallen voorbeelden vind je hier in Brabant, onder meer langs de Aa. Zoals ook Kasteel Seldensate, gesloopt in 1961 omdat het door oorlogsschade, gebrek aan onderhoud en het veranderde waterpeil van de rivier een bouwval was geworden en langzaam in dreigde te storten. Van het kasteel zijn alleen de fundamenten nog te zien. De duiventoren en het poortgebouw zijn in de jaren zeventig gerestaureerd en liggen midden in een mooi wandelpark, dat de tijden van de zeventiende eeuw in herinnering moet roepen.\",\"type\":\"Monument\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.405954,51.664576,7]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Kasteel Heeswijk\",\"desc\":\"Een indrukwekkend kasteel, gebouwd op een rond 1080 versterkte burcht, dat rond de eeuwwisseling ingrijpend is gerestaureerd. Je kunt er rondgeleid worden, en op het landgoed trainingen volgen en (trouw)feesten en partijen geven. Het kasteel speelde in de historie meerdere keren een belangrijke rol. Zo zat Prins Maurits er van 1601 tot 1603, om de belegering van ’s-Hertogenbosch voor te bereiden, evenals zijn halfbroer Frederik-Hendrik in 1629. Ook Zonnekoning Lodewijk XIV en Napoleons generaal Pichegru namen er hun intrek, ook omdat het zo lekker dichtbij het belangrijke ’s-Hertogenbosch ligt. Vooral in de negentiende eeuw kreeg het kasteel zijn huidige uiterlijk.\",\"type\":\"Monument\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.440387,51.657267,9]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.438361,51.656059,12]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"kasteel heeswijk\",\"desc\":\"Bushalte kasteel heeswijk\\nVoor meer informatie en haltetijden verwijzen wij u naar <a href= 'http://www.9292ov.nl' target='_blank'>www.9292ov.nl</a>\",\"type\":\"Bushalte\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.443165,51.657696,10]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Populieren\",\"desc\":\"Als er een boom karakteristiek is voor Brabant, dan is het de populier wel. In lange rijen kom je ze op veel plaatsen tegen, vooral in de Meierij, de grote regio ten zuidoosten van ’s-Hertogenbosch. De snelgroeiende bomen werden vooral vanaf de achttiende eeuw aangeplant langs de gemeenschappelijke gronden, zo was vastgelegd in de uit de middeleeuwen daterende voorpootrechten. Van de populier werden klompen gemaakt. De Meierij wordt door veel mensen gezien als het meest Brabantse land van heel de provincie. Het kleinschalige landschap, tussen ’s-Hertogenbosch, Eindhoven en Oisterwijk, wordt het Groene Woud genoemd en heeft de titel Nationaal Landschap gekregen.\",\"type\":\"Landschapselement\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.461202,51.666198,13]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Heeswijk en Dinther\",\"desc\":\"Een naaldbos, in de negentiende eeuw aangeplant op stuifzand en heide, met hier en daar nog wat heiderestanten, dat zijn de Heeswijkse bossen. Het is een aardig, maar niet echt bijzonder wandelgebied, dat deel uitmaakt van een belangrijke ecologische verbindingszone. Verderop liggen de Heische Wallen, omstreeks 1700 opgeworpen om het toenemende stuifzand van de Dintersche Heide dat destijds de akkers bedreigde, tot tilstand te brengen. Aanvankelijk werden de wallen met eikenhakhout beplant, maar later kwam er naaldhout op. In Heeswijk staat de bekende Abdij van Berne, van de orde van de Norbertijnen, de oudste kloostergemeenschap van ons land.\",\"type\":\"Landschapselement\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.461436,51.668291,13]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.474755,51.666658,9]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.481756,51.66972,13]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"67820-1\",\"desc\":\"ANWB Wegwijzer Nr 67820-1\",\"type\":\"Wegwijzer\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.501646,51.661248,9]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Bedafse Bergen\",\"desc\":\"Ga je in Uden in het weekeinde erop uit, dan ga je vaak naar de Bedafse Bergen. Het is dan ook een bijzonder wandelgebied, deze eeuwenoude zandverstuiving, ontstaan door het al te enthousiast plaggen van boeren die vanaf de twaalfde eeuw hier hun vee lieten grazen. Het zand rukte op, en eiken houtwallen moesten voorkomen dat de akkers onderstoven. Die houtwallen werden door de wind met de jaren steeds hoger, soms wel tot meer dan dertien meter hoog, waardoor van de oude eikenbomen soms alleen de kruin boven de zandduinen uitsteekt. Over de hei loopt het oude karrenspoor richting ‘s-Hertogenbosch.\",\"type\":\"Landschapselement\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.571265,51.664603,15]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Café - Restaurant\",\"desc\":\"Café - Restaurant\",\"type\":\"Eet en drinkgelegenheid\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.576215,51.667289,13]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"Peelrandbreuk\",\"desc\":\"Platen in de aarde die uiterst langzaam over elkaar schuiven vind je bijna nergens in ons land, maar wel ten westen van Uden. De Peelrandbreuk is erdoor ontstaan. Vooral tussen de buurtschappen Bedaf en Loo, zoals bij het St Annabosje, kun je getuige zijn van wijst, een zeldzaam verschijnsel dat je op weinig plaatsen ter wereld vindt. Het gaat om grondwater, dat door de dikke, waterdichte ijzerhoudende laag (oer) bij deze breuk, over een relatief groot oppervlak als kwel naar boven wordt gedrukt. Opvallend is dat de vijf meter lager gelegen gebieden droger zijn. Het rode, ijzerhoudende water zorgt voor zeldzame planten als moerasviooltje en klimopwaterranonkel.\",\"type\":\"Landschapselement\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.578108,51.672963,20]}},{\"type\":\"Feature\",\"properties\":{\"name\":\"N7\",\"desc\":\"ANWB paddenstoel Nr N7\",\"type\":\"RouteInfo\"},\"geometry\":{\"type\":\"Point\",\"coordinates\":[5.584681,51.684844,19]}}]}"),
    //   const: ctx = require.context('./modals/', true, /\.js$/);
    // return (
    //     <div className="app-container">
    //       <ReactModalManager context={ctx}>
    //         <h2 style={{ marginBottom: 20 }}>My Modals App</h2>
    //         <center>
    //           <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
    //         </center>
    //         <Button />
    //       </ReactModalManager>
    //     </div>)
    }
  }

  handleInfoChange(msg){
    this.setState({msg:msg});
  }
  handleUploadInfo(msg){
    this.setState({msg:msg, refresh:true});
  }

  handleRouteSelect(route){
    this.setState({selectedRoute:route});
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    };
    return (
      <div style={style}>
        <Info show={true} msg={this.state.msg}  />
        <MapRoute onMessage={this.handleInfoChange.bind(this)} geojson={this.state.selectedRoute}/>
        <UploadRoute onUpdated={this.handleUploadInfo.bind(this)}/>
        <Routes refresh={this.state.refresh} onRouteSelect={this.handleRouteSelect.bind(this)}/>
      </div>
    );
  }
}

export default App;


