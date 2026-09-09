/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      .dark body {
        background-color: black;
      }
      // 文本不可选取
      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }

      #theme-simple #announcement-content {
        /* background-color: #f6f6f6; */
      }

      #theme-simple .blog-item-title {
        color: #276077;
      }

      .dark #theme-simple .blog-item-title {
        color: #d1d5db;
      }

      .notion {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      /*  菜单下划线动画 */
      #theme-simple .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#dd3333, #dd3333);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }

      #theme-simple .menu-link:hover {
        background-size: 100% 2px;
        color: #dd3333;
        cursor: pointer;
      }

      #theme-simple .lily-os-home,
      #theme-simple .lily-os-latest {
        --lily-cream: #f4f0e6;
        --lily-paper: #fbf9f4;
        --lily-charcoal: #282b28;
        --lily-sage: #91a087;
        --lily-sage-dark: #68765f;
        color: var(--lily-charcoal);
      }

      #theme-simple .lily-os-hero {
        position: relative;
        overflow: hidden;
        min-height: 420px;
        padding: clamp(2rem, 7vw, 5.5rem);
        border-radius: 2rem;
        background: var(--lily-cream);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      #theme-simple .lily-os-hero::after {
        content: '';
        position: absolute;
        right: -8rem;
        top: -10rem;
        width: 31rem;
        height: 31rem;
        border: 1px solid rgba(104, 118, 95, 0.25);
        border-radius: 50%;
        box-shadow:
          0 0 0 4rem rgba(145, 160, 135, 0.08),
          0 0 0 8rem rgba(145, 160, 135, 0.05);
      }

      #theme-simple .lily-os-eyebrow,
      #theme-simple .lily-os-section-heading span {
        color: var(--lily-sage-dark);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.17em;
      }

      #theme-simple .lily-os-hero h1 {
        position: relative;
        z-index: 1;
        margin: 0.7rem 0 0;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: clamp(4rem, 10vw, 8.5rem);
        font-weight: 500;
        line-height: 0.92;
        letter-spacing: -0.055em;
      }

      #theme-simple .lily-os-hero > p {
        position: relative;
        z-index: 1;
        margin-top: 1.5rem;
        color: #555b54;
        font-size: clamp(0.95rem, 1.7vw, 1.2rem);
        letter-spacing: 0.08em;
      }

      #theme-simple .lily-os-hero-footer {
        position: relative;
        z-index: 1;
        margin-top: auto;
        padding-top: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 1rem;
        color: #62675f;
        font-size: 0.82rem;
      }

      #theme-simple .lily-os-hero-footer a {
        color: var(--lily-charcoal);
        border-bottom: 1px solid var(--lily-sage);
        padding-bottom: 0.2rem;
      }

      #theme-simple .lily-os-navigation {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
        margin: 1rem 0 5rem;
      }

      #theme-simple .lily-os-nav-card {
        min-height: 112px;
        padding: 1.3rem;
        border: 1px solid #e5e2d9;
        border-radius: 1.25rem;
        background: var(--lily-paper);
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 0.9rem;
        transition:
          transform 0.2s ease,
          border-color 0.2s ease,
          background 0.2s ease;
      }

      #theme-simple .lily-os-nav-card:hover {
        transform: translateY(-3px);
        border-color: var(--lily-sage);
        background: #f1f3ec;
      }

      #theme-simple .lily-os-nav-icon {
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 0.9rem;
        background: #e4e9df;
        display: grid;
        place-items: center;
        font-size: 1.2rem;
      }

      #theme-simple .lily-os-nav-card strong,
      #theme-simple .lily-os-nav-card small {
        display: block;
      }

      #theme-simple .lily-os-nav-card strong {
        font-size: 0.95rem;
      }

      #theme-simple .lily-os-nav-card small {
        margin-top: 0.25rem;
        color: #757a73;
        font-size: 0.72rem;
      }

      #theme-simple .lily-os-nav-arrow {
        color: var(--lily-sage-dark);
      }

      #theme-simple .lily-os-projects,
      #theme-simple .lily-os-latest {
        scroll-margin-top: 2rem;
        margin-bottom: 5rem;
      }

      #theme-simple .lily-os-section-heading {
        margin-bottom: 1.35rem;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 1rem;
      }

      #theme-simple .lily-os-section-heading h2 {
        margin: 0.25rem 0 0;
        font-size: clamp(1.55rem, 3vw, 2.25rem);
        font-weight: 650;
        letter-spacing: -0.035em;
      }

      #theme-simple .lily-os-section-heading p {
        color: #7a7f77;
        font-size: 0.82rem;
      }

      #theme-simple .lily-os-project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      #theme-simple .lily-os-project-card {
        padding: 1.5rem;
        border-radius: 1.4rem;
        background: var(--lily-charcoal);
        color: #f7f4ec;
      }

      #theme-simple .lily-os-project-topline,
      #theme-simple .lily-os-project-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #theme-simple .lily-os-project-number {
        color: #9ca298;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1.2rem;
      }

      #theme-simple .lily-os-priority {
        padding: 0.22rem 0.55rem;
        border-radius: 999px;
        background: var(--lily-sage);
        color: #20251e;
        font-size: 0.68rem;
        font-weight: 800;
      }

      #theme-simple .lily-os-project-card h3 {
        min-height: 3.4rem;
        margin: 2.5rem 0 0.2rem;
        font-size: 1.25rem;
        line-height: 1.3;
      }

      #theme-simple .lily-os-project-card > p {
        color: #aeb4aa;
        font-size: 0.75rem;
      }

      #theme-simple .lily-os-progress {
        height: 4px;
        margin-top: 1.5rem;
        overflow: hidden;
        border-radius: 999px;
        background: #4d514b;
      }

      #theme-simple .lily-os-progress span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: #b7c5ac;
      }

      #theme-simple .lily-os-project-meta {
        margin-top: 0.55rem;
        color: #aeb4aa;
        font-size: 0.7rem;
      }

      #theme-simple .lily-os-next-action {
        margin-top: 1.35rem;
        padding-top: 1rem;
        border-top: 1px solid #41453f;
      }

      #theme-simple .lily-os-next-action small,
      #theme-simple .lily-os-next-action strong {
        display: block;
      }

      #theme-simple .lily-os-next-action small {
        color: #8f968b;
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      #theme-simple .lily-os-next-action strong {
        margin-top: 0.35rem;
        font-size: 0.8rem;
        font-weight: 500;
      }

      .dark #theme-simple .lily-os-home,
      .dark #theme-simple .lily-os-latest {
        color: #e7e5df;
      }

      .dark #theme-simple .lily-os-hero,
      .dark #theme-simple .lily-os-nav-card {
        background: #20231f;
        border-color: #333930;
      }

      .dark #theme-simple .lily-os-hero > p,
      .dark #theme-simple .lily-os-nav-card small,
      .dark #theme-simple .lily-os-section-heading p {
        color: #a8ada4;
      }

      .dark #theme-simple .lily-os-hero-footer a {
        color: #e7e5df;
      }

      @media (max-width: 820px) {
        #theme-simple .lily-os-navigation,
        #theme-simple .lily-os-project-grid {
          grid-template-columns: 1fr;
        }

        #theme-simple .lily-os-hero {
          min-height: 360px;
          border-radius: 1.4rem;
        }

        #theme-simple .lily-os-project-card h3 {
          min-height: 0;
          margin-top: 1.8rem;
        }
      }

      @media (max-width: 540px) {
        #theme-simple .lily-os-hero-footer,
        #theme-simple .lily-os-section-heading {
          align-items: flex-start;
          flex-direction: column;
        }

        #theme-simple .lily-os-hero-footer {
          padding-top: 3rem;
        }

        #theme-simple .lily-os-navigation {
          margin-bottom: 3.5rem;
        }
      }
    `}</style>
  )
}

export { Style }
