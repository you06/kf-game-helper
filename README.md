# kf-game-helper

### Usage

* download [tampermonkey](http://tampermonkey.net/)

* add `box.js` and `sell.js` into `tampermonkey`

### Feature

#### box.js

inject box 

> open indicated amount boxes automatically.

```
Inject function openBox into global space, usage: openBox([box type], [box amount])
box type verbose
1 普通盒子
2 幸运盒子
3 稀有盒子
4 传奇盒子
5 神秘盒子
Example: openBox(1, 100) - open 100 normal box. There will be alert when the script finished.
use openAll() to automatically open all the boxes.
enjoy ^_^
```

> A button to trigger openAll function

![image](https://user-images.githubusercontent.com/9587680/44957163-83734d80-af01-11e8-8f2d-7b277dd17cf4.png)

#### sell.js

Auto sell low rare equipment. It will refresh page when working.
