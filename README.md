---
tags: 六角課程
---

---

# 六角體驗營－切版作業二
+ 目標：做所有 RWD 頁面，且 JS 效果都做，畫面不可顯示 x 軸'
+ x 軸備註：請不要在 body 或第一層 div 加上 overflow:hidden 來規避 x 軸問題
+ 作業連結：[GitHubPage](https://irenelee18.github.io/chatTalker/)、[GitHubRepo](https://github.com/IreneLee18/chatTalker)


---

## 心得
這算是第二個使用bs5來寫的版型，平常是習慣自己手刻，所以中間爬了很多文章查詢該如何完美使用bs5，雖然沒有做得很完美～但經過這次體驗學習到了很多新東西！另外再看完直播第三堂才驚覺，原來自己真的只按照設計稿去做，根本沒想到還有平板的模式要去調整，自己檢視後發現有些畫面都跑板，最終作業有再補上平板模式才繳交，慶幸自己有看到那堂直播🔥🔥🔥


---

## 背景三顆球
這三顆球應該是裡面我花最多時間在研究的部分，不管怎麼做都會出現Ｘ軸，結果就使用`overflow: hidden;`，自以為成功解決了，結果還是被老師抓出來說不可以這樣寫哈哈哈
>老師建議：當移除 body 裡面第一層的 #app div 裡面的 overflow-hidden 時，因為你的球有超出螢幕，導致有 x 軸，請嘗試處理看看。一個處理的思路是讓 ball 比較小，讓它只顯示背景局部的圓，不要讓 left right 超出螢幕外，只讓它貼齊畫面最左右邊

參考老師的建議後，想到的方式是：使用絕對定位方式，和調整了width使球可以因為寬度限制而被切割，並加上background-size去調整大小

+ 步驟：由於卡最久的是第二顆球，所以只特別講這一個
    1. 在最外層加上`position-relative`，並加上`position-absolute`
    2. 使用絕對定位方式把球貼齊右邊`right: 0;`
    3. 再將球寫上寬、高，並使用[background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)去改變它的大小
```htmlembedded=
<div id="app" class="position-relative">
    ...
    
    <!-- ball-淺藍 -->
    <div class="position-absolute ball-2 zindex-1" style="background-image: url('imag/ball02.svg');"></div>
     
    ...
</div>
```
```css=
/* 從手機版模式開始 */
.ball-2 {
  background-size: 9.38rem;
  width: 100px;
  height: 150px;
  top: 54%;
  right: 0;
}

@media (min-width:768px) {
  .ball-2 {
    background-size: 22.5rem;
    height: 360px;
    width: 200px;
    top: 44%;
    right: 0;
  }
}
```


---

## 路徑問題
沒想到犯了一個低級錯誤，居然路徑寫錯導致圖片沒出來

![](https://i.imgur.com/jLdnRjs.png)
![](https://i.imgur.com/hnl3tMo.png)
![](https://i.imgur.com/qKSipBA.png)

>參考文件：[http://epaper.gotop.com.tw/PDFSample/ACL055700.pdf](http://epaper.gotop.com.tw/PDFSample/ACL055700.pdf)


---

## 老師建議
### 1. 主要區塊

因為自己練習切版過程太過於習慣什麼都加上flex，覺得他太好用導致於有點使用過度，看到老師的建議才知道原來還有這種方式可以改寫！
>首頁下方的區塊，你是用 row d-flex flex-column，每個大區塊用 col 的部分去做，但是那裡其實用一般的 div 從上到下排列就可以了。你可以四個區塊都是 container ，內容就會自動從上到下來排列。沒有必要還要透過 flex-column 來增添那裡的排版複雜度。但我覺得也是個不錯的嘗試

```htmlembedded=
<!-- 原本寫法： -->

<div class="row d-flex flex-column">
    
  <!-- 三大平台 -->
  <div class="col">...</div>

  <!-- 任何角色 -->
  <div class="col">...</div>

  <!-- 快速了解 -->
  <div class="col">...</div>

  <!-- 好評如潮 -->
  <div class="col">...</div>
    
</div>
```
```htmlembedded=
<!-- 老師建議： -->

<div class="row">
    
  <!-- 三大平台 -->
  <div class="container">...</div>

  <!-- 任何角色 -->
  <div class="container">...</div>

  <!-- 快速了解 -->
  <div class="container">...</div>

  <!-- 好評如潮 -->
  <div class="container">...</div>
    
</div>
```


---

### 2.標題用法
以前都沒有特別注意到標題的問題，甚至是根本不知道標題有什麼差別只知道==一個頁面只能出現1個h1==，經過這次老師的建議有比較了解標題的用法了。


>首頁的「三大平台，我來搞定」你設置 h2 是可以的，但裡面的 「Facebook Messenger」、「LINE 官方帳號」卻設置 h4，這樣會變成說像是一個 word 文件有副標題，但卻沒有第三大標題，卻直接掉到第四大標題，所以會建議改為 h3 會比較好，如果你是比較想要有 h4 的大寫，bootstrap 有支援 class 樣式，例如`<h3 class="h4"></h3>`

---
## 卡關部分
❁ javascript：第二頁選擇方案按鈕一直無法成功出現初始值，最後想到要加上初始值才可以成功渲染到畫面上
```javascript=
const app = Vue.createApp({
  data() {
    return {
      renderNum:'10000', // 初始值
      temp:{},
      ...,
    };
  },
  created() {
    //page2:做預設一開始是10000位
    this.temp.num=this.renderNum
  },
});
```


