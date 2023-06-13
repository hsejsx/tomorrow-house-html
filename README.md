# 내일의 집

## GNB

- 로그인했을 때

```html
<div class="btn-group">
  <button class="btn-icon lg-hidden" type="button" aria-label="검색">
    <i class="ic-search"></i>
  </button>

  <a class="btn-icon sm-hidden" href="/" aria-label="북마크 페이지로 이동">
    <i class="ic-bookmark"></i>
  </a>

  <a class="btn-icon sm-hidden" href="/" aria-label="내소식 페이지로 이동">
    <i class="ic-bell"></i>
  </a>

  <a class="btn-icon" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <span class="badge">5</span>
  </a>

  <div class="avatar-32 sm-hidden">
    <img src="./assets/images/img-user-01.jpg" alt="유저 프로필 사진" />
  </div>
</div>
```

- 로그인하지 않았을 때

```html
<div class="btn-group">
  <button class="btn-icon lg-hidden" type="button" aria-label="검색">
    <i class="ic-search"></i>
  </button>

  <a class="btn-icon" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <span class="badge">5</span>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

## Sidebar

- 로그인했을 때

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="유저 프로필 사진" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```

- 로그인하지 않았을 때

```html
<div class="user-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```
