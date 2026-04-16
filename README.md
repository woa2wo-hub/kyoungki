# 📁 포트폴리오 수정 가이드

## 폴더 구조

```
portfolio/
├── index.html              ← 메인 페이지
├── css/
│   └── style.css           ← 전체 스타일 (색상/폰트 변수)
├── js/
│   └── main.js             ← 인터랙션 (필터, 애니메이션 등)
├── images/
│   └── thumbnails/         ← 썸네일 이미지 폴더
│       ├── app-01.jpg
│       ├── responsive-01.jpg ~ 05.jpg
│       ├── detail-01.jpg ~ 02.jpg
│       └── branding-01.jpg ~ 05.jpg
└── pages/
    ├── _template.html      ← 새 프로젝트용 복사본 템플릿
    ├── app-01.html
    ├── responsive-01~05.html
    ├── detail-01~02.html
    └── branding-01~05.html
```

---

## 🎨 색상 바꾸기

`css/style.css` 파일 상단 `:root` 섹션에서 변수를 수정하세요:

```css
:root {
  --bg:      #0a0a0a;   /* 배경 */
  --accent:  #c8ff00;   /* 포인트 컬러 (현재: 네온 옐로우) */
  --text:    #f0f0f0;   /* 본문 텍스트 */
}
```

다른 느낌으로 바꾸고 싶다면:
- 보라 계열: `--accent: #b388ff`
- 민트 계열: `--accent: #00ffc8`
- 오렌지: `--accent: #ff6b35`
- 화이트 심플: `--bg: #ffffff; --text: #111111; --bg-2: #f5f5f5`

---

## ✏️ 내용 수정하기

### 이름 / 직함 변경
`index.html` 에서 아래 항목들을 찾아서 수정:
- `hero__eyebrow`: 직함 (예: Web Designer & UI/UX)
- `hero__title`: 메인 헤드라인
- `about__title`: About 섹션 제목
- `about__desc`: 자기소개 문장
- `footer`: © 옆 이름

### 연락처 / 링크 변경
`index.html` Contact 섹션:
```html
<a href="mailto:your@email.com" ...>your@email.com</a>
<a href="https://github.com/yourname" ...>GitHub</a>
<a href="https://yournotion.com" ...>Notion</a>
```

---

## 🖼️ 이미지 넣기

1. `images/thumbnails/` 폴더에 이미지 파일 복사
2. 파일명 규칙:
   - `app-01.jpg`
   - `responsive-01.jpg` ~ `responsive-05.jpg`
   - `detail-01.jpg` ~ `detail-02.jpg`
   - `branding-01.jpg` ~ `branding-05.jpg`

> 권장 사이즈: **1600 × 900px** (16:9), jpg 또는 webp  
> 이미지가 없으면 회색 placeholder가 자동으로 표시됩니다.

---

## 📄 작품 카드 수정 (index.html)

각 카드에서 수정할 부분:
```html
<h3 class="card__title">여기에 작품 제목</h3>
<p class="card__desc">여기에 설명</p>
<div class="card__meta">
  <span>2024</span>          ← 연도
  <span>App Design</span>    ← 카테고리 텍스트
</div>
```

---

## 📑 작품 상세 페이지 수정 (pages/xxx.html)

각 `pages/xxx.html` 에서 수정:
1. `<title>` 태그: 브라우저 탭 이름
2. `project-title`: 제목
3. `project-meta-row`: Year / Category / Tools / Role
4. `project-hero-img > img src`: 대표 이미지
5. `project-body`: 텍스트 내용
6. `project-gallery img src`: 갤러리 이미지들
7. `project-nav`: 이전/다음 프로젝트 링크

---

## ➕ 새 작품 추가하기

1. `pages/_template.html` 을 복사해서 새 이름으로 저장  
   예: `pages/responsive-06.html`
2. 태그 클래스 확인:
   - 반응형 웹: `card__tag--responsive`
   - 앱: `card__tag--app`
   - 상세페이지: `card__tag--detail`
   - 브랜딩: `card__tag--branding`
3. `index.html` 의 works 그리드에 카드 추가

---

## 🌐 웹에 올리기

- **GitHub Pages**: `index.html` 이 루트에 있으면 바로 배포 가능
- **Netlify**: 폴더 드래그&드롭으로 즉시 배포
- **Vercel**: GitHub 연동 후 자동 배포
