"use strict";(self.webpackChunkbattery_fly_admin=self.webpackChunkbattery_fly_admin||[]).push([[258],{2565:function(e,n,t){t.d(n,{T:function(){return P}});var r=t(9439),o=t(2791),i=t(7689),a=t(4420),l=t(2745),c=t(2419),u=t(8471),s=t(503),d=t(4294),f=t(697),p=t(5289),h=t(5661),m=t(7123),v=t(5168),b=t(3833),g=t(7462),y=t(3366),x=t(3786),j=t(7064),k=t(8963),C=t(3329),Z=["label","icon","showInMenu","onClick"],z=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],L=o.forwardRef((function(e,n){var t=(0,k.B)();if(!e.showInMenu){var r,i=e.label,a=e.icon,l=e.onClick,c=(0,y.Z)(e,Z);return(0,C.jsx)(t.slots.baseIconButton,(0,g.Z)({ref:n,size:"small",role:"menuitem","aria-label":i},c,{onClick:function(e){null===l||void 0===l||l(e)}},null===(r=t.slotProps)||void 0===r?void 0:r.baseIconButton,{children:o.cloneElement(a,{fontSize:"small"})}))}var u=e.label,s=e.icon,d=e.onClick,f=e.closeMenuOnClick,p=void 0===f||f,h=e.closeMenu,m=(0,y.Z)(e,z);return(0,C.jsxs)(x.Z,(0,g.Z)({ref:n},m,{onClick:function(e){null===d||void 0===d||d(e),p&&(null===h||void 0===h||h())},children:[s&&(0,C.jsx)(j.Z,{children:s}),u]}))})),M=t(2479),O=t(39),P=function(e){var n=e.category,t=(0,o.useState)(!1),g=(0,r.Z)(t,2),y=g[0],x=g[1],j=(0,a.I0)(),k=(0,v.A)(),Z=(0,i.s0)(),z=(0,a.v9)(l.nR),P=function(e){var n={"\u0413\u043e\u0442\u043e\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457":["assembly","null","zbirka"],"\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432":["fpv","null","zbirka"],"\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0440\u0430\u043d\u043f\u043e\u0440\u0442\u0443":["transport","null","zbirka"],"\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f \u0456\u0433\u0440\u0430\u0448\u043e\u043a":["toys","null","zbirka"],"\u041f\u0440\u0438\u043b\u0430\u0434\u0438":["devices","null","product"],"\u0420\u043e\u0437\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438":["materials","null","product"],"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 18650":["battery","18650","product"],"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 21700":["battery","21700","product"],"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 32650":["battery","32650","product"],"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 Li-Po":["battery","li-po","product"],"\u0410\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0438 LiFePo4":["battery","lifepo4","product"]};if(n[e])return{paramsCategory:n[e][0],paramsType:n[e][1],paramsSubType:n[e][2]}}(n),w=P.paramsCategory,N=P.paramsType,S=P.paramsSubType,F=(0,o.useMemo)((function(){return{includeHeaders:!0,includeOutliers:!0,expand:!0}}),[]);(0,o.useEffect)((function(){k.current&&k.current.autosizeColumns(F)}),[k,F,z,y]);var I=(0,o.useMemo)((function(){return z.map((function(e){return{id:e.codeOfGood,codeOfGood:e.codeOfGood,name:e.name,category:"".concat(e.category," ").concat(e.type?e.type:""),quantity:e.quantity,price:e.price,discount:e.discount,popular:e.popular}}))}),[z]),A=[{field:"codeOfGood",headerName:"\u041a\u043e\u0434 \u0442\u043e\u0432\u0430\u0440\u0443",type:"number",align:"left",headerAlign:"left"},{field:"name",headerName:"\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443"},{field:"category",headerName:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f \u0442\u0430 \u0442\u0438\u043f"},{field:"quantity",headerName:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",type:"number",align:"left",headerAlign:"left"},{field:"price",headerName:"\u0426\u0456\u043d\u0430",type:"number",align:"left",headerAlign:"left"},{field:"discount",headerName:"\u0417\u043d\u0438\u0436\u043a\u0430",type:"number",align:"left",headerAlign:"left",valueFormatter:function(e){return null==e?"":"".concat(e.toLocaleString()," %")}},{field:"popular",headerName:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0439",type:"boolean"},{field:"actions",type:"actions",headerName:"",width:150,cellClassName:"actions",getActions:function(e){var n=e.id;return[(0,C.jsx)(L,{icon:(0,C.jsx)(u.Z,{}),label:"Edit",className:"textPrimary",onClick:E(n),color:"inherit"}),(0,C.jsx)(L,{icon:(0,C.jsx)(s.Z,{}),label:"Delete",onClick:R(n),color:"inherit"})]}}],E=function(e){return function(){Z("/admin/assortment/".concat(e))}},R=function(e){return function(){x(!0)}},T=function(){x(!1)};return(0,C.jsxs)(f.Z,{sx:{height:"100%",maxWidth:"100%"},children:[(0,C.jsxs)(p.Z,{open:y,onClose:T,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.75)"}}},sx:{"& .MuiDialog-paper":{bgcolor:"secondary.main",borderRadius:"18px"}},children:[(0,C.jsx)(h.Z,{id:"alert-dialog-title",children:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u043e\u0432\u0430\u0440?"}),(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(d.Z,{onClick:function(){j()},sx:{color:"text.primary","&:hover":{color:"hoverColor.main"}},children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"}),(0,C.jsx)(d.Z,{onClick:T,sx:{color:"text.primary","&:hover":{color:"hoverColor.main"}},children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]}),(0,C.jsx)(M._,{apiRef:k,rows:I,columns:A,autosizeOptions:F,pageSizeOptions:[10,25,100],hideFooterSelectedRowCount:!0,slots:{toolbar:O.n,pagination:function(e){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d.Z,{variant:"contained",startIcon:(0,C.jsx)(c.Z,{}),onClick:function(){Z("/admin/assortment/".concat(w,"/").concat(N,"/").concat(S))},sx:{marginLeft:"10px",marginRight:"auto"},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440"}),(0,C.jsx)(b.x,{})]})}},slotProps:{toolbar:{showQuickFilter:!0}},initialState:{pagination:{paginationModel:{pageSize:10}}}})]})}},8258:function(e,n,t){t.r(n);var r=t(4420),o=t(2791),i=t(1617),a=t(6570),l=t(5757),c=t(2565),u=t(3329);n.default=function(){var e=(0,r.I0)(),n=(0,a.U)(),t=n.isLoading,s=n.error;return(0,o.useEffect)((function(){e((0,i.KQ)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)(l.p,{}),!t&&!s&&(0,u.jsx)(c.T,{category:"\u0411\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u043b\u044f FPV-\u0434\u0440\u043e\u043d\u0456\u0432"})]})}},2745:function(e,n,t){t.d(n,{Ej:function(){return i},Lk:function(){return a},S3:function(){return r},TD:function(){return o},nR:function(){return l}});var r=function(e){return e.products.oneProduct.isLoading},o=function(e){return e.products.oneProduct.error},i=function(e){return e.products.productsList.isLoading},a=function(e){return e.products.productsList.error},l=function(e){return e.products.productsList.allProducts}},6570:function(e,n,t){t.d(n,{U:function(){return i}});var r=t(4420),o=t(2745),i=function(){return{isLoading:(0,r.v9)(o.Ej),error:(0,r.v9)(o.Lk)}}},2419:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329);n.Z=(0,o.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},503:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329);n.Z=(0,o.default)((0,i.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined")},8471:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(3329);n.Z=(0,o.default)((0,i.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")}}]);
//# sourceMappingURL=258.a4aad1c4.chunk.js.map