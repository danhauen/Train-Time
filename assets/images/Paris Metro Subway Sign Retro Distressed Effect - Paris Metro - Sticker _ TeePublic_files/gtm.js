
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"195",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",0],8,16],")return ",["escape",["macro",0],8,16],".map(function(a){return{quantity:a.quantity,parentId:a.parent_id,productId:a.order_line_item_id,amount_transacted_total:a.unit_price,canvas:a.canvas_name}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart__items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",2],8,16],")return ",["escape",["macro",2],8,16],".map(function(a){return{productId:a.parent_id,variant:a.variant_id,quantity:a.quantity,productImageUrl:a.product_image,productUrl:a.design_url,brand:\"TeePublic\",category:a.canvas_name,productName:a.design_title,price:a.price_usd,properties:{designId:a.id,designOwnerId:a.design_owner_id,designOwnerType:a.design_owner_type,primarTag:a.design_primary_tag,onSale:a.on_sale,discountAmount:a.discount_amount,affiliateId:a.affiliate_id,couponCode:a.coupon_code,\ncampaignId:a.campaign_id,affiliateNetworkId:a.affiliate_network_id}}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.parent_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecomm_prodid:\"",["escape",["macro",4],7],"\",ecomm_pagetype:\"product\",ecomm_totalvalue:\"",["escape",["macro",5],7],"\"};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locale__locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={en:\"1028314697215281\",\"en-GB\":\"1028314697215281\",fr:\"1028314697215281\",it:\"1028314697215281\",pl:\"1028314697215281\"};return a[",["escape",["macro",7],8,16],"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={en:\"5667367\",\"en-UK\":\"17001538\",fr:\"17003528\"};return a[",["escape",["macro",7],8,16],"]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locale__euvisitor"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={\"default\":\"931\",EU:\"3194\"};return\"true\"==",["escape",["macro",10],8,16],"?a.EU:a[\"default\"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";return a.reduce(function(a,b){return a+parseFloat(b.price_usd)},0)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",13],8,16],")return ",["escape",["macro",13],8,16],".map(function(a){return{parentId:a.parent_id,variant:a.variant_id,quantity:a.quantity,productImageUrl:a.product_image,productUrl:a.design_url,category:a.canvas_name,color:a.color,productName:a.design_title,price:a.price,designId:a.id,productId:a.product_id,designOwnerId:a.design_owner_id,designOwnerType:a.design_owner_type,primarTag:a.design_primary_tag,onSale:a.on_sale,discountAmount:a.discount_amount,affiliateId:a.affiliate_id,couponCode:a.coupon_code,\ncampaignId:a.campaign_id,affiliateNetworkId:a.affiliate_network_id}})})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";a=a.split(\" \");var c=a.length,b=[];for(i=0;i\u003Cc;i++)0\u003C=a[i].search(\"gtm\")\u0026\u0026b.push(a[i]);return b})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],";return a=a.querySelector(\"input#query\").value})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=a.closest(\"[data-gtm-tile-position]\");return a.dataset.gtmTilePosition})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelectorAll(\".selectorbox\"),b=[],c=[];for(i=0;i\u003Ca.length;i++)b.push(a[i].value);for(j=0;j\u003Ca.length;j++)c.push(document.querySelector(\"option[value\\x3d'\"+b[j]+\"'\").innerHTML.trim());return c.join(\" | \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=1;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__ab_tests"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",23],8,16],",b=[];for(ab_key in a)-1\u003Cab_key.indexOf(\"search_type\")\u0026\u0026b.push(ab_key);return a[b[0]]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){ab_object=",["escape",["macro",23],8,16],";return JSON.stringify(ab_object)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=a.closest(\"[data-id]\");return a.dataset.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locale__currency_iso"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{currencyCode:",["escape",["macro",27],8,16],",add:{products:[",["escape",["macro",28],8,16],"]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecommerce:{detail:{products:[",["escape",["macro",28],8,16],"]}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.variant"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(",["escape",["macro",31],8,16],").gender;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__controller"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__is_browse_page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__is_search_page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__is_tag_page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__is_buy_page"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){\"home\"==",["escape",["macro",33],8,16],"\u0026\u0026\"index\"==",["escape",["macro",34],8,16],"?search_type=\"Homepage\":\"stores\"==",["escape",["macro",33],8,16],"\u0026\u0026\"show\"==",["escape",["macro",34],8,16],"?search_type=\"Store\":\"search\"==",["escape",["macro",33],8,16],"\u0026\u0026\"search\"==",["escape",["macro",34],8,16],"\u0026\u0026(",["escape",["macro",35],8,16],"?search_type=\"Browse\":",["escape",["macro",36],8,16],"\u0026\u0026",["escape",["macro",37],8,16],"?search_type=\"Search \\x26 Tag\":",["escape",["macro",36],8,16],"?search_type=\"Search\":",["escape",["macro",37],8,16],"\u0026\u0026(search_type=\"Tag\"));",["escape",["macro",38],8,16],"\u0026\u0026(search_type=\"Buy\");return search_type})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__designer_ua_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__designer_ua_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",40],8,16],")return\"",["escape",["macro",40],7],"\";if(",["escape",["macro",41],8,16],")return\"",["escape",["macro",41],7],"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.innerWidth;return a=599\u003E=a?\"mobile\":820\u003E=a?\"tablet\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=a.closest(\"[data-id]\");return a.dataset})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locale__gdprcookie"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_subtotal_usd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_email_sha1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_total_usd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__canvas_canonical_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__user_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__canvas"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__tag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__query"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__account_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__signed_in"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__user_is_artist"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":"UA-39467830-1",
      "vtp_map":["list",["map","key","staging.teepublic.com","value","UA-39467830-3"],["map","key","www.teepublic.com","value","UA-39467830-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",22]],["map","fieldName","transport","value","beacon"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","5","group",["macro",56]],["map","index","1","group",["macro",33]],["map","index","2","group",["macro",39]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",57]],["map","index","3","dimension",["macro",58]],["map","index","4","dimension",["macro",59]],["map","index","5","dimension",["macro",60]],["map","index","6","dimension",["macro",24]],["map","index","7","dimension",["macro",61]],["map","index","8","dimension",["macro",62]],["map","index","9","dimension",["macro",25]],["map","index","10","dimension",["macro",10]],["map","index","11","dimension",["macro",63]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cookieSetting"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"uploaderFunnelSelected"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__email_sha1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gtmFilterType"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__search_type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];search_type=\"",["escape",["macro",39],7],"\";null!=",["escape",["macro",76],8,16],"\u0026\u0026(search_type+=\" - ",["escape",["macro",76],7],"\");tile_canvas=void 0==",["escape",["macro",58],8,16],"?\"T-Shirt\":\"",["escape",["macro",58],7],"\";$(\".m-tiles__tile\").each(function(b){a.push({name:$(this).attr(\"data-gtm-design-title\"),id:parseInt($(this).attr(\"data-id\")),price:parseFloat($(this).attr(\"data-gtm-price\")),brand:$(this).attr(\"data-gtm-designer-name\"),category:tile_canvas,list:search_type,position:parseInt($(this).attr(\"data-gtm-tile-position\")),\non_sale:$(this).attr(\"data-gtm-on-sale\")})});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",77],8,16],";a=a[",["escape",["macro",20],8,16],"-1];return a.list})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",77],8,16],";a=a[",["escape",["macro",20],8,16],"-1];return{ecommerce:{click:{actionField:{list:",["escape",["macro",78],8,16],"},products:[a]}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__has_empty_results"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gtmFitlerSort"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gtmHeaderLinkText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.gtmFooterLinkText"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",85],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{impressions:",["escape",["macro",77],8,16],"}};return a})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__referring_affiliate_ua_id"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__parent_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__design_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__canvas_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__variant_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__mock_image"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"TeePublic",
      "vtp_name":"products.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__canvas"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design_color"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__design_title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__primary_tag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__owner_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__owner_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__on_sale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user__username"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"shareasaleSSCID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_usd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_tax_usd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"removedItem"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":"16913",
      "vtp_map":["list",["map","key","staging.teepublic.com","value","16824"],["map","key","www.teepublic.com","value","16913"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_impact_radius_click_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_country_iso3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_shipping_in_currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_state"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipped_to"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_address1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_address2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.order_shipping_postcode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__base_url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__domain"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request__request_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search__page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__store_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__owner_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__owner_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__has_avatar"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"store__has_banner"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],".map(function(a){return{productId:a.product_id,quantity:a.quantity,price:a.unit_price,properties:{}}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cartAddedItem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewChange"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_uid"
    },{
      "function":"__vis",
      "vtp_elementSelector":".gtmSearchNoResults",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"design__price_usd"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue_usd"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"NKG6CLOO2FC75ED6R2CQCV\";adroll_pix_id=\"34KT2OXNXJBWZLO2KVUHZP\";(function(){var b=window.onload;window.onload=function(){__adroll_loaded=!0;var a=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";a.setAttribute(\"async\",\"true\");a.type=\"text\/javascript\";a.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(a);b\u0026\u0026b()}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=a.createElement(\"script\");b.src=a.location.protocol+\"\/\/bounceexchange.com\/tag\/",["escape",["macro",11],7],"\/i.js\";b.async=!0;a.getElementsByTagName(\"head\")[0].appendChild(b)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",6],
      "vtp_conversionId":"981615718",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",48],
      "vtp_enableRdpCheckbox":false,
      "tag_id":13
    },{
      "function":"__ts",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_position":"BOTTOM_RIGHT",
      "vtp_locale":"en_US",
      "vtp_trustedStoresAccountId":"700039",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_goalValue":["macro",50],
      "vtp_tagId":["macro",9],
      "vtp_uetqName":"uetq",
      "vtp_eventType":"VARIABLE_REVENUE",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"981615718",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",48],
      "vtp_enableRdpCheckbox":false,
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_conversionLabel":"9MufCIjA13IQ5oiJ1AM",
      "vtp_url":["macro",48],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":42
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_conversionLabel":"7O07CKnBg3MQ5oiJ1AM",
      "vtp_url":["macro",48],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":43
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",51],
      "vtp_conversionValue":["macro",52],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"981615718",
      "vtp_currencyCode":["macro",53],
      "vtp_conversionLabel":"xPcnCPe1qmAQ5oiJ1AM",
      "vtp_url":["macro",48],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":46
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"34KT2OXNXJBWZLO2KVUHZP",
      "vtp_customerId":"NKG6CLOO2FC75ED6R2CQCV",
      "vtp_conversionValueCurrency":"USD",
      "vtp_customData":["list",["map","key","order_id","value",["macro",51]],["map","key","user_id","value",["macro",54]]],
      "vtp_conversionValueInDollars":["macro",55],
      "tag_id":50
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cookies Setting",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["macro",67],
      "vtp_eventLabel":["template","Eu Session: ",["macro",10]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Learn More Infographic Click",
      "vtp_eventLabel":"Infographic",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Uploader",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Funnel Selection",
      "vtp_eventLabel":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"count0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"aw_ds0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9203424",
      "vtp_ordinalStandard":["macro",70],
      "vtp_url":["macro",48],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":91
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"count0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"aw_dc1",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9203424",
      "vtp_ordinalStandard":["macro",70],
      "vtp_url":["macro",48],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":92
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_revenue":["macro",55],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",51],
      "vtp_enableProductReporting":true,
      "vtp_groupTag":"sales0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"aw_ds0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_dataSource":"DATA_LAYER",
      "vtp_advertiserId":"9203424",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",48],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Size Chart",
      "vtp_eventLabel":"Open",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__pntr",
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614436790149",
      "vtp_em":["macro",71],
      "vtp_eventName":"pagevisit",
      "tag_id":103
    },{
      "function":"__pntr",
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614436790149",
      "vtp_em":["macro",71],
      "vtp_eventName":"checkout",
      "vtp_currency":"USD",
      "vtp_value":["macro",55],
      "vtp_order_id":["macro",51],
      "tag_id":104
    },{
      "function":"__pntr",
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614436790149",
      "vtp_em":["macro",71],
      "vtp_eventName":"addtocart",
      "vtp_currency":"USD",
      "vtp_value":["macro",12],
      "tag_id":105
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filters",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["template","Clicked filter by ",["macro",73]],
      "vtp_eventLabel":["template","Filter value: ",["macro",74]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["template","Searched from ",["macro",16]],
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",79],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Product",
      "vtp_eventLabel":["template","Position ",["macro",20]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Zero Search Results",
      "vtp_eventLabel":["macro",60],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":109
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Error Pages",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["template","ref: ",["macro",81]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",30],
      "vtp_eventCategory":"Product Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",49],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Listings",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Sorted Listings",
      "vtp_eventLabel":["template","Sorted By ",["macro",82]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":112
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Header",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Navigation Bar",
      "vtp_eventLabel":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Footer Links",
      "vtp_eventLabel":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Shared via Social Icon",
      "vtp_eventLabel":["macro",86],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",89],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Designers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Download Commission Report",
      "vtp_eventLabel":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Affiliates",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Make $1000 Button",
      "vtp_eventLabel":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Header",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Utility Bar",
      "vtp_eventLabel":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Designers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Make $1000 Button",
      "vtp_eventLabel":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Designers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Upload a Design",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Completed Transaction",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",29],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Added to Cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":127
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",90],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Product Impression",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":128
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Viewed Product Details",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":129
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Started Checkout",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Checkout",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Choose Paypal Radio Button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":153
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":155
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":156
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":167
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Attentive",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Attentive Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":172
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Attentive",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Attentive Impression",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":176
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Product Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",66],
      "vtp_eventAction":"Clicked Similar Product",
      "vtp_eventLabel":"Open",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":178
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_156",
      "tag_id":181
    },{
      "function":"__cl",
      "tag_id":182
    },{
      "function":"__cl",
      "tag_id":183
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_248",
      "tag_id":184
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_249",
      "tag_id":185
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_250",
      "tag_id":186
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".gtmErrorPage",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"7128454_252",
      "tag_id":187
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_253",
      "tag_id":188
    },{
      "function":"__cl",
      "tag_id":189
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_256",
      "tag_id":190
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_257",
      "tag_id":191
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_258",
      "tag_id":192
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_260",
      "tag_id":193
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_261",
      "tag_id":194
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_262",
      "tag_id":195
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7128454_263",
      "tag_id":196
    },{
      "function":"__cl",
      "tag_id":197
    },{
      "function":"__cl",
      "tag_id":198
    },{
      "function":"__cl",
      "tag_id":199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.attn.tv\/teepublic\/dtag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async=\"true\" data-gtmsrc=\"https:\/\/secure.adnxs.com\/seg?add=924362\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5667367\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=",["escape",["macro",9],12],"\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",8],8,16],");fbq(\"track\",\"PageView\");fbq(\"init\",\"748798701854552\");fbq(\"trackCustom\",\"TeePubPageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=748798701854552\u0026amp;ev=TeePubPageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1028314697215281\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar bouncex=window.bouncex||[];bouncex.push([\"conversion\",{order_id:\"",["escape",["macro",51],7],"\",amount:\"",["escape",["macro",50],7],"\",email:\"",["escape",["macro",94],7],"\",goal:\"purchase\"}]);\u003C\/script\u003E\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" style=\"display:none;\" src=\"\/\/api.bounceexchange.com\/capture\/convert2.gif?website_id=",["escape",["macro",11],12],"\u0026amp;order_id=",["escape",["macro",51],12],"\u0026amp;amount=",["escape",["macro",50],12],"\u0026amp;email=",["escape",["macro",95],12],"\u0026amp;goal=purchase\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:773134,hjsv:6};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:[\"",["escape",["macro",96],7],"\"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async\u003Evar design_ids=jQuery(\".jsDesignContainer\").map(function(){return jQuery(this).attr(\"data-id\")}).get();content_ids=[];\"T-Shirt\"==",["escape",["macro",58],8,16],"\u0026\u0026(content_ids=design_ids.map(function(a){return a+\"D1V\"}));fbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",60],7],"\",content_ids:content_ids,content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "priority":0,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/d2wy8f7a9ursnm.cloudfront.net\/v4\/bugsnag.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.bugsnagClient=bugsnag(\"44ed5cacb5f1b65d2f3a4db778faec79\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _sd=_sd||{};_sd.partnerId=\"9772e57f2ea9591fb685c8f663851474cfa1d174\";_sd.domain=\".teepublic.com\";_sd.environment=\"prod\";\n(function(b,c,e){w=window;d=document;n=\"script\";l=Array.prototype.slice;w._sd.lib=c;w.SimonData=b;w[b]||(w[b]={send:function(){(w[b].q=w[b].q||[]).push(arguments)},identify:function(){a=l.call(arguments);a.unshift(\"identify\");w[b].send.apply(null,a)},track:function(){a=l.call(arguments);a.unshift(\"track\");w[b].send.apply(null,a)}});t=d.createElement(n);t.src=c;o=d.getElementsByTagName(e)[0];o.parentNode.insertBefore(t,o)})(\"sd\",\"\/\/static.simonsignal.com\/simon-tee-min.js\",\"script\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ua=navigator.userAgent.toLowerCase(),platform=navigator.platform.toLowerCase();platformName=ua.match(\/ip(?:ad|od|hone)\/)?\"ios\":(ua.match(\/(?:webos|android)\/)||platform.match(\/mac|win|linux\/)||[\"other\"])[0];\n(isMobile=\/ios|android|webos\/.test(platformName))||window.zE||function(a,d,e){var b=window.zE=window.zEmbed=function(){b._.push(arguments)},c=b.s=a.createElement(d);a=a.getElementsByTagName(d)[0];b.set=function(a){b.set._.push(a)};b._=[];b.set._=[];c.async=!0;c.setAttribute(\"charset\",\"utf-8\");c.src=\"https:\/\/static.zdassets.com\/ekr\/asset_composer.js?key\\x3d\"+e;b.t=+new Date;c.type=\"text\/javascript\";a.parentNode.insertBefore(c,a)}(document,\"script\",\"bda6a171-44b9-40cd-be3e-370783d2235f\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_custom_data={product_id:\"",["escape",["macro",97],7],"D",["escape",["macro",98],7],"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"49f99b82\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"product_view\",{productId:\"",["escape",["macro",4],7],"\",variant:\"",["escape",["macro",99],7],"\",productImageUrl:\"",["escape",["macro",100],7],"\",productUrl:\"",["escape",["macro",101],7],"\",brand:\"",["escape",["macro",102],7],"\",category:\"",["escape",["macro",103],7],"\",color:\"",["escape",["macro",104],7],"\",productName:\"",["escape",["macro",105],7],"\",price:",["escape",["macro",5],8,16],",properties:{primaryTag:\"",["escape",["macro",106],7],"\",designOwner:\"",["escape",["macro",107],7],"\",designOwnerId:\"",["escape",["macro",108],7],"\",designOnSale:\"",["escape",["macro",109],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.identify(\"",["escape",["macro",57],7],"\",{email:\"",["escape",["macro",110],7],"\",userId:\"",["escape",["macro",57],7],"\",username:\"",["escape",["macro",111],7],"\",properties:{accountType:\"",["escape",["macro",61],7],"\",userIsArtist:\"",["escape",["macro",63],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_content_ids=JSON.stringify(",["escape",["macro",1],8,16],".map(function(a){return a.parentId})),fb_param={pixel_id:\"6014467623590\",value:\"",["escape",["macro",52],7],"\",currency:\"",["escape",["macro",53],7],"\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();fbq(\"init\",\"",["escape",["macro",8],7],"\",{em:\"",["escape",["macro",94],7],"\"});\nfbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",52],7],"\",currency:\"",["escape",["macro",53],7],"\",content_type:\"product\",content_ids:fb_content_ids});fbq(\"init\",\"748798701854552\");fbq(\"trackCustom\",\"TeePubPurchase\");\u003C\/script\u003E\n  \n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=748798701854552\u0026amp;ev=TeePubPurchase\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n  \n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6014467623590\u0026amp;value=\u0026lt;%= value_of_cart %\u0026gt;\u0026amp;currency=\u0026#39;",["escape",["macro",53],12],"\u0026#39;\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"https:\/\/shareasale.com\/sale.cfm?amount=",["escape",["macro",52],12],"\u0026amp;tracking=",["escape",["macro",51],12],"\u0026amp;transtype=sale\u0026amp;storeID=2\u0026amp;merchantID=5108\u0026amp;sscid=",["escape",["macro",112],12],"\" width=\"1\" height=\"1\"\u003E\n\n\u003Cscript defer async type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/shareasale-analytics.com\/j.js\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/secure.adnxs.com\/px?id=96589\u0026amp;seg=924366\u0026amp;order_id=",["escape",["macro",51],12],"\u0026amp;value=",["escape",["macro",55],12],"\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.identify(\"",["escape",["macro",95],7],"\",{email:\"",["escape",["macro",95],7],"\"});sd.track(\"complete_transaction\",{transactionId:\"",["escape",["macro",51],7],"\",revenue:",["escape",["macro",55],8,16],",shipping:",["escape",["macro",113],8,16],",tax:",["escape",["macro",114],8,16],",promotion:\"",["escape",["macro",115],7],"\",cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"cart\",{cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar removedCartItem=",["escape",["macro",116],8,16],";\nsd.track(\"remove_from_cart\",{productId:removedCartItem.parent_id,variant:removedCartItem.variant_id,quantity:removedCartItem.quantity,brand:\"TeePublic\",category:removedCartItem.canvas_name,color:removedCartItem.color,productName:removedCartItem.design_title,price:removedCartItem.price_usd,properties:{designId:removedCartItem.design_id,primaryTag:removedCartItem.design_primary_tag,designOwnerType:removedCartItem.design_owner_type,designOwnerId:removedCartItem.design_owner_id,onSale:removedCartItem.on_sale,\nsource_location:\"Dropdown\",discountAmount:removedCartItem.discount_amount,affiliateId:removedCartItem.affiliate_id,couponCode:removedCartItem.coupon_code,campaignId:removedCartItem.campaign_id,affiliateNetworkId:removedCartItem.affiliate_network_id},cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esd.track(\"remove_from_cart\",{productId:\"",["escape",["macro",116],7],".parent_id\",variant:\"",["escape",["macro",116],7],".variant_id\",quantity:",["escape",["macro",116],8,16],".quantity,brand:\"TeePublic\",category:\"",["escape",["macro",116],7],".canvas_name\",color:\"",["escape",["macro",116],7],".color\",productName:\"",["escape",["macro",116],7],".design_title\",price:",["escape",["macro",116],8,16],".price_usd,properties:{designId:",["escape",["macro",116],8,16],".design_id,primaryTag:\"",["escape",["macro",116],7],".design_primary_tag\",designOwnerType:\"",["escape",["macro",116],7],".design_owner_type\",\ndesignOwnerId:\"",["escape",["macro",116],7],".design_owner_id\",onSale:\"",["escape",["macro",116],7],".on_sale\",source_location:\"Cart\",discountAmount:",["escape",["macro",116],8,16],".discount_amount,affiliateId:",["escape",["macro",116],8,16],".affiliate_id,couponCode:\"",["escape",["macro",116],7],".coupon_code\",campaignId:",["escape",["macro",116],8,16],".campaign_id,affiliateNetworkId:",["escape",["macro",116],8,16],".affiliate_network_id},cartItems:",["escape",["macro",3],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar addedCartItem=",["escape",["macro",28],8,16],",existingCart=",["escape",["macro",3],8,16],";existingCart.splice(-1,1);\nexistingCart.push({productId:\"",["escape",["macro",4],7],"\",variant:addedCartItem.variant_id,quantity:addedCartItem.quantity,productImageUrl:addedCartItem.product_image,productUrl:",["escape",["macro",101],8,16],",brand:\"TeePublic\",category:\"",["escape",["macro",103],7],"\",productName:\"",["escape",["macro",105],7],"\",price:addedCartItem.price,properties:{designId:",["escape",["macro",97],8,16],",primaryTag:\"",["escape",["macro",106],7],"\",designOwnerType:\"",["escape",["macro",107],7],"\",designOwnerId:",["escape",["macro",108],8,16],",onSale:",["escape",["macro",109],8,16],",source_location:\"Product\"}});\nsd.track(\"add_to_cart\",{productId:\"",["escape",["macro",4],7],"\",variant:addedCartItem.variant_id,quantity:addedCartItem.quantity,productImageUrl:addedCartItem.product_image,productUrl:",["escape",["macro",101],8,16],",brand:\"TeePublic\",category:\"",["escape",["macro",103],7],"\",productName:\"",["escape",["macro",105],7],"\",price:addedCartItem.price,properties:{designId:",["escape",["macro",97],8,16],",primaryTag:\"",["escape",["macro",106],7],"\",designOwnerType:\"",["escape",["macro",107],7],"\",designOwnerId:",["escape",["macro",108],8,16],",onSale:",["escape",["macro",109],8,16],",\nsource_location:\"Product\"},cartItems:existingCart});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",105],7],"\",content_ids:[\"",["escape",["macro",97],7],"D",["escape",["macro",98],7],"V\"],content_type:\"product\",value:\"",["escape",["macro",5],7],"\",currency:\"",["escape",["macro",27],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__adroll.record_user({product_id:\"",["escape",["macro",4],7],"\",product_action:\"AddToCart\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Esd.identify(\"\"+jQuery(\".bx-input\").val(),{email:jQuery(\".bx-input\").val(),properties:{source:\"BounceX Leave Intent\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ecart=",["escape",["macro",2],8,16],";subtotal=",["escape",["macro",12],8,16],";num_items=0;items=[];for(var idx=0;idx\u003C=cart.length-1;idx++)num_items+=cart[idx].quantity,items.push(cart[idx].parent_id);fbq(\"track\",\"InitiateCheckout\",{value:subtotal,currency:\"USD\",content_ids:items,num_items:num_items});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar shareasaleSSCID=shareasaleGetParameterByName(\"sscid\");function shareasaleSetCookie(a,b,c,d,e){if(a\u0026\u0026b){var f;d=d?\"; path\\x3d\"+d:\"\";e=e?\"; domain\\x3d\"+e:\"\";var g=\"\";c\u0026\u0026((f=new Date).setTime(f.getTime()+c),g=\"; expires\\x3d\"+f.toUTCString());document.cookie=a+\"\\x3d\"+b+g+d+e}}\nfunction shareasaleGetParameterByName(a,b){b||(b=window.location.href);a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var c=(new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\")).exec(b);return c?c[2]?decodeURIComponent(c[2].replace(\/\\+\/g,\" \")):\"\":null}shareasaleSSCID\u0026\u0026shareasaleSetCookie(\"shareasaleSSCID\",shareasaleSSCID,94670778E4,\"\/\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "setup_tags":["list",["tag",86,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar adroll_custom_data;adroll_custom_data=adroll_custom_data||{};adroll_custom_data.cart_value=",["escape",["macro",12],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,f,g,d,c,e){var b=d.namespace||\"deepchannel\";a[b]||(a.__dc__=a.__dc__||[],a[b]=function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].__r=null,a[b].ready=function(c){a[b].__r=c},a.__dc__.c=d,a[b].q=a[b].q||[],c=f.createElement(g),e=f.getElementsByTagName(g)[0],c.async=1,c.src=\"\/\/cdn.deepchannel.com\/lib\/js\/dc-\"+d.app_id+\".js\",e.parentNode.insertBefore(c,e))})(window,document,\"script\",{app_id:",["escape",["macro",117],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"product_view\",{designId:",["escape",["macro",97],8,16],",productImageUrl:\"",["escape",["macro",100],7],"\",productUrl:\"",["escape",["macro",101],7],"\",canvasId:",["escape",["macro",98],8,16],",designTitle:\"",["escape",["macro",105],7],"\",price:",["escape",["macro",5],8,16],",primaryTag:\"",["escape",["macro",106],7],"\",designOwnerType:\"",["escape",["macro",107],7],"\",designOwnerId:",["escape",["macro",108],8,16],",designOnSale:",["escape",["macro",109],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"complete_transaction\",{orderId:\"",["escape",["macro",51],7],"\",revenue:",["escape",["macro",52],8,16],",revenueUsd:",["escape",["macro",52],8,16],",currency_iso_code:\"",["escape",["macro",53],7],"\",shipping:",["escape",["macro",118],8,16],",tax:",["escape",["macro",119],8,16],",promotion:\"",["escape",["macro",115],7],"\",cartItems:",["escape",["macro",14],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"get\",\"identity\")!==",["escape",["macro",120],8,16],"\u0026\u0026deepchannel(\"identify\",",["escape",["macro",120],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",109,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async\u003Eire(\"identify\",{customerId:",["escape",["macro",57],8,16],",customerEmail:",["escape",["macro",71],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A1381786-4ad9-4078-9166-54613aad1b041.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "setup_tags":["list",["tag",109,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar irClickId=",["escape",["macro",121],8,16],",items=",["escape",["macro",1],8,16],".map(function(a){return{subTotal:a.amount_transacted_total,category:a.canvas,sku:a.product_id,quantity:a.quantity}});irClickId\u0026\u00261\u003C=irClickId.trim().length\u0026\u0026ire(\"trackConversion\",17017,{orderId:",["escape",["macro",51],8,16],",clickId:irClickId,customerId:",["escape",["macro",54],8,16],",customerEmail:",["escape",["macro",54],8,16],",customerCountry:",["escape",["macro",122],8,16],",currencyCode:",["escape",["macro",53],8,16],",orderPromoCode:",["escape",["macro",115],8,16],",items:items},{verifySiteDefinitionMatch:!0});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a[b]||(a.GlobalSnowplowNamespace=a.GlobalSnowplowNamespace||[],a.GlobalSnowplowNamespace.push(b),a[b]=function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].q=a[b].q||[],c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=1,c.src=g,d.parentNode.insertBefore(c,d))})(window,document,\"script\",\"\/\/d18p8z0ptb8qab.cloudfront.net\/lp.js\",\"letterpress\");\nwindow.letterpress(\"newTracker\",\"mycljcoll\",\"t.getletterpress.com\",{appId:\"fbmpymzj\",discoverRootDomain:!0,forceSecureTracker:\"\",contexts:{webPage:!0,performanceTiming:!0,gaCookies:!0,geolocation:!1}});window.letterpress(\"trackPageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "setup_tags":["list",["tag",111,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.letterpress(\"addTrans\",",["escape",["macro",51],8,16],",\"TeePublic\",",["escape",["macro",55],8,16],",",["escape",["macro",114],8,16],",",["escape",["macro",123],8,16],",",["escape",["macro",124],8,16],",",["escape",["macro",125],8,16],",",["escape",["macro",122],8,16],",\"USD\",[{schema:\"iglu:com.getletterpress\/address\/jsonschema\/1-0-0\",data:{name:",["escape",["macro",126],8,16],",street:",["escape",["macro",127],8,16],",street_2:",["escape",["macro",128],8,16],",zip:",["escape",["macro",129],8,16],",city:",["escape",["macro",124],8,16],",state:",["escape",["macro",125],8,16],",country:",["escape",["macro",122],8,16],",email:",["escape",["macro",95],8,16],"}}]);\n",["escape",["macro",1],8,16],".forEach(function(a){window.letterpress(\"addItem\",",["escape",["macro",51],8,16],",a.product_id,a.canvas,a.parent_id,a.unit_price_in_currency,a.quantity,\"USD\")});window.letterpress(\"trackTrans\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar adroll_custom_data=adroll_custom_data||{};adroll_custom_data.order_id=",["escape",["macro",51],8,16],";adroll_custom_data.user_id=",["escape",["macro",54],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"pageview\",{locale__currency_iso:",["escape",["macro",27],8,16],",locale__euvisitor:",["escape",["macro",10],8,16],",locale__gdprcookie:",["escape",["macro",47],8,16],",locale__locale:",["escape",["macro",7],8,16],",request__ab_tests:",["escape",["macro",25],8,16],",request__action:",["escape",["macro",34],8,16],",request__base_url:",["escape",["macro",130],8,16],",request__controller:",["escape",["macro",33],8,16],",request__domain:",["escape",["macro",131],8,16],",user__account_type:",["escape",["macro",61],8,16],",user__email:",["escape",["macro",110],8,16],",user__email_sha1:",["escape",["macro",71],8,16],",user__signed_in:",["escape",["macro",62],8,16],",\nuser__user_id:",["escape",["macro",57],8,16],",user__user_is_artist:",["escape",["macro",63],8,16],",user__username:",["escape",["macro",111],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"filter_listings\",{filter_type:",["escape",["macro",73],8,16],",filter_value:",["escape",["macro",74],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_search\",{search_location:",["escape",["macro",16],8,16],",search_term:",["escape",["macro",18],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_sort\",{sort_type:",["escape",["macro",82],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"get\",\"identity\")!==",["escape",["macro",110],8,16],"\u0026\u0026deepchannel(\"identify\",",["escape",["macro",110],8,16],");\u003C\/script\u003E    \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_navbar\",{nav_text:",["escape",["macro",83],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_footer\",{footer_text:",["escape",["macro",84],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"submit_email\",{submit_location:",["escape",["macro",89],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_social_share\",{social_site:",["escape",["macro",86],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"account_create\",{user_account_type:",["escape",["macro",61],8,16],",user_email:",["escape",["macro",110],8,16],",user_email_sha1:",["escape",["macro",71],8,16],",user_id:",["escape",["macro",57],8,16],",user_name:",["escape",["macro",111],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"account_login\",{user_account_type:",["escape",["macro",61],8,16],",user_email:",["escape",["macro",110],8,16],",user_email_sha1:",["escape",["macro",71],8,16],",user_id:",["escape",["macro",57],8,16],",user_name:",["escape",["macro",111],8,16],"});\u003C\/script\u003E\n              \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"download_commission\");\u003C\/script\u003E\n              \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"click_1000\");\u003C\/script\u003E\n              \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar addedCartItem=",["escape",["macro",132],8,16],";\ndeepchannel(\"track\",\"add_to_cart\",{canvas:\"",["escape",["macro",56],7],"\",canvas_id:",["escape",["macro",98],8,16],",quantity:addedCartItem.quantity,product_id:addedCartItem.product_id,parent_id:addedCartItem.parent_id,currency_iso_code:\"",["escape",["macro",53],7],"\",price:addedCartItem.price,price_usd:addedCartItem.price_usd,name:\"",["escape",["macro",105],7],"\",id:",["escape",["macro",97],8,16],",brand:addedCartItem.brand,product_image:addedCartItem.product_image,variant_id:addedCartItem.variant_id,variant:addedCartItem.variant,design_owner_id:",["escape",["macro",108],8,16],",\ndesign_primary_tag:\"",["escape",["macro",106],7],"\",design_on_sale:",["escape",["macro",109],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBKDLS915IEMF2A6VGQF0\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g){(function(a,b,f,d,c){c=a[d]=a[d]||{};c._q=[];var e=[\"initialize\",\"identify\",\"updateOptions\",\"pageLoad\"];a=0;for(d=e.length;a\u003Cd;++a)(function(a){c[a]=c[a]||function(){c._q[a===e[0]?\"unshift\":\"push\"]([a].concat([].slice.call(arguments,0)))}})(e[a]);a=b.createElement(f);a.async=!0;a.src=\"https:\/\/cdn.pendo.io\/agent\/static\/\"+g+\"\/pendo.js\";b=b.getElementsByTagName(f)[0];b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"pendo\");pendo.initialize({visitor:{id:\"",["escape",["macro",57],7],"\",\nemail:\"",["escape",["macro",110],7],"\",role:\"",["escape",["macro",61],7],"\"},account:{}})})(\"2be81096-e90e-4ba7-4ca5-07c07d5add4f\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar arr=",["escape",["macro",77],8,16],";\nfor(i=0;i\u003Carr.length;i++)isOnSale=\"true\"==arr[i].on_sale,search_query=null==",["escape",["macro",60],8,16],"?\"\":\"",["escape",["macro",60],7],"\",search_tag=null==",["escape",["macro",59],8,16],"?\"\":\"",["escape",["macro",59],7],"\",tile_data={design_id:arr[i].id,design_title:arr[i].name,canvas:arr[i].category,artist_name:arr[i].brand,on_sale:isOnSale,price:arr[i].price,price_currency:\"",["escape",["macro",27],7],"\",tile_position:arr[i].position,search_query:search_query,search_id:\"",["escape",["macro",133],7],"\",tag:search_tag,page_number:",["escape",["macro",134],8,16],",\nsearch_listing_page:\"",["escape",["macro",39],7],"\",search_type:\"",["escape",["macro",24],7],"\"},deepchannel(\"track\",\"tile_impressions\",tile_data);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"711eb052-b526-489b-baf1-ec31b50c8944\",{user_email:\"",["escape",["macro",110],7],"\"});snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",131,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esnaptr(\"track\",\"ADD_CART\",{item_ids:[\"",["escape",["macro",97],7],"D",["escape",["macro",98],7],"V\"],price:\"",["escape",["macro",5],7],"\",currency:\"",["escape",["macro",27],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",131,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar content_ids=JSON.stringify(",["escape",["macro",1],8,16],".map(function(a){return a.parentId}));snaptr(\"track\",\"PURCHASE\",{currency:\"",["escape",["macro",53],7],"\",price:\"",["escape",["macro",50],7],"\",item_ids:content_ids,transaction_id:\"",["escape",["macro",51],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edeepchannel(\"track\",\"storefront_view\",{storeId:",["escape",["macro",135],8,16],",ownerId:",["escape",["macro",136],8,16],",ownerType:\"",["escape",["macro",137],7],"\",hasAvatar:",["escape",["macro",138],8,16],",hasBanner:",["escape",["macro",139],8,16],",designerUaId:\"",["escape",["macro",41],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esnaptr(\"track\",\"VIEW_CONTENT\",{item_ids:[\"",["escape",["macro",97],7],"D",["escape",["macro",98],7],"V\"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EconversionTag=\"https:\/\/ad.doubleclick.net\/ddm\/adj\/N194202.197812NSO.CODESRV\/B23118921.254304451;sz\\x3d1x2;ord\\x3d\";var randomNumber=Math.floor(1E12*Math.random()+1),scriptTag=document.createElement(\"script\");scriptTag.src=conversionTag+randomNumber+\"?\";scriptTag.language=\"JavaScript1.1\";var insertionNode=document.body.firstChild;insertionNode.parentNode.insertBefore(scriptTag,insertionNode);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar arr=",["escape",["macro",44],8,16],",onSale=\"true\"==arr.gtmOnSale,tile_click={design_title:arr.gtmDesignTitle,artist_name:arr.gtmDesignerName,canvas:\"",["escape",["macro",58],7],"\",price_currency:\"",["escape",["macro",27],7],"\",search_id:\"",["escape",["macro",133],7],"\",search_listing_page:\"",["escape",["macro",39],7],"\",search_query:\"",["escape",["macro",60],7],"\",search_type:\"",["escape",["macro",24],7],"\",on_sale:onSale,price:parseFloat(arr.gtmPrice),primary_tag:arr.gtmPrimaryTag,tile_position:parseInt(arr.gtmTilePosition),design_id:parseInt(arr.id),\npage_number:",["escape",["macro",134],8,16],",tag:\"",["escape",["macro",59],7],"\"};deepchannel(\"track\",\"tile_clicks\",tile_click);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_j6qns\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"AddToCart\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"ViewContent\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.addEventListener(\"load\",function(){window.funnelytics.init(c,!1)});a.src=\"https:\/\/cdn.funnelytics.io\/track.js\";a.type=\"text\/javascript\";a.async=!0;b.parentNode.insertBefore(a,b)})(\"9b7d78a4-6517-4eba-b823-90512a7ad3e1\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"show"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"designs"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"\/manage\/"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"all"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"functional"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"pageLoad"
    },{
      "function":"_sw",
      "arg0":["macro",49],
      "arg1":"\/manage"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"mobile"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/manage\/"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"orders"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"thankyou"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"\/t-shirt\/"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"thank_you"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"affiliates"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/referral"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"designs"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"new"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"artistRegistrationComplete"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"productViewChange"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"cookie-setting"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"jsGarmentInfoModalShow"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"edit"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"design_uploader"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"uploaderFunnelSelection"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"addToCart"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"#gtmSizeChart, #gtmSizeChart *"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmProductFilter, .gtmProductFilter *"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_248($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"search",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_249($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"search_form"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_253($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"[data-gtm-tile-position], [data-gtm-tile-position] *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_250($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_252($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Select a Size"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"^(undefined|null|0|false|NaN|)$",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmSortListing, .gtmSortListing *"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmHeaderLink, .gtmHeaderLink *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_256($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmFooterLink, .gtmFooterLink *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_257($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmFbProductShare, .gtmTwitterProductShare, .gtmPinterestProductShare, .gtmTumblrProductShare, .gtmRedditProductShare, .gtmFbProductShare *, .gtmTwitterProductShare *, .gtmPinterestProductShare *, .gtmTumblrProductShare *, .gtmRedditProductShare *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_258($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"trackEvent"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmArtistCommissionDownload, .gtmAffiliateCommissionDownload, .gtmArtistCommissionDownload *, .gtmAffiliateCommissionDownload *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_260($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".gtmAccountReferralLink, .gtmAccountReferralLink *"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"affiliate"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_261($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".m-head__dropdown-link, .m-head__dropdown-link *"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_262($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"designer"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_263($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".jsUploaderDropzone, .jsUploaderDropzone *"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/edit"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"transactionComplete"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"index"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"stores"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"productDetailImpression"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"checkout"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"#checkout_payment_option_paypal"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/checkout"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"Attentive Click"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"Attentive Impression"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".jsSimilarProductImgs"
    },{
      "function":"_re",
      "arg0":["macro",45],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"new"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"index"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"\/kids-t-shirt"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"\/phone-case"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"\/posters-and-art"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"\/t-shirts"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"design_uploader"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"cart"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"contacts"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"query="
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"page="
    },{
      "function":"_sw",
      "arg0":["macro",34],
      "arg1":"lookup"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"contacts"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"orders"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"Created Account"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"cartRemoveItemHead"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"cart"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"cartRemoveItemCartView"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"bx-form-759526-step-2"
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"(^$|((^|,)7128454_156($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"\\S+",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Subscribed to Newsletter"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"Login"
    },{
      "function":"_gt",
      "arg0":["macro",57],
      "arg1":"0"
    }],
  "rules":[
    [["if",0,1,3],["unless",2],["add",2,49,81,83,86,88,105,135,141],["block",3]],
    [["if",9],["add",3,41,78,114,118,131,138]],
    [["if",13],["add",4,7,14,19,23,0,77,84,102,104,108,109,111,128,136,142,56,57,58,59,60,62,63,64,65,66,67,68,69,70,71,72,73,74]],
    [["if",3,14,15],["add",5,79,133,10,11,21,24,90,91,92,93,107,112,113,140]],
    [["if",13,16],["add",6]],
    [["if",13,17,18],["add",8]],
    [["if",19,20,21,22],["add",9]],
    [["if",23],["add",12]],
    [["if",24],["add",13,0,86]],
    [["if",3],["add",15,75,76,1,103]],
    [["if",25,26],["add",16]],
    [["if",27,28],["add",17,89]],
    [["if",29,30,31],["add",18]],
    [["if",32],["add",20,25,44,97,98,99,127,132,139]],
    [["if",26,33],["add",22]],
    [["if",34,35,36],["add",26,115]],
    [["if",37,38,39],["add",27,116]],
    [["if",38,40,41],["add",27,116]],
    [["if",35,42,43],["add",28,137]],
    [["if",9,44,45],["add",29]],
    [["if",46,47],["add",30]],
    [["if",23],["unless",48,49],["add",31]],
    [["if",26,50],["add",32,117]],
    [["if",35,51,52],["add",33,119]],
    [["if",35,53,54],["add",34,120]],
    [["if",35,55,56],["add",35,122]],
    [["if",57],["add",36]],
    [["if",35,58,59],["add",37,125]],
    [["if",35,60,61,62],["add",38,126]],
    [["if",35,63,64],["add",39]],
    [["if",35,60,65,66],["add",40,126]],
    [["if",26,67,68],["add",42]],
    [["if",69],["add",43,106]],
    [["if",3,70,71],["add",45]],
    [["if",3,45,72],["add",45,130]],
    [["if",0,3,73],["add",45,134]],
    [["if",74],["add",46]],
    [["if",75],["add",47]],
    [["if",26,76,77],["add",48]],
    [["if",0,3,73],["unless",2,80,81],["add",50]],
    [["if",0,1,3],["unless",2,80,81],["add",50]],
    [["if",13,82],["add",51]],
    [["if",83],["add",52]],
    [["if",84],["add",53]],
    [["if",85],["add",54]],
    [["if",26,86],["add",55]],
    [["if",13,87],["add",61]],
    [["if",18,28,88],["add",80]],
    [["if",20,21,28],["add",80]],
    [["if",28,89,90],["add",80]],
    [["if",28,91],["add",80]],
    [["if",28,92],["add",80]],
    [["if",28,93],["add",80]],
    [["if",0,28,73],["add",80]],
    [["if",16,28],["add",80]],
    [["if",28,94],["add",80]],
    [["if",28,29,95],["add",80]],
    [["if",28,71,96],["add",80]],
    [["if",28,88,97],["add",80]],
    [["if",28,98],["unless",99],["add",82]],
    [["if",3,14,100],["add",85]],
    [["if",3,21,101],["add",85]],
    [["if",3,71,96],["add",85,94]],
    [["if",3,21,102],["add",85,101]],
    [["if",57,103],["add",87,123]],
    [["if",104],["add",95]],
    [["if",89,105,106],["add",96]],
    [["if",38,107,108],["add",100]],
    [["if",3,14,15,109],["add",110]],
    [["if",57,110],["add",121]],
    [["if",57,111],["add",124]],
    [["if",3,112],["add",129]],
    [["if",5,6],["unless",4],["block",2,3,5,7,8,9,10,11,12,17,0,75,76,77,1,78,79,80,81,82,84,86,87,88,89,90,92,93,94,95,96,97,98,99,100,101,104,105,106,107,114,115,116,117,118,119,120,121,122,123,124,125,126,132,135]],
    [["if",6,7,8],["block",2,3,5,7,8,9,10,11,12,17,0,75,76,77,1,78,79,80,81,82,84,86,87,88,89,90,92,93,94,95,96,97,98,99,100,101,104,105,106,107,114,115,116,117,118,119,120,121,122,123,124,125,126,132,135]],
    [["if",6,10],["block",3,1]],
    [["if",0,1,9,11],["unless",12],["block",3]],
    [["if",3,78,79],["block",49]]]
},
"runtime":[[50,"__pntr",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","makeTableMap"]],["e",[0,"GTM PTag v1.2; tagId: ",[17,[15,"a"],"tagId"]]],[52,"g",[28,["b","pintrk"]]],[52,"h",["c","pintrk","pintrk.queue"]],[22,[15,"g"],[46,[53,[52,"k",[8,"np","gtm"]],[22,[17,[15,"a"],"em"],[46,[43,[15,"k"],"em",[17,[15,"a"],"em"]]]],["h","load",[2,[17,[15,"a"],"tagId"],"toString",[7]],[15,"k"]],["h","page",[15,"k"]]]],[46,[22,[17,[15,"a"],"em"],[46,[53,[52,"k",[8,"em",[17,[15,"a"],"em"]]],["h","set",[15,"k"]]]]]]],[52,"i",[51,"",[7],[41,"k"],[3,"k",[8]],[22,[17,[15,"a"],"setCustomParams"],[46,[3,"k",["f",[17,[15,"a"],"values"],"name","value"]]]],[43,[15,"k"],"np","gtm"],[52,"l",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[43,[15,"k"],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[52,"m",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[22,[20,[17,[15,"k"],"line_items"],[44]],[46,[43,[15,"k"],"line_items",[7,[8]]]]],[43,[16,[17,[15,"k"],"line_items"],0],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[38,[17,[15,"a"],"eventName"],[46,"watchvideo","viewcategory","custom","signup","lead","search","addtocart","checkout","pagevisit"],[46,[5,[46]],[5,[46]],[5,[46,[4]]],[5,[46]],[5,[46,["l","lead_type"],[4]]],[5,[46,["l","search_query"],[4]]],[5,[46]],[5,[46,["l","order_id"],["l","order_quantity"],["l","value"],["l","currency"]]],[5,[46,["m","product_id"],["m","product_category"],[4]]],[9,[46,[4]]]]],[22,[21,[17,[15,"a"],"eventName"],""],[46,["e",[0,"Firing Pinterest event: ",[17,[15,"a"],"eventName"]]],["e","Event Data:"],["e",[15,"k"]],["h","track",[17,[15,"a"],"eventName"],[15,"k"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"j",[51,"",[7],["e","Pinterest Error: Loading JS failed!"],[2,[15,"a"],"gtmOnFailure",[7]]]],["d","https://s.pinimg.com/ct/core.js",[15,"i"],[15,"j"],"PinterestJS"]]]
,"permissions":{"__pntr":{"access_globals":{"keys":[{"key":"pintrk","read":true,"write":true,"execute":true},{"key":"pintrk.queue","read":true,"write":true,"execute":true}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/s.pinimg.com\/ct\/core.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__pntr"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={tf:!0},ha={};try{ha.__proto__=fa;ea=ha.tf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja=this||self,ka=/^[\w+/_-]+[=]{0,2}$/,la=null,na=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa=function(a,b){this.a=a;this.i=b};var pa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},qa=function(){this.m={};this.i=!1;this.s={}};qa.prototype.get=function(a){return this.m["dust."+a]};qa.prototype.set=function(a,b){this.i||(a="dust."+a,this.s.hasOwnProperty(a)||(this.m[a]=b))};qa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ra=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var g=function(a){this.i=new qa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(pa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=g.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!pa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else pa(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():pa(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Rb=function(){for(var a=ra(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new g(a)};
var ta=function(a,b){if(pa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.s.hasOwnProperty(d)||delete c.m[d]}};ba=g.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new g(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return pa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,h){if(b[f]){if(b[f].Ib+h>b[f].max)throw Error("Quota exceeded");b[f].Ib+=h}}var b={},c=void 0,d=void 0,e={Zg:function(f){c=f},fe:function(){c&&a(c,1)},ah:function(f){d=f},wa:function(f){d&&a(d,f)},Ch:function(f,h){b[f]=b[f]||{Ib:0};b[f].max=h},og:function(f){return b[f]&&b[f].Ib||0},reset:function(){b={}},Wf:a};e.onFnConsume=e.Zg;e.consumeFn=e.fe;e.onStorageConsume=e.ah;e.consumeStorage=e.wa;e.setMax=e.Ch;e.getConsumed=e.og;e.reset=e.reset;e.consume=e.Wf;return e};var xa=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new qa;this.a=this.s=void 0};xa.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){if(!a.i.i)if(a.F.wa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.s["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.wa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ba=function(a){var b=new xa(a.F,a);a.s&&(b.s=a.s);b.S=a.S;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Fa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},B=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Fa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},La=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Fa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];La(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},$a=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};var ab=function(a,b){qa.call(this);this.F=a;this.S=b};na(ab,qa);var cb=function(a,b){for(var c,d=0;d<b.length&&!(c=bb(a,b[d]),c instanceof oa);d++);return c},bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof ab))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};ab.prototype.toString=function(){return this.F};ab.prototype.getName=function(){return this.F};
ab.prototype.Rb=function(){return new g(ra(this))};ab.prototype.a=function(a,b){a.F.fe();return this.S.apply(db(this,a),Array.prototype.slice.call(arguments,1))};var db=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Fa(d)?bb(e,d):d};c.prototype.s=function(d){return cb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
ab.prototype.ya=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var eb=function(){qa.call(this)};na(eb,qa);eb.prototype.Rb=function(){return new g(ra(this))};var fb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,gb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=fb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof ab?n="Fn":l instanceof g?n="List":l instanceof eb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(gb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var hb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ib=function(a){if(null==a)return String(a);var b=hb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},mb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},nb=function(a){if(!a||"object"!=ib(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!mb(a,"constructor")&&!mb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||mb(a,b)},G=function(a,b){var c=b||("array"==ib(a)?[]:{}),d;for(d in a)if(mb(a,d)){var e=a[d];"array"==ib(e)?("array"!=ib(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):nb(e)?(nb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var pb=function(a,b){var c=[],d=[],e=function(h,k){for(var l=ra(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=B(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Rb(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof eb){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof ab){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=ob(q[u],b);var v=b?b.F:wa(),w=new xa(v);b&&
(w.a=b.a);return f(h.a.apply(h,[w].concat(q)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},ob=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=B(c,h);if(-1<k)return d[k];if(Fa(h)||Ma(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(nb(h)){var n=
new eb;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new ab("",function(q){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=pb(this.a(u[v]),b);return f((0,this.i.S)(h,h,u))});c.push(h);d.push(p);e(h,p);return p}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var qb={control:function(a,b){return new oa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().wa(a.length+f.length);return new ab(a,function(){return function(h){var k=Ba(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof oa)return l[m];for(var n=e.get("length"),p=
0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var t=cb(k,f);if(t instanceof oa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.wa(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.wa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new eb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),h=e.length;h+="string"===
typeof f?f.length:1;b.wa(h);c.set(e,f)}return c},undefined:function(){}};function rb(a,b){var c=bb(a,b);if(c instanceof oa||c instanceof ab||c instanceof g||c instanceof eb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var sb=function(){this.m=wa();this.a=new xa(this.m)},tb=function(a,b,c){var d=new ab(b,c);d.i=!0;a.a.set(b,d)};sb.prototype.Ob=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};sb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.a,arguments[c]);return b};
sb.prototype.s=function(a,b){var c=Ba(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=rb(c,arguments[e]);return d};var ub=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=ub(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=ub(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new oa("break"),zb=new oa("continue"),Ab=function(a,b){return this.a(a)+this.a(b)},Bb=function(a,b){return this.a(a)&&this.a(b)},Cb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=B(xb,b))return ob(a[b].apply(a,ub(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof ab){var e=ub(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=B(wb.supportedMethods,b)){var f=ub(c);f.unshift(this.i);
return wb[b].apply(a,f)}}if(a instanceof ab||a instanceof eb){if(a.has(b)){var h=a.get(b);if(h instanceof ab){var k=ub(c);k.unshift(this.i);return h.a.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof ab?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,ub(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Db=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Eb=function(a){var b=Ba(this.i),c=cb(b,Array.prototype.slice.apply(arguments));if(c instanceof oa)return c},Fb=function(){return yb},Gb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof oa)return d}},Hb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Aa(b,d,e,!0)}}},Jb=function(){return zb},
Kb=function(a,b,c){var d=new g;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){return this.a(a)==this.a(b)},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=cb(e,c);if(f instanceof oa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof eb||b instanceof g||b instanceof ab)for(var h=b.Rb(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=cb(m,c);if(n instanceof oa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Ob(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Ob(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Sb=function(a){return this.i.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof eb||a instanceof g||a instanceof ab?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:pa(b)&&(c=a[b]));return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){return this.a(a)===this.a(b)},Yb=function(a,b){return this.a(a)!==this.a(b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.s(d);if(e instanceof oa)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=
this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return this.a(a)!=this.a(b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},lc=function(a){return new oa("return",this.a(a))},mc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof ab||a instanceof g||a instanceof eb)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Fa(d)||!Fa(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof oa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof oa&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof ab?"function":typeof a},rc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.s(f),e instanceof oa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.s(f);if(e instanceof oa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},zc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Bc=function(){this.a=new sb;Ac(this)};Bc.prototype.Ob=function(a){return this.a.i(a)};
var Dc=function(a,b){return Cc.a.s(a,b)},Ac=function(a){function b(e,f){var h=d.a,k=String(f);qb.hasOwnProperty(e)&&tb(h,k||e,qb[e])}function c(e,f){tb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,Ab);c(1,Bb);c(2,Cb);c(3,Db);c(53,Eb);c(4,Fb);c(5,Gb);c(52,Hb);c(6,Jb);c(9,Gb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Rb);c(15,Sb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);c(27,
dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,vc);c(61,wc);c(56,xc);c(62,yc);c(59,zc)},Fc=function(){var a=Cc,b=Ec();tb(a.a,"require",b)},Gc=function(a,b){a.a.a.S=b};
var Hc=[],Jc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kc=function(a){return Jc[a]},Lc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Pc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rc=function(a){return Qc[a]};Hc[7]=function(a){return String(a).replace(Pc,Rc)};
Hc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pc,Rc)+"'"}};var Xc=/['()]/g,Yc=function(a){return"%"+a.charCodeAt(0).toString(16)};Hc[12]=function(a){var b=
encodeURIComponent(String(a));Xc.lastIndex=0;return Xc.test(b)?b.replace(Xc,Yc):b};var Zc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$c={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ad=function(a){return $c[a]};Hc[16]=function(a){return a};var cd;
var dd=[],ed=[],fd=[],gd=[],hd=[],id={},jd,kd,ld,md=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},nd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=id[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):cd(c,e,b)},pd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=od(a[e],b,c));
return d},qd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=id[b];return c?c.priorityOverride||0:0},od=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(od(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=dd[f];if(!h||b.Rc(h))return;c[f]=!0;try{var k=pd(h,b,c);k.vtp_gtmEventId=b.id;d=nd(k,b);ld&&(d=ld.Yf(d,k))}catch(y){b.ye&&b.ye(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[od(a[l],b,c)]=od(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=od(a[n],b,c);kd&&(m=m||p===kd.xb);d.push(p)}return kd&&m?kd.ag(d):d.join("");case "escape":d=od(a[1],b,c);if(kd&&Fa(a[1])&&"macro"===a[1][0]&&kd.Jg(a))return kd.jh(d);d=String(d);for(var t=2;t<a.length;t++)Hc[a[t]]&&(d=Hc[a[t]](d));return d;case "tag":var q=a[1];if(!gd[q])throw Error("Unable to resolve tag reference "+q+".");return d={me:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=rd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},rd=function(a,b,c){try{return jd(pd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{xd:a("convert_case_to"),yd:a("convert_false_to"),zd:a("convert_null_to"),Ad:a("convert_true_to"),Bd:a("convert_undefined_to"),Yh:a("debug_mode_metadata"),va:a("function"),Xe:a("instance_name"),af:a("live_only"),cf:a("malware_disabled"),df:a("metadata"),Zh:a("original_vendor_template_id"),hf:a("once_per_event"),Kd:a("once_per_load"),Pd:a("setup_tags"),Rd:a("tag_id"),Sd:a("teardown_tags")}}();var td=function(a,b,c){this.i=a;this.m=b;this.a=c};na(td,Error);function ud(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ud(a[c],b[c])}};var vd=function(a,b){this.m=a;this.i=b;this.a=[]};na(vd,Error);var wd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var yd=function(){return function(a,b){a instanceof vd||(a=new vd(a,xd));b&&a.a.push(b);throw a;}};function xd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ad=null,Dd=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];Ad=Bd(a);for(var e=0;e<ed.length;e++){var f=ed[e],h=Cd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<gd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ad(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ad(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Bd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=rd(fd[c],a));return b[c]}};var Ed=function(){this.a={}};function Fd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new td(c,d,h);}}function Gd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Fd(e,b,d,h);Fd(f,b,d,h)}}}};var Kd=function(a){var b=Hd.w,c=this;this.i=new Ed;this.a={};var d={},e=Gd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,h){var k={};La(h,function(l,m){var n=Id(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Jd(l,{},"The requested permission "+l+" is not configured.");var p=Array.prototype.slice.call(arguments,0);n.apply(void 0,p);e.apply(void 0,p)}})},Md=function(a){return Ld.a[a]||
function(){}};function Id(a,b){var c=md(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Jd;try{return nd(c)}catch(d){return{assert:function(e){throw new td(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Jd(a,b,c){return new td(a,b,c)};
var Zd=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},$d=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Zd(b,"/*")&&(b=b.slice(0,-2));Zd(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ae=/^[a-z0-9-]+$/i,be=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ce=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ae.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!be.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),p=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=p;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:q.length===u.length?!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=$d(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function fe(a){return""+a}
function ge(a,b){var c=[];return c};var he=function(a,b){var c=new ab(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ie=function(a,b){var c=new eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,he(a+"_"+d,e)):(Ea(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var je=function(a,b){E(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new eb;return d=
ie("AssertApiSubject",c)};var ke=function(a,b){E(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new eb;return d=ie("AssertThatSubject",c)};var le=function(a){var b;return b};var me=function(a){var b;return b};var ne=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var oe=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var pe=function(a){E(this.getName(),["message:?string"],arguments);};var qe=function(a,b){E(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var re=function(){return(new Date).getTime()};var se=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Hf.apply(null,Array.prototype.slice.call(arguments,1))};var te=!1;var ue={Nh:'',ig:''},ve=function(){se(this,"read_container_data");var a=new eb;a.set("containerId",'GTM-MVDRFFD');a.set("version",'195');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",Oa(ue.Nh));a.set("environmentMode",Oa(ue.ig));a.i=!0;return a};var we=function(a){return null===a?"null":a instanceof g?"array":a instanceof ab?"function":typeof a};var xe=function(a){return Na(pb(a,this.i))};var ye=function(a){return Number(pb(a,this.i))};var ze=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ae=function(a,b,c){var d=null,e=!1;E(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new eb;for(var f=0;f<a.length();f++){var h=a.get(f);h instanceof eb&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};var Be="floor ceil round max min abs pow sqrt".split(" ");function Ce(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(pb(arguments[d],c));return a.apply(null,b)}}function De(){for(var a=Math,b={},c=0;c<Be.length;c++){var d=Be[c];a.hasOwnProperty(d)&&(b[d]=Ce(a[d].bind(a)))}return b};var Ee=function(){var a={};return{pg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Dh:function(b,c){a[b]=c},reset:function(){a={}}}},Fe=function(a,b){E(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ge=function(){this.a={}};Ge.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ge.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?he(a,b):ie(a,b)};function He(){var a={};return a};var D=window,H=document,Ie=navigator,Je=H.currentScript&&H.currentScript.src,Ke=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Le=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Me=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Le(d,b);c&&(d.onerror=c);var e;if(null===la)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ka.test(k)){la=k;break b}}la=""}e=la;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Ne=function(){if(Je){var a=Je.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oe=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Le(c,b);void 0!==a&&(c.src=a);return c},Pe=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qe=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Re=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){D.setTimeout(a,0)},Se=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Te=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ue=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ve=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},We=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ye=function(a){return Xe?H.querySelectorAll(a):null},Ze=function(a,b){if(!Xe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},$e=!1;if(H.querySelectorAll)try{var af=H.querySelectorAll(":root");af&&1==af.length&&af[0]==H.documentElement&&($e=!0)}catch(a){}var Xe=$e;var M={ra:"_ee",vc:"event_callback",wb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",wc:"restricted_data_processing",ub:"allow_google_signals",ba:"cookie_expires",vb:"cookie_update",Ra:"session_duration",fa:"user_properties"};
M.je=[M.aa,M.ub,M.vb];M.qe=[M.ba,M.wb,M.Ra];var rf=/[A-Z]+/,sf=/\s/,tf=function(a){if(r(a)&&(a=Qa(a),!sf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},vf=function(a){for(var b={},c=0;c<a.length;++c){var d=tf(a[c]);d&&(b[d.id]=d)}uf(b);var e=[];La(b,function(f,h){e.push(h)});return e};
function uf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hd={},P=null,wf=Math.random();Hd.w="GTM-MVDRFFD";Hd.Bb="1m0";var xf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},yf="www.googletagmanager.com/gtm.js";var zf=yf,Af=null,Bf=null,Cf=null,Df="//www.googletagmanager.com/a?id="+Hd.w+"&cv=195",Ef={},Ff={},Gf=function(){var a=P.sequence||0;P.sequence=a+1;return a};var Hf={},If=function(a,b){Hf[a]=Hf[a]||[];Hf[a][b]=!0},Jf=function(a){for(var b=[],c=Hf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Kf=function(){return"&tc="+gd.filter(function(a){return a}).length},Nf=function(){Lf||(Lf=D.setTimeout(Mf,500))},Mf=function(){Lf&&(D.clearTimeout(Lf),Lf=void 0);void 0===Of||Pf[Of]&&!Qf&&!Rf||(Sf[Of]||Tf.Lg()||0>=Uf--?(If("GTM",1),Sf[Of]=!0):(Tf.th(),Pe(Vf()),Pf[Of]=!0,Wf=Xf=Rf=Qf=""))},Vf=function(){var a=Of;if(void 0===a)return"";var b=Jf("GTM"),c=Jf("TAGGING");return[Yf,Pf[a]?"":"&es=1",Zf[a],b?"&u="+b:"",c?"&ut="+c:"",Kf(),Qf,Rf,Xf,Wf,"&z=0"].join("")},$f=function(){return[Df,"&v=3&t=t",
"&pid="+Ha(),"&rv="+Hd.Bb].join("")},ag="0.005000">Math.random(),Yf=$f(),bg=function(){Yf=$f()},Pf={},Qf="",Rf="",Wf="",Xf="",Of=void 0,Zf={},Sf={},Lf=void 0,Tf=function(a,b){var c=0,d=0;return{Lg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},th:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Uf=1E3,cg=function(a,b){if(ag&&!Sf[a]&&Of!==a){Mf();Of=a;Wf=Qf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Zf[a]="&e="+c+"&eid="+a;Nf()}},dg=function(a,b,c){if(ag&&
!Sf[a]&&b){a!==Of&&(Mf(),Of=a);var d,e=String(b[sd.va]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Qf=Qf?Qf+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(id[h]?"1":"2")+d;Wf=Wf?Wf+"."+k:"&ti="+k;Nf();2022<=Vf().length&&Mf()}},eg=function(a,b,c){if(ag&&!Sf[a]){a!==Of&&(Mf(),Of=a);var d=c+b;Rf=
Rf?Rf+"."+d:"&epr="+d;Nf();2022<=Vf().length&&Mf()}};var fg={},gg=new Ia,hg={},ig={},lg={name:"dataLayer",set:function(a,b){G(Ya(a,b),hg);jg()},get:function(a){return kg(a,2)},reset:function(){gg=new Ia;hg={};jg()}},kg=function(a,b){if(2!=b){var c=gg.get(a);if(ag){var d=mg(a);c!==d&&If("GTM",5)}return c}return mg(a)},mg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:og(d)},og=function(a){for(var b=hg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var qg=function(a,b){ig.hasOwnProperty(a)||(gg.set(a,b),G(Ya(a,b),hg),jg())},jg=function(a){La(ig,function(b,c){gg.set(b,c);G(Ya(b,void 0),hg);G(Ya(b,c),hg);a&&delete ig[b]})},rg=function(a,b,c){fg[a]=fg[a]||{};var d=1!==c?mg(b):gg.get(b);"array"===ib(d)||"object"===ib(d)?fg[a][b]=G(d):fg[a][b]=d},sg=function(a,b){if(fg[a])return fg[a][b]},tg=function(a,b){fg[a]&&delete fg[a][b]};var ug=function(){var a=!1;return a};var S=function(a,b,c,d){return(2===vg()||d||"http:"!=D.location.protocol?a:b)+c},vg=function(){var a=Ne(),b;if(1===a)a:{var c=zf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Lg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Mg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ng={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Og="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Qg=function(a){var b=kg("gtm.whitelist");b&&If("GTM",9);var c=b&&Wa(Pa(b),Mg),d=kg("gtm.blacklist");d||(d=kg("tagTypeBlacklist"))&&If("GTM",3);
d?If("GTM",8):d=[];Pg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=B(Pa(d),"google")&&If("GTM",2);var e=d&&Wa(Pa(d),Ng),f={};return function(h){var k=h&&h[sd.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ff[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>B(c,k))if(l&&0<l.length)for(var p=
0;p<l.length;p++){if(0>B(c,l[p])){If("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=B(e,k);if(q)t=q;else{var u=Ka(e,l||[]);u&&If("GTM",10);t=u}}var v=!m||t;v||!(0<=B(l,"sandboxedScripts"))||c&&-1!==B(c,"sandboxedScripts")||(v=Ka(e,Og));return f[k]=v}},Pg=function(){return Lg.test(D.location&&D.location.hostname)};var Rg={Yf:function(a,b){b[sd.xd]&&"string"===typeof a&&(a=1==b[sd.xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.zd)&&null===a&&(a=b[sd.zd]);b.hasOwnProperty(sd.Bd)&&void 0===a&&(a=b[sd.Bd]);b.hasOwnProperty(sd.Ad)&&!0===a&&(a=b[sd.Ad]);b.hasOwnProperty(sd.yd)&&!1===a&&(a=b[sd.yd]);return a}};var Sg={active:!0,isWhitelisted:function(){return!0}},Tg=function(a){var b=P.zones;!b&&a&&(b=P.zones=a());return b};var Ug=function(){};var Vg=!1,Wg=0,Xg=[];function Yg(a){if(!Vg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Vg=!0;for(var e=0;e<Xg.length;e++)I(Xg[e])}Xg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Zg(){if(!Vg&&140>Wg){Wg++;try{H.documentElement.doScroll("left"),Yg()}catch(a){D.setTimeout(Zg,50)}}}var $g=function(a){Vg?a():Xg.push(a)};var ah={},bh={},ch=function(a,b,c,d){if(!bh[a]||xf[b]||"__zone"===b)return-1;var e={};nb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return bh[a].tags.push(e)-1},dh=function(a,b,c,d){if(bh[a]){var e=bh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function eh(a){for(var b=ah[a]||[],c=0;c<b.length;c++)b[c]();ah[a]={push:function(d){d(Hd.w,bh[a])}}}
var hh=function(a,b,c){bh[a]={tags:[]};Da(b)&&fh(a,b);c&&D.setTimeout(function(){return eh(a)},Number(c));return gh(a)},fh=function(a,b){ah[a]=ah[a]||[];ah[a].push(Ta(function(){return I(function(){b(Hd.w,bh[a])})}))};function gh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&eh(a)})},Ff:function(){d=!0;b>=c&&eh(a)}}};var ih=function(){function a(d){return!Ea(d)||0>d?0:d}if(!P._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ea(lg.get("gtm.start"))?lg.get("gtm.start"):0;P._li={cst:a(c-b),cbt:a(Bf-b)}}};var mh=!1,nh=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},oh=!1;
var ph=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||If("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ih();return D[b]},qh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=nh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var sh=function(){},rh=function(){return D.GoogleAnalyticsObject||"ga"};var uh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vh=/:[0-9]+$/,wh=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},zh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=xh(a.protocol)||xh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(vh,"").toLowerCase());return yh(a,b,c,d,e)},yh=function(a,b,c,d,e){var f,h=xh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ah(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(vh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||If("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=B(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},xh=function(a){return a?a.replace(":",
"").toLowerCase():""},Ah=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Bh=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||If("TAGGING",1),c="/"+c);var d=b.hostname.replace(vh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Gh=function(){return!1},Ih=function(a){},
Jh=function(){var a={};return function(b,c,d){}};function Hh(a,b,c){b.containerId=Hd.w;var d={type:a,value:b};c.length&&(d.trace=c);return d};function Kh(a,b,c,d){var e=gd[a],f=Lh(a,b,c,d);if(!f)return null;var h=od(e[sd.Pd],c,[]);if(h&&h.length){var k=h[0];f=Kh(k.index,{C:f,B:1===k.me?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Lh(a,b,c,d){function e(){if(f[sd.cf])k();else{var w=pd(f,c,[]),y=ch(c.id,String(f[sd.va]),Number(f[sd.Rd]),w[sd.df]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ra()-C;dg(c.id,gd[a],"5");dh(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ra()-C;dg(c.id,gd[a],"6");dh(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;dg(c.id,f,"1");var z=function(A){var F=Ra()-C;Ih(A);dg(c.id,f,"7");dh(c.id,y,"exception",F);x||(x=!0,k())};var C=Ra();try{nd(w,c)}catch(A){z(A)}}}var f=gd[a],h=b.C,k=b.B,l=b.terminate;if(c.Rc(f))return null;var m=od(f[sd.Sd],c,[]);if(m&&m.length){var n=m[0],p=Kh(n.index,{C:h,B:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.me?l:p}if(f[sd.Kd]||f[sd.hf]){var t=f[sd.Kd]?hd:c.Fh,q=h,u=k;if(!t[a]){e=Ta(e);var v=Mh(a,t,e);h=v.C;k=v.B}return function(){t[a](q,u)}}return e}
function Mh(a,b,c){var d=[],e=[];b[a]=Nh(d,e,c);return{C:function(){b[a]=Oh;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=Ph;for(var f=0;f<e.length;f++)e[f]()}}}function Nh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Oh(a){a()}function Ph(a,b){b()};var Sh=function(a,b){for(var c=[],d=0;d<gd.length;d++)if(a.mb[d]){var e=gd[d];var f=b.add();try{var h=Kh(d,{C:f,B:f,terminate:f},a,d);h?c.push({Ke:d,Fe:qd(e),Ob:h}):(Qh(d,a),f())}catch(l){f()}}b.Ff();c.sort(Rh);for(var k=0;k<c.length;k++)c[k].Ob();return 0<c.length};function Rh(a,b){var c,d=b.Fe,e=a.Fe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ke,k=b.Ke;f=h>k?1:h<k?-1:0}return f}
function Qh(a,b){if(!ag)return;var c=function(d){var e=b.Rc(gd[d])?"3":"4",f=od(gd[d][sd.Pd],b,[]);f&&f.length&&c(f[0].index);dg(b.id,gd[d],e);var h=od(gd[d][sd.Sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Th=!1,Uh=function(a,b,c,d,e){if("gtm.js"==b){if(Th)return!1;Th=!0}cg(a,b);var f=hh(a,d,e);rg(a,"event",1);rg(a,"ecommerce",1);rg(a,"gtm");var h={id:a,name:b,Rc:Qg(c),mb:[],Fh:[],ye:function(n){If("GTM",6);Ih(n)}};h.mb=Dd(h);var k=Sh(h,f);if(!k)return k;for(var l=0;l<h.mb.length;l++)if(h.mb[l]){var m=gd[l];if(m&&!xf[String(m[sd.va])])return!0}return!1};var Wh=/^https?:\/\/www\.googletagmanager\.com/;function Xh(){var a;return a}function Zh(a,b){}
function Yh(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function $h(){var a=!1;return a};var ai=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.C=function(){};this.B=function(){}},bi=function(a){var b=new ai;b.eventModel=a;return b},ci=function(a,b){a.targetConfig=b;return a},di=function(a,b){a.containerConfig=b;return a},ei=function(a,b){a.a=b;return a},fi=function(a,b){a.globalConfig=b;return a},gi=function(a,b){a.C=b;return a},hi=function(a,b){a.B=b;return a};
ai.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ii=function(a){function b(e){La(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];La(c,function(e){d.push(e)});return d};var ji={},ki=["G"];ji.Le="";var li=ji.Le.split(",");function mi(){var a=P;return a.gcq=a.gcq||new ni}
var oi=function(a,b,c){mi().register(a,b,c)},pi=function(a,b,c,d){mi().push("event",[b,a],c,d)},qi=function(a,b){mi().push("config",[a],b)},ri={},si=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},ti=function(a,b,c,d,e){this.type=a;this.m=b;this.P=c||"";this.a=d;this.i=e},ni=function(){this.i={};this.m={};this.a=[]},ui=function(a,b){var c=tf(b);return a.i[c.containerId]=a.i[c.containerId]||new si},vi=function(a,b,c,d){if(d.P){var e=ui(a,d.P),
f=e.m;if(f){var h=G(c),k=G(e.targetConfig[d.P]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),p=kg("gtm.uniqueEventId"),t=tf(d.P).prefix,q=hi(gi(fi(ei(di(ci(bi(h),k),l),m),n),function(){eg(p,t,"2");}),function(){eg(p,t,"3");});try{eg(p,t,"1");f(d.P,b,d.m,q)}catch(u){
eg(p,t,"4");}}}};
ni.prototype.register=function(a,b,c){if(3!==ui(this,a).status){ui(this,a).m=b;ui(this,a).status=3;c&&(ui(this,a).i=c);var d=tf(a),e=ri[d.containerId];if(void 0!==e){var f=P[d.containerId].bootstrap,h=d.prefix.toUpperCase();P[d.containerId]._spx&&(h=h.toLowerCase());var k=kg("gtm.uniqueEventId"),l=h,m=Ra()-f;if(ag&&!Sf[k]){k!==Of&&(Mf(),Of=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Xf=Xf?Xf+","+n:"&cl="+n}delete ri[d.containerId]}this.flush()}};
ni.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);if(c){var f=tf(c),h;if(h=f){var k;if(k=1===ui(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(ui(this,c).status=2,this.push("require",[],f.containerId),ri[f.containerId]=Ra(),!ug())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";Me(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.a.push(new ti(a,e,c,b,d));d||this.flush()};
ni.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==ui(this,c.P).status&&!a)return;break;case "set":La(c.a[0],function(l,m){G(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[M.Xb];delete d[M.Xb];var f=ui(this,c.P),h=tf(c.P),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.P]={});f.a&&e||vi(this,M.D,d,c);f.a=!0;delete d[M.ra];k?G(d,f.containerConfig):G(d,f.targetConfig[c.P]);break;
case "event":vi(this,c.a[1],c.a[0],c)}this.a.shift()}};var wi=function(a,b){return!0};var xi=function(a,b){var c;return c};var yi=function(a){};var zi=function(a){var b;E(this.getName(),["path:!string"],arguments);se(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return ob(b,this.i)};var Ai=function(a,b){var c=null;E(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);se(this,"access_globals","readwrite",a);se(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var h=e[f];if(h&&!Da(h))return null;if(h)return ob(h,this.i);var k;h=function(){if(!Da(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=h;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){h.apply(h,Array.prototype.slice.call(arguments,0))};return ob(c,this.i)};var Bi=function(a){var b;return ob(b,
this.i)};var Ci=function(a){var b;return b};var Di=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Gi=function(a,b,c,d){var e=Ei(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Fi(e,function(f){return f.Mb},b);if(1===e.length)return e[0].id;e=Fi(e,function(f){return f.nb},c);return e[0]?e[0].id:void 0}};
function Hi(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Di(b,e).indexOf(c)}
var Ki=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var p=Ii(),t=void 0,q=0,u=0;u<p.length;++u){var v=
"none"!=p[u]?p[u]:void 0;if(e){c.domain=v;try{e(a,c)}catch(w){t=w;continue}}q+=1;if(!Ji(v,l)&&Hi(f+(v?"; domain="+v:""),a,b))return!0}if(t&&!q)throw t;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!Ji(k,l)&&Hi(f,a,b)},Li=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return Ki(a,b,h,f)};
function Fi(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ei(a,b){for(var c=[],d=Di(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Mb:1*k[0]||1,nb:1*k[1]||1}))}}return c}
var Mi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ni=/(^|\.)doubleclick\.net$/i,Ji=function(a,b){return Ni.test(document.location.hostname)||"/"===b&&Mi.test(a)},Ii=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ni.test(e)||Mi.test(e)||a.push("none");return a};var Oi=function(a,b){b=void 0===b?!0:b;var c;return c};var Pi=function(a,b){var c;return c};var Qi=function(a,b){var c;return c};var Ri=function(a){var b="";return b};var Si=function(a){var b="";return b};var Ti=function(a,b){};var Ui={},Vi=function(a,b,c,d){E(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);se(this,"inject_script",a);var e=this.i,f=function(){b instanceof ab&&b.ya(e)},h=function(){c instanceof ab&&c.ya(e)};if(!d){Me(a,f,h);return}var k=d;Ui[k]?(Ui[k].onSuccess.push(f),Ui[k].onFailure.push(h)):(Ui[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Ui[k].onSuccess,m=0;m<l.length;m++)I(l[m]);l.push=function(n){I(n);
return 0}},h=function(){for(var l=Ui[k].onFailure,m=0;m<l.length;m++)I(l[m]);Ui[k]=null},Me(a,f,h));};var Wi=function(){return!1},Xi={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Yi=function(){try{se(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=pb(a[b],this.i);console.log.apply(console,a);};var Zi=function(a,b){var c=!1;return c};var $i=function(a,b,c){};var aj=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var bj=function(a,b,c){return!1};var cj=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var dj=function(a,b,c){var d=this;};var ej=function(a){var b;return b};function fj(a){}
function gj(a,b){var c;return ob(c,this.i)}function hj(){var a="";return a}
function ij(){var a="";return a}
var Ec=function(){var a=new Ge;ug()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Ti),a.add("injectScript",Vi));var b=$i;a.add("addEventCallback",fj);a.add("aliasInWindow",wi);a.add("assertThat",ke);a.add("assertApi",je);a.add("callInWindow",xi);a.add("callLater",yi);a.add("copyFromDataLayer",
gj);a.add("copyFromWindow",zi);a.add("createQueue",Bi);a.add("createArgumentsQueue",Ai);a.add("decodeUri",le);a.add("decodeUriComponent",me);a.add("encodeUri",ne);a.add("encodeUriComponent",oe);a.add("fail",pe);a.add("generateRandom",qe);a.add("getCookieValues",Oi);a.add("getQueryParameters",Pi);a.add("getReferrerQueryParameters",Qi);a.add("getReferrerUrl",Ri);a.add("getTimestamp",re);a.add("getType",we);a.add("getUrl",Si);a.add("logToConsole",Yi);a.add("makeInteger",xe);a.add("makeNumber",ye);a.add("makeString",
ze);a.add("makeTableMap",Ae);a.add("Math",De());a.add("mock",Fe);a.add("queryPermission",Zi);a.add("readCharacterSet",hj);a.add("readTitle",ij);a.add("sendPixel",b);a.add("setCookie",aj);a.add("setInWindow",bj);a.add("sha256",dj);a.add("TestHelper",He());return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Cc,Ld;function jj(){var a=data.runtime||[],b=data.runtime_lines;Cc=new Bc;kj();cd=function(e,f,h){lj(f);var k=new eb;La(f,function(n,p){k.set(n,ob(p))});Cc.a.a.s=yd();var l={Hf:Md(e),eventId:void 0!==h?h.id:void 0};Gh()&&(l.Z={Wc:Ee(),gb:{},ib:Jh()});var m=Dc(l,[e,k]);Cc.a.a.s=void 0;m instanceof oa&&"return"===m.a&&(m=m.i);return pb(m)};Fc();for(var c=0;c<a.length;c++){var d=a[c];if(!Fa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ud(d,b[c]);Cc.Ob(d)}}
function lj(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){I(b)});Da(c)&&(a.gtmOnFailure=function(){I(c)})}function kj(){var a=Cc;P.SANDBOXED_JS_SEMAPHORE=P.SANDBOXED_JS_SEMAPHORE||0;Gc(a,function(b,c,d){P.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{P.SANDBOXED_JS_SEMAPHORE--}})}function mj(a){void 0!==a&&La(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ff[e]=Ff[e]||[];Ff[e].push(b)}})};var nj="".split(/,/),oj=!1;var pj=null,qj={},rj={},sj;function tj(a,b){var c={event:a};b&&(c.eventModel=G(b),b[M.vc]&&(c.eventCallback=b[M.vc]),b[M.wb]&&(c.eventTimeout=b[M.wb]));return c}
var zj={config:function(a){},
event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!nb(a[2])&&void 0!=a[2])return;c=a[2]}var d=tj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ld.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&nb(a[1])?b=G(a[1]):3==
a.length&&r(a[1])&&(b={},nb(a[2])||Fa(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Aj={policy:!0};var Bj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Dj=function(a){var b=Cj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ej=!1,Fj=[];function Gj(){if(!Ej){Ej=!0;for(var a=0;a<Fj.length;a++)I(Fj[a])}}var Hj=function(a){Ej?I(a):Fj.push(a)};var Xj=function(a){if(Wj(a))return a;this.a=a};Xj.prototype.sg=function(){return this.a};var Wj=function(a){return!a||"object"!==ib(a)||nb(a)?!1:"getUntrustedUpdateValue"in a};Xj.prototype.getUntrustedUpdateValue=Xj.prototype.sg;var Yj=[],Zj=!1,ak=function(a){return D["dataLayer"].push(a)},bk=function(a){var b=P["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function ck(a){var b=a._clear;La(a,function(f,h){"_clear"!==f&&(b&&qg(f,void 0),qg(f,h))});Af||(Af=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Gf(),a["gtm.uniqueEventId"]=d,qg("gtm.uniqueEventId",d));Cf=c;var e=
dk(a);Cf=null;switch(c){case "gtm.init":If("GTM",19),e&&If("GTM",20)}return e}function dk(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=P.zones;d=e?e.checkState(Hd.w,c):Sg;return d.active?Uh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function ek(){for(var a=!1;!Zj&&0<Yj.length;){Zj=!0;delete hg.eventModel;jg();var b=Yj.shift();if(null!=b){var c=Wj(b);if(c){var d=b;b=Wj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=kg(h,1);if(Fa(k)||nb(k))k=G(k);ig[h]=k}}try{if(Da(b))try{b.call(lg)}catch(u){}else if(Fa(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=kg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(u){}}}else{if(Ma(b)){a:{if(b.length&&r(b[0])){var q=zj[b[0]];if(q&&(!c||!Aj[b[0]])){b=q(b);break a}}b=void 0}if(!b){Zj=!1;continue}}a=ck(b)||a}}finally{c&&jg(!0)}}Zj=!1}return!a}function fk(){var a=ek();try{Bj(D["dataLayer"],Hd.w)}catch(b){}return a}
var hk=function(){var a=Ke("dataLayer",[]),b=Ke("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};$g(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Hj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<P.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Xj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Yj.push.apply(Yj,d);if(300<
this.length)for(If("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return ek()&&h};Yj.push.apply(Yj,a.slice(0));gk()&&I(fk)},gk=function(){var a=!0;return a};var ik={};ik.xb=new String("undefined");
var jk=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ik.xb?b:a[d]);return c.join("")}};jk.prototype.toString=function(){return this.a("undefined")};jk.prototype.valueOf=jk.prototype.toString;ik.rf=jk;ik.Dc={};ik.ag=function(a){return new jk(a)};var kk={};ik.uh=function(a,b){var c=Gf();kk[c]=[a,b];return c};ik.he=function(a){var b=a?0:1;return function(c){var d=kk[c];if(d&&"function"===typeof d[b])d[b]();kk[c]=void 0}};ik.Jg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ik.jh=function(a){if(a===ik.xb)return a;var b=Gf();ik.Dc[b]=a;return'google_tag_manager["'+Hd.w+'"].macro('+b+")"};ik.Tg=function(a,b,c){a instanceof ik.rf&&(a=a.a(ik.uh(b,c)),b=Ca);return{Pc:a,C:b}};var lk=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Se(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mk=function(a){P.hasOwnProperty("autoEventsSettings")||(P.autoEventsSettings={});var b=P.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},nk=function(a,b,c){mk(a)[b]=c},ok=function(a,b,c,d){var e=mk(a),f=Sa(e,b,d);e[b]=c(f)},pk=function(a,b,c){var d=mk(a);return Sa(d,b,c)};var qk=function(){for(var a=Ie.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},tk=function(a,b,c,d){var e=rk(b);return Gi(a,e,sk(c),d)},uk=function(a,b,c,d){var e=""+rk(c),f=sk(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},rk=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},sk=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var vk=["1"],wk={},Ak=function(a,b,c,d){var e=xk(a);wk[e]||yk(e,b,c)||(zk(e,qk(),b,c,d),yk(e,b,c))};function zk(a,b,c,d,e){var f=uk(b,"1",d,c);Li(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function yk(a,b,c){var d=tk(a,b,c,vk);d&&(wk[a]=d);return d}function xk(a){return(a||"_gcl")+"_au"};var Bk=function(){for(var a=[],b=H.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({ld:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].ld]||(f[a[h].ld]=[]),f[a[h].ld].push({timestamp:k[1],mg:k[2]}))}return f};function Ck(){for(var a=Dk,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ek(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Dk,Fk;function Gk(a){Dk=Dk||Ek();Fk=Fk||Ck();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Dk[l],Dk[m],Dk[n],Dk[p])}return b.join("")}
function Hk(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Fk[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Dk=Dk||Ek();Fk=Fk||Ck();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ik;function Jk(a,b){if(!a||b===H.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Nk=function(){var a=Kk,b=Lk,c=Mk(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qe(H,"mousedown",d);Qe(H,"keyup",d);Qe(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Mk=function(){var a=Ke("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ok=/(.*?)\*(.*?)\*(.*)/,Pk=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Qk=/^(?:www\.|m\.|amp\.)+/,Rk=/([^?#]+)(\?[^#]*)?(#.*)?/,Sk=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Uk=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Gk(String(d))))}var e=b.join("*");return["1",Tk(e),e].join("*")},Tk=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ik)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ik=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ik[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Wk=function(){return function(a){var b=Bh(D.location.href),c=b.search.replace("?",""),d=wh(c,"_gl",!1,!0)||"";a.query=Vk(d)||{};var e=zh(b,"fragment").match(Sk);a.fragment=Vk(e&&
e[3]||"")||{}}},Xk=function(){var a=Wk(),b=Mk();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},Vk=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ok.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Tk(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Hk(t[q+1]);return p}}}}catch(u){}};
function Yk(a,b,c){function d(m){var n=m,p=Sk.exec(n),t=n;if(p){var q=p[2],u=p[4];t=p[1];u&&(t=t+q+u)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Rk.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Zk(a,b,c){for(var d={},e={},f=Mk().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Jk(k.domains,b)&&(k.fragment?Ua(e,k.callback()):Ua(d,k.callback()))}if(Va(d)){var l=Uk(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var u=H.createElement("input");u.setAttribute("type","hidden");u.setAttribute("name","_gl");u.setAttribute("value",
l);a.appendChild(u)}}else if("post"===m){var v=Yk(l,a.action);uh.test(v)&&(a.action=v)}}}else $k(l,a,!1)}if(!c&&Va(e)){var w=Uk(e);$k(w,a,!0)}}function $k(a,b,c){if(b.href){var d=Yk(a,b.href,void 0===c?!1:c);uh.test(d)&&(b.href=d)}}
var Kk=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Zk(e,e.hostname,!1)}}catch(h){}},Lk=function(a){try{if(a.action){var b=zh(Bh(a.action),"host");Zk(a,b,!0)}}catch(c){}},al=function(a,b,c,d){Nk();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Mk().decorators.push(e)},bl=function(){var a=H.location.hostname,b=Pk.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Qk,""),l=e.replace(Qk,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},cl=function(a,b){return!1===a?!1:a||b||bl()};var dl={};var el=/^\w+$/,fl=/^[\w-]+$/,gl=/^~?[\w-]+$/,hl={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function il(a){return a&&"string"==typeof a&&a.match(el)?a:"_gcl"}var kl=function(){var a=Bh(D.location.href),b=zh(a,"query",!1,void 0,"gclid"),c=zh(a,"query",!1,void 0,"gclsrc"),d=zh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||wh(e,"gclid",!1,void 0);c=c||wh(e,"gclsrc",!1,void 0)}return jl(b,c,d)};
function jl(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(fl))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==dl.gtm_3pds?0:dl.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var ml=function(a){var b=kl();ll(b,a)};
function ll(a,b,c){function d(p,t){var q=nl(p,e);q&&Li(q,t,h,f,l,!0)}b=b||{};var e=il(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ma?7776E3:b.Ma;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.vi?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var pl=function(a,b,c,d,e){for(var f=Xk(),h=il(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==hl[l]){var m=nl(l,h),n=f[m];if(n){var p=Math.min(ol(n),Ra()),t;b:{for(var q=p,u=Di(m,H.cookie),v=0;v<u.length;++v)if(ol(u[v])>q){t=!0;break b}t=!1}t||Li(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};ll(jl(f.gclid,f.gclsrc),w)},nl=function(a,b){var c=hl[a];if(void 0!==c)return b+c},ol=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ql(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var rl=function(a,b,c,d,e){if(Fa(b)){var f=il(e);al(function(){for(var h={},k=0;k<a.length;++k){var l=nl(a[k],f);if(l){var m=Di(l,H.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},sl=function(a){return a.filter(function(b){return gl.test(b)})},tl=function(a,b){for(var c=il(b&&b.prefix),d={},e=0;e<a.length;e++)hl[a[e]]&&(d[a[e]]=hl[a[e]]);La(d,function(f,h){var k=Di(c+h,H.cookie);if(k.length){var l=k[0],m=ol(l),n={};n[f]=[ql(l)];ll(n,b,m)}})};var ul=/^\d+\.fls\.doubleclick\.net$/;function vl(a){var b=Bh(D.location.href),c=zh(b,"host",!1);if(c&&c.match(ul)){var d=zh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function wl(a,b){if("aw"==a||"dc"==a){var c=vl("gcl"+a);if(c)return c.split(".")}var d=il(b);if("_gcl"==d){var e;e=kl()[a]||[];if(0<e.length)return e}var f=nl(a,d),h;if(f){var k=[];if(H.cookie){var l=Di(f,H.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ql(l[m]);n&&-1===B(k,n)&&k.push(n)}h=sl(k)}else h=k}else h=k}else h=[];return h}
var xl=function(){var a=vl("gac");if(a)return decodeURIComponent(a);var b=Bk(),c=[];La(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].mg);f=sl(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},yl=function(a,b,c,d,e){Ak(b,c,d,e);var f=wk[xk(b)],h=kl().dc||[],k=!1;if(f&&0<h.length){var l=P.joined_au=P.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+f;Ie.sendBeacon&&Ie.sendBeacon(t)||Pe(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var q=xk(b),u=wk[q];u&&zk(q,u,c,d,e)}};var zl;if(3===Hd.Bb.length)zl="g";else{var Al="G";zl=Al}
var Bl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:zl,OPT:"o"},Cl=function(a){var b=Hd.w.split("-"),c=b[0].toUpperCase(),d=Bl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Hd.Bb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Hd.Bb+e};
var Dl=function(a){return!(void 0===a||null===a||0===(a+"").length)},El=function(a,b){var c;if(2===b.X)return a("ord",Ha(1E11,1E13)),!0;if(3===b.X)return a("ord","1"),a("num",Ha(1E11,1E13)),!0;if(4===b.X)return Dl(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.X)c="1";else if(6===b.X)c=b.ed;else return!1;Dl(c)&&a("qty",c);Dl(b.Jb)&&a("cost",b.Jb);Dl(b.transactionId)&&a("ord",b.transactionId);return!0},Fl=encodeURIComponent,Gl=function(a,b){function c(n,p,t){f.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Fl(p)))}var d=a.Kc,e=a.protocol;e+=a.gc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Fl(d)+(";type="+Fl(a.Nc))+(";cat="+Fl(a.fb));var f=a.cg||{};La(f,function(n,p){e+=";"+Fl(n)+"="+Fl(p+"")});if(El(c,a)){Dl(a.nc)&&c("u",a.nc);Dl(a.mc)&&c("tran",a.mc);c("gtm",Cl());!1===a.Cf&&c("npa","1");if(a.Jc){var h=wl("dc",a.Ia);h&&h.length&&c("gcldc",h.join("."));var k=wl("aw",a.Ia);k&&k.length&&c("gclaw",k.join("."));var l=xl();l&&c("gac",l);Ak(a.Ia,void 0,a.Zf,a.$f);
var m=wk[xk(a.Ia)];m&&c("auiddc",m)}Dl(a.ad)&&c("prd",a.ad,!0);La(a.nd,function(n,p){c(n,p)});e+=b||"";Dl(a.$b)&&c("~oref",a.$b);a.gc?Oe(e+"?",a.C):Pe(e+"?",a.C,a.B)}else I(a.B)};var Hl=["input","select","textarea"],Il=["button","hidden","image","reset","submit"],Jl=function(a){var b=a.tagName.toLowerCase();return!Ga(Hl,function(c){return c===b})||"input"===b&&Ga(Il,function(c){return c===a.type.toLowerCase()})?!1:!0},Kl=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):Ve(a,["form"],100)},Ll=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Jl(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Ol=!!D.MutationObserver,Pl=void 0,Ql=function(a){if(!Pl){var b=function(){var c=H.body;if(c)if(Ol)(new MutationObserver(function(){for(var e=0;e<Pl.length;e++)I(Pl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qe(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Pl.length;e++)I(Pl[e])}))})}};Pl=[];H.body?b():I(b)}Pl.push(a)};
var am=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};If("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},bm=function(a){var b=am(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},cm=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var dm=[],em=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),fm=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<dm.length;f++)if(!dm[f])return dm[f]=d,f;return dm.push(d)-1},gm=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ra()};I(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=bm(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},hm=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(em){var e=!1;I(function(){e||gm(a,b,c)()});return fm(function(f){e=!0;for(var h={Pa:0};h.Pa<f.length;h={Pa:h.Pa},h.Pa++)I(function(k){return function(){return a(f[k.Pa])}}(h))},b,c)}return D.setInterval(gm(a,b,c),1E3)},im=function(a){em?0<=a&&a<dm.length&&dm[a]&&(dm[a].disconnect(),dm[a]=void 0):D.clearInterval(a)};var km=D.clearTimeout,lm=D.setTimeout,T=function(a,b,c){if(ug()){b&&I(b)}else return Me(a,b,c)},mm=function(){return D.location.href},nm=function(a){return zh(Bh(a),"fragment")},om=function(a){return Ah(Bh(a))},pm=function(a,b){return kg(a,b||2)},qm=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=ak(a)):d=ak(a);return d},rm=function(a,b){D[a]=b},U=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},sm=function(a,b,c){return Di(a,b,void 0===c?!0:!!c)},tm=function(a,b){if(ug()){b&&I(b)}else Oe(a,b)},um=function(a){return!!pk(a,"init",!1)},vm=function(a){nk(a,"init",!0)},wm=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":zf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(S("https://","http://",c))},xm=function(a,b){var c=a[b];return c};
var ym=ik.Tg;var zm;var Wm=new Ia;function Xm(a,b){function c(h){var k=Bh(h),l=zh(k,"protocol"),m=zh(k,"host",!0),n=zh(k,"port"),p=zh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Ym(a){return Zm(a)?1:0}
function Zm(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Fa(c)){for(var d=0;d<c.length;d++)if(Ym({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=B(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,u=Wm.get(q);u||(u=new RegExp(c,t),Wm.set(q,u));p=u.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Xm(b,
c)}return!1};var $m=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var an={},bn=encodeURI,W=encodeURIComponent,cn=Pe;var dn=function(a,b){if(!a)return!1;var c=zh(Bh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var en=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};an.Kg=function(){var a=!1;return a};var so=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var Do=window,Eo=document,Fo=function(a){var b=Do._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Do["ga-disable-"+a])return!0;try{var c=Do.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Di("AMP_TOKEN",Eo.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Eo.getElementById("__gaOptOutExtension")?!0:!1};var Io=function(a){La(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.fa]||{};La(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Mo=function(a,b,c){pi(b,c,a)},No=function(a,b,c){pi(b,c,a,!0)},Po=function(a,b){};
function Oo(a,b){}var Y={b:{}};

Y.b.vis=["google"],function(){var a={};(function(b){Y.__vis=b;Y.__vis.g="vis";Y.__vis.h=!0;Y.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(new Date);if(e&&250>f-e.time)return e.value;e={time:f,value:null};var h=b.vtp_outputMethod,k=null;if("CSS"==b.vtp_selectorType){var l=Ye(b.vtp_elementSelector);l&&
0<l.length&&(k=l[0])}else k=H.getElementById(b.vtp_elementId);if(k)switch(h){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=bm(k)>=m&&!cm(k);break;case "PERCENT":e.value=0,cm(k)||(e.value=Math.round(1E3*bm(k))/10)}a[c]=e;return e.value})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Gl(b,c)}(function(b){Y.__flc=b;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=en(b.vtp_customVariable||[],"key","value")||{},e={fb:b.vtp_activityTag,Jc:c,Ia:b.vtp_conversionCookiePrefix||void 0,Jb:void 0,X:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Kc:b.vtp_advertiserId,Nc:b.vtp_groupTag,B:b.vtp_gtmOnFailure,C:b.vtp_gtmOnSuccess,
$b:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",ed:void 0,gc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,mc:b.vtp_transactionVariable,transactionId:void 0,nc:b.vtp_userVariable,nd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,U("google_attr").build([en(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.b.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ih();T(b,function(){var d=U("google_trackConversion");if(Da(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=en(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Cl()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(sg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=pm("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?zh(Bh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):om(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=lk(c,"gtm.click");qm(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!um("cl")){var c=U("document");Qe(c,"click",a,!0);vm("cl")}I(b.vtp_gtmOnSuccess)})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return sm(a.vtp_name,pm("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Gl(b,c)}(function(b){Y.__fls=b;Y.__fls.g="fls";Y.__fls.h=!0;Y.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(p){p=p||[];for(var t=[],q=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],u=0;u<p.length;u++)for(var v=0;v<q.length;v++){var w=q[v],y=p[u][w[1]];void 0!==y&&t.push(w[0]+
(u+1)+":"+W(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(pm("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var h=e[f].split(":");h[1]=h[1]&&W(h[1])||"";e[f]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=en(b.vtp_customVariable||
[],"key","value")||{},m={fb:b.vtp_activityTag,Jc:k,Ia:b.vtp_conversionCookiePrefix||void 0,Jb:b.vtp_revenue,X:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Kc:b.vtp_advertiserId,Nc:b.vtp_groupTag,B:b.vtp_gtmOnFailure,C:b.vtp_gtmOnSuccess,$b:b.vtp_useImageTag?void 0:b.vtp_url,ad:c,protocol:"",ed:b.vtp_quantity,gc:!b.vtp_useImageTag,mc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,nc:b.vtp_userVariable,nd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,U("google_attr").build([en(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,t){if(!r(t))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<B(e,t))return}else if("write"===p){if(-1<B(f,t))return}else if("readwrite"===p){if(-1<B(f,t)&&-1<B(e,t))return}else if("execute"===p){if(-1<B(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
t+".");},J:a}})}();Y.b.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.priorityOverride=0})(function(a){return Ha(a.vtp_min,a.vtp_max)})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=pm("gtm.url",1);c=c||mm();var d=b[a("vtp_component")];if(!d||"URL"==d)return om(String(c));var e=Bh(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?Fa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var p=zh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=zh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=pm(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.ts=[],function(){(function(a){Y.__ts=a;Y.__ts.g="ts";Y.__ts.h=!0;Y.__ts.priorityOverride=0})(function(a){function b(e,f){void 0!==a[f]&&c.push([e,a[f]])}var c=U("gts",[]);c.push(["id",a.vtp_trustedStoresAccountId]);b("google_base_offer_id","vtp_shoppingId");b("google_base_subaccount_id","vtp_shoppingAccountId");b("google_base_country","vtp_shoppingCountry");b("google_base_language","vtp_shoppingLanguage");b("locale","vtp_locale");var d=a.vtp_position||"";"USER_DEFINED"==d?c.push(["badge_container",
a.vtp_elementId]):"BOTTOM_LEFT"!=d&&(d="BOTTOM_RIGHT");c.push(["badge_position",d]);T(S("https://","http://","www.googlecommerce.com/trustedstores/api/js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.b.asp=["nonGoogleScripts"],function(){(function(a){Y.__asp=a;Y.__asp.g="asp";Y.__asp.h=!0;Y.__asp.priorityOverride=0})(function(a){D.adroll_adv_id=a.vtp_customerId;D.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(D.adroll_conversion_value=a.vtp_conversionValueInDollars,D.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=en(a.vtp_customData,"key","value");D.adroll_custom_data=b}a.vtp_segmentName&&(D.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(D.adroll_email=a.vtp_visitorEmail);D.__adroll_loaded=!0;var c=S("https://s","http://a",".adroll.com/j/roundtrip.js");T(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(en(n.vtp_fieldsToSet,"fieldName","value"),f);G(en(n.vtp_contentGroup,"index","group"),h);G(en(n.vtp_dimension,"index","dimension"),k);G(en(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=G(n);d=G(d,p)}G(en(d.vtp_fieldsToSet,"fieldName","value"),f);G(en(d.vtp_contentGroup,
"index","group"),h);G(en(d.vtp_dimension,"index","dimension"),k);G(en(d.vtp_metric,"index","metric"),l);var t=ph(d.vtp_functionName);if(Da(t)){var q="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,q=u+"."):(u="gtm"+Gf(),q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(Q){var K=[].slice.call(arguments,0);K[0]=q+K[0];t.apply(window,K)},x=function(Q,K){return void 0===K?K:Q(K)},z=function(Q,K){if(K)for(var ya in K)K.hasOwnProperty(ya)&&
y("set",Q+ya,K[ya])},C=function(){var Q=function(Np,Vj,Op){if(!nb(Vj))return!1;for(var zd=Sa(Object(Vj),Op,[]),Ig=0;zd&&Ig<zd.length;Ig++)y(Np,zd[Ig]);return!!zd&&0<zd.length},K;if(d.vtp_useEcommerceDataLayer){var ya=!1;ya||(K=pm("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(K=d.vtp_ecommerceMacroData.ecommerce);if(!nb(K))return;K=Object(K);var Tb=Sa(f,"currencyCode",K.currencyCode);void 0!==Tb&&y("set","&cu",Tb);Q("ec:addImpression",K,"impressions");if(Q("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ja="detail checkout checkout_option click add remove purchase refund".split(" "),jb="refund purchase remove checkout checkout_option add click detail".split(" "),
kb=0;kb<Ja.length;kb++){var vb=K[Ja[kb]];if(vb){Q("ec:addProduct",vb,"products");y("ec:setAction",Ja[kb],vb.actionField);if(ag)for(var Ib=0;Ib<jb.length;Ib++){var Ic=K[jb[Ib]];if(Ic){Ic!==vb&&If("GTM",13);break}}break}}},A=function(Q,K,ya){var Tb=0;if(Q)for(var Ja in Q)if(Q.hasOwnProperty(Ja)&&(ya&&v[Ja]||!ya&&void 0===v[Ja])){var jb=w[Ja]?Oa(Q[Ja]):Q[Ja];"anonymizeIp"!=Ja||jb||(jb=void 0);K[Ja]=jb;Tb++}return Tb},F={name:u};A(f,
F,!0);t("create",d.vtp_trackingId||e.trackingId,F);y("set","&gtm",Cl(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(Q,K){void 0!==d[K]&&y("set",Q,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var N;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var Q=f&&f.hitCallback;Da(Q)&&Q();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var Z={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Na,d.vtp_eventValue||e.value)};A(N,Z,!1);y("send",Z);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var va="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:va})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:sa})}N?y("send","pageview",N):y("send","pageview");}if(!a){var za=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(za="internal/"+za);a=!0;var lb=S("https:","http:","//www.google-analytics.com/"+za,f&&f.forceSSL);
T(lb,function(){var Q=nh();Q&&Q.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Script URL must be a string.");try{if(ce(Bh(f),c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();




Y.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
bl())){pl(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ma:void 0};ml(m);tl(["aw","dc"],m);yl(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),t=b.vtp_urlPosition,q=!!b.vtp_formDecoration;rl(a,p,t,q,n);}})}();


Y.b.aev=["google"],function(){function a(q,u){var v=sg(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var C=p.shift();delete n[C]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(mm());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!dn(q,w)}function e(q){m.test(q)||(q="http://"+q);return zh(Bh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Se(q,"value");case "button":return Te(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)Jl(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Se(w,u)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Te)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),C=Bh(z),A=String(q.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=zh(C,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var F;if(void 0===q.vtp_attribute)F=c(u,w,v);else{var J=q.vtp_attribute,N=a(u,"element");F=N&&Se(N,J)||v||""}return F;case "MD":var Z=q.vtp_mdValue,aa=b(u,"MD",Xl);return Z&&aa?$l(aa,
Z)||v:aa||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[sd.va]=null;c[sd.Xe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){ih();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Cl()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?pm(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},t=function(v){return function(w,y,x,z){var C="DATA_LAYER"==v?pm(x):k[y];z(C)&&p(w,C)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var u=!0;u&&b.push(l);a||(a=!0,T(q,f(),e(q)))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.priorityOverride=0}();
Y.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{T("//bat.bing.com/bat.js",
function(){var k=$m(U("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){I(c.vtp_gtmOnFailure)}};Y.__baut=b;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.priorityOverride=0}();Y.b.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.g="logging";Y.__logging.h=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!an.Kg())throw d(e,{},"Logging is not enabled in all environments");},J:a}})}();
Y.b.fsl=[],function(){function a(){var e=U("document"),f=c(),h=HTMLFormElement.prototype.submit;Qe(e,"click",function(k){var l=k.target;if(l&&(l=Ve(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Se(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=H.getElementById(l.form):m=Ve(l,["form"],100);m&&f.store(m,l)}},!1);Qe(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=f.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ga(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=pk("fsl",h?"nv.mwt":"mwt",0),n;n=h?pk("fsl","nv.ids",[]):pk("fsl","ids",[]);if(!n.length)return!0;var p=lk(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!qm(p,bk(f),m))return!1}else qm(p,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.g=
"fsl";Y.__fsl.h=!0;Y.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(p){return Math.max(k,p)};ok("fsl","mwt",m,0);h||ok("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};ok("fsl","ids",n,[]);h||ok("fsl","nv.ids",n,[]);um("fsl")||(a(),vm("fsl"));I(e.vtp_gtmOnSuccess)})}();Y.b.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=en(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Y.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Le(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=ym(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Pc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Ue(h),k,e)()}else lm(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();






Y.b.lcl=[],function(){function a(){var e=U("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Ig||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=Ve(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=pk("lcl",m?"nv.mwt":"mwt",0),p;p=m?pk("lcl","nv.ids",[]):pk("lcl","ids",[]);if(p.length){var t=lk(l,"gtm.linkClick",p);if(b(k,l,e)&&!m&&n&&l.href){var q=String(xm(l,"rel")||""),u=!!Ga(q.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
u&&If("GTM",36);var v=U((xm(l,"target")||"_self").substring(1)),w=!0;if(qm(t,bk(function(){var y;if(y=w&&v){var x;a:if(u&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Ig=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=xm(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else qm(t,function(){},n||2E3);return!0}}};Qe(e,"click",h,!1);Qe(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=xm(f,"href"),l=k.indexOf("#"),m=xm(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=om(k),p=om(h.location);return n!==p}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(p){return Math.max(k,
p)};ok("lcl","mwt",m,0);h||ok("lcl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};ok("lcl","ids",n,[]);h||ok("lcl","nv.ids",n,[]);um("lcl")||(a(),vm("lcl"));I(e.vtp_gtmOnSuccess)}var d=!1;d=!0;Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0;}();

Y.b.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(pm("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!cm(f.target)){h.has(e.Ab)||h.set(e.Ab,""+b());h.has(e.yc)||h.set(e.yc,""+b());var p=0;h.has(e.Db)&&(p=Number(h.get(e.Db)));p+=100;h.set(e.Db,""+p);if(p>=k){var t=lk(f.target,"gtm.elementVisibility",[h.uid]),q=bm(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.yc));
t["gtm.visibleLastTime"]=Number(h.get(e.Ab));qm(t);l()}}}if(!h.has(e.Ua)&&(0==k&&m(),!h.has(e.Da))){var n=U("self").setInterval(m,100);h.set(e.Ua,n)}}function d(f){f.has(e.Ua)&&(U("self").clearInterval(Number(f.get(e.Ua))),f.a(e.Ua))}var e={Ua:"polling-id-",yc:"first-on-screen-",Ab:"recent-on-screen-",Db:"total-visible-time-",Da:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Ye(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=H.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var A=
new a(v[C],q);d(A)}v=[];for(var F=0;F<x.length;F++)v.push(x[F]);0<=w&&im(w);0<v.length&&(w=hm(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.Da)||c(y,x,p,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var C=new a(v[z],q);C.set(e.Da,"1");d(C)}im(w);if(n&&Pl)for(var A=0;A<Pl.length;A++)Pl[A]===h&&Pl.splice(A,1)}:function(){x.set(e.Da,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===u&&x.has(e.Da)&&(x.a(e.Da),x.a(e.Db)),x.a(e.Ab))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,p=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Ql(h);I(f.vtp_gtmOnSuccess)})}();

var Kp={};Kp.macro=function(a){if(ik.Dc.hasOwnProperty(a))return ik.Dc[a]},Kp.onHtmlSuccess=ik.he(!0),Kp.onHtmlFailure=ik.he(!1);Kp.dataLayer=lg;Kp.callback=function(a){Ef.hasOwnProperty(a)&&Da(Ef[a])&&Ef[a]();delete Ef[a]};function Lp(){P[Hd.w]=Kp;Ua(Ff,Y.b);kd=kd||ik;ld=Rg}
function Mp(){dl.gtm_3pds=!0;P=D.google_tag_manager=D.google_tag_manager||{};if(P[Hd.w]){var a=P.zones;a&&a.unregisterChild(Hd.w)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)dd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)gd.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)fd.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);ed.push(p)}id=Y;jd=Ym;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;jj();Ld=new Kd(q);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Ff[x]=w}mj(v);Lp();hk();Vg=!1;Wg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Yg();else{Qe(H,"DOMContentLoaded",
Yg);Qe(H,"readystatechange",Yg);if(H.createEventObject&&H.documentElement.doScroll){var z=!0;try{z=!D.frameElement}catch(J){}z&&Zg()}Qe(D,"load",Yg)}Ej=!1;"complete"===H.readyState?Gj():Qe(D,"load",Gj);a:{if(!ag)break a;D.setInterval(bg,864E5);}
Bf=(new Date).getTime();}}Mp();

})()