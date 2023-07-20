<a href="https://novel.sh">
  <img alt="Novel is a Notion-style WYSIWYG editor with AI-powered autocompletions." src="/app/opengraph-image.png">
  <h1 align="center">Novel KR</h1>
</a>

<p align="center">
  AI 기반 자동 완성 기능을 갖춘 오픈 소스 개념 스타일 위지위그 편집기의 한국어 버전입니다. 
</p>

<p align="center">
  <a href="https://news.ycombinator.com/item?id=36360789"><img src="https://img.shields.io/badge/Hacker%20News-369-%23FF6600" alt="Hacker News"></a>
  <a href="https://github.com/steven-tey/novel/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/steven-tey/novel?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
    <a href="https://github.com/jjhox/novel-kr"><img src="https://img.shields.io/github/stars/jjhox/novel-kr?style=social" alt="Novel KR's GitHub repo"></a>
</p>

<p align="center">
  <a href="#소개"><strong>소개</strong></a> ·
  <a href="#자체-배포"><strong>자체 배포</strong></a> ·
  <a href="#로컬-설정"><strong>로컬 설정</strong></a> ·
  <a href="#기술-스택"><strong>기술 스택</strong></a> ·
  <a href="#기여"><strong>기여</strong></a> ·
  <a href="#라이센스"><strong>라이센스</strong></a>
</p>
<br/>

## 소개

[Novel](https://novel.sh/)은 AI로 구동되는 자동완성 기능을 갖춘 개념형 위지위그 에디터입니다.

다음은 30초 분량의 간단한 데모입니다:

https://github.com/steven-tey/novel/assets/28986134/2099877f-4f2b-4b1c-8782-5d803d63be5c

<br />

## 자체 배포

클릭 한 번으로 Vercel에 자체 버전의 Novel을 배포할 수 있습니다:

이 코드를 Fork 하신 후 Vercel에서 Fork된 프로젝트 선택 후 OpenAI API 키만 입력하시면 배포됩니다.

## 로컬 설정

Novel을 로컬로 설정하려면 리포지토리를 복제하고 다음 환경 변수를 설정해야 합니다:

- `OPENAI_API_KEY` – OpenAI API 키 ([이곳](https://platform.openai.com/account/api-keys)에서 얻을 수 있음)
- `BLOB_READ_WRITE_TOKEN` – Vercel Blob 읽기/쓰기 토큰 (현재 [베타 중](https://vercel.com/docs/storage/vercel-blob/quickstart#quickstart)이지만 [Twitter DM](https://twitter.com/steventey)주시면 액세스할 수 있습니다.)


Vercel에 배포한 경우 [`vc env pull`](https://vercel.com/docs/cli/env#exporting-development-environment-variables)을 사용하여 Vercel 프로젝트에서 환경 변수를 가져올 수도 있습니다.

## 기술 스택

Novel은 다음과 같은 스택을 기반으로 합니다:

- [Next.js](https://nextjs.org/) – 프레임워크
- [Tiptap](https://tiptap.dev/) – 텍스트 편집기
- [OpenAI](https://openai.com/) - AI 완성
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI 라이브러리
- [Vercel](https://vercel.com) – 배포
- [TailwindCSS](https://tailwindcss.com/) – 스타일
- [Cal Sans](https://github.com/calcom/font) – 폰트

## 기여

기여할 수 있는 방법은 다음과 같습니다:

- [이슈 열기](https://github.com/steven-tey/novel/issues) 버그가 발생했다고 생각되는 경우.
- [수정 요청](https://github.com/steven-tey/novel/pull)에서 새로운 기능을 추가하거나 개선하거나 버그를 수정할 수 있습니다.

## 저자

- Steven Tey ([@steventey](https://twitter.com/steventey))
- Junha Jang ([@jjhox](https://junha.me))

## 라이센스

[MIT license](https://github.com/steven-tey/novel/blob/main/LICENSE.md)가 적용됨.
