// ==UserScript==
// @name         inject box
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       you06
// @match        https://bbs.2dkf.com/kf_fw_ig_mybp.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const intervalMin = 1500
    const intervalMax = 3000

    function openBox(t, c, cb) {
      openOnce(t, c, c, cb)
    }

    function openAll() {
      const tbody = document.querySelector('.kf_fw_ig1 tbody')
      const line = tbody.children[1]
      const todoList = []
      for (let i = 0; i < 5; i++){
        const boxCount = parseInt(line.children[i].children[1].innerText)
        todoList.push([i + 1, boxCount])
      }
      openList(todoList)
    }

    function openList(todo, i) {
      i = i || 0
      if (i < todo.length) {
        openBox(todo[i][0], todo[i][1], function() {
          openList(todo, i + 1)
        })
      } else {
        console.log(`open all box done!`)
        alert(`open all box done!`)
        window.location.reload()
      }
    }

    function openOnce(t, c, total, cb) {
      if (c <= 0) {
        console.log(`${total} box done!`)
        if (!cb) {
          alert(`${total} box done!`)
          return true
        } else {
          return cb()
        }
      } else {
        dkhz('' + t)
        const intervalTime = intervalMin + Math.floor(Math.random() * (intervalMax - intervalMin))
        if ((total - c) % 10 === 0) {
          console.log(`Processing: ${total - c}/${total}`)
        }
        setTimeout(function() {
          if (!cb) {
            openOnce(t, c - 1, total)
          } else {
            openOnce(t, c - 1, total, cb)
          }
        }, intervalTime)
      }
    }

    const myBoxesTitle = document.querySelectorAll('.kf_fw_ig_title1')[1]
    const openAllButton = document.createElement('button')
    openAllButton.style.border = '1px solid #fff'
    openAllButton.style.marginLeft = '10px'
    openAllButton.style.background = 'transparent'
    openAllButton.style.color = '#fff'
    openAllButton.style.cursor = 'pointer'
    openAllButton.innerText = '打开所有盒子'
    openAllButton.onclick = openAll
    myBoxesTitle.appendChild(openAllButton)

    window.openBox = openBox
    window.openAll = openAll

    console.info(`Inject function openBox into global space, usage: openBox([box type], [box amount])`)
    console.info(`box type verbose`)
    console.log(`%c1 普通盒子`, "color:#00CC00")
    console.log(`%c2 幸运盒子`, "color:#0000CC")
    console.log(`%c3 稀有盒子`, "color:#EECC00")
    console.log(`%c4 传奇盒子`, "color:#FF6600")
    console.log(`%c5 神秘盒子`, "color:#FF0066")
    console.info(`Example: openBox(1, 100) - open 100 normal box. There will be alert when the script finished.`)
    console.log(`%cuse openAll() to automatically open all the boxes.`, "color:#FF0066")
    console.info(`enjoy ^_^`)
})();