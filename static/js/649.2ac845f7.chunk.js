"use strict";(self.webpackChunkbattery_fly_admin=self.webpackChunkbattery_fly_admin||[]).push([[649],{6785:function(n,e,r){r.d(e,{I:function(){return t}});var o=r(8007),t=o.Ry().shape({name:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),discount:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),information:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440")})},6637:function(n,e,r){r.d(e,{E:function(){return t}});var o=r(8007),t=o.Ry().shape({name:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:o.Z_().trim().matches(/^\d+-\d+$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 \u0432\u0456\u0434 \u0456 \u0434\u043e \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0444\u0456\u0441").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),discount:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),information:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440"),capacity:o.IX().of(o.Ry().shape({capacity:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:o.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456"),price:o.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),holder:o.Rx().positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer()})).required()})},127:function(n,e,r){r.d(e,{DK:function(){return v},Dx:function(){return b},Gq:function(){return j},II:function(){return _},Mm:function(){return q},Vv:function(){return P},W2:function(){return g},__:function(){return y},ob:function(){return w},tH:function(){return k},xu:function(){return Z}});var o,t,i,c,a,u,s,d,l,p,x,f=r(168),h=r(8789),m=r(5705),g=h.ZP.div(o||(o=(0,f.Z)(["\n  padding: 40px 110px;\n"]))),b=h.ZP.p(t||(t=(0,f.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),j=(0,h.ZP)(m.l0)(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),y=h.ZP.label(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),v=h.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),Z=h.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),w=(0,h.ZP)(m.gN)(s||(s=(0,f.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),P=(0,h.ZP)(m.Bc)(d||(d=(0,f.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),k=(0,h.ZP)(m.gN)(l||(l=(0,f.Z)(["\n  width: 1060px;\n  height: 102px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),_=h.ZP.input(p||(p=(0,f.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),q=h.ZP.button(x||(x=(0,f.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},9347:function(n,e,r){r.d(e,{A6:function(){return H},DK:function(){return q},Dx:function(){return C},Gq:function(){return z},HS:function(){return F},II:function(){return D},K0:function(){return J},Mm:function(){return O},QE:function(){return _},Uv:function(){return V},Vv:function(){return G},W2:function(){return k},__:function(){return S},d5:function(){return B},m1:function(){return N},ob:function(){return R},tH:function(){return W},uJ:function(){return I},xu:function(){return M}});var o,t,i,c,a,u,s,d,l,p,x,f,h,m,g,b,j,y,v,Z=r(168),w=r(8789),P=r(5705),k=w.ZP.div(o||(o=(0,Z.Z)(["\n  padding: 40px 110px;\n"]))),_=w.ZP.p(t||(t=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.hoverColor})),q=w.ZP.p(i||(i=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),C=w.ZP.p(c||(c=(0,Z.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),z=(0,w.ZP)(P.l0)(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),S=w.ZP.label(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),V=w.ZP.label(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: 20px;\n"]))),I=w.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),M=w.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),J=w.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: dashed grey;\n  padding: 10px;\n  gap: 10px;\n"]))),D=w.ZP.input(x||(x=(0,Z.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),R=(0,w.ZP)(P.gN)(f||(f=(0,Z.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),B=(0,w.ZP)(P.gN)(h||(h=(0,Z.Z)(["\n  width: 1000px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),G=(0,w.ZP)(P.Bc)(m||(m=(0,Z.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),W=(0,w.ZP)(P.gN)(g||(g=(0,Z.Z)(["\n  width: 1060px;\n  height: 170px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),H=(0,w.ZP)(P.gN)(b||(b=(0,Z.Z)(["\n  width: 1000px;\n  height: 150px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),O=w.ZP.button(j||(j=(0,Z.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),F=w.ZP.button(y||(y=(0,Z.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-bottom: 10px;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),N=w.ZP.button(v||(v=(0,Z.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-right: 20px;\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},8649:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var o,t,i,c=r(4420),a=r(7689),u=r(2791),s=r(1617),d=r(2745),l=r(5757),p=r(7762),x=r(9439),f=r(5705),h=r(1419),m=r(4989),g=r(2889),b=r(8096),j=r(7133),y=r(1637),v=r(6785),Z=r(127),w=r(168),P=r(8789),k=P.ZP.button(o||(o=(0,w.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),_=P.ZP.button(t||(t=(0,w.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),q=P.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),C=r(3329),z=function(){var n=(0,c.I0)(),e=(0,a.s0)(),r=(0,c.v9)(d.I1),o=r.codeOfGood,t=r.name,i=r.description,l=r.image,w=r.price,P=r.quantity,z=r.sale,S=r.popular,V=r.category,I=r.type,M=r.information,J=r.discount,D=(0,u.useState)(l),R=(0,x.Z)(D,2),B=R[0],G=R[1],W=(0,u.useState)(z),H=(0,x.Z)(W,2),O=H[0],F=H[1],N=(0,u.useState)(S),E=(0,x.Z)(N,2),K=E[0],L=E[1];return(0,C.jsx)(Z.W2,{children:(0,C.jsx)(f.J9,{initialValues:{name:t,price:w,description:i,quantity:P,sale:z,discount:J,information:M,category:V,type:I,popular:S,image:l},enctype:"multipart/form-data",validationSchema:v.I,onSubmit:function(r){var t=new FormData;t.append("name",r.name),t.append("price",r.price),t.append("description",r.description),t.append("quantity",r.quantity),t.append("sale",O),t.append("discount",r.discount||10),t.append("category",r.category),t.append("type",r.type=function(){if("null"===I)return V}()||I),t.append("popular",K),t.append("information",r.information);var i,c=(0,p.Z)(B);try{for(c.s();!(i=c.n()).done;){var a=i.value;t.append("files",a)}}catch(u){c.e(u)}finally{c.f()}n((0,s.zG)({formData:t,codeOfGood:o})).then((function(n){"fulfilled"===n.meta.requestStatus&&e("/admin/assortment/batteries-".concat(I))}))},children:(0,C.jsxs)(Z.Gq,{children:[(0,C.jsx)(Z.Dx,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,C.jsxs)(Z.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.ob,{name:"name",type:"text"}),(0,C.jsx)(Z.Vv,{name:"name",component:"div"})]})]}),(0,C.jsxs)(Z.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.ob,{name:"price",type:"number"}),(0,C.jsx)(Z.Vv,{name:"price",component:"div"})]})]}),(0,C.jsxs)(Z.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,C.jsx)(Z.Vv,{name:"description",component:"div"})]})]}),(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,C.jsx)(Z.II,{accept:"image/*",type:"file",name:"files",onChange:function(n){G(n.currentTarget.files)},multiple:!0})]}),(0,C.jsxs)(Z.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.ob,{name:"quantity",type:"number"}),(0,C.jsx)(Z.Vv,{name:"quantity",component:"div"})]})]}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(j.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,C.jsxs)(g.Z,{value:O,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,C.jsx)(m.Z,{value:!0,onChange:function(){F(!0)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,C.jsx)(m.Z,{value:!1,onChange:function(){F(!1)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u041d\u0456"})]})]}),O&&(0,C.jsxs)(Z.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.ob,{name:"discount",type:"number"}),(0,C.jsx)(Z.Vv,{name:"discount",component:"div"})]})]}),(0,C.jsxs)(Z.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,C.jsx)(Z.xu,{children:(0,C.jsx)(Z.ob,{name:"category",type:"text",value:V,disabled:!0})})]}),"null"!==I&&(0,C.jsxs)(Z.__,{children:["\u0422\u0438\u043f",(0,C.jsx)(Z.xu,{children:(0,C.jsx)(Z.ob,{name:"type",type:"text",value:I,disabled:!0})})]}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(j.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,C.jsxs)(g.Z,{value:K,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,C.jsx)(m.Z,{value:!0,onChange:function(){L(!0)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,C.jsx)(m.Z,{value:!1,onChange:function(){L(!1)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,C.jsxs)(Z.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,C.jsxs)(Z.xu,{children:[(0,C.jsx)(Z.tH,{name:"information",type:"text",component:"textarea"}),(0,C.jsx)(Z.Vv,{name:"information",component:"div"})]})]}),(0,C.jsxs)(q,{children:[(0,C.jsx)(_,{onClick:function(){e(-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,C.jsx)(k,{type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})})})},S=r(4942),V=r(6637),I=r(9347),M=function(){for(var n=(0,c.I0)(),e=(0,a.s0)(),r=(0,c.v9)(d.I1),o=r.codeOfGood,t=r.name,i=r.description,l=r.image,v=r.price,Z=r.quantity,w=r.sale,P=r.popular,k=r.category,_=r.holder,q=r.capacity,z=r.information,M=r.discount,J=(0,u.useState)(l),D=(0,x.Z)(J,2),R=D[0],B=D[1],G=(0,u.useState)(w),W=(0,x.Z)(G,2),H=W[0],O=W[1],F=(0,u.useState)(P),N=(0,x.Z)(F,2),E=N[0],K=N[1],L=(0,u.useState)(_),U=(0,x.Z)(L,2),T=U[0],A=U[1],Q={assembly:"assembly",fpv:"batteries-for-fpv",transport:"batteries-for-transport",toys:"batteries-for-toys"}[k],X={},$=[],Y=Object.keys(q),nn=0;nn<Y.length;nn++){var en={capacity:Y[nn],description:q[Y[nn]].description,price:q[Y[nn]].price,holder:q[Y[nn]].holder};$.push(en)}var rn=function(n){B(n.currentTarget.files)};return(0,C.jsx)(I.W2,{children:(0,C.jsx)(f.J9,{initialValues:{name:t,price:v,description:i,quantity:Z,sale:w,discount:M,information:z,category:k,popular:P,image:l,capacity:q},enctype:"multipart/form-data",validationSchema:V.E,onSubmit:function(r){var t,i=[],c=(0,p.Z)(r.capacity);try{for(c.s();!(t=c.n()).done;){var a=t.value,u=(0,S.Z)({},a.capacity.toString(),{description:a.description,holder:a.holder,price:a.price});i.push(u)}}catch(h){c.e(h)}finally{c.f()}var d=new FormData;d.append("name",r.name),d.append("price",r.price),d.append("description",r.description),d.append("quantity",r.quantity),d.append("sale",H),d.append("discount",r.discount||10),d.append("category",r.category),d.append("capacity",JSON.stringify(i)),d.append("holder",T),d.append("popular",E),d.append("information",r.information);var l,x=(0,p.Z)(R);try{for(x.s();!(l=x.n()).done;){var f=l.value;d.append("files",f)}}catch(h){x.e(h)}finally{x.f()}n((0,s.IF)({formData:d,codeOfGood:o})).then((function(n){"fulfilled"===n.meta.requestStatus&&e("/admin/assortment/".concat(Q))}))},children:function(n){var e=n.values;return(0,C.jsxs)(I.Gq,{children:[(0,C.jsx)(I.Dx,{children:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,C.jsxs)(I.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.ob,{name:"name",type:"text"}),(0,C.jsx)(I.Vv,{name:"name",component:"div"})]})]}),(0,C.jsxs)(I.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.ob,{name:"price",type:"text",placeholder:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434: 4100-9500"}),(0,C.jsx)(I.Vv,{name:"price",component:"div"})]})]}),(0,C.jsxs)(I.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,C.jsx)(I.Vv,{name:"description",component:"div"})]})]}),(0,C.jsxs)(I.xu,{children:[(0,C.jsx)(I.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,C.jsx)(I.II,{accept:"image/*",type:"file",name:"image",onChange:rn,multiple:!0})]}),(0,C.jsxs)(I.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.ob,{name:"quantity",type:"number"}),(0,C.jsx)(I.Vv,{name:"quantity",component:"div"})]})]}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(j.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,C.jsxs)(g.Z,{value:H,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,C.jsx)(m.Z,{value:!0,onChange:function(){O(!0)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,C.jsx)(m.Z,{value:!1,onChange:function(){O(!1)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u041d\u0456"})]})]}),H&&(0,C.jsxs)(I.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.ob,{name:"discount",type:"number"}),(0,C.jsx)(I.Vv,{name:"discount",component:"div"})]})]}),(0,C.jsxs)(I.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.ob,{name:"category",type:"text",value:k,disabled:!0}),(0,C.jsx)(I.Vv,{name:"category",component:"div"})]})]}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(j.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"black"}},children:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432"}),(0,C.jsxs)(g.Z,{value:T,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,C.jsx)(m.Z,{value:!0,onChange:function(){A(!0)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,C.jsx)(m.Z,{value:!1,onChange:function(){A(!1)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,C.jsx)(I.QE,{children:"\u0411\u043b\u043e\u043a \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0454\u043c\u043d\u043e\u0441\u0442\u0456"}),(0,C.jsx)(f.F2,{name:"capacity",children:function(n){var r=n.push,o=n.remove;return(0,C.jsxs)(C.Fragment,{children:[$.map((function(n,r){return(0,C.jsxs)(I.K0,{children:[(0,C.jsxs)(I.Uv,{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.d5,{name:"capacity[".concat(r,"].capacity"),value:n.capacity,type:"number"}),(0,C.jsx)(I.Vv,{name:"capacity[".concat(r,"].capacity"),component:"div"})]})]}),(0,C.jsxs)(I.Uv,{children:["\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.A6,{name:"capacity[".concat(r,"].description"),value:n.description,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!",component:"textarea"}),(0,C.jsx)(I.Vv,{name:"capacity[".concat(r,"].description"),component:"div"})]})]}),(0,C.jsxs)(I.Uv,{children:["\u0426\u0456\u043d\u0430",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.d5,{name:"capacity[".concat(r,"].price"),type:"number",value:n.price}),(0,C.jsx)(I.Vv,{name:"capacity[".concat(r,"].price"),component:"div"})]})]}),T&&(0,C.jsxs)(I.Uv,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.d5,{name:"capacity[".concat(r,"].holder"),type:"number",value:n.holder}),(0,C.jsx)(I.Vv,{name:"capacity[".concat(r,"].holder"),component:"div"})]})]}),(0,C.jsx)(I.uJ,{children:(0,C.jsx)(I.m1,{type:"button",onClick:function(){if(1===e.capacity.length)return window.alert("\u0422\u0438 \u0448\u043e, \u0434\u0443\u0440\u043d\u0438\u0439? \u0404\u0434\u0438\u043d\u0438\u0439 \u0431\u043b\u043e\u043a \u0432\u0456\u043d \u0432\u0438\u0434\u0430\u043b\u044f\u0454.. \u041d\u0430\u0445\u0454\u0440 \u044f \u0439\u043e\u0433\u043e \u043c\u0430\u043b\u044e\u0432\u0430\u043b\u0430 \u0442\u043e\u0434\u0456");o(r)},children:"- \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0431\u043b\u043e\u043a"})})]},r)})),(0,C.jsx)(I.HS,{type:"button",onClick:function(){return r(X)},children:"+ \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0454\u043c\u043d\u0456\u0441\u0442\u044c"})]})}}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(j.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,C.jsxs)(g.Z,{value:E,row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,C.jsx)(m.Z,{value:!0,onChange:function(){K(!0)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,C.jsx)(m.Z,{value:!1,onChange:function(){K(!1)},control:(0,C.jsx)(h.Z,{sx:{"&.Mui-checked":{color:y.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,C.jsxs)(I.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,C.jsxs)(I.uJ,{children:[(0,C.jsx)(I.tH,{name:"information",type:"text",component:"textarea"}),(0,C.jsx)(I.Vv,{name:"information",component:"div"})]})]}),(0,C.jsx)(I.Mm,{type:"submit",children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})}})})},J=function(){var n=(0,c.I0)(),e=(0,c.v9)(d.S3),r=(0,c.v9)(d.TD),o=(0,c.v9)(d.I1).category,t=(0,a.UO)().cardId;(0,u.useEffect)((function(){n((0,s.yO)(t))}),[n,t]);return(0,C.jsxs)(C.Fragment,{children:[e&&(0,C.jsx)(l.p,{}),!e&&!r&&(0,C.jsx)(C.Fragment,{children:["assembly","fpv","transport","toys"].includes(o)?(0,C.jsx)(M,{}):(0,C.jsx)(z,{})})]})}},2745:function(n,e,r){r.d(e,{Ej:function(){return c},I1:function(){return i},Lk:function(){return a},S3:function(){return o},TD:function(){return t},nR:function(){return u}});var o=function(n){return n.products.oneProduct.isLoading},t=function(n){return n.products.oneProduct.error},i=function(n){return n.products.oneProduct.result},c=function(n){return n.products.productsList.isLoading},a=function(n){return n.products.productsList.error},u=function(n){return n.products.productsList.allProducts}}}]);
//# sourceMappingURL=649.2ac845f7.chunk.js.map