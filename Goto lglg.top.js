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
    function createButton(text, onClick, additionalStyle = '', dataAttributes = {}) {
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
        button.onclick = onClick;
        return button;
    }

    // 匹配 "/user/xxx#*" 模式的URL
    const userMatch = url.match(/\/user\/(\d+)(#.*)?$/);
    if (userMatch) {
        const userId = userMatch[1]; // 获取数字部分
        const buttonContainer = document.querySelector('div.user-action');

        if (buttonContainer) {
            const button = createButton(
                'Goto lglg',
                function() {
                    window.location.href = `https://www.lglg.top/user/${userId}`;
                },
                'margin-right: 5px;', // 添加5px的右边距
                {
                    'data-v-cc52fb5c': '',
                    'data-v-59a020e0': '',
                    'data-v-f9624136': ''
                } // 用户传入的data属性
            );
            buttonContainer.insertBefore(button, buttonContainer.firstChild); // 插入到容器的最前端
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
            const button = createButton(
                'Goto lglg',
                function() {
                    window.location.href = `https://www.lglg.top/${discussId}`;
                },
                '',
                {
                    'data-v-7ade990c':'',
                    'data-v-70c65cc7':'',
                    'data-v-8b7f80ba':''
                }
            );
            buttonContainer.appendChild(button);
        }
    }

    // 匹配 "/judgement" 模式的URL
    const judgementMatch = url.match(/\/judgement$/);
    if (judgementMatch) {
        const buttonContainer = document.querySelector('#app > div.main-container > main > div > section.side');

        if (buttonContainer) {
            const button = createButton(
                'Goto lglg',
                function() {
                    window.location.href = `https://www.lglg.top/judgement`;
                },
                '' // 默认无额外样式
            );
            buttonContainer.appendChild(button);
        }
    }
    },delay)

})();
