/**
 * 「救命，我被9班同学包围了」Web 版
 * 从 HarmonyOS ArkTS 项目转换而来
 */

(function () {
  'use strict';

  // ===== 页面数据（与原鸿蒙项目一一对应） =====
  var pages = [
    // 第 0 页 — Index 首页
    {
      type: 'index',
      bg: 'assets/images/1.jpg',
      align: 'center',
      title: '救命',
      subtitle: '救我被9班同学包围了',
      buttonText: '点击开始游戏',
      buttonClass: 'btn-start',
      next: 1
    },
    // 第 1 页 — 原 pages/2
    {
      type: 'story',
      bg: 'assets/images/2.jpg',
      align: 'end',
      texts: ['这是你的攻略对象，他现在忧郁了，你快去安慰她'],
      buttonText: '点击前往下一章',
      next: 2
    },
    // 第 2 页 — 原 pages/3
    {
      type: 'story',
      bg: 'assets/images/3.jpg',
      align: 'end',
      texts: ['他现在麦当劳，没有钱了，你需要区帮他付钱'],
      buttonText: '点击前往下一章',
      next: 3
    },
    // 第 3 页 — 原 pages/4
    {
      type: 'story',
      bg: 'assets/images/4.jpg',
      align: 'end',
      texts: ['你现在正在把帽子放在他的头上看效果'],
      buttonText: '点击前往下一章',
      next: 4
    },
    // 第 4 页 — 原 pages/5
    {
      type: 'story',
      bg: 'assets/images/5.jpg',
      align: 'end',
      texts: ['你带来了帽子，准备给你的同桌带上'],
      buttonText: '点击前往下一章',
      next: 5
    },
    // 第 5 页 — 原 pages/6
    {
      type: 'story',
      bg: 'assets/images/6.jpg',
      align: 'end',
      texts: ['你给他带上了帽子'],
      buttonText: '点击前往下一章',
      next: 6
    },
    // 第 6 页 — 原 pages/7
    {
      type: 'story',
      bg: 'assets/images/7.jpg',
      align: 'end',
      texts: ['你提供了帽子，想让他cos小南梁，他正在愤怒的指着你，你现在要说服他不摘下来'],
      buttonText: '点击前往下一章',
      next: 7
    },
    // 第 7 页 — 原 pages/8
    {
      type: 'story',
      bg: 'assets/images/8.jpg',
      align: 'end',
      texts: ['你把他说服了，他现在cos小南梁可开心了'],
      buttonText: '点击前往下一章',
      next: 8
    },
    // 第 8 页 — 原 pages/9（两段文字）
    {
      type: 'story',
      bg: 'assets/images/9.jpg',
      align: 'end',
      texts: [
        '你说服了小南梁，现在，图中左侧的人物正在拿着你的帽子追另一个人戴',
        'ps：图中左边的这个人是个大sb，老爱装了'
      ],
      buttonText: '点击前往下一章',
      next: 9
    },
    // 第 9 页 — 原 pages/10
    {
      type: 'story',
      bg: 'assets/images/10.jpg',
      align: 'end',
      texts: ['看他cos南梁（广东双马尾）'],
      buttonText: '点击前往下一章',
      next: 10
    },
    // 第 10 页 — 原 pages/11
    {
      type: 'story',
      bg: 'assets/images/11.jpg',
      align: 'end',
      texts: ['这人是个老傻子，又sb又爱装，他现在正在恶龙咆哮呢'],
      buttonText: '恭喜！您已成功通关',
      buttonClass: 'btn-clear',
      next: 11
    },
    // 第 11 页 — 原 pages/end
    {
      type: 'end',
      bg: null,
      align: 'center',
      texts: ['感谢您游玩「救命，我被9班同学包围了」'],
      buttonText: '别走，还有第二关',
      next: 12
    },
    // 第 12 页 — 原 rawfile/video
    {
      type: 'video',
      bg: null,
      videoSrc: 'assets/videos/wt.mp4',
      next: 0  // 视频结束后回到首页
    }
  ];

  // ===== DOM 引用 =====
  var container = document.getElementById('page-container');
  var backBtn = document.getElementById('back-btn');
  var indicator = document.getElementById('page-indicator');

  // ===== 状态 =====
  var currentIndex = 0;
  var historyStack = [];
  var pageElements = [];

  // ===== 初始化 =====
  function init() {
    // 预创建所有页面元素
    pages.forEach(function (page, index) {
      var el = createPageElement(page, index);
      container.appendChild(el);
      pageElements.push(el);
    });

    // 创建指示器圆点
    createIndicatorDots();

    // 绑定事件
    backBtn.addEventListener('click', goBack);

    // 键盘支持：左右箭头导航
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && historyStack.length > 0) {
        goBack();
      }
    });

    // 显示首页
    showPage(0, false);
  }

  // ===== 创建单个页面 DOM =====
  function createPageElement(page, index) {
    var el = document.createElement('div');
    el.className = 'game-page';
    el.dataset.index = index;

    // 设置对齐方式
    if (page.align === 'center') {
      el.classList.add('align-center');
    } else if (page.align === 'end') {
      el.classList.add('align-end');
    }

    // 设置背景
    if (page.type === 'end') {
      el.classList.add('end-page');
    } else if (page.type === 'video') {
      el.classList.add('video-page');
    } else if (page.bg) {
      el.style.backgroundImage = 'url("' + page.bg + '")';
    }

    // 根据页面类型填充内容
    if (page.type === 'index') {
      // 首页：大标题 + 副标题 + 开始按钮
      var title = document.createElement('div');
      title.className = 'title-main';
      title.textContent = page.title;
      el.appendChild(title);

      if (page.subtitle) {
        var subtitle = document.createElement('div');
        subtitle.className = 'title-sub';
        subtitle.textContent = page.subtitle;
        el.appendChild(subtitle);
      }

      var btn = createButton(page.buttonText, page.buttonClass, page.next);
      el.appendChild(btn);
    } else if (page.type === 'story' || page.type === 'end') {
      // 故事页/结束页：文字气泡 + 按钮
      if (page.texts) {
        page.texts.forEach(function (text) {
          var bubble = document.createElement('div');
          bubble.className = 'text-bubble';
          bubble.textContent = text;
          el.appendChild(bubble);
        });
      }

      var btn = createButton(page.buttonText, page.buttonClass, page.next);
      el.appendChild(btn);
    } else if (page.type === 'video') {
      // 视频页
      var wrapper = document.createElement('div');
      wrapper.className = 'video-wrapper';
      var video = document.createElement('video');
      video.src = page.videoSrc;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      wrapper.appendChild(video);
      el.appendChild(wrapper);
    }

    return el;
  }

  // ===== 创建按钮 =====
  function createButton(text, extraClass, nextIndex) {
    var btn = document.createElement('button');
    btn.className = 'game-btn';
    if (extraClass) {
      btn.classList.add(extraClass);
    }
    btn.textContent = text;
    btn.addEventListener('click', function () {
      navigateTo(nextIndex);
    });
    return btn;
  }

  // ===== 创建指示器圆点 =====
  function createIndicatorDots() {
    // 只为故事页面创建指示器（index 到 end，不含 video）
    for (var i = 0; i < pages.length - 1; i++) {
      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.dataset.index = i;
      indicator.appendChild(dot);
    }
  }

  // ===== 导航到指定页面 =====
  function navigateTo(index) {
    if (index < 0 || index >= pages.length) return;

    // 记录历史（用于返回）
    if (index !== currentIndex) {
      historyStack.push(currentIndex);
    }

    showPage(index, true);
  }

  // ===== 返回上一页 =====
  function goBack() {
    if (historyStack.length === 0) return;
    var prevIndex = historyStack.pop();
    showPage(prevIndex, true);
  }

  // ===== 显示指定页面 =====
  function showPage(index, animate) {
    // 隐藏当前页面
    if (pageElements[currentIndex]) {
      pageElements[currentIndex].classList.remove('active');
    }

    currentIndex = index;

    // 显示目标页面
    if (pageElements[currentIndex]) {
      pageElements[currentIndex].classList.add('active');
    }

    // 更新返回按钮
    if (historyStack.length > 0) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }

    // 更新指示器
    updateIndicator();

    // 如果是视频页面，暂停其他视频并播放当前
    pauseAllVideos();
    if (pages[currentIndex] && pages[currentIndex].type === 'video') {
      var video = pageElements[currentIndex].querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.play().catch(function () {
          // 自动播放可能被浏览器阻止，用户需手动点击播放
        });
      }
    }

    // 更新 URL hash（支持浏览器前进/后退）
    if (animate) {
      history.replaceState(null, '', '#' + index);
    }
  }

  // ===== 暂停所有视频 =====
  function pauseAllVideos() {
    var videos = container.querySelectorAll('video');
    videos.forEach(function (v) {
      v.pause();
    });
  }

  // ===== 更新指示器 =====
  function updateIndicator() {
    var dots = indicator.querySelectorAll('.dot');
    dots.forEach(function (dot, i) {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // 首页和视频页不显示指示器
    if (currentIndex === 0 || (pages[currentIndex] && pages[currentIndex].type === 'video')) {
      indicator.classList.remove('visible');
    } else {
      indicator.classList.add('visible');
    }
  }

  // ===== 启动 =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
