import{a as d,c as y,o as $,n as w,F as i,a2 as _,G as n,a6 as p,u as s,$ as E,a1 as k,Y as T,aq as I,E as o,ar as L,as as A,at as B,au as D,av as F,a0 as V,aw as j}from"./swiper-vue.ac6513e6.js";import{u as Y,a as b}from"./entry.54e61fa3.js";import{u as q}from"./movies.51ca1d31.js";const G={key:0,class:"h-80 items-center flex justify-center"},H=n("div",{class:"spinner"},null,-1),z=[H],J={key:1},K={class:"text-center m-2"},O=["onClick"],Q=n("span",{class:"tooltiptext"},"Click for more details!",-1),U={class:"p-2"},W={key:0},X=["src","alt"],Z={key:2,class:"text-center p-2"},le={__name:"[page]",setup(ee){const r=Y(),h=b(),t=q(),u=d(!0),v=d([]),m=d({}),a=d(r.params.page),f=d(0);let g=0;const M=y(()=>a.value*10+1+f.value-10),x=y(()=>(a.value>1||f.value>0)&&M.value!==+t.getTotalResults),C=e=>{h.push({name:"detail-title",params:{title:e.value}})},N=e=>{f.value=e.realIndex;const c=e.realIndex;if(c===e.slides.length-1&&g===0){if(console.log("Transition from first to last slide"),+a.value==1)return;a.value--,S()}c===0&&g===e.slides.length-1&&(console.log("Transition from last to first slide"),a.value<Math.ceil(t.getTotalResults/10)&&(a.value++,S())),g=c},S=()=>{u.value=!0,t.fetchMovies(r.params.title,a.value).then(()=>{const e=t.getMoviesList;v.value=e,w(()=>{h.push({path:`/results/${r.params.title}/${a.value}`}),u.value=!1})})};return $(()=>{t.fetchMovies(r.params.title,r.params.page).then(e=>{e?(m.value=e,u.value=!1):w(()=>{const c=t.getMoviesList;v.value=c,u.value=!1})})}),(e,c)=>{const P=j,R=I;return o(),i(T,null,[u.value?(o(),i("div",G,z)):_("",!0),v.value.length?(o(),i("div",J,[n("h1",K,"Found "+p(s(t).getTotalResults)+" movies!",1),E(R,{modules:["SwiperAutoplay"in e?e.SwiperAutoplay:s(A),"SwiperEffectCreative"in e?e.SwiperEffectCreative:s(B),"SwiperNavigation"in e?e.SwiperNavigation:s(D),"SwiperPagination"in e?e.SwiperPagination:s(F)],"slides-per-view":1,speed:500,loop:s(x),navigation:!0,allowTouchMove:!1,onSlideChangeTransitionStart:N,effect:"creative",pagination:{clickable:!1},"creative-effect":{prev:{shadow:!1,translate:["-100%",0,-1]},next:{translate:["100%",0,0]}}},{default:k(()=>[(o(!0),i(T,null,L(v.value,l=>(o(),V(P,{key:l},{default:k(()=>[u.value?_("",!0):(o(),i("div",{key:0,class:"h-80 tooltip items-center flex flex-col justify-center mx-16 cursor-pointer",onClick:te=>C(l.Title)},[Q,n("div",U,p(l.Title),1),l.Poster!=="N/A"?(o(),i("div",W,[n("img",{class:"img",src:l.Poster,alt:l.Title},null,8,X)])):_("",!0),n("div",null,p(l.Year)+" year ",1),n("div",null,p(`Page: ${s(r).params.page} / ${Math.ceil(s(t).getTotalResults/10)}`),1)],8,O))]),_:2},1024))),128))]),_:1},8,["modules","loop"])])):(o(),i("div",Z,p(`${m.value.Error} Try again with another title`),1))],64)}}};export{le as default};