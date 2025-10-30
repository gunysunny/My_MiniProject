# 🥣 Recipe Finder

> 전 세계의 다양한 요리를 검색하고, 재료별로 레시피를 찾을 수 있는 웹 애플리케이션입니다.  
> React + TypeScript + Vite + Tailwind CSS로 구현되었습니다.

---

## 🚀 프로젝트 개요

**Recipe Finder**는 사용자가 음식 이름이나 재료를 입력하면  
[TheMealDB](https://www.themealdb.com/api.php) API를 통해 레시피를 검색하고,  
무작위 추천 요리도 함께 보여주는 프로젝트입니다.

---

## 🧩 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 **검색 기능** | 검색어 입력 시, 디바운스로 API 요청 최적화 |
| 🧠 **디바운스 Hook** | 불필요한 API 호출 방지를 위한 커스텀 훅 (`useDebounce`) |
| 🍳 **레시피 상세 보기** | 선택한 레시피의 재료, 조리법, YouTube 영상 확인 가능 |
| 🧱 **스켈레톤 로딩 UI** | 로딩 시 깔끔한 placeholder 표시 |
| 📱 **반응형 디자인** | 모바일 ~ 데스크탑까지 자연스럽게 대응 |
| ⚙️ **Axios API 관리** | 공통 axios 인스턴스로 API 호출 구조화 |

---

## 🛠 기술 스택

| 분류 | 사용 기술 |
|------|------------|
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS (v4.1) |
| **State / Hook** | React Hooks, Custom Hook (`useRecipes`, `useDebounce`) |
| **API** | TheMealDB REST API |
| **Build / Deploy** | Vercel CI/CD 연동 |

---

## 📁 폴더 구조

```bash
src/
 ├─ api/              # axios 인스턴스 및 API 함수
 ├─ components/       # 재사용 가능한 UI 컴포넌트
 │   ├─ common/       # Skeleton, EmptyState 등
 │   ├─ detail/       # Detail 페이지 관련 컴포넌트
 │   └─ home/         # Home 페이지 관련 컴포넌트
 ├─ hooks/            # Custom Hooks (useRecipes, useDebounce 등)
 ├─ layouts/          # MainLayout (Outlet 구조)
 ├─ pages/            # Home, Detail 페이지
 ├─ styles/           # 전역 스타일 및 animation 설정
 ├─ App.tsx
 └─ main.tsx
```

## 설치 및 실행방법 
```
# 1. 저장소 클론
git clone https://github.com/gunysunny/My_MiniProject.git

# 2. 프로젝트 폴더로 이동
cd My_MiniProject

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```
🧠 배운 점 & 느낀 점

React Hooks를 통한 상태 관리와 커스텀 훅 구조화의 중요성을 배움
Tailwind CSS v4.1에서의 새로운 설정 방식 및 애니메이션 적용 실습
API 구조 설계와 모듈화된 컴포넌트 패턴으로 확장성 높은 코드 작성
