"use strict";(self.webpackChunkbattery_fly_admin=self.webpackChunkbattery_fly_admin||[]).push([[57],{8308:function(n,e,r){r.d(e,{I:function(){return o}});var t=r(8007),o=t.Ry().shape({name:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:t.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:t.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").integer(),discount:t.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").integer(),information:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440")})},60:function(n,e,r){r.d(e,{E:function(){return o}});var t=r(8007),o=t.Ry().shape({name:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),price:t.Z_().trim().matches(/^\d+-\d+$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 \u0432\u0456\u0434 \u0456 \u0434\u043e \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0444\u0456\u0441").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443"),description:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443"),quantity:t.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0432\u0430\u0440\u0443").integer(),discount:t.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").integer(),information:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u0442\u043e\u0432\u0430\u0440"),capacity:t.IX().of(t.Ry().shape({capacity:t.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),description:t.Z_().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456"),price:t.Rx().required("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443, \u0437\u0433\u0456\u0434\u043d\u043e \u0434\u0430\u043d\u043e\u0457 \u0454\u043c\u043d\u043e\u0441\u0442\u0456").positive("\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c").integer(),holder:t.Rx().min(0,"\u0427\u0438\u0441\u043b\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0").integer()})).required()})},8927:function(n,e,r){r.d(e,{DK:function(){return Z},Dx:function(){return b},Gq:function(){return j},II:function(){return k},Mm:function(){return q},Vv:function(){return _},W2:function(){return g},__:function(){return y},ob:function(){return w},tH:function(){return P},xu:function(){return v}});var t,o,i,c,a,s,u,d,l,p,x,f=r(168),h=r(8789),m=r(5705),g=h.ZP.div(t||(t=(0,f.Z)(["\n  padding: 40px 110px;\n"]))),b=h.ZP.p(o||(o=(0,f.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),j=(0,h.ZP)(m.l0)(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),y=h.ZP.label(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),Z=h.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),v=h.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),w=(0,h.ZP)(m.gN)(u||(u=(0,f.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),_=(0,h.ZP)(m.Bc)(d||(d=(0,f.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),P=(0,h.ZP)(m.gN)(l||(l=(0,f.Z)(["\n  width: 1060px;\n  height: 300px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),k=h.ZP.input(p||(p=(0,f.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),q=h.ZP.button(x||(x=(0,f.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},5113:function(n,e,r){r.d(e,{A6:function(){return K},DK:function(){return q},Dx:function(){return S},Gq:function(){return C},HS:function(){return U},II:function(){return R},K0:function(){return I},Mm:function(){return N},QE:function(){return k},Uv:function(){return V},Vv:function(){return W},W2:function(){return P},__:function(){return z},d5:function(){return D},m1:function(){return T},ob:function(){return B},tH:function(){return H},uJ:function(){return M},xu:function(){return J}});var t,o,i,c,a,s,u,d,l,p,x,f,h,m,g,b,j,y,Z,v=r(168),w=r(8789),_=r(5705),P=w.ZP.div(t||(t=(0,v.Z)(["\n  padding: 40px 110px;\n"]))),k=w.ZP.p(o||(o=(0,v.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.hoverColor})),q=w.ZP.p(i||(i=(0,v.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),S=w.ZP.p(c||(c=(0,v.Z)(["\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),C=(0,w.ZP)(_.l0)(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),z=w.ZP.label(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n"]))),V=w.ZP.label(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: 20px;\n"]))),M=w.ZP.div(d||(d=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),J=w.ZP.div(l||(l=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n"]))),I=w.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: dashed grey;\n  padding: 10px;\n  gap: 10px;\n"]))),R=w.ZP.input(x||(x=(0,v.Z)(["\n  background: ",";\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n"])),(function(n){return n.theme.colors.greyBackgroundPaper})),B=(0,w.ZP)(_.gN)(f||(f=(0,v.Z)(["\n  width: 1060px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),D=(0,w.ZP)(_.gN)(h||(h=(0,v.Z)(["\n  width: 1000px;\n  height: 34px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),W=(0,w.ZP)(_.Bc)(m||(m=(0,v.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),H=(0,w.ZP)(_.gN)(g||(g=(0,v.Z)(["\n  width: 1060px;\n  height: 300px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),K=(0,w.ZP)(_.gN)(b||(b=(0,v.Z)(["\n  width: 1000px;\n  height: 160px;\n  padding: 4px 8px;\n  color: ",";\n  border: transparent;\n  border-radius: 8px;\n  background: ",";\n  resize: vertical;\n\n  &:focus {\n    outline: none;\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.greyBackgroundPaper}),(function(n){return n.theme.colors.hoverColor})),N=w.ZP.button(j||(j=(0,v.Z)(["\n  width: 200px;\n  height: 60px;\n  padding: 18px 30px;\n  border-radius: 12px;\n  border: none;\n  font-size: 20px;\n  font-weight: 500;\n  background: ",";\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),U=w.ZP.button(y||(y=(0,v.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-bottom: 10px;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor})),T=w.ZP.button(Z||(Z=(0,v.Z)(["\n  width: 170px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  background: ",";\n  margin-right: 20px;\n  margin-left: auto;\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.hoverColor}))},57:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(7762),o=r(9439),i=r(2791),c=r(9421),a=r(7689),s=r(5705),u=r(1419),d=r(4989),l=r(2889),p=r(8096),x=r(7133),f=r(1637),h=r(7451),m=r(8308),g=r(8927),b=r(3329),j=function(n){var e=n.category,r=n.type,j=(0,c.z)(),y=(0,a.s0)(),Z=(0,i.useState)([]),v=(0,o.Z)(Z,2),w=v[0],_=v[1],P=(0,i.useState)(!1),k=(0,o.Z)(P,2),q=k[0],S=k[1],C=(0,i.useState)(!1),z=(0,o.Z)(C,2),V=z[0],M=z[1],J=function(n){if(n.currentTarget.files){var e=Array.from(n.currentTarget.files);_(e)}};return(0,b.jsx)(g.W2,{children:(0,b.jsx)(s.J9,{initialValues:{name:"",price:"",description:"",quantity:"",discount:"",information:""},enctype:"multipart/form-data",validationSchema:m.I,onSubmit:function(n,o){var i=o.setSubmitting,c=new FormData;c.append("name",n.name),c.append("price",n.price),c.append("description",n.description),c.append("quantity",n.quantity),c.append("sale",q.toString()),c.append("discount",q?n.discount:"0"),c.append("category",e||""),c.append("type",("null"===r?e:r)||""),c.append("popular",V.toString()),c.append("information",n.information);var a,s=(0,t.Z)(w);try{for(s.s();!(a=s.n()).done;){var u=a.value;c.append("files",u)}}catch(d){s.e(d)}finally{s.f()}j((0,h.gK)(c)).then((function(n){"fulfilled"===n.meta.requestStatus&&y("/admin/assortment/batteries-".concat(r))})).finally((function(){return i(!1)}))},children:function(n){var t=n.isSubmitting;return(0,b.jsxs)(g.Gq,{children:[(0,b.jsx)(g.Dx,{children:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,b.jsxs)(g.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.ob,{name:"name",type:"text"}),(0,b.jsx)(g.Vv,{name:"name",component:"div"})]})]}),(0,b.jsxs)(g.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.ob,{name:"price",type:"number"}),(0,b.jsx)(g.Vv,{name:"price",component:"div"})]})]}),(0,b.jsxs)(g.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,b.jsx)(g.Vv,{name:"description",component:"div"})]})]}),(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,b.jsx)(g.II,{accept:"image/*",type:"file",name:"files",onChange:J,multiple:!0})]}),(0,b.jsxs)(g.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.ob,{name:"quantity",type:"number"}),(0,b.jsx)(g.Vv,{name:"quantity",component:"div"})]})]}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(x.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,b.jsxs)(l.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,b.jsx)(d.Z,{value:"yes",onChange:function(){S(!0)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,b.jsx)(d.Z,{value:"no",onChange:function(){S(!1)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u041d\u0456"})]})]}),q&&(0,b.jsxs)(g.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.ob,{name:"discount",type:"number"}),(0,b.jsx)(g.Vv,{name:"discount",component:"div"})]})]}),(0,b.jsxs)(g.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,b.jsx)(g.xu,{children:(0,b.jsx)(g.ob,{name:"category",type:"text",value:e,disabled:!0})})]}),"null"!==r&&(0,b.jsxs)(g.__,{children:["\u0422\u0438\u043f",(0,b.jsx)(g.xu,{children:(0,b.jsx)(g.ob,{name:"type",type:"text",value:r,disabled:!0})})]}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(x.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,b.jsxs)(l.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,b.jsx)(d.Z,{value:"yes",onChange:function(){M(!0)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,b.jsx)(d.Z,{value:"no",onChange:function(){M(!1)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,b.jsxs)(g.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,b.jsxs)(g.xu,{children:[(0,b.jsx)(g.tH,{name:"information",type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0430\u0431\u0437\u0430\u0446\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!",component:"textarea"}),(0,b.jsx)(g.Vv,{name:"information",component:"div"})]})]}),(0,b.jsx)(g.Mm,{type:"submit",disabled:t,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"})]})}})})},y=r(4942),Z=r(60),v=r(5113),w=function(n){var e=n.category,r=(0,c.z)(),m=(0,a.s0)(),g=(0,i.useState)([]),j=(0,o.Z)(g,2),w=j[0],_=j[1],P=(0,i.useState)(!1),k=(0,o.Z)(P,2),q=k[0],S=k[1],C=(0,i.useState)(!1),z=(0,o.Z)(C,2),V=z[0],M=z[1],J=(0,i.useState)(!1),I=(0,o.Z)(J,2),R=I[0],B=I[1],D="";e&&(D={assembly:"assembly",fpv:"batteries-for-fpv",transport:"batteries-for-transport",toys:"batteries-for-toys"}[e]);var W={capacity:"",description:"",price:0,holder:0},H=function(n){if(n.currentTarget.files){var e=Array.from(n.currentTarget.files);_(e)}};return(0,b.jsx)(v.W2,{children:(0,b.jsx)(s.J9,{initialValues:{name:"",price:"",description:"",quantity:"",discount:"",information:"",capacity:[W]},validationSchema:Z.E,onSubmit:function(n,o){var i,c=o.setSubmitting,a=[],s=(0,t.Z)(n.capacity);try{for(s.s();!(i=s.n()).done;){var u=i.value,d=(0,y.Z)({},u.capacity.toString(),{description:u.description,holder:u.holder,price:u.price});a.push(d)}}catch(g){s.e(g)}finally{s.f()}var l=new FormData;l.append("name",n.name),l.append("price",n.price),l.append("description",n.description),l.append("quantity",n.quantity),l.append("sale",q.toString()),l.append("discount",q?n.discount:"0"),l.append("category",e||""),l.append("capacity",JSON.stringify(a)),l.append("holder",R.toString()),l.append("popular",V.toString()),l.append("information",n.information);var p,x=(0,t.Z)(w);try{for(x.s();!(p=x.n()).done;){var f=p.value;l.append("files",f)}}catch(g){x.e(g)}finally{x.f()}r((0,h.jp)(l)).then((function(n){"fulfilled"===n.meta.requestStatus&&m("/admin/assortment/".concat(D))})).finally((function(){return c(!1)}))},children:function(n){var r=n.isSubmitting,t=n.values;return(0,b.jsxs)(v.Gq,{children:[(0,b.jsx)(v.Dx,{children:"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,b.jsxs)(v.__,{children:["\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.ob,{name:"name",type:"text"}),(0,b.jsx)(v.Vv,{name:"name",component:"div"})]})]}),(0,b.jsxs)(v.__,{children:["\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.ob,{name:"price",type:"text",placeholder:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434: 4100-9500"}),(0,b.jsx)(v.Vv,{name:"price",component:"div"})]})]}),(0,b.jsxs)(v.__,{children:["\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.tH,{name:"description",type:"text",component:"textarea",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!"}),(0,b.jsx)(v.Vv,{name:"description",component:"div"})]})]}),(0,b.jsxs)(v.xu,{children:[(0,b.jsx)(v.DK,{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0444\u043e\u0442\u043e"}),(0,b.jsx)(v.II,{accept:"image/*",type:"file",name:"image",onChange:H,multiple:!0})]}),(0,b.jsxs)(v.__,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.ob,{name:"quantity",type:"number"}),(0,b.jsx)(v.Vv,{name:"quantity",component:"div"})]})]}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(x.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u0417\u043d\u0438\u0436\u043a\u0430"}),(0,b.jsxs)(l.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,b.jsx)(d.Z,{value:"yes",onChange:function(){S(!0)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,b.jsx)(d.Z,{value:"no",onChange:function(){S(!1)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u041d\u0456"})]})]}),q&&(0,b.jsxs)(v.__,{children:["\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0437\u043d\u0438\u0436\u043a\u0438",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.ob,{name:"discount",type:"number"}),(0,b.jsx)(v.Vv,{name:"discount",component:"div"})]})]}),(0,b.jsxs)(v.__,{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.ob,{name:"category",type:"text",value:e,disabled:!0}),(0,b.jsx)(v.Vv,{name:"category",component:"div"})]})]}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(x.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"black"}},children:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432"}),(0,b.jsxs)(l.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,b.jsx)(d.Z,{value:"yes",onChange:function(){B(!0)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,b.jsx)(d.Z,{value:"no",onChange:function(){B(!1)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,b.jsx)(v.QE,{children:"\u0411\u043b\u043e\u043a \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0454\u043c\u043d\u043e\u0441\u0442\u0456"}),(0,b.jsx)(s.F2,{name:"capacity",children:function(n){var e=n.push,r=n.remove;return(0,b.jsxs)(b.Fragment,{children:[t.capacity.map((function(n,e){return(0,b.jsxs)(v.K0,{children:[(0,b.jsxs)(v.Uv,{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454\u043c\u043d\u043e\u0441\u0442\u0456",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.d5,{name:"capacity[".concat(e,"].capacity"),type:"number"}),(0,b.jsx)(v.Vv,{name:"capacity[".concat(e,"].capacity"),component:"div"})]})]}),(0,b.jsxs)(v.Uv,{children:["\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.A6,{name:"capacity[".concat(e,"].description"),type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0443\u043d\u043a\u0442\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!",component:"textarea"}),(0,b.jsx)(v.Vv,{name:"capacity[".concat(e,"].description"),component:"div"})]})]}),(0,b.jsxs)(v.Uv,{children:["\u0426\u0456\u043d\u0430",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.d5,{name:"capacity[".concat(e,"].price"),type:"number"}),(0,b.jsx)(v.Vv,{name:"capacity[".concat(e,"].price"),component:"div"})]})]}),R&&(0,b.jsxs)(v.Uv,{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0445\u043e\u043b\u0434\u0435\u0440\u0456\u0432",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.d5,{name:"capacity[".concat(e,"].holder"),type:"number"}),(0,b.jsx)(v.Vv,{name:"capacity[".concat(e,"].holder"),component:"div"})]})]}),(0,b.jsx)(v.uJ,{children:(0,b.jsx)(v.m1,{type:"button",onClick:function(){if(1===t.capacity.length)return window.alert("\u0404\u0434\u0438\u043d\u0438\u0439 \u0431\u043b\u043e\u043a \u0432\u0438\u0434\u0430\u043b\u044f\u0442\u0438 \u043d\u0435 \u043c\u043e\u0436\u043d\u0430");r(e)},children:"- \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0431\u043b\u043e\u043a"})})]},e)})),(0,b.jsx)(v.HS,{type:"button",onClick:function(){return e(W)},children:"+ \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0454\u043c\u043d\u0456\u0441\u0442\u044c"})]})}}),(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(x.Z,{id:"demo-row-radio-buttons-group-label",sx:{color:"#1f1f1f",fontSize:"16px",fontWeight:"600","&.Mui-focused":{color:"#1f1f1f"}},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439"}),(0,b.jsxs)(l.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[(0,b.jsx)(d.Z,{value:"yes",onChange:function(){M(!0)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u0422\u0430\u043a"}),(0,b.jsx)(d.Z,{value:"no",onChange:function(){M(!1)},control:(0,b.jsx)(u.Z,{sx:{"&.Mui-checked":{color:f.Z[800]}}}),label:"\u041d\u0456"})]})]}),(0,b.jsxs)(v.__,{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f",(0,b.jsxs)(v.uJ,{children:[(0,b.jsx)(v.tH,{name:"information",type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u0456\u043d\u0446\u0456 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0430\u0431\u0437\u0430\u0446\u0443 \u041e\u0411\u041e\u0412'\u042f\u0417\u041a\u041e\u0412\u041e \u0441\u0442\u0430\u0432\u0442\u0435 \xab;\xbb, \u043a\u0440\u0456\u043c \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0433\u043e!",component:"textarea"}),(0,b.jsx)(v.Vv,{name:"information",component:"div"})]})]}),(0,b.jsx)(v.Mm,{type:"submit",disabled:r,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"})]})}})})},_=function(){var n=(0,a.UO)(),e=n.category,r=n.type;return"zbirka"===n.subType?(0,b.jsx)(w,{category:e}):(0,b.jsx)(j,{category:e,type:r})}}}]);
//# sourceMappingURL=57.6fac24d3.chunk.js.map