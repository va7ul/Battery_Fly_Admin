"use strict";(self.webpackChunkbattery_fly_admin=self.webpackChunkbattery_fly_admin||[]).push([[445],{8308:function(n,e,r){r.d(e,{I:function(){return t}});var o=r(8007),t=o.Ry().shape({name:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").integer(),discount:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),information:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440")})},60:function(n,e,r){r.d(e,{E:function(){return t}});var o=r(8007),t=o.Ry().shape({name:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:o.Z_().trim().matches(/^\d+-\d+$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 \u0432\u0456\u0434 \u0456 \u0434\u043e \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0444\u0456\u0441").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:o.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").integer(),discount:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),information:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440"),capacity:o.IX().of(o.Ry().shape({capacity:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456"),price:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),holder:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer()})).required()})},127:function(n,e,r){r.d(e,{DK:function(){return v},Dx:function(){return b},Gq:function(){return y},II:function(){return _},Mm:function(){return S},Vv:function(){return P},W2:function(){return g},__:function(){return j},ob:function(){return w},tH:function(){return k},xu:function(){return Z}});var o,t,i,c,a,u,s,d,l,p,x,f=r(168),h=r(8789),m=r(5705),g=h.ZP.div(o||(o=(0,f.Z)(["\n  padding: 40px 110px;\n"]))),b=h.ZP.p(t||(t=(0,f.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),y=(0,h.ZP)(m.l0)(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),j=h.ZP.label(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),v=h.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),Z=h.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),w=(0,h.ZP)(m.gN)(s||(s=(0,f.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),P=(0,h.ZP)(m.Bc)(d||(d=(0,f.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),k=(0,h.ZP)(m.gN)(l||(l=(0,f.Z)(["\n  width: 1060px;\n  height: 300px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),_=h.ZP.input(p||(p=(0,f.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),S=h.ZP.button(x||(x=(0,f.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},9347:function(n,e,r){r.d(e,{A6:function(){return H},DK:function(){return S},Dx:function(){return q},Gq:function(){return C},HS:function(){return N},II:function(){return D},K0:function(){return J},Mm:function(){return O},QE:function(){return _},Uv:function(){return V},Vv:function(){return G},W2:function(){return k},__:function(){return z},d5:function(){return B},m1:function(){return E},ob:function(){return R},tH:function(){return W},uJ:function(){return I},xu:function(){return M}});var o,t,i,c,a,u,s,d,l,p,x,f,h,m,g,b,y,j,v,Z=r(168),w=r(8789),P=r(5705),k=w.ZP.div(o||(o=(0,Z.Z)(["\n  padding: 40px 110px;\n"]))),_=w.ZP.p(t||(t=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.hoverColor})),S=w.ZP.p(i||(i=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),q=w.ZP.p(c||(c=(0,Z.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),C=(0,w.ZP)(P.l0)(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),z=w.ZP.label(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),V=w.ZP.label(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: 20px;\n"]))),I=w.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),M=w.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),J=w.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: dashed grey;\n  padding: 10px;\n  gap: 10px;\n"]))),D=w.ZP.input(x||(x=(0,Z.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),R=(0,w.ZP)(P.gN)(f||(f=(0,Z.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),B=(0,w.ZP)(P.gN)(h||(h=(0,Z.Z)(["\n  width: 1000px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),G=(0,w.ZP)(P.Bc)(m||(m=(0,Z.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),W=(0,w.ZP)(P.gN)(g||(g=(0,Z.Z)(["\n  width: 1060px;\n  height: 300px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),H=(0,w.ZP)(P.gN)(b||(b=(0,Z.Z)(["\n  width: 1000px;\n  height: 160px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),O=w.ZP.button(y||(y=(0,Z.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),N=w.ZP.button(j||(j=(0,Z.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-bottom: 10px;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),E=w.ZP.button(v||(v=(0,Z.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-right: 20px;\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},6445:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var o,t,i,c,a,u,s=r(9421),d=r(7689),l=r(2791),p=r(7451),x=r(2925),f=r(641),h=r(7762),m=r(9439),g=r(5705),b=r(1419),y=r(4989),j=r(2889),v=r(8096),Z=r(7133),w=r(1637),P=r(8308),k=r(127),_=r(168),S=r(8789),q=S.ZP.button(o||(o=(0,_.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),C=S.ZP.button(t||(t=(0,_.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),z=S.ZP.div(i||(i=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),V=r(3329),I=function(){var n=(0,s.z)(),e=(0,d.s0)(),r=(0,s.i)(x.I1),o=r.codeOfGood,t=r.name,i=r.description,c=r.image,a=r.price,u=r.quantity,f=r.sale,_=r.popular,S=r.category,I=r.type,M=r.information,J=r.discount,D=(0,l.useState)(c),R=(0,m.Z)(D,2),B=R[0],G=R[1],W=(0,l.useState)(f),H=(0,m.Z)(W,2),O=H[0],N=H[1],E=(0,l.useState)(_),F=(0,m.Z)(E,2),K=F[0],U=F[1];return(0,V.jsx)(k.W2,{children:(0,V.jsx)(g.J9,{initialValues:{name:t,price:a,description:i,quantity:u,sale:f,discount:J,information:M,category:S,type:I,popular:_,image:c},validationSchema:P.I,onSubmit:function(r){var t=new FormData;t.append("name",r.name),t.append("price",r.price.toString()),t.append("description",r.description),t.append("quantity",r.quantity.toString()),t.append("sale",O.toString()),t.append("discount",r.discount.toString()),t.append("category",r.category),t.append("type",r.type=function(){if("null"===I)return S}()||I),t.append("popular",K.toString()),t.append("information",r.information);var i,c=(0,h.Z)(B);try{for(c.s();!(i=c.n()).done;){var a=i.value;t.append("files",a)}}catch(u){c.e(u)}finally{c.f()}n((0,p.zG)({formData:t,codeOfGood:o})).then((function(n){"fulfilled"===n.meta.requestStatus&&(e("/admin/assortment/batteries-".concat(I)),S===I&&e("/admin/assortment/".concat(I)))}))},children:(0,V.jsxs)(k.Gq,{children:[(0,V.jsx)(k.Dx,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,V.jsxs)(k.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.ob,{name:"name",type:"text"}),(0,V.jsx)(k.Vv,{name:"name",component:"div"})]})]}),(0,V.jsxs)(k.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.ob,{name:"price",type:"number"}),(0,V.jsx)(k.Vv,{name:"price",component:"div"})]})]}),(0,V.jsxs)(k.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,V.jsx)(k.Vv,{name:"description",component:"div"})]})]}),(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,V.jsx)(k.II,{accept:"image/*",type:"file",name:"files",onChange:function(n){if(n.currentTarget.files){var e=Array.from(n.currentTarget.files);G(e)}},multiple:!0})]}),(0,V.jsxs)(k.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.ob,{name:"quantity",type:"number"}),(0,V.jsx)(k.Vv,{name:"quantity",component:"div"})]})]}),(0,V.jsxs)(v.Z,{children:[(0,V.jsx)(Z.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,V.jsxs)(j.Z,{value:O,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,V.jsx)(y.Z,{value:!0,onChange:function(){N(!0)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,V.jsx)(y.Z,{value:!1,onChange:function(){N(!1)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u041d\u0456"})]})]}),O&&(0,V.jsxs)(k.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.ob,{name:"discount",type:"number"}),(0,V.jsx)(k.Vv,{name:"discount",component:"div"})]})]}),(0,V.jsxs)(k.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,V.jsx)(k.xu,{children:(0,V.jsx)(k.ob,{name:"category",type:"text",value:S,disabled:!0})})]}),"null"!==I&&(0,V.jsxs)(k.__,{children:["\u0422\u0438\u043f",(0,V.jsx)(k.xu,{children:(0,V.jsx)(k.ob,{name:"type",type:"text",value:I,disabled:!0})})]}),(0,V.jsxs)(v.Z,{children:[(0,V.jsx)(Z.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,V.jsxs)(j.Z,{value:K,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,V.jsx)(y.Z,{value:!0,onChange:function(){U(!0)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,V.jsx)(y.Z,{value:!1,onChange:function(){U(!1)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,V.jsxs)(k.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,V.jsxs)(k.xu,{children:[(0,V.jsx)(k.tH,{name:"information",type:"text",component:"textarea"}),(0,V.jsx)(k.Vv,{name:"information",component:"div"})]})]}),(0,V.jsxs)(z,{children:[(0,V.jsx)(C,{type:"button",onClick:function(){e(-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,V.jsx)(q,{type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})})},M=r(4942),J=r(60),D=r(9347),R=S.ZP.button(c||(c=(0,_.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),B=S.ZP.button(a||(a=(0,_.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),G=S.ZP.div(u||(u=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),W=function(){var n=(0,s.z)(),e=(0,d.s0)(),r=(0,s.i)(x.I1),o=r.codeOfGood,t=r.name,i=r.description,c=r.image,a=r.price,u=r.quantity,f=r.sale,P=r.popular,k=r.category,_=r.holder,S=r.capacity,q=r.information,C=r.discount,z=(0,l.useState)(c),I=(0,m.Z)(z,2),W=I[0],H=I[1],O=(0,l.useState)(f),N=(0,m.Z)(O,2),E=N[0],F=N[1],K=(0,l.useState)(P),U=(0,m.Z)(K,2),L=U[0],A=U[1],T=(0,l.useState)(_),Q=(0,m.Z)(T,2),X=Q[0],$=Q[1],Y={assembly:"assembly",fpv:"batteries-for-fpv",transport:"batteries-for-transport",toys:"batteries-for-toys"}[k],nn={capacity:"",description:"",price:0,holder:0},en=[];if(S)for(var rn=Object.keys(S),on=0;on<rn.length;on++){var tn={capacity:rn[on],description:S[rn[on]].description,price:S[rn[on]].price,holder:S[rn[on]].holder};en.push(tn)}var cn=function(n){if(n.currentTarget.files){var e=Array.from(n.currentTarget.files);H(e)}},an=function(){e(-1)};return(0,V.jsx)(D.W2,{children:(0,V.jsx)(g.J9,{initialValues:{name:t,price:a,description:i,quantity:u,sale:f,discount:C,information:q,category:k,popular:P,image:c,capacity:[].concat(en)},validationSchema:J.E,onSubmit:function(r){var t,i=[],c=(0,h.Z)(r.capacity);try{for(c.s();!(t=c.n()).done;){var a=t.value,u=(0,M.Z)({},a.capacity.toString(),{description:a.description,holder:a.holder,price:a.price});i.push(u)}}catch(f){c.e(f)}finally{c.f()}var s=new FormData;s.append("name",r.name),s.append("price",r.price.toString()),s.append("description",r.description),s.append("quantity",r.quantity.toString()),s.append("sale",E.toString()),s.append("discount",r.discount.toString()),s.append("category",r.category),s.append("capacity",JSON.stringify(i)),s.append("holder",X.toString()),s.append("popular",L.toString()),s.append("information",r.information);var d,l=(0,h.Z)(W);try{for(l.s();!(d=l.n()).done;){var x=d.value;s.append("files",x)}}catch(f){l.e(f)}finally{l.f()}n((0,p.IF)({formData:s,codeOfGood:o})).then((function(n){"fulfilled"===n.meta.requestStatus&&e("/admin/assortment/".concat(Y))}))},children:function(n){var e=n.values;return(0,V.jsxs)(D.Gq,{children:[(0,V.jsx)(D.Dx,{children:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,V.jsxs)(D.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.ob,{name:"name",type:"text"}),(0,V.jsx)(D.Vv,{name:"name",component:"div"})]})]}),(0,V.jsxs)(D.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.ob,{name:"price",type:"text",placeholder:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434: 4100-9500"}),(0,V.jsx)(D.Vv,{name:"price",component:"div"})]})]}),(0,V.jsxs)(D.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,V.jsx)(D.Vv,{name:"description",component:"div"})]})]}),(0,V.jsxs)(D.xu,{children:[(0,V.jsx)(D.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,V.jsx)(D.II,{accept:"image/*",type:"file",name:"image",onChange:cn,multiple:!0})]}),(0,V.jsxs)(D.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.ob,{name:"quantity",type:"number"}),(0,V.jsx)(D.Vv,{name:"quantity",component:"div"})]})]}),(0,V.jsxs)(v.Z,{children:[(0,V.jsx)(Z.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,V.jsxs)(j.Z,{value:E,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,V.jsx)(y.Z,{value:!0,onChange:function(){F(!0)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,V.jsx)(y.Z,{value:!1,onChange:function(){F(!1)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u041d\u0456"})]})]}),E&&(0,V.jsxs)(D.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.ob,{name:"discount",type:"number"}),(0,V.jsx)(D.Vv,{name:"discount",component:"div"})]})]}),(0,V.jsxs)(D.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.ob,{name:"category",type:"text",value:k,disabled:!0}),(0,V.jsx)(D.Vv,{name:"category",component:"div"})]})]}),(0,V.jsxs)(v.Z,{children:[(0,V.jsx)(Z.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"black"}},children:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432"}),(0,V.jsxs)(j.Z,{value:X,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,V.jsx)(y.Z,{value:!0,onChange:function(){$(!0)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,V.jsx)(y.Z,{value:!1,onChange:function(){$(!1)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,V.jsx)(D.QE,{children:"\u0411\u043b\u043e\u043a \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0454\u043c\u043d\u043e\u0441\u0442\u0456"}),(0,V.jsx)(g.F2,{name:"capacity",children:function(n){var r=n.push,o=n.remove;return(0,V.jsxs)(V.Fragment,{children:[e.capacity.map((function(n,r){return(0,V.jsxs)(D.K0,{children:[(0,V.jsxs)(D.Uv,{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.d5,{name:"capacity[".concat(r,"].capacity"),value:n.capacity,type:"number"}),(0,V.jsx)(D.Vv,{name:"capacity[".concat(r,"].capacity"),component:"div"})]})]}),(0,V.jsxs)(D.Uv,{children:["\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.A6,{name:"capacity[".concat(r,"].description"),value:n.description,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!",component:"textarea"}),(0,V.jsx)(D.Vv,{name:"capacity[".concat(r,"].description"),component:"div"})]})]}),(0,V.jsxs)(D.Uv,{children:["\u0426\u0456\u043d\u0430",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.d5,{name:"capacity[".concat(r,"].price"),type:"number",value:n.price}),(0,V.jsx)(D.Vv,{name:"capacity[".concat(r,"].price"),component:"div"})]})]}),X&&(0,V.jsxs)(D.Uv,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.d5,{name:"capacity[".concat(r,"].holder"),type:"number",value:n.holder}),(0,V.jsx)(D.Vv,{name:"capacity[".concat(r,"].holder"),component:"div"})]})]}),(0,V.jsx)(D.uJ,{children:(0,V.jsx)(D.m1,{type:"button",onClick:function(){if(1===e.capacity.length)return window.alert("\u0422\u0438 \u0448\u043e, \u0434\u0443\u0440\u043d\u0438\u0439? \u0404\u0434\u0438\u043d\u0438\u0439 \u0431\u043b\u043e\u043a \u0432\u0456\u043d \u0432\u0438\u0434\u0430\u043b\u044f\u0454.. \u041d\u0430\u0445\u0454\u0440 \u044f \u0439\u043e\u0433\u043e \u043c\u0430\u043b\u044e\u0432\u0430\u043b\u0430 \u0442\u043e\u0434\u0456");o(r)},children:"- \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0431\u043b\u043e\u043a"})})]},r)})),(0,V.jsx)(D.HS,{type:"button",onClick:function(){return r(nn)},children:"+ \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0454\u043c\u043d\u0456\u0441\u0442\u044c"})]})}}),(0,V.jsxs)(v.Z,{children:[(0,V.jsx)(Z.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,V.jsxs)(j.Z,{value:L,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,V.jsx)(y.Z,{value:!0,onChange:function(){A(!0)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,V.jsx)(y.Z,{value:!1,onChange:function(){A(!1)},control:(0,V.jsx)(b.Z,{sx:{"&.Mui-checked":{color:w.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,V.jsxs)(D.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,V.jsxs)(D.uJ,{children:[(0,V.jsx)(D.tH,{name:"information",type:"text",component:"textarea"}),(0,V.jsx)(D.Vv,{name:"information",component:"div"})]})]}),(0,V.jsxs)(G,{children:[(0,V.jsx)(B,{type:"button",onClick:an,children:"\u041d\u0430\u0437\u0430\u0434"}),(0,V.jsx)(R,{type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})}})})},H=function(){var n=(0,s.z)(),e=(0,s.i)(x.S3),r=(0,s.i)(x.I1).category,o=(0,d.UO)().cardId;(0,l.useEffect)((function(){o&&n((0,p.yO)(o))}),[n,o]);return(0,V.jsx)(V.Fragment,{children:e?(0,V.jsx)(f.p,{isLoading:e}):r&&["assembly","fpv","transport","toys"].includes(r)?(0,V.jsx)(W,{}):(0,V.jsx)(I,{})})}},2925:function(n,e,r){r.d(e,{Ej:function(){return i},I1:function(){return t},S3:function(){return o},nR:function(){return c}});var o=function(n){return n.products.oneProduct.isLoading},t=function(n){return n.products.oneProduct.result},i=function(n){return n.products.productsList.isLoading},c=function(n){return n.products.productsList.allProducts}}}]);
//# sourceMappingURL=445.59e163b2.chunk.js.map