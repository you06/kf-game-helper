// ==UserScript==
// @name         sell equipment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       you06
// @match        https://bbs.2dkf.com/kf_fw_ig_mybp.php
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const intervalMin = 1000
  const intervalMax = 2500

  const trs = document.querySelectorAll('.kf_fw_ig4 tbody tr')
  const todoList = []

  for (let i = 0; i < trs.length; i++) {
    if (i <= 1 || i >= trs.length - 1) continue
    else {
      const id = trs[i].cells[0].id.split('_')[1]
      if (trs[i].children.length >= 3
         && (trs[i].cells[2].children[0].innerText.startsWith('普通')
         || trs[i].cells[2].children[0].innerText.startsWith('幸运')
         || trs[i].cells[2].children[0].innerText.startsWith('稀有'))) {
        todoList.push(id)
      }
    }
  }

  if (todoList.length > 0) {
    sellEquipment(todoList)
  }

  function sellEquipment(todo) {
    if(todo.length <= 0) {
      window.location.reload()
    } else {
      const equipId = todo.shift()
      rlzb(equipId)
      const intervalTime = intervalMin + Math.floor(Math.random() * (intervalMax - intervalMin))
      setTimeout(function() {
        sellEquipment(todo)
      }, intervalTime)
    }
  }
})();