const DEFAULT_EDITOR_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Novel KR 소개" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Novel KR은 AI 기반 자동 완성 기능을 갖춘 개념 스타일 위지위그 편집기입니다. ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tiptap.dev/",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Tiptap",
        },
        { type: "text", text: "과 " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://sdk.vercel.ai/docs",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Vercel AI SDK",
        },
        { type: "text", text: "로 빌드됨." },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "기능" }],
    },
    {
      type: "orderedList",
      attrs: { tight: true, start: 1 },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "메뉴 슬래시 & 버블 메뉴" }],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "AI 자동 완성 (활성화하려면 " },
                { type: "text", marks: [{ type: "code" }], text: "++" },
                {
                  type: "text",
                  text: "를 입력하거나 슬래시 메뉴에서 선택)",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "이미지 업로드(끌어서 놓기/복사하여 붙여넣기 또는 슬래시 메뉴에서 선택)",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png",
        alt: "banner.png",
        title: "banner.png",
      },
    },
    { type: "horizontalRule" },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "더 배우기" }],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "다음을 확인해보세요 " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://twitter.com/steventey/status/1669762868416512000",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "출시 영상",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "다음에서 별을 줄 수 있어요" },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://github.com/jjhox/novel-kr",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "GitHub",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://vercel.com/templates/next.js/novel",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "당신의 것으로 배포헤보세요",
                },
                { type: "text", text: " Vercel 사용" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default DEFAULT_EDITOR_CONTENT;
