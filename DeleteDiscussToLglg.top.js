// ==UserScript==
// @name         luogu被删除讨论自动跳转lglg.top
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Jump to lglg.top when discussion in luogu is forbidden
// @author       Zbrprogrammer
// @match        https://www.luogu.com.cn/discuss/*
// @match        https://www.luogu.com/discuss/*
// @match        http://www.luogu.com.cn/discuss/*
// @match        http://www.luogu.com/discuss/*
// @downloadURL  https://github.com/ZBRprogrammer/LuoguTampermonkeyScripts/edit/main/DeleteDiscussToLglg.top.js
// @updateURL    https://github.com/ZBRprogrammer/LuoguTampermonkeyScripts/edit/main/DeleteDiscussToLglg.top.js
// ==/UserScript==

(function() {
    'use strict';

    // 延迟时间（毫秒）
    const delay = 0; // 1到2秒之间的随机延迟

    setTimeout(() => {
        // 获取当前网址最后一个“/”后的部分
        const currentUrl = window.location.href;
        const discussMatch = currentUrl.match(/\/discuss\/(\d+)(\?page=(\d+))?$/);
        const discussId = discussMatch[1];

        // 目标跳转网址
        const redirectUrl = `https://www.lglg.top/${discussId}`;


        fetch(currentUrl)
            .then(response => {
            if (response.status === 403) {
                window.location.href = redirectUrl;
            } else {
                console.log('Response status:', response.status);
            }
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }, delay);

})();
