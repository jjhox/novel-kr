<a href="https://novel.sh">
  <img alt="Novel is a Notion-style WYSIWYG editor with AI-powered autocompletions." src="/app/opengraph-image.png">
  <h1 align="center">Novel</h1>
</a>

<p align="center">
  AI 기반 자동 완성 기능을 갖춘 오픈 소스 개념 스타일 위지위그 편집기의 한국어 버전입니다. 
</p>

<p align="center">
  <a href="https://news.ycombinator.com/item?id=36360789"><img src="https://img.shields.io/badge/Hacker%20News-369-%23FF6600" alt="Hacker News"></a>
  <a href="https://github.com/steven-tey/novel/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/steven-tey/novel?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
  <a href="https://github.com/steven-tey/novel"><img src="https://img.shields.io/github/stars/steven-tey/novel?style=social" alt="Novel.sh's GitHub repo"></a>
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

[Novel](https://novel.sh/) is a Notion-style WYSIWYG editor with AI-powered autocompletions.

Here's a quick 30-second demo:

https://github.com/steven-tey/novel/assets/28986134/2099877f-4f2b-4b1c-8782-5d803d63be5c

<br />

## 자체 배포

You can deploy your own version of Novel to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://stey.me/novel-deploy)

## 로컬 설정

To set up Novel locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `BLOB_READ_WRITE_TOKEN` – your Vercel Blob read/write token (currently [still in beta](https://vercel.com/docs/storage/vercel-blob/quickstart#quickstart), but feel free to [DM me on Twitter](https://twitter.com/steventey) for access)

If you've deployed this to Vercel, you can also use [`vc env pull`](https://vercel.com/docs/cli/env#exporting-development-environment-variables) to pull the environment variables from your Vercel project.

## 기술 스택

Novel is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [Tiptap](https://tiptap.dev/) – text editor
- [OpenAI](https://openai.com/) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles
- [Cal Sans](https://github.com/calcom/font) – font

## 기여

Here's how you can contribute:

- [Open an issue](https://github.com/steven-tey/novel/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/steven-tey/novel/pull) to add new features/make quality-of-life improvements/fix bugs.

## 저자

- Steven Tey ([@steventey](https://twitter.com/steventey))
- Junha Jang ([@jjhox](https://junha.me))

## 라이센스

Licensed under the [MIT license](https://github.com/steven-tey/novel/blob/main/LICENSE.md).
