(this["webpackJsonptaste-corner"]=this["webpackJsonptaste-corner"]||[]).push([[5],{197:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(198);t.a=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loader"}),r.a.createElement("span",{className:"loadtext"},"Loading..."))}},198:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a.n(n),c=a(53),s=a(15),i=a(16),l=a(18),o=a(17),u=a(0),p=a.n(u),m=a(199),f=a.n(m),d=(a(225),a(11)),h=a(6),v=(a(226),a(33)),g=Object(h.g)((function(e){var t=e.history,a=e.match,n=e.recipe,r=a.url;return p.a.createElement("div",{className:"recipeContainer",onClick:function(){return t.push("".concat(r,"/").concat(n.recipe_id))}},p.a.createElement("div",{className:"recipe"},p.a.createElement("div",{className:"imageContainer",style:{backgroundImage:"url(".concat(n.image_url,")")}}),p.a.createElement("div",{className:"recipe__details"},p.a.createElement("h3",null,Object(v.a)(n.title)),p.a.createElement("div",{className:"recipe__info"},p.a.createElement("span",{className:"info"},n.publisher),p.a.createElement("span",{className:"info"},"$ ",Object(v.b)(n.recipe_id)),p.a.createElement(d.b,{to:"".concat(r,"/").concat(n.recipe_id),className:"info more__info",title:"view full details of this recipe"},"More Info")))))})),E=a(197),b=a(26),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={recipes:[],numberOfResults:0,resultPerPage:6,page:0,start:0,end:6,noRecipe:!1},n.previousResults=function(){n.setState((function(e){return{page:e.page-1,start:e.start-e.resultPerPage,end:e.end-e.resultPerPage}})),n.scrollBehaviour()},n.nextResults=function(){n.setState((function(e){return{page:e.page+1,start:(e.page+1)*e.resultPerPage,end:e.resultPerPage*(e.page+2)}})),n.scrollBehaviour()},n.scrollBehaviour=function(){n.node.current.scrollIntoView({behaviour:"smooth"})},n.node=Object(u.createRef)(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.scrollBehaviour(),"pizza"!==(t=this.props.match.params.category).trim()&&"pasta"!==t.trim()){e.next=10;break}return e.next=5,f.a.get("https://forkify-api.herokuapp.com/api/search?&q=".concat(t));case 5:a=e.sent,n=a.data,this.setState({recipes:n.recipes,numberOfResults:n.recipes.length,noRecipe:!1}),e.next=11;break;case 10:this.setState({noRecipe:!0});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.recipes,a=e.noRecipe,n=e.start,r=e.end,c=e.numberOfResults,s=this.props.match.params.category,i=0!==n,l=r<=c;return p.a.createElement("div",{className:"recipes",id:"gotoTop",ref:this.node},a?p.a.createElement("p",{className:"noRecipe"},"recipe not found"):p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"recipeTitle"},p.a.createElement("h3",null,s),p.a.createElement("p",null,"Explore all new and delicious ",s)),p.a.createElement("div",null,t.length>0?p.a.createElement("div",{className:"recipeList"},t.slice(n,r).map((function(e){return p.a.createElement(g,{key:e.recipe_id,recipe:e})}))):p.a.createElement(E.a,null)),p.a.createElement("div",{className:"pageButtons"},i&&p.a.createElement(b.a,{click:this.previousResults,className:"pagination"},"\u276e Prev"),l&&p.a.createElement(b.a,{click:this.nextResults,className:"pagination"},"Next \u276f"))))}}]),a}(u.Component);t.default=N}}]);
//# sourceMappingURL=5.4ba97b4a.chunk.js.map