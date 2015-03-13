/*
Styles from:
https://github.com/LeaVerou/css3patterns

All Authors declared in HTML attributes.

License:

Copyright (c) 2011 Lea Verou, http://lea.verou.me/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/


var React = require('react');

var patterns = [
  <li key={1} style={{background: 'radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px, radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), #8a3', backgroundSize: '20px 20px'}} title="Microbial Mat" data-author="Logan McBroom" data-author-url="http://logan.mcbroom.me" />,
  <li key={2} style={{background: 'linear-gradient(63deg, #999 23%, transparent 23%) 7px 0, linear-gradient(63deg, transparent 74%, #999 78%), linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), #444', backgroundSize: '16px 48px'}} title="Stairs" data-author="Logan McBroom" data-author-url="http://logan.mcbroom.me" />,
  <li key={3} style={{background: 'linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,#36c', backgroundSize: '15px 30px'}} title="Half-Rombes" data-author="Valentin Agachi" data-author-url="http://agachi.name/" />,
  <li key={4} style={{background: 'linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px)', backgroundColor: '#e1ebbd', backgroundSize: '128px 128px'}} title="Arrows" data-author="Jeroen Franse" data-author-url="http://twitter.com/jroenf" />,
  <li key={5} style={{background: 'linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,linear-gradient(315deg, #ECEDDC 25%, transparent 25%),linear-gradient(45deg, #ECEDDC 25%, transparent 25%)', backgroundSize: '100px 100px', backgroundColor: '#EC173A'}} title="Zig-Zag" data-author="eCSSpert" data-author-url="http://twitter.com/ecsspert" />,
  <li key={6} style={{background: 'linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px', backgroundColor: '#708090', backgroundSize: '64px 128px'}} title="Weave" data-author="Jeroen Franse" data-author-url="http://twitter.com/jroenf" />,
  <li key={7} style={{background: 'radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px,radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0,radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px,radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0,radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px,radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0', backgroundColor: '#300', backgroundSize: '100px 100px'}} title="Upholstery" data-author="Nate Eagle" data-author-url="http://nateeagle.com/" />,
  <li key={8} style={{backgroundColor: 'black', backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)', backgroundSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px', backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px'}} title="Starry night" />,
  <li key={9} style={{backgroundColor: 'white', backgroundImage: 'radial-gradient(midnightblue 9px, transparent 10px),        repeating-radial-gradient(midnightblue 0, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px)', backgroundSize: '30px 30px, 90px 90px', backgroundPosition: '0 0'}} title="Marrakesh" data-author="Divya Manian" data-author-url="http://nimbupani.com" />,
  <li key={10} style={{background: 'radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%)', backgroundSize: '470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%', backgroundColor: '#840b2a'}} title="Rainbow bokeh" data-author="Auke Zwart" data-author-url="http://twitter.com/okke29" />,
  <li key={11} style={{background: 'linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,linear-gradient(90deg, #1b1b1b 10px, transparent 10px),linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)', backgroundColor: '#131313', backgroundSize: '20px 20px'}} title="Carbon" data-author="Atle Mo (design), Sébastien Grosjean (code)" data-author-url="http://www.zencocoon.com/" />,
  <li key={12} style={{background: 'radial-gradient(black 15%, transparent 16%) 0 0,radial-gradient(black 15%, transparent 16%) 8px 8px,radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px', backgroundColor: '#282828', backgroundSize: '16px 16px'}} title="Carbon fibre" data-author="Atle Mo (design), Lea Verou (code)" data-author-url="http://subtlepatterns.com/#post-22" />,
  <li key={13} style={{background: 'radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%),radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%),radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%),radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px', backgroundColor: '#b03', backgroundSize: '100px 100px'}} title="Hearts" />,
  <li key={14} style={{backgroundColor: '#6d695c', backgroundImage: 'repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))', backgroundSize: '70px 120px'}} title="Argyle" data-author="Anna Kassner" data-author-url="http://annamation.ca/" />,
  <li key={15} style={{backgroundColor: '#FF7D9D', backgroundSize: '58px 58px', backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 33px 6px,0px 36px, 4px 2px, 29px 6px, 33px 30px', backgroundImage: 'linear-gradient(335deg, #C90032 23px, transparent 23px),linear-gradient(155deg, #C90032 23px, transparent 23px),linear-gradient(335deg, #C90032 23px, transparent 23px),linear-gradient(155deg, #C90032 23px, transparent 23px),linear-gradient(335deg, #C90032 10px, transparent 10px),linear-gradient(155deg, #C90032 10px, transparent 10px),linear-gradient(335deg, #C90032 10px, transparent 10px),linear-gradient(155deg, #C90032 10px, transparent 10px)'}} title="Steps" data-author="Nicolas Gallagher" data-author-url="http://nicolasgallagher.com/" />,
  <li key={16} style={{background: 'radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px', backgroundColor: 'slategray', backgroundSize: '75px 100px'}} title="Waves" />,
  <li key={17} style={{background: 'radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent),radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px,linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px,linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0', backgroundColor: 'slategray', backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'}} title="Cross" />,
  <li key={18} style={{background: 'radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px', backgroundColor: '#63773F', backgroundSize: '100px 100px'}} title="Yin Yang" />,
  <li key={19} style={{background: 'linear-gradient(324deg, #232927 4%,   transparent 4%) -70px 43px,linear-gradient( 36deg, #232927 4%,   transparent 4%) 30px 43px,linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,linear-gradient(324deg, #232927 4%,   transparent 4%) -20px 93px,linear-gradient( 36deg, #232927 4%,   transparent 4%) 80px 93px,linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px', backgroundColor: '#232927', backgroundSize: '100px 100px'}} title="Stars" data-author="Nicolas Gallagher" data-author-url="http://nicolasgallagher.com/" />,
  <li key={20} style={{backgroundImage: 'radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%),radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%)', backgroundSize: '110px 110px', backgroundColor: '#C8D3A7', backgroundPosition: '0 0, 55px 55px'}} title="Brady Bunch" data-author="Estelle Weyl" data-author-url="http://www.standardista.com" />,
  <li key={21} style={{backgroundColor: '#def', backgroundImage: 'radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%)', backgroundSize: '80px 80px', backgroundPosition: '0 0, 40px 40px'}} title="Shippo" />,
  <li key={22} style={{backgroundColor: 'silver', backgroundImage: 'linear-gradient(335deg, #b00 23px, transparent 23px),linear-gradient(155deg, #d00 23px, transparent 23px),linear-gradient(335deg, #b00 23px, transparent 23px),linear-gradient(155deg, #d00 23px, transparent 23px)', backgroundSize: '58px 58px', backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 34px 6px'}} title="Bricks" data-author="Tab Atkins Jr" data-author-url="http://www.xanthir.com/blog/" />,
  <li key={23} style={{backgroundColor: 'silver', backgroundImage: 'radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent),radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent),radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent)', backgroundSize: '100px 50px'}} title="Seigaiha" />,
  <li key={24} style={{backgroundColor: '#556', backgroundImage: 'linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'}} title="Japanese cube" />,
  <li key={25} style={{backgroundColor: '#001', backgroundImage: 'radial-gradient(white 15%, transparent 16%),radial-gradient(white 15%, transparent 16%)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px'}} title="Polka dot" />,
  <li key={26} style={{background: 'linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, black 75%, black) 0 0,linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,linear-gradient(45deg, black 17%, transparent 17%, transparent 25%, black 25%, black 36%, transparent 36%, transparent 64%, black 64%, black 75%, transparent 75%, transparent 83%, black 83%) 1em 1em', backgroundColor: 'white', backgroundSize: '2em 2em'}} title="Houndstooth" data-author="Antoine Bernier" data-author-url="http://abernier.name" />,
  <li key={27} style={{backgroundColor: '#eee', backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px'}} title="Checkerboard" />,
  <li key={28} style={{backgroundColor: '#eee', backgroundImage: 'linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black)', backgroundSize: '60px 60px'}} title="Diagonal checkerboard" />,
  <li key={29} style={{backgroundColor: 'hsl(2, 57%, 40%)', backgroundImage: 'repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px)'}} title="Tartan" data-author="Marta Armada" data-author-url="http://swwweet.com" />,
  <li key={30} style={{backgroundColor: 'hsl(34, 53%, 82%)', backgroundImage: 'repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,                    hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px         ),repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,   hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px       )'}} title="Madras" data-author="Divya Manian" data-author-url="http://nimbupani.com" />,
  <li key={31} style={{backgroundColor: '#fff', backgroundImage: 'linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),linear-gradient(#eee .1em, transparent .1em)', backgroundSize: '100% 1.2em'}} title="Lined paper" data-author="Sarah Backhouse" data-author-url="http://www.jadu.net" />,
  <li key={32} style={{backgroundColor: '#269', backgroundImage: 'linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px),linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px', backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'}} title="Blueprint grid" />,
  <li key={33} style={{backgroundColor: 'white', backgroundImage: 'linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%)', backgroundSize: '50px 50px'}} title="Tablecloth" />,
  <li key={34} style={{backgroundColor: 'gray', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)'}} title="Diagonal stripes" />,
  <li key={35} style={{backgroundColor: '#026873', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%),linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%),linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%),linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%)', backgroundSize: '13px, 29px, 37px, 53px'}} title="Cicada stripes" data-author="Randy Merrill" data-author-url="http://forthedeveloper.com/" />,
  <li key={36} style={{backgroundColor: 'gray', backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,.5) 50%)', backgroundSize: '50px 50px'}} title="Vertical stripes" />,
  <li key={37} style={{backgroundColor: 'gray', backgroundImage: 'linear-gradient(transparent 50%, rgba(255,255,255,.5) 50%)', backgroundSize: '50px 50px'}} title="Horizontal stripes" />,
];

var PatternsList = React.createClass({
  shouldComponentUpdate: function (nextProps, nextState) {
    return false;
  },
  getInitialState: function() {
    var min = 8, max = 14;
    var howMany = Math.round(Math.random() * (max - min) + min);
    var showIndexes = [];
    for (var i = 0; i < howMany; i++) {
      var tryIndex = Math.round(Math.random() * howMany);
      if (showIndexes.indexOf(tryIndex) === -1) {
        showIndexes.push(tryIndex);
      } else {
        i--;
      }
    }
    return {
      showIndexes: showIndexes
    };
  },
  patterns: function() {
    return this.state.showIndexes.map(function(patternIndex) {
      return patterns[patternIndex];
    });
  },
  render: function() {
    return (
      <ul className="patterns">
        {this.patterns()}
      </ul>
    );
  }
});

module.exports = PatternsList;