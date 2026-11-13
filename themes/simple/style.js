/* eslint-disable react/no-unknown-property */
/**
 * Styles scoped to the simple theme.
 * Tailwind's @apply syntax is not available in this file.
 */
const Style = () => {
  return (
    <style jsx global>{`
      .dark body {
        background-color: #08090a;
      }

      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
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

      /* Lily‘s OS — Linear-inspired product shell */
      :is(#theme-simple, #theme-heo).lily-os-shell {
        --lily-bg: #08090a;
        --lily-panel: #101114;
        --lily-line: rgba(255, 255, 255, 0.09);
        --lily-line-strong: rgba(255, 255, 255, 0.15);
        --lily-text: #f7f8f8;
        --lily-muted: #8a8f98;
        --lily-muted-strong: #b4b7bd;
        --lily-accent-soft: #c4b5fd;
        position: relative;
        isolation: isolate;
        overflow-x: hidden;
        background: var(--lily-bg) !important;
        color: var(--lily-text);
        font-family:
          Inter,
          ui-sans-serif,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell::before {
        content: '';
        position: fixed;
        inset: 0;
        z-index: -2;
        pointer-events: none;
        background:
          radial-gradient(
            circle at 50% -10%,
            rgba(112, 79, 255, 0.2),
            transparent 34rem
          ),
          linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
          );
        background-size:
          auto,
          64px 64px,
          64px 64px;
        mask-image: linear-gradient(to bottom, black, transparent 72%);
      }

      :is(#theme-simple, #theme-heo).lily-os-shell::after {
        content: '';
        position: fixed;
        top: -24rem;
        left: 50%;
        z-index: -1;
        width: 70rem;
        height: 46rem;
        transform: translateX(-50%);
        pointer-events: none;
        border-radius: 50%;
        background: rgba(124, 92, 255, 0.08);
        filter: blur(90px);
      }

      :is(#theme-simple, #theme-heo).lily-os-shell .lily-os-container {
        width: min(1180px, 92vw) !important;
        max-width: 1180px !important;
        padding-top: 0;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell > footer {
        border-top: 1px solid var(--lily-line);
        background: #08090a;
        color: var(--lily-muted);
      }

      .lily-os-site-header {
        position: sticky;
        top: 0;
        z-index: 40;
        width: 100%;
        height: 64px;
        padding: 0 max(4vw, calc((100vw - 1180px) / 2));
        border-bottom: 1px solid var(--lily-line);
        background: rgba(8, 9, 10, 0.78);
        backdrop-filter: blur(18px) saturate(140%);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .lily-os-site-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
        color: var(--lily-text);
        font-size: 0.92rem;
        font-weight: 650;
        letter-spacing: -0.01em;
      }

      .lily-os-brand-mark {
        width: 1.8rem;
        height: 1.8rem;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 0.55rem;
        background: linear-gradient(145deg, #7c5cff, #4c2fa8);
        box-shadow:
          inset 0 1px rgba(255, 255, 255, 0.28),
          0 0 24px rgba(124, 92, 255, 0.22);
        display: grid;
        place-items: center;
        color: white;
        font-size: 0.76rem;
        font-weight: 750;
      }

      .lily-os-site-header nav {
        display: flex;
        align-items: center;
        gap: 1.75rem;
      }

      .lily-os-site-header nav > a {
        color: var(--lily-muted-strong);
        font-size: 0.79rem;
        transition: color 160ms ease;
      }

      .lily-os-site-header nav > a:hover {
        color: var(--lily-text);
      }

      .lily-os-site-header .lily-os-header-cta {
        gap: 0.75rem;
        padding: 0.48rem 0.58rem 0.48rem 0.78rem;
        border: 1px solid var(--lily-line-strong);
        border-radius: 0.48rem;
        background: rgba(255, 255, 255, 0.045);
        display: inline-flex;
        align-items: center;
      }

      .lily-os-header-cta span {
        padding: 0.12rem 0.32rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.28rem;
        color: #747982;
        font-size: 0.62rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-home,
      :is(#theme-simple, #theme-heo) .lily-os-latest {
        color: var(--lily-text, #f7f8f8);
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero {
        position: relative;
        min-height: 650px;
        padding: clamp(5rem, 9vw, 8.2rem) 0 clamp(4.4rem, 8vw, 7rem);
        display: grid;
        grid-template-columns: minmax(0, 1.02fr) minmax(390px, 0.82fr);
        align-items: center;
        gap: clamp(3rem, 7vw, 7rem);
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero::after {
        content: '';
        position: absolute;
        right: -8rem;
        bottom: 1rem;
        z-index: -1;
        width: 32rem;
        height: 32rem;
        border-radius: 50%;
        background: rgba(91, 59, 196, 0.16);
        filter: blur(90px);
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-copy {
        position: relative;
        z-index: 1;
      }

      :is(#theme-simple, #theme-heo) .lily-os-eyebrow,
      :is(#theme-simple, #theme-heo) .lily-os-section-heading > div > span,
      :is(#theme-simple, #theme-heo) .lily-os-module-heading > span {
        color: #777c85;
        font-size: 0.68rem;
        font-weight: 650;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      :is(#theme-simple, #theme-heo) .lily-os-eyebrow {
        display: flex;
        align-items: center;
        gap: 0.55rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-eyebrow > span {
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 50%;
        background: #8b5cf6;
        box-shadow: 0 0 12px rgba(139, 92, 246, 0.9);
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero h1 {
        margin: 1rem 0 0;
        color: var(--lily-text);
        font-size: clamp(3.4rem, 7vw, 6.4rem);
        font-weight: 580;
        line-height: 0.98;
        letter-spacing: -0.065em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-statement {
        margin-top: 1.55rem;
        color: #d9dadd;
        font-size: clamp(1.35rem, 2.35vw, 2rem);
        font-weight: 440;
        line-height: 1.32;
        letter-spacing: -0.035em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-description {
        margin-top: 1.25rem;
        color: var(--lily-muted);
        font-size: 0.88rem;
        letter-spacing: 0.045em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-actions {
        margin-top: 2.2rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-actions a {
        min-height: 2.75rem;
        padding: 0.74rem 1rem;
        border-radius: 0.52rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        transition:
          transform 160ms ease,
          border-color 160ms ease,
          background 160ms ease;
      }

      :is(#theme-simple, #theme-heo) .lily-os-hero-actions a:hover {
        transform: translateY(-1px);
      }

      :is(#theme-simple, #theme-heo) .lily-os-primary-action {
        background: #f4f4f5;
        color: #111216;
        box-shadow:
          inset 0 -1px rgba(0, 0, 0, 0.22),
          0 8px 28px rgba(0, 0, 0, 0.26);
      }

      :is(#theme-simple, #theme-heo) .lily-os-secondary-action {
        border: 1px solid var(--lily-line-strong);
        background: rgba(255, 255, 255, 0.04);
        color: var(--lily-muted-strong);
      }

      :is(#theme-simple, #theme-heo) .lily-os-command-panel {
        position: relative;
        overflow: hidden;
        border: 1px solid var(--lily-line-strong);
        border-radius: 0.85rem;
        background: rgba(16, 17, 20, 0.9);
        box-shadow:
          0 30px 90px rgba(0, 0, 0, 0.55),
          0 0 0 1px rgba(139, 92, 246, 0.04),
          inset 0 1px rgba(255, 255, 255, 0.04);
        transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-chrome {
        height: 2.55rem;
        padding: 0 0.85rem;
        border-bottom: 1px solid var(--lily-line);
        background: rgba(255, 255, 255, 0.018);
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        color: #6f747d;
        font-size: 0.64rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-window-dots {
        display: flex;
        gap: 0.32rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-window-dots i {
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 50%;
        background: #3d3f45;
      }

      :is(#theme-simple, #theme-heo) .lily-os-live-badge {
        justify-self: end;
        color: #8dd9af;
        font-size: 0.55rem;
        letter-spacing: 0.12em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-header {
        padding: 1.2rem 1.25rem 1rem;
        border-bottom: 1px solid var(--lily-line);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-header div > * {
        display: block;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-header small {
        color: #666b73;
        font-size: 0.61rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-header strong {
        margin-top: 0.3rem;
        color: #e4e5e7;
        font-size: 0.9rem;
        font-weight: 560;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-header > span {
        color: #737780;
        font-size: 0.64rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row {
        min-height: 4.6rem;
        padding: 0.85rem 1.25rem;
        border-bottom: 1px solid var(--lily-line);
        display: grid;
        grid-template-columns: 1.6rem minmax(0, 1fr) auto;
        align-items: center;
        gap: 0.8rem;
        transition: background 160ms ease;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row:hover {
        background: rgba(255, 255, 255, 0.025);
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-index {
        color: #575b63;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.61rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row div {
        min-width: 0;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row div > * {
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row strong {
        color: #d8dadd;
        font-size: 0.76rem;
        font-weight: 530;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-row small {
        margin-top: 0.25rem;
        color: #6f747d;
        font-size: 0.61rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-progress {
        color: var(--lily-accent-soft);
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.65rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-footer {
        padding: 0.75rem 1.25rem;
        display: flex;
        justify-content: space-between;
        color: #62666e;
        font-size: 0.59rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-panel-footer i {
        width: 0.35rem;
        height: 0.35rem;
        margin-right: 0.35rem;
        border-radius: 50%;
        background: #6ee7a5;
        display: inline-block;
        box-shadow: 0 0 8px rgba(110, 231, 165, 0.52);
      }

      :is(#theme-simple, #theme-heo) .lily-os-module-heading {
        padding: 2rem 0 1rem;
        border-top: 1px solid var(--lily-line);
        display: flex;
        justify-content: space-between;
        gap: 2rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-module-heading p {
        color: var(--lily-muted);
        font-size: 0.74rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-navigation {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0;
        margin: 0 0 8rem;
        overflow: hidden;
        border: 1px solid var(--lily-line);
        border-radius: 0.8rem;
        background: rgba(255, 255, 255, 0.012);
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card {
        min-height: 108px;
        padding: 1.2rem;
        border-right: 1px solid var(--lily-line);
        border-bottom: 1px solid var(--lily-line);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        transition:
          background 180ms ease,
          box-shadow 180ms ease;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-child(3n) {
        border-right: 0;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-last-child(-n + 3) {
        border-bottom: 0;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card:hover {
        background: rgba(255, 255, 255, 0.035);
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.035);
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-content {
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 0.85rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-icon {
        width: 2.25rem;
        height: 2.25rem;
        flex: 0 0 auto;
        border: 1px solid var(--lily-line);
        border-radius: 0.58rem;
        background: linear-gradient(145deg, #181a20, #111216);
        display: grid;
        place-items: center;
        filter: grayscale(0.35);
        font-size: 0.92rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card strong,
      :is(#theme-simple, #theme-heo) .lily-os-nav-card small {
        display: block;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card strong {
        color: #d9dadd;
        font-size: 0.8rem;
        font-weight: 560;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-card small {
        margin-top: 0.22rem;
        color: #70747c;
        font-size: 0.65rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-nav-arrow {
        color: #656a73;
        font-size: 0.8rem;
        transition:
          color 160ms ease,
          transform 160ms ease;
      }

      :is(#theme-simple, #theme-heo)
        .lily-os-nav-card:hover
        .lily-os-nav-arrow {
        color: #c4b5fd;
        transform: translateX(3px);
      }

      :is(#theme-simple, #theme-heo) .lily-os-projects,
      :is(#theme-simple, #theme-heo) .lily-os-latest {
        scroll-margin-top: 5rem;
        margin-bottom: 8rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-section-heading {
        margin-bottom: 1.8rem;
        padding-top: 1.8rem;
        border-top: 1px solid var(--lily-line);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 1rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-section-heading h2 {
        margin: 0.55rem 0 0;
        color: var(--lily-text);
        font-size: clamp(2rem, 4vw, 3.4rem);
        font-weight: 520;
        letter-spacing: -0.055em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-section-heading p {
        max-width: 22rem;
        color: var(--lily-muted);
        font-size: 0.76rem;
        text-align: right;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card {
        position: relative;
        min-height: 315px;
        padding: 1.25rem;
        overflow: hidden;
        border: 1px solid var(--lily-line);
        border-radius: 0.72rem;
        background:
          linear-gradient(145deg, rgba(255, 255, 255, 0.028), transparent 58%),
          var(--lily-panel);
        color: var(--lily-text);
        transition:
          transform 180ms ease,
          border-color 180ms ease,
          background 180ms ease;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card::before {
        content: '';
        position: absolute;
        top: -8rem;
        right: -8rem;
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        background: rgba(124, 92, 255, 0.11);
        filter: blur(46px);
        opacity: 0;
        transition: opacity 180ms ease;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card:hover {
        transform: translateY(-3px);
        border-color: rgba(196, 181, 253, 0.25);
        background-color: #121319;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card:hover::before {
        opacity: 1;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-topline,
      :is(#theme-simple, #theme-heo) .lily-os-project-meta {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-number {
        color: #62666e;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.61rem;
        letter-spacing: 0.06em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-state {
        color: #8f949c;
        font-size: 0.62rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-state i {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.35rem;
        border-radius: 50%;
        background: #8b5cf6;
        display: inline-block;
        box-shadow: 0 0 8px rgba(139, 92, 246, 0.72);
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card h3 {
        position: relative;
        z-index: 1;
        min-height: 3.7rem;
        margin: 3.2rem 0 0.8rem;
        color: #e4e5e7;
        font-size: 1.12rem;
        font-weight: 560;
        line-height: 1.42;
        letter-spacing: -0.025em;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-card h3 a {
        color: inherit;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-labels {
        position: relative;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-labels span {
        padding: 0.22rem 0.45rem;
        border: 1px solid var(--lily-line);
        border-radius: 0.32rem;
        background: rgba(255, 255, 255, 0.025);
        color: #82868f;
        font-size: 0.58rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-progress {
        position: relative;
        z-index: 1;
        height: 3px;
        margin-top: 2rem;
        overflow: hidden;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.075);
      }

      :is(#theme-simple, #theme-heo) .lily-os-progress span {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #7957e8, #b69cff);
        box-shadow: 0 0 14px rgba(139, 92, 246, 0.55);
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-meta {
        margin-top: 0.55rem;
        color: #6f737b;
        font-size: 0.6rem;
      }

      :is(#theme-simple, #theme-heo) .lily-os-project-meta strong {
        color: #a8abb2;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-weight: 500;
      }

      :is(#theme-simple, #theme-heo) .lily-os-next-action {
        position: relative;
        z-index: 1;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid var(--lily-line);
      }

      :is(#theme-simple, #theme-heo) .lily-os-next-action small,
      :is(#theme-simple, #theme-heo) .lily-os-next-action strong {
        display: block;
      }

      :is(#theme-simple, #theme-heo) .lily-os-next-action small {
        color: #5f636b;
        font-size: 0.56rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      :is(#theme-simple, #theme-heo) .lily-os-next-action strong {
        margin-top: 0.4rem;
        color: #aeb1b7;
        font-size: 0.72rem;
        font-weight: 460;
        line-height: 1.45;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell .lily-os-latest > .w-full {
        padding-right: 0 !important;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper {
        overflow: hidden;
        border: 1px solid var(--lily-line);
        border-radius: 0.8rem;
        background: rgba(255, 255, 255, 0.012);
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper
        > div
        + div {
        border-top: 1px solid var(--lily-line);
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper
        > div
        > div {
        height: auto;
        min-height: 0;
        margin: 0;
        padding: 1.45rem 1.55rem;
        border: 0;
        transition: background 160ms ease;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper
        > div
        > div:hover {
        background: rgba(255, 255, 255, 0.026);
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        .article-info {
        width: 100%;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        .blog-item-title {
        color: #e1e2e4;
        background-image: none;
        font-size: 1.08rem;
        font-weight: 540;
        letter-spacing: -0.025em;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        .blog-item-title:hover {
        color: #c4b5fd;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        article
        header,
      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        article
        main {
        color: #747982;
        font-size: 0.7rem;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        article
        header {
        margin-bottom: 0.85rem;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        article
        main {
        max-width: 54rem;
        margin-bottom: 0;
        line-height: 1.65;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper
        > div
        > div
        > .block {
        margin-top: 1rem;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        #posts-wrapper
        > div
        > div
        > .block
        a {
        height: auto;
        padding: 0;
        border: 0;
        color: #9e8fe3;
        line-height: 1.4;
      }

      :is(#theme-simple, #theme-heo).lily-os-shell
        .lily-os-latest
        .text-blue-600 {
        color: #9e8fe3 !important;
        border-color: rgba(158, 143, 227, 0.35) !important;
      }

      #theme-heo.lily-os-shell #wrapper-outer {
        width: min(1180px, 92vw);
        max-width: 1180px;
        padding: 0 !important;
      }

      #theme-heo.lily-os-shell .lily-os-latest article > div {
        border-color: var(--lily-line) !important;
        background: var(--lily-panel) !important;
        box-shadow: none !important;
      }

      #theme-heo.lily-os-shell .lily-os-latest article a,
      #theme-heo.lily-os-shell .lily-os-latest article .text-black {
        color: #e1e2e4 !important;
      }

      #theme-heo.lily-os-shell .lily-os-latest article main,
      #theme-heo.lily-os-shell .lily-os-latest article .text-gray-600,
      #theme-heo.lily-os-shell .lily-os-latest article .text-gray-700 {
        color: #81858d !important;
      }

      #theme-heo.lily-os-shell .lily-os-latest article > div:hover {
        border-color: rgba(196, 181, 253, 0.25) !important;
      }

      #theme-heo.lily-os-shell .lily-os-latest #category-bar,
      #theme-heo.lily-os-shell .lily-os-latest .category-bar {
        border-color: var(--lily-line) !important;
        background: rgba(255, 255, 255, 0.025) !important;
        color: var(--lily-muted-strong) !important;
      }

      @media (max-width: 980px) {
        :is(#theme-simple, #theme-heo) .lily-os-hero {
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        :is(#theme-simple, #theme-heo) .lily-os-command-panel {
          width: min(100%, 640px);
          transform: none;
        }

        :is(#theme-simple, #theme-heo) .lily-os-project-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 760px) {
        .lily-os-site-header {
          padding: 0 1.1rem;
        }

        .lily-os-site-header nav {
          gap: 0.9rem;
        }

        .lily-os-site-header nav > a:not(.lily-os-header-cta) {
          display: none;
        }

        :is(#theme-simple, #theme-heo) .lily-os-hero {
          min-height: 0;
          padding: 5.2rem 0 4rem;
        }

        :is(#theme-simple, #theme-heo) .lily-os-navigation {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-bottom: 6rem;
        }

        :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-child(3n) {
          border-right: 1px solid var(--lily-line);
        }

        :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-child(2n) {
          border-right: 0;
        }

        :is(#theme-simple, #theme-heo)
          .lily-os-nav-card:nth-last-child(-n + 3) {
          border-bottom: 1px solid var(--lily-line);
        }

        :is(#theme-simple, #theme-heo)
          .lily-os-nav-card:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        :is(#theme-simple, #theme-heo) .lily-os-section-heading,
        :is(#theme-simple, #theme-heo) .lily-os-module-heading {
          align-items: flex-start;
          flex-direction: column;
        }

        :is(#theme-simple, #theme-heo) .lily-os-section-heading p {
          text-align: left;
        }

        :is(#theme-simple, #theme-heo) .lily-os-project-grid {
          grid-template-columns: 1fr;
        }

        :is(#theme-simple, #theme-heo) .lily-os-project-card {
          min-height: 285px;
        }
      }

      @media (max-width: 520px) {
        :is(#theme-simple, #theme-heo) .lily-os-hero h1 {
          font-size: clamp(3rem, 17vw, 4.4rem);
        }

        :is(#theme-simple, #theme-heo) .lily-os-hero-actions {
          align-items: stretch;
          flex-direction: column;
        }

        :is(#theme-simple, #theme-heo) .lily-os-navigation {
          grid-template-columns: 1fr;
        }

        :is(#theme-simple, #theme-heo) .lily-os-nav-card,
        :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-child(2n),
        :is(#theme-simple, #theme-heo) .lily-os-nav-card:nth-child(3n),
        :is(#theme-simple, #theme-heo)
          .lily-os-nav-card:nth-last-child(-n + 2) {
          border-right: 0;
          border-bottom: 1px solid var(--lily-line);
        }

        :is(#theme-simple, #theme-heo) .lily-os-nav-card:last-child {
          border-bottom: 0;
        }

        :is(#theme-simple, #theme-heo) .lily-os-panel-footer {
          gap: 0.5rem;
          flex-direction: column;
        }

        :is(#theme-simple, #theme-heo).lily-os-shell
          .lily-os-latest
          #posts-wrapper
          > div
          > div {
          padding: 1.2rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :is(#theme-simple, #theme-heo).lily-os-shell *,
        :is(#theme-simple, #theme-heo).lily-os-shell *::before,
        :is(#theme-simple, #theme-heo).lily-os-shell *::after {
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  )
}

export { Style }
