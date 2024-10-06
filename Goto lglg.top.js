// ==UserScript==
// @name         Goto lglg.top
// @namespace    http://tampermonkey.net/
// @version      2024-08-17
// @description  Add a button that can switch to lglg.top
// @author       Zbrprogrammer
// @match        https://www.luogu.com.cn/discuss/*
// @match        http://www.luogu.com/discuss/*
// @match        https://www.luogu.com.cn/discuss/*
// @match        http://www.luogu.com/discuss/*
// @match        https://www.luogu.com.cn/user/*
// @match        http://www.luogu.com/user/*
// @match        https://www.luogu.com.cn/user/*
// @match        http://www.luogu.com/user/**
// @match        http://www.luogu.com/discuss/*
// @match        https://www.luogu.com.cn/judgement
// @match        http://www.luogu.com/judgement
// @match        https://www.luogu.com.cn/judgement
// @match        http://www.luogu.com/judgement
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @downloadURL  https://github.com/ZBRprogrammer/LuoguTampermonkeyScripts/edit/main/Goto%20lglg.top.js
// @updateURL    https://github.com/ZBRprogrammer/LuoguTampermonkeyScripts/edit/main/Goto%20lglg.top.js
// ==/UserScript==

(function() {
    'use strict';
    const delay = Math.random() * 2000+200; // 1到2秒之间的随机延迟
    console.log("Goto lglg.top loaded successfully");
    setTimeout(() => {
        // 获取当前页面的URL
    const url = window.location.href;
    const defaultButtonStyle = 'border-color: rgb(255, 255, 255); color: rgb(255, 255, 255); background-color: rgb(52, 152, 219);';
    function createButton(text, additionalStyle = '', dataAttributes = {}) {
        const button = document.createElement('button');
        button.textContent = text;
        // 设置用户传入的data属性
        for (let key in dataAttributes) {
            button.setAttribute(key, dataAttributes[key]);
        }
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'lfe-form-sz-middle');
        button.setAttribute('solid', '');
        button.setAttribute('size', 'middle');
        button.style = `${defaultButtonStyle}; ${additionalStyle}`; // 合并样式
        return button;
    }
    function createA(text,href, additionalStyle = '',dataAttributes = {}){
        const A = document.createElement('a');
        A.href=href;
        for (let key in dataAttributes) {
            A.setAttribute(key, dataAttributes[key]);
        }
        A.style = `${additionalStyle}`;
        const button = createButton(
            text,'margin-right: 5px;', // 添加5px的右边距
                {
                    'data-v-cc52fb5c': '',
                    'data-v-59a020e0': '',
                    'data-v-f9624136': ''
                })
        A.appendChild(button);
        return A;
    }
    // 匹配 "/user/xxx#*" 模式的URL
    const userMatch = url.match(/\/user\/(\d+)(#.*)?$/);
    if (userMatch) {
        const userId = userMatch[1]; // 获取数字部分
        const buttonContainer = document.querySelector('div.user-action');

        if (buttonContainer) {
            const A1 = createA(
                'Goto lglg',
                `https://www.lglg.top/user/${userId}`,
                "",
                {
                    "data-v-0640126c":"",
                    "data-v-59a020e0":"",
                }
            )
            const A2 = createA(
                'Goto benben',
                `https://z.benben.sbs/user/${userId}/1`,
                "",
                {
                    "data-v-0640126c":"",
                    "data-v-59a020e0":"",
                }
            )
            buttonContainer.insertBefore(A1, buttonContainer.firstChild); // 插入到容器的最前端
            buttonContainer.insertBefore(A2, buttonContainer.firstChild); // 插入到容器的最前端
        }
    }
    // 匹配 "/discuss/xxx" 模式的URL
    const discussMatch = url.match(/\/discuss\/(\d+)(\?page=(\d+))?$/);
    if (discussMatch) {
        const discussId = discussMatch[1]; // 获取数字部分
        const buttonC = document.querySelector("#app > div.main-container > main > div > section.side > div > div");
        const childNum=buttonC.children.length;
        const buttonContainer = document.querySelector(`#app > div.main-container > main > div > section.side > div > div > div:nth-child(${childNum})`);

        if (buttonContainer) {
            const A = createA(
                'Goto lglg',
                `https://www.lglg.top/${discussId}`,
                "",
                {
                    "data-v-0640126c":"",
                    "data-v-59a020e0":"",
                }
            )
            buttonContainer.appendChild(A);
        }
    }

    // 匹配 "/judgement" 模式的URL
    const judgementMatch = url.match(/\/judgement$/);
    if (judgementMatch) {
        const buttonContainer = document.querySelector('#app > div.main-container > main > div > section.side');

        if (buttonContainer) {
            const A = createA(
                'Goto lglg',
                `https://www.lglg.top/judgement`,
                "",
                {
                    "data-v-0640126c":"",
                    "data-v-59a020e0":"",
                }
            )
            buttonContainer.appendChild(A);
        }
    }
    },delay)

})();
