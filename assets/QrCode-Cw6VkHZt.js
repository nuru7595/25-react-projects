import{a as ue,g as pe,r as W,j as E}from"./index-B1yfZXg2.js";var P={},N={exports:{}},S,X;function ce(){if(X)return S;X=1;var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return S=v,S}var I,j;function me(){if(j)return I;j=1;var v=ce();function h(){}function a(){}return a.resetWarningCache=h,I=function(){function l(o,n,t,e,u,i){if(i!==v){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}l.isRequired=l;function f(){return l}var r={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:f,element:l,elementType:l,instanceOf:f,node:l,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:a,resetWarningCache:h};return r.PropTypes=r,r},I}var Y;function se(){return Y||(Y=1,N.exports=me()()),N.exports}var k,$;function le(){return $||($=1,k={L:1,M:0,Q:3,H:2}),k}var Q,J;function fe(){return J||(J=1,Q={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),Q}var H,V;function Te(){if(V)return H;V=1;var v=fe();function h(a){this.mode=v.MODE_8BIT_BYTE,this.data=a}return h.prototype={getLength:function(a){return this.data.length},write:function(a){for(var l=0;l<this.data.length;l++)a.put(this.data.charCodeAt(l),8)}},H=h,H}var q,Z;function Ee(){if(Z)return q;Z=1;var v=le();function h(a,l){this.totalCount=a,this.dataCount=l}return h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(a,l){var f=h.getRsBlockTable(a,l);if(f==null)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+l);for(var r=f.length/3,o=new Array,n=0;n<r;n++)for(var t=f[n*3+0],e=f[n*3+1],u=f[n*3+2],i=0;i<t;i++)o.push(new h(e,u));return o},h.getRsBlockTable=function(a,l){switch(l){case v.L:return h.RS_BLOCK_TABLE[(a-1)*4+0];case v.M:return h.RS_BLOCK_TABLE[(a-1)*4+1];case v.Q:return h.RS_BLOCK_TABLE[(a-1)*4+2];case v.H:return h.RS_BLOCK_TABLE[(a-1)*4+3];default:return}},q=h,q}var z,ee;function Re(){if(ee)return z;ee=1;function v(){this.buffer=new Array,this.length=0}return v.prototype={get:function(h){var a=Math.floor(h/8);return(this.buffer[a]>>>7-h%8&1)==1},put:function(h,a){for(var l=0;l<a;l++)this.putBit((h>>>a-l-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(h){var a=Math.floor(this.length/8);this.buffer.length<=a&&this.buffer.push(0),h&&(this.buffer[a]|=128>>>this.length%8),this.length++}},z=v,z}var F,te;function he(){if(te)return F;te=1;for(var v={glog:function(a){if(a<1)throw new Error("glog("+a+")");return v.LOG_TABLE[a]},gexp:function(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return v.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)v.EXP_TABLE[h]=1<<h;for(var h=8;h<256;h++)v.EXP_TABLE[h]=v.EXP_TABLE[h-4]^v.EXP_TABLE[h-5]^v.EXP_TABLE[h-6]^v.EXP_TABLE[h-8];for(var h=0;h<255;h++)v.LOG_TABLE[v.EXP_TABLE[h]]=h;return F=v,F}var G,re;function ve(){if(re)return G;re=1;var v=he();function h(a,l){if(a.length==null)throw new Error(a.length+"/"+l);for(var f=0;f<a.length&&a[f]==0;)f++;this.num=new Array(a.length-f+l);for(var r=0;r<a.length-f;r++)this.num[r]=a[r+f]}return h.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var l=new Array(this.getLength()+a.getLength()-1),f=0;f<this.getLength();f++)for(var r=0;r<a.getLength();r++)l[f+r]^=v.gexp(v.glog(this.get(f))+v.glog(a.get(r)));return new h(l,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var l=v.glog(this.get(0))-v.glog(a.get(0)),f=new Array(this.getLength()),r=0;r<this.getLength();r++)f[r]=this.get(r);for(var r=0;r<a.getLength();r++)f[r]^=v.gexp(v.glog(a.get(r))+l);return new h(f,0).mod(a)}},G=h,G}var U,ne;function Be(){if(ne)return U;ne=1;var v=fe(),h=ve(),a=he(),l={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(r){for(var o=r<<10;f.getBCHDigit(o)-f.getBCHDigit(f.G15)>=0;)o^=f.G15<<f.getBCHDigit(o)-f.getBCHDigit(f.G15);return(r<<10|o)^f.G15_MASK},getBCHTypeNumber:function(r){for(var o=r<<12;f.getBCHDigit(o)-f.getBCHDigit(f.G18)>=0;)o^=f.G18<<f.getBCHDigit(o)-f.getBCHDigit(f.G18);return r<<12|o},getBCHDigit:function(r){for(var o=0;r!=0;)o++,r>>>=1;return o},getPatternPosition:function(r){return f.PATTERN_POSITION_TABLE[r-1]},getMask:function(r,o,n){switch(r){case l.PATTERN000:return(o+n)%2==0;case l.PATTERN001:return o%2==0;case l.PATTERN010:return n%3==0;case l.PATTERN011:return(o+n)%3==0;case l.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2==0;case l.PATTERN101:return o*n%2+o*n%3==0;case l.PATTERN110:return(o*n%2+o*n%3)%2==0;case l.PATTERN111:return(o*n%3+(o+n)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}},getErrorCorrectPolynomial:function(r){for(var o=new h([1],0),n=0;n<r;n++)o=o.multiply(new h([1,a.gexp(n)],0));return o},getLengthInBits:function(r,o){if(1<=o&&o<10)switch(r){case v.MODE_NUMBER:return 10;case v.MODE_ALPHA_NUM:return 9;case v.MODE_8BIT_BYTE:return 8;case v.MODE_KANJI:return 8;default:throw new Error("mode:"+r)}else if(o<27)switch(r){case v.MODE_NUMBER:return 12;case v.MODE_ALPHA_NUM:return 11;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 10;default:throw new Error("mode:"+r)}else if(o<41)switch(r){case v.MODE_NUMBER:return 14;case v.MODE_ALPHA_NUM:return 13;case v.MODE_8BIT_BYTE:return 16;case v.MODE_KANJI:return 12;default:throw new Error("mode:"+r)}else throw new Error("type:"+o)},getLostPoint:function(r){for(var o=r.getModuleCount(),n=0,t=0;t<o;t++)for(var e=0;e<o;e++){for(var u=0,i=r.isDark(t,e),s=-1;s<=1;s++)if(!(t+s<0||o<=t+s))for(var d=-1;d<=1;d++)e+d<0||o<=e+d||s==0&&d==0||i==r.isDark(t+s,e+d)&&u++;u>5&&(n+=3+u-5)}for(var t=0;t<o-1;t++)for(var e=0;e<o-1;e++){var g=0;r.isDark(t,e)&&g++,r.isDark(t+1,e)&&g++,r.isDark(t,e+1)&&g++,r.isDark(t+1,e+1)&&g++,(g==0||g==4)&&(n+=3)}for(var t=0;t<o;t++)for(var e=0;e<o-6;e++)r.isDark(t,e)&&!r.isDark(t,e+1)&&r.isDark(t,e+2)&&r.isDark(t,e+3)&&r.isDark(t,e+4)&&!r.isDark(t,e+5)&&r.isDark(t,e+6)&&(n+=40);for(var e=0;e<o;e++)for(var t=0;t<o-6;t++)r.isDark(t,e)&&!r.isDark(t+1,e)&&r.isDark(t+2,e)&&r.isDark(t+3,e)&&r.isDark(t+4,e)&&!r.isDark(t+5,e)&&r.isDark(t+6,e)&&(n+=40);for(var p=0,e=0;e<o;e++)for(var t=0;t<o;t++)r.isDark(t,e)&&p++;var m=Math.abs(100*p/o/o-50)/5;return n+=m*10,n}};return U=f,U}var K,ae;function Ce(){if(ae)return K;ae=1;var v=Te(),h=Ee(),a=Re(),l=Be(),f=ve();function r(n,t){this.typeNumber=n,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var o=r.prototype;return o.addData=function(n){var t=new v(n);this.dataList.push(t),this.dataCache=null},o.isDark=function(n,t){if(n<0||this.moduleCount<=n||t<0||this.moduleCount<=t)throw new Error(n+","+t);return this.modules[n][t]},o.getModuleCount=function(){return this.moduleCount},o.make=function(){if(this.typeNumber<1){var n=1;for(n=1;n<40;n++){for(var t=h.getRSBlocks(n,this.errorCorrectLevel),e=new a,u=0,i=0;i<t.length;i++)u+=t[i].dataCount;for(var i=0;i<this.dataList.length;i++){var s=this.dataList[i];e.put(s.mode,4),e.put(s.getLength(),l.getLengthInBits(s.mode,n)),s.write(e)}if(e.getLengthInBits()<=u*8)break}this.typeNumber=n}this.makeImpl(!1,this.getBestMaskPattern())},o.makeImpl=function(n,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++){this.modules[e]=new Array(this.moduleCount);for(var u=0;u<this.moduleCount;u++)this.modules[e][u]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(n,t),this.typeNumber>=7&&this.setupTypeNumber(n),this.dataCache==null&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},o.setupPositionProbePattern=function(n,t){for(var e=-1;e<=7;e++)if(!(n+e<=-1||this.moduleCount<=n+e))for(var u=-1;u<=7;u++)t+u<=-1||this.moduleCount<=t+u||(0<=e&&e<=6&&(u==0||u==6)||0<=u&&u<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=u&&u<=4?this.modules[n+e][t+u]=!0:this.modules[n+e][t+u]=!1)},o.getBestMaskPattern=function(){for(var n=0,t=0,e=0;e<8;e++){this.makeImpl(!0,e);var u=l.getLostPoint(this);(e==0||n>u)&&(n=u,t=e)}return t},o.createMovieClip=function(n,t,e){var u=n.createEmptyMovieClip(t,e),i=1;this.make();for(var s=0;s<this.modules.length;s++)for(var d=s*i,g=0;g<this.modules[s].length;g++){var p=g*i,m=this.modules[s][g];m&&(u.beginFill(0,100),u.moveTo(p,d),u.lineTo(p+i,d),u.lineTo(p+i,d+i),u.lineTo(p,d+i),u.endFill())}return u},o.setupTimingPattern=function(){for(var n=8;n<this.moduleCount-8;n++)this.modules[n][6]==null&&(this.modules[n][6]=n%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)},o.setupPositionAdjustPattern=function(){for(var n=l.getPatternPosition(this.typeNumber),t=0;t<n.length;t++)for(var e=0;e<n.length;e++){var u=n[t],i=n[e];if(this.modules[u][i]==null)for(var s=-2;s<=2;s++)for(var d=-2;d<=2;d++)s==-2||s==2||d==-2||d==2||s==0&&d==0?this.modules[u+s][i+d]=!0:this.modules[u+s][i+d]=!1}},o.setupTypeNumber=function(n){for(var t=l.getBCHTypeNumber(this.typeNumber),e=0;e<18;e++){var u=!n&&(t>>e&1)==1;this.modules[Math.floor(e/3)][e%3+this.moduleCount-8-3]=u}for(var e=0;e<18;e++){var u=!n&&(t>>e&1)==1;this.modules[e%3+this.moduleCount-8-3][Math.floor(e/3)]=u}},o.setupTypeInfo=function(n,t){for(var e=this.errorCorrectLevel<<3|t,u=l.getBCHTypeInfo(e),i=0;i<15;i++){var s=!n&&(u>>i&1)==1;i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s}for(var i=0;i<15;i++){var s=!n&&(u>>i&1)==1;i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s}this.modules[this.moduleCount-8][8]=!n},o.mapData=function(n,t){for(var e=-1,u=this.moduleCount-1,i=7,s=0,d=this.moduleCount-1;d>0;d-=2)for(d==6&&d--;;){for(var g=0;g<2;g++)if(this.modules[u][d-g]==null){var p=!1;s<n.length&&(p=(n[s]>>>i&1)==1);var m=l.getMask(t,u,d-g);m&&(p=!p),this.modules[u][d-g]=p,i--,i==-1&&(s++,i=7)}if(u+=e,u<0||this.moduleCount<=u){u-=e,e=-e;break}}},r.PAD0=236,r.PAD1=17,r.createData=function(n,t,e){for(var u=h.getRSBlocks(n,t),i=new a,s=0;s<e.length;s++){var d=e[s];i.put(d.mode,4),i.put(d.getLength(),l.getLengthInBits(d.mode,n)),d.write(i)}for(var g=0,s=0;s<u.length;s++)g+=u[s].dataCount;if(i.getLengthInBits()>g*8)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+g*8+")");for(i.getLengthInBits()+4<=g*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=g*8||(i.put(r.PAD0,8),i.getLengthInBits()>=g*8));)i.put(r.PAD1,8);return r.createBytes(i,u)},r.createBytes=function(n,t){for(var e=0,u=0,i=0,s=new Array(t.length),d=new Array(t.length),g=0;g<t.length;g++){var p=t[g].dataCount,m=t[g].totalCount-p;u=Math.max(u,p),i=Math.max(i,m),s[g]=new Array(p);for(var c=0;c<s[g].length;c++)s[g][c]=255&n.buffer[c+e];e+=p;var T=l.getErrorCorrectPolynomial(m),R=new f(s[g],T.getLength()-1),B=R.mod(T);d[g]=new Array(T.getLength()-1);for(var c=0;c<d[g].length;c++){var y=c+B.getLength()-d[g].length;d[g][c]=y>=0?B.get(y):0}}for(var _=0,c=0;c<t.length;c++)_+=t[c].totalCount;for(var C=new Array(_),L=0,c=0;c<u;c++)for(var g=0;g<t.length;g++)c<s[g].length&&(C[L++]=s[g][c]);for(var c=0;c<i;c++)for(var g=0;g<t.length;g++)c<d[g].length&&(C[L++]=d[g][c]);return C},K=r,K}var w={},ie;function Pe(){if(ie)return w;ie=1,Object.defineProperty(w,"__esModule",{value:!0});var v=Object.assign||function(e){for(var u=1;u<arguments.length;u++){var i=arguments[u];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},h=se(),a=r(h),l=ue(),f=r(l);function r(e){return e&&e.__esModule?e:{default:e}}function o(e,u){var i={};for(var s in e)u.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=e[s]);return i}var n={bgColor:a.default.oneOfType([a.default.object,a.default.string]).isRequired,bgD:a.default.string.isRequired,fgColor:a.default.oneOfType([a.default.object,a.default.string]).isRequired,fgD:a.default.string.isRequired,size:a.default.number.isRequired,title:a.default.string,viewBoxSize:a.default.number.isRequired,xmlns:a.default.string},t=(0,l.forwardRef)(function(e,u){var i=e.bgColor,s=e.bgD,d=e.fgD,g=e.fgColor,p=e.size,m=e.title,c=e.viewBoxSize,T=e.xmlns,R=T===void 0?"http://www.w3.org/2000/svg":T,B=o(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return f.default.createElement("svg",v({},B,{height:p,ref:u,viewBox:"0 0 "+c+" "+c,width:p,xmlns:R}),m?f.default.createElement("title",null,m):null,f.default.createElement("path",{d:s,fill:i}),f.default.createElement("path",{d,fill:g}))});return t.displayName="QRCodeSvg",t.propTypes=n,w.default=t,w}var oe;function ye(){if(oe)return P;oe=1,Object.defineProperty(P,"__esModule",{value:!0}),P.QRCode=void 0;var v=Object.assign||function(p){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var T in c)Object.prototype.hasOwnProperty.call(c,T)&&(p[T]=c[T])}return p},h=se(),a=i(h),l=le(),f=i(l),r=Ce(),o=i(r),n=ue(),t=i(n),e=Pe(),u=i(e);function i(p){return p&&p.__esModule?p:{default:p}}function s(p,m){var c={};for(var T in p)m.indexOf(T)>=0||Object.prototype.hasOwnProperty.call(p,T)&&(c[T]=p[T]);return c}var d={bgColor:a.default.oneOfType([a.default.object,a.default.string]),fgColor:a.default.oneOfType([a.default.object,a.default.string]),level:a.default.string,size:a.default.number,value:a.default.string.isRequired},g=(0,n.forwardRef)(function(p,m){var c=p.bgColor,T=c===void 0?"#FFFFFF":c,R=p.fgColor,B=R===void 0?"#000000":R,y=p.level,_=y===void 0?"L":y,C=p.size,L=C===void 0?256:C,ge=p.value,de=s(p,["bgColor","fgColor","level","size","value"]),b=new o.default(-1,f.default[_]);b.addData(ge),b.make();var D=b.modules;return t.default.createElement(u.default,v({},de,{bgColor:T,bgD:D.map(function(A,M){return A.map(function(O,x){return O?"":"M "+x+" "+M+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:B,fgD:D.map(function(A,M){return A.map(function(O,x){return O?"M "+x+" "+M+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:m,size:L,viewBoxSize:D.length}))});return P.QRCode=g,g.displayName="QRCode",g.propTypes=d,P.default=g,P}var _e=ye();const Le=pe(_e);function be({title:v}){const[h,a]=W.useState(""),[l,f]=W.useState(""),r=o=>{a(o.get("text")),f("")};return E.jsxs("section",{children:[E.jsx("h2",{className:"title",children:v}),E.jsxs("div",{className:"px-3 py-6",children:[E.jsxs("form",{action:r,children:[E.jsx("input",{className:"w-full p-2 rounded-md outline-none border-2 border-stone-800",type:"text",name:"text",placeholder:"Your Text Here",value:l,onChange:o=>f(o.currentTarget.value)}),E.jsx("button",{type:"submit",className:`w-full text-lg font-bold border-2 border-white rounded-md my-4 py-2 text-white outline-none ${l&&l.trim()||"cursor-not-allowed"}`,disabled:!(l&&l.trim()),children:"Generate QR Code"})]}),E.jsx(Le,{className:"mx-auto border-4 border-white",size:300,value:h.trim()||"Nuru"})]})]})}export{be as default};