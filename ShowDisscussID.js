// ==UserScript==
// @name         Show discuss ID
// @namespace    http://tampermonkey.net/
// @version      v0.0.1
// @description  Show Luogu discuss ID on the right of the bar
// @author       ZomBromine
// @match        https://www.luogu.com.cn/discuss?*
// @match        https://www.luogu.com.cn/discuss
// @match        http://www.luogu.com.cn/discuss?*
// @match        http://www.luogu.com.cn/discuss
// @match        https://www.luogu.com/discuss?*
// @match        https://www.luogu.com/discuss
// @match        http://www.luogu.com/discuss?*
// @match        http://www.luogu.com/discuss
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @downloadURL  https://github.com/ZBRprogrammer/LuoguShowDiscussID/blob/main/ShowDisscussID.js
// @updateURL    https://github.com/ZBRprogrammer/LuoguShowDiscussID/blob/main/ShowDisscussID.js
// ==/UserScript==

(function() {
    'use strict';
    const delay = Math.random() * 2000+200; // 1到2秒之间的随机延迟
    console.log("Show discuss ID loaded successfully");
    setTimeout(()=>{
        const discussList = document.querySelector("#app > div.main-container > main > div > section.main > div > div > div.border.block > div");
        var listLength = discussList.children.length;
        for(let i=1;i<=listLength;i++){
            var id = document.querySelector(`#app > div.main-container > main > div > section.main > div > div > div.border.block > div > div:nth-child(${i}) > div > div > div.row.row-space-between.top > a`);
            //console.log(id.href.split("/"));
            var discussId = id.href.split("/")[4];
            const place = document.querySelector(`#app > div.main-container > main > div > section.main > div > div > div.border.block > div > div:nth-child(${i}) > div > div > div.row.row-space-between.top > div > a`);
            const newSpan = document.createElement('span');
            newSpan.textContent = `ID:${discussId}`;
            newSpan.style.marginRight = '5px';
            place.parentNode.insertBefore(newSpan, place);
        }
    },delay);

})();
