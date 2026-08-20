(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const icons = {
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m15 9 6-6M17 3h4v4"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
    message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v8Z"/><path d="M7 9h10M7 13h6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/></svg>',
    stack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="6" rx="1"/><rect x="3" y="15" width="18" height="6" rx="1"/><path d="M7 6h.01M7 18h.01M11 6h7M11 18h7"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h7"/></svg>',
    automation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 7.5 15.5 16.5M14 6h5v5M10 18H5v-5"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7"/></svg>',
    social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="8" cy="12" r="3"/><circle cx="17" cy="6" r="3"/><circle cx="17" cy="18" r="3"/><path d="m10.5 10.5 4-3M10.5 13.5l4 3"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m14 4 6 6L8 22H2v-6L14 4Z"/><path d="m12 6 6 6M3 16l5 5"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3v-4Z"/></svg>',
    desktop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
  };

  function initLoader() {
    const loader = $("#loader");
    if (!loader) return;
    const hide = () => loader.classList.add("is-hidden");
    window.addEventListener("load", () => window.setTimeout(hide, reducedMotion ? 0 : 450), { once: true });
    window.setTimeout(hide, 2400);
  }

  function renderValues() {
    $("#value-grid").innerHTML = data.values.map((value) => `
      <article class="value-card reveal">
        <div class="value-icon" aria-hidden="true">${icons[value.icon] || icons.target}</div>
        <h3>${escapeHtml(value.title)}</h3>
        <p>${escapeHtml(value.text)}</p>
      </article>`).join("");
  }

  function renderServices() {
    $("#services-list").innerHTML = data.services.map((service, index) => `
      <article class="service-card reveal">
        <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
        <div class="service-title-wrap">
          <div class="service-icon" aria-hidden="true">${icons[service.icon] || icons.code}</div>
          <h3>${escapeHtml(service.title)}</h3>
        </div>
        <div class="service-block"><span>The problem</span><p>${escapeHtml(service.problem)}</p></div>
        <div class="service-block"><span>What you get</span><p>${escapeHtml(service.provide)} <strong>${escapeHtml(service.benefit)}</strong></p></div>
        <a class="service-cta" href="#contact" data-project-type="${escapeHtml(service.title)}">${escapeHtml(service.cta)} <b aria-hidden="true">↗</b></a>
      </article>`).join("");
  }

  let activeProjectIndex = 0;
  let projectScrollFrame = 0;

  function visibleProjectCards() {
    return $$("#project-grid .project-card:not(.is-hidden)");
  }

  function projectCardOffset(card) {
    const grid = $("#project-grid");
    return card.offsetLeft - grid.offsetLeft;
  }

  function syncProjectCarousel(index) {
    const cards = visibleProjectCards();
    if (!cards.length) return;
    const grid = $("#project-grid");
    activeProjectIndex = typeof index === "number"
      ? Math.max(0, Math.min(index, cards.length - 1))
      : cards.reduce((closest, card, cardIndex) => (
        Math.abs(projectCardOffset(card) - grid.scrollLeft) < Math.abs(projectCardOffset(cards[closest]) - grid.scrollLeft) ? cardIndex : closest
      ), 0);
    $("#project-current").textContent = String(activeProjectIndex + 1).padStart(2, "0");
    $("#project-total").textContent = String(cards.length).padStart(2, "0");
    $("#project-prev").disabled = activeProjectIndex === 0;
    $("#project-next").disabled = activeProjectIndex === cards.length - 1;
    $$("#project-dots button").forEach((dot, dotIndex) => {
      if (dotIndex === activeProjectIndex) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function goToProject(index) {
    const cards = visibleProjectCards();
    if (!cards.length) return;
    const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
    $("#project-grid").scrollTo({ left: projectCardOffset(cards[nextIndex]), behavior: reducedMotion ? "auto" : "smooth" });
    syncProjectCarousel(nextIndex);
  }

  function renderProjectDots() {
    const cards = visibleProjectCards();
    $("#project-dots").innerHTML = cards.map((card, index) => `
      <button type="button" data-project-slide="${index}" aria-label="Show ${escapeHtml(card.dataset.title)}"${index === 0 ? ' aria-current="true"' : ""}></button>`).join("");
    $$("#project-dots button").forEach((dot) => dot.addEventListener("click", () => goToProject(Number(dot.dataset.projectSlide))));
    syncProjectCarousel(0);
  }

  function renderProjectFilters() {
    const categories = ["All", ...new Set(data.projects.map((project) => project.category))];
    $("#project-filters").innerHTML = categories.map((category, index) => `
      <button class="filter-button${index === 0 ? " active" : ""}" type="button" data-filter="${escapeHtml(category)}" aria-pressed="${index === 0}">${escapeHtml(category)}</button>`).join("");

    $$("#project-filters .filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        $$("#project-filters .filter-button").forEach((item) => {
          item.classList.toggle("active", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });
        const filter = button.dataset.filter;
        $$("#project-grid .project-card").forEach((card) => {
          card.classList.toggle("is-hidden", filter !== "All" && card.dataset.category !== filter);
        });
        $("#project-grid").scrollTo({ left: 0, behavior: "auto" });
        renderProjectDots();
      });
    });
  }

  function projectLink(url, label, primary = false) {
    if (!url) return "";
    return `<a class="button ${primary ? "button-primary" : "button-outline"}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)} ↗</a>`;
  }

  function renderProjects() {
    $("#project-grid").innerHTML = data.projects.map((project) => `
      <article class="project-card reveal" data-category="${escapeHtml(project.category)}" data-title="${escapeHtml(project.title)}">
        <div class="project-media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy" width="900" height="620">
          <div class="project-top"><span>${escapeHtml(project.category)}</span>${project.featured ? "<span>Selected work</span>" : ""}</div>
        </div>
        <div class="project-body">
          <p class="project-kicker">${escapeHtml(project.kicker)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <div class="project-tech">${project.tech.slice(0, 5).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <div class="project-actions">
            <button class="button button-primary project-details" type="button" data-slug="${escapeHtml(project.slug)}">View case study ↗</button>
            ${project.live ? projectLink(project.live, "Live demo") : ""}
            ${!project.live && project.private ? '<span class="private-label">Private project / no public link</span>' : ""}
          </div>
        </div>
      </article>`).join("");

    $$(".project-details").forEach((button) => button.addEventListener("click", () => openProject(button.dataset.slug)));
    $("#project-prev").addEventListener("click", () => goToProject(activeProjectIndex - 1));
    $("#project-next").addEventListener("click", () => goToProject(activeProjectIndex + 1));
    $("#project-grid").addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goToProject(activeProjectIndex + (event.key === "ArrowRight" ? 1 : -1));
    });
    $("#project-grid").addEventListener("scroll", () => {
      window.cancelAnimationFrame(projectScrollFrame);
      projectScrollFrame = window.requestAnimationFrame(() => syncProjectCarousel());
    }, { passive: true });
    window.addEventListener("resize", () => syncProjectCarousel(), { passive: true });
    renderProjectDots();
  }

  function openProject(slug) {
    const project = data.projects.find((item) => item.slug === slug);
    const dialog = $("#project-modal");
    if (!project || !dialog) return;

    $("#modal-content").innerHTML = `
      <button class="dialog-close" id="project-close" type="button" aria-label="Close case study">×</button>
      <div class="modal-hero">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}">
        <div class="modal-title"><p>${escapeHtml(project.category)} / ${escapeHtml(project.kicker)}</p><h2 id="modal-title">${escapeHtml(project.title)}</h2></div>
      </div>
      <div class="modal-body">
        <p class="modal-summary">${escapeHtml(project.summary)}</p>
        ${project.videos?.length ? `
          <section class="modal-video-showcase" id="modal-video-showcase" aria-labelledby="modal-video-heading" tabindex="0">
            <div class="modal-video-heading">
              <div><span>Aerial reel</span><h3 id="modal-video-heading">Captured, edited, and ready to publish.</h3></div>
              <p><span id="modal-video-current">01</span><i>/</i><span>${String(project.videos.length).padStart(2, "0")}</span></p>
            </div>
            <div class="modal-video-stage">
              <video id="modal-project-video" controls playsinline preload="metadata" poster="${escapeHtml(project.image)}" aria-label="${escapeHtml(project.videos[0].title)}">
                <source src="${escapeHtml(project.videos[0].src)}" type="video/mp4">
              </video>
              <div class="modal-video-caption"><strong id="modal-video-title">${escapeHtml(project.videos[0].title)}</strong><span id="modal-video-format">${escapeHtml(project.videos[0].format)}</span></div>
              <button class="modal-video-arrow modal-video-prev" id="modal-video-prev" type="button" aria-label="Previous Apex video">&#8592;</button>
              <button class="modal-video-arrow modal-video-next" id="modal-video-next" type="button" aria-label="Next Apex video">&#8594;</button>
            </div>
            <div class="modal-video-tabs" id="modal-video-tabs" aria-label="Choose an Apex aerial video">
              ${project.videos.map((video, index) => `<button type="button" data-video-index="${index}"${index === 0 ? ' aria-current="true"' : ""}><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(video.title)}</strong><small>${escapeHtml(video.format)}</small></button>`).join("")}
            </div>
            <p class="modal-video-hint">Use the arrows, swipe the player, or press the left and right arrow keys.</p>
          </section>` : ""}
        <div class="modal-case-grid">
          <article><span>Challenge</span><p>${escapeHtml(project.challenge)}</p></article>
          <article><span>Solution</span><p>${escapeHtml(project.solution)}</p></article>
          <article><span>Outcome</span><p>${escapeHtml(project.outcome)}</p></article>
        </div>
        <div class="modal-details">
          <div><h3>My role</h3><p>${escapeHtml(project.role)}</p></div>
          <div><h3>Important features</h3><ul class="feature-list">${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul></div>
        </div>
        <div class="modal-tech">${project.tech.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        <div class="modal-actions">
          ${projectLink(project.live, "Visit live site", true)}
          ${projectLink(project.github, "View GitHub")}
          ${project.private ? '<span class="private-label">Private project — public link intentionally omitted.</span>' : ""}
          <a class="button button-outline" href="#contact" data-project-type="${escapeHtml(project.title)}">Start a similar project</a>
        </div>
      </div>`;

    dialog.showModal();
    document.body.classList.add("dialog-open");
    if (project.videos?.length) initProjectVideoShowcase(project.videos);
    $("#project-close").addEventListener("click", () => dialog.close());
    $("#modal-content [data-project-type]").addEventListener("click", (event) => {
      dialog.close();
      prefillProject(event.currentTarget.dataset.projectType);
    });
  }

  function initProjectVideoShowcase(videos) {
    const showcase = $("#modal-video-showcase");
    const player = $("#modal-project-video");
    let activeIndex = 0;
    let touchStart = 0;

    const showVideo = (index) => {
      activeIndex = (index + videos.length) % videos.length;
      const video = videos[activeIndex];
      const wasPlaying = !player.paused;
      player.pause();
      player.src = video.src;
      player.setAttribute("aria-label", video.title);
      player.load();
      $("#modal-video-title").textContent = video.title;
      $("#modal-video-format").textContent = video.format;
      $("#modal-video-current").textContent = String(activeIndex + 1).padStart(2, "0");
      $$("#modal-video-tabs button").forEach((button, buttonIndex) => {
        if (buttonIndex === activeIndex) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
      $("#modal-video-tabs button[aria-current='true']").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
      if (wasPlaying) player.play().catch(() => {});
    };

    $("#modal-video-prev").addEventListener("click", () => showVideo(activeIndex - 1));
    $("#modal-video-next").addEventListener("click", () => showVideo(activeIndex + 1));
    $$("#modal-video-tabs button").forEach((button) => button.addEventListener("click", () => showVideo(Number(button.dataset.videoIndex))));
    showcase.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      showVideo(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    });
    player.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
    player.addEventListener("touchend", (event) => {
      const distance = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(distance) > 55) showVideo(activeIndex + (distance < 0 ? 1 : -1));
    }, { passive: true });
  }

  function renderGrowth() {
    $("#growth-services").innerHTML = data.growthServices.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    $$('[data-growth-image]').forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = $("#lightbox");
        $("#lightbox-image").src = button.dataset.growthImage;
        $("#lightbox-image").alt = button.dataset.growthAlt;
        $("#lightbox-category").textContent = "Growth Management";
        $("#lightbox-title").textContent = button.dataset.growthTitle;
        $("#lightbox-format").textContent = button.dataset.growthFormat;
        dialog.showModal();
        document.body.classList.add("dialog-open");
      });
    });
    initSocialShowcase();
  }

  function initSocialShowcase() {
    const chapters = [
      { id: "all", label: "All work" },
      { id: "accounts", label: "Accounts" },
      { id: "mockups", label: "Profile concepts" },
      { id: "video", label: "Short-form video" }
    ];
    const slides = [
      ...data.socialEvidence.map((item) => ({ ...item, kind: "image", chapter: "accounts", chapterLabel: "Account & publishing" })),
      ...data.socialMockups.map((item) => ({ ...item, kind: "image", chapter: "mockups", chapterLabel: "Profile presentation mockup" })),
      ...data.socialVideos.map((item) => ({ ...item, kind: "video", chapter: "video", chapterLabel: "Short-form production" }))
    ];
    const theatre = $("#social-theatre");
    const media = $("#social-stage-media");
    const ambient = $("#social-stage-ambient");
    const progress = $("#social-progress-fill");
    const openButton = $("#social-open-image");
    let activeChapter = "all";
    let activeSlides = slides;
    let activeIndex = 0;
    let autoplay = !reducedMotion;
    let timer;
    let touchStart = 0;

    const stopTimer = () => {
      window.clearTimeout(timer);
      progress.classList.remove("is-running");
    };

    const schedule = (duration = 6500) => {
      stopTimer();
      if (!autoplay) return;
      progress.style.setProperty("--slide-duration", `${duration}ms`);
      void progress.offsetWidth;
      progress.classList.add("is-running");
      timer = window.setTimeout(() => showSlide(activeIndex + 1), duration);
    };

    const renderDots = () => {
      $("#social-dots").innerHTML = activeSlides.map((item, index) => `<button type="button" data-slide="${index}" aria-label="Show ${escapeHtml(item.title)}"${index === activeIndex ? ' aria-current="true"' : ""}></button>`).join("");
      $$("#social-dots button").forEach((button) => button.addEventListener("click", () => showSlide(Number(button.dataset.slide))));
    };

    function showSlide(index) {
      activeIndex = (index + activeSlides.length) % activeSlides.length;
      const item = activeSlides[activeIndex];
      stopTimer();
      ambient.style.backgroundImage = `url("${item.poster || item.src}")`;
      $("#social-slide-chapter").textContent = item.chapterLabel;
      $("#social-slide-title").textContent = item.title;
      $("#social-slide-format").textContent = item.format;
      $("#social-slide-note").textContent = item.chapter === "mockups" ? "Illustrative portfolio concept — figures shown are not verified performance claims." : item.chapter === "accounts" ? "Account and publishing material supplied for this portfolio; figures are shown as captured." : "Browser-ready vertical edit with playback controls.";
      $("#social-current").textContent = String(activeIndex + 1).padStart(2, "0");
      $("#social-total").textContent = String(activeSlides.length).padStart(2, "0");
      openButton.hidden = item.kind !== "image";

      if (item.kind === "video") {
        media.innerHTML = `<video controls playsinline preload="metadata" poster="${escapeHtml(item.poster)}" aria-label="${escapeHtml(item.title)}"><source src="${escapeHtml(item.src)}" type="video/mp4"></video>`;
        const video = $("video", media);
        video.addEventListener("play", stopTimer);
        video.addEventListener("pause", () => { if (!video.ended) schedule(5000); });
        video.addEventListener("ended", () => showSlide(activeIndex + 1));
        schedule(9000);
      } else {
        media.innerHTML = `<button type="button" aria-label="Open ${escapeHtml(item.title)} fullscreen"><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" width="720" height="1280"></button>`;
        const openImage = () => {
          stopTimer();
          openPortfolioImage(item, item.chapterLabel);
        };
        $("button", media).addEventListener("click", openImage);
        openButton.onclick = openImage;
        schedule();
      }

      $$("#social-dots button").forEach((button, dotIndex) => {
        if (dotIndex === activeIndex) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    }

    $("#social-chapters").innerHTML = chapters.map((chapter, index) => `<button type="button" data-chapter="${chapter.id}" aria-pressed="${index === 0}">${escapeHtml(chapter.label)}</button>`).join("");
    $$("#social-chapters button").forEach((button) => button.addEventListener("click", () => {
      activeChapter = button.dataset.chapter;
      activeSlides = activeChapter === "all" ? slides : slides.filter((item) => item.chapter === activeChapter);
      activeIndex = 0;
      $$("#social-chapters button").forEach((chapterButton) => chapterButton.setAttribute("aria-pressed", String(chapterButton === button)));
      renderDots();
      showSlide(0);
    }));

    $("#social-prev").addEventListener("click", () => showSlide(activeIndex - 1));
    $("#social-next").addEventListener("click", () => showSlide(activeIndex + 1));
    $("#social-autoplay").addEventListener("click", (event) => {
      autoplay = !autoplay;
      event.currentTarget.setAttribute("aria-pressed", String(autoplay));
      event.currentTarget.textContent = autoplay ? "Pause autoplay" : "Resume autoplay";
      if (autoplay) schedule(); else stopTimer();
    });
    theatre.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showSlide(activeIndex - 1);
      if (event.key === "ArrowRight") showSlide(activeIndex + 1);
    });
    theatre.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
    theatre.addEventListener("touchend", (event) => {
      const distance = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(distance) > 45) showSlide(activeIndex + (distance < 0 ? 1 : -1));
    }, { passive: true });
    $("#lightbox").addEventListener("close", () => schedule(activeSlides[activeIndex]?.kind === "video" ? 9000 : 6500));

    $("#social-autoplay").setAttribute("aria-pressed", String(autoplay));
    $("#social-autoplay").textContent = autoplay ? "Pause autoplay" : "Autoplay off";
    renderDots();
    showSlide(0);
  }

  function renderCreativeFilters() {
    const categories = ["All", ...new Set(data.creativeWork.map((item) => item.category))];
    $("#creative-filters").innerHTML = categories.map((category, index) => `
      <button class="filter-button${index === 0 ? " active" : ""}" type="button" data-filter="${escapeHtml(category)}" aria-pressed="${index === 0}">${escapeHtml(category)}</button>`).join("");

    $$("#creative-filters .filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        $$("#creative-filters .filter-button").forEach((item) => {
          item.classList.toggle("active", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });
        const filter = button.dataset.filter;
        $$("#creative-grid .creative-item").forEach((item) => {
          item.classList.toggle("is-hidden", filter !== "All" && item.dataset.category !== filter);
        });
      });
    });
  }

  function renderCreative() {
    $("#creative-grid").innerHTML = data.creativeWork.map((item, index) => `
      <button class="creative-item reveal" type="button" data-index="${index}" data-category="${escapeHtml(item.category)}" aria-label="Open ${escapeHtml(item.title)}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" width="900" height="900">
        <div class="creative-meta"><span>${escapeHtml(item.category)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.format)} / Open fullscreen</p></div>
      </button>`).join("");
    $$(".creative-item").forEach((button) => button.addEventListener("click", () => openLightbox(Number(button.dataset.index))));
  }

  function openPortfolioImage(item, category = item.category) {
    const dialog = $("#lightbox");
    if (!item || !dialog) return;
    $("#lightbox-image").src = item.src;
    $("#lightbox-image").alt = item.alt;
    $("#lightbox-category").textContent = category;
    $("#lightbox-title").textContent = item.title;
    $("#lightbox-format").textContent = item.format;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  function openLightbox(index) {
    const item = data.creativeWork[index];
    if (item) openPortfolioImage(item);
  }

  function renderProcess() {
    $("#process-list").innerHTML = data.process.map((item) => `
      <article class="process-card reveal"><span class="step">${escapeHtml(item.step)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("");
  }

  function renderSkills() {
    $("#skill-groups").innerHTML = data.skillGroups.map((group) => `
      <section class="skill-group reveal"><h3>${escapeHtml(group.name)}</h3><div class="skill-tags">${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></section>`).join("");
  }

  function renderExperience() {
    $("#experience-list").innerHTML = data.experience.map((item) => `
      <article class="timeline-item reveal"><span class="timeline-period">${escapeHtml(item.period)}</span><h3>${escapeHtml(item.role)}<span>${escapeHtml(item.organisation)}</span></h3><p>${escapeHtml(item.summary)}</p></article>`).join("");
  }

  function initReveal() {
    const items = $$(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: .1, rootMargin: "0px 0px -40px" });
    items.forEach((item) => observer.observe(item));
  }

  function initNavigation() {
    const header = $("#site-header");
    const toggle = $("#menu-toggle");
    const menu = $("#mobile-menu");
    const setMenu = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menu.hidden = !open;
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    $$("a", menu).forEach((link) => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) setMenu(false);
    });

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = $$("main section[id]");
    const links = $$(".desktop-nav a");
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -58%", threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));
  }

  function initRoleRotation() {
    const target = $("#rotating-role");
    if (!target || reducedMotion) return;
    let index = 0;
    window.setInterval(() => {
      target.classList.add("is-changing");
      window.setTimeout(() => {
        index = (index + 1) % data.roles.length;
        target.textContent = data.roles[index];
        target.classList.remove("is-changing");
      }, 220);
    }, 2600);
  }

  function initCursor() {
    if (window.matchMedia("(pointer: coarse)").matches || reducedMotion) return;
    const dot = $("#cursor-dot");
    const ring = $("#cursor-ring");
    let pointerX = 0;
    let pointerY = 0;
    let ringX = 0;
    let ringY = 0;
    document.addEventListener("mousemove", (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${pointerX - 3.5}px, ${pointerY - 3.5}px)`;
    });
    const moveRing = () => {
      ringX += (pointerX - ringX) * .16;
      ringY += (pointerY - ringY) * .16;
      ring.style.transform = `translate(${ringX - ring.offsetWidth / 2}px, ${ringY - ring.offsetHeight / 2}px)`;
      requestAnimationFrame(moveRing);
    };
    moveRing();
    $$("a, button, input, select, textarea").forEach((element) => {
      element.addEventListener("mouseenter", () => ring.classList.add("is-active"));
      element.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
    });

    $$(".magnetic").forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * .12;
        const y = (event.clientY - rect.top - rect.height / 2) * .12;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener("mouseleave", () => { element.style.transform = ""; });
    });
  }

  function initHeroCanvas() {
    if (reducedMotion) return;
    const canvas = $("#hero-canvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(22, Math.min(64, Math.floor(width / 24)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .16,
        vy: (Math.random() - .5) * .16,
        r: Math.random() * 1.4 + .5
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        context.beginPath();
        context.fillStyle = "rgba(112, 173, 255, .54)";
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance > 115) continue;
          context.beginPath();
          context.strokeStyle = `rgba(73, 128, 225, ${.1 * (1 - distance / 115)})`;
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else draw();
    });
  }

  function prefillProject(value) {
    const select = $("#projectType");
    const options = Array.from(select.options);
    const exact = options.find((option) => option.text === value);
    if (exact) select.value = exact.value;
    else {
      const related = options.find((option) => value.toLowerCase().includes(option.text.toLowerCase().split(" ")[0]));
      select.value = related ? related.value : "Other";
    }
  }

  function initProjectPrefill() {
    $$('[data-project-type]').forEach((link) => link.addEventListener("click", () => prefillProject(link.dataset.projectType)));
  }

  function validateForm(form) {
    let valid = true;
    const required = $$('[required]', form);
    required.forEach((field) => {
      const wrapper = field.closest(".field");
      const error = $(".field-error", wrapper);
      let message = "";
      if (!field.value.trim()) message = "This field is required.";
      else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) message = "Enter a valid email address.";
      else if (field.name === "message" && field.value.trim().length < 20) message = "Please add a little more detail (at least 20 characters).";
      wrapper.classList.toggle("is-invalid", Boolean(message));
      error.textContent = message;
      field.setAttribute("aria-invalid", String(Boolean(message)));
      if (message) valid = false;
    });
    return valid;
  }

  function initForm() {
    const form = $("#contact-form");
    const status = $("#form-status");
    const submit = $(".submit-button", form);
    form.addEventListener("input", (event) => {
      const wrapper = event.target.closest(".field");
      if (wrapper) {
        wrapper.classList.remove("is-invalid");
        const error = $(".field-error", wrapper);
        if (error) error.textContent = "";
      }
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      status.className = "form-status";
      status.textContent = "";
      if (!validateForm(form)) {
        status.classList.add("error");
        status.textContent = "Please review the highlighted fields.";
        $(".field.is-invalid input, .field.is-invalid select, .field.is-invalid textarea", form)?.focus();
        return;
      }
      const payload = Object.fromEntries(new FormData(form).entries());
      submit.disabled = true;
      submit.querySelector("span").textContent = "Sending inquiry…";
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.message || "The inquiry could not be sent.");
        form.reset();
        status.classList.add("success");
        status.textContent = "Thanks — your project inquiry has been sent. I will reply as soon as possible.";
      } catch (error) {
        status.classList.add("error");
        status.innerHTML = `${escapeHtml(error.message)} You can also email <a href="mailto:${escapeHtml(data.site.email)}">${escapeHtml(data.site.email)}</a>.`;
      } finally {
        submit.disabled = false;
        submit.querySelector("span").textContent = "Send Project Inquiry";
      }
    });
  }

  function initDialogs() {
    const projectDialog = $("#project-modal");
    const lightbox = $("#lightbox");
    $("#lightbox-close").addEventListener("click", () => lightbox.close());
    [projectDialog, lightbox].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener("close", () => {
        document.body.classList.remove("dialog-open");
        $$("video", dialog).forEach((video) => video.pause());
      });
    });
  }

  function initFooter() {
    $("#year").textContent = new Date().getFullYear();
    $("#availability-text").textContent = data.site.availability;
    $("#back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
  }

  function boot() {
    initLoader();
    renderValues();
    renderServices();
    renderProjects();
    renderProjectFilters();
    renderGrowth();
    renderCreative();
    renderCreativeFilters();
    renderProcess();
    renderSkills();
    renderExperience();
    initNavigation();
    initRoleRotation();
    initCursor();
    initHeroCanvas();
    initDialogs();
    initProjectPrefill();
    initForm();
    initFooter();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
