---
hide:
  - navigation
  - toc
---

<div class="full-page-background" id="intro">
  <span class="enter-site" onclick="enterSite()">&#x2304;</span>
</div>

<div class="main-content" id="main-content">
  <h1 class="welcome-text">Welcome to My Website</h1>
  <p>网站介绍内容...</p>
  <!-- 其他内容 -->
</div>

<script>
  function enterSite() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }
</script>
