"use client";

import { useEffect, useMemo, useState } from "react";

const PHONE = "15730058405";

const packageMatrix = {
  六件套: {
    title: "雅致六件套",
    deposit: 49,
    from: 499,
    note: "轻装入学，先把宿舍睡眠刚需配齐",
    variants: [
      { line: "雅致基础款", mattress: "床垫 5cm", pillow: "立体包边枕", price: 499, balance: 450, badge: "入门推荐" },
      { line: "雅致基础款", mattress: "床垫 7cm", pillow: "立体包边枕", price: 539, balance: 490 },
      { line: "高奢雅致系列", mattress: "床垫 5cm", pillow: "0压乳胶枕", price: 559, balance: 510 },
      { line: "高奢雅致系列", mattress: "床垫 7cm", pillow: "0压乳胶枕", price: 599, balance: 550, badge: "舒适升级" },
    ],
  },
  七件套: {
    title: "雅致七件套",
    deposit: 79,
    from: 569,
    note: "多一件常用好物，入住准备更从容",
    variants: [
      { line: "雅致基础款", mattress: "床垫 5cm", pillow: "立体包边枕", price: 569, balance: 490, badge: "稳妥之选" },
      { line: "雅致基础款", mattress: "床垫 7cm", pillow: "立体包边枕", price: 599, balance: 520 },
      { line: "高奢雅致系列", mattress: "床垫 5cm", pillow: "0压乳胶枕", price: 629, balance: 550 },
      { line: "高奢雅致系列", mattress: "床垫 7cm", pillow: "0压乳胶枕", price: 659, balance: 580, badge: "舒适升级" },
    ],
  },
  九件套: {
    title: "雅致九件套",
    deposit: 99,
    from: 629,
    note: "寝室生活常用配置，一次挑选更省心",
    variants: [
      { line: "雅致基础款", mattress: "床垫 5cm", pillow: "立体包边枕", price: 629, balance: 530, badge: "新生人气" },
      { line: "雅致基础款", mattress: "床垫 7cm", pillow: "立体包边枕", price: 669, balance: 570 },
      { line: "高奢雅致系列", mattress: "床垫 5cm", pillow: "0压乳胶枕", price: 689, balance: 590 },
      { line: "高奢雅致系列", mattress: "床垫 7cm", pillow: "0压乳胶枕", price: 719, balance: 620, badge: "品质推荐" },
    ],
  },
  十件套: {
    title: "雅致十件套",
    deposit: 109,
    from: 699,
    note: "一步配齐型方案，适合想少操心的新生家庭",
    variants: [
      { line: "雅致基础款", mattress: "床垫 5cm", pillow: "立体包边枕", price: 699, balance: 590, badge: "一步配齐" },
      { line: "雅致基础款", mattress: "床垫 7cm", pillow: "立体包边枕", price: 739, balance: 630 },
      { line: "高奢雅致系列", mattress: "床垫 5cm", pillow: "0压乳胶枕", price: 759, balance: 650 },
      { line: "高奢雅致系列", mattress: "床垫 7cm", pillow: "0压乳胶枕", price: 799, balance: 690, badge: "旗舰配置" },
    ],
  },
};

const singleItems = [
  { name: "床垫·基础款", spec: "5cm", price: 189 },
  { name: "床垫·基础款", spec: "7cm", price: 239 },
  { name: "枕芯·基础款", spec: "立体包边枕", price: 49 },
  { name: "枕芯·高奢款", spec: "0压乳胶枕", price: 159 },
  { name: "云柔被芯", spec: "4.5斤", price: 169 },
  { name: "云柔被芯", spec: "5斤", price: 189 },
  { name: "外三件套", spec: "床单 · 被套 · 枕套", price: 179 },
  { name: "内三件套", spec: "床垫 · 枕芯 · 被芯", price: 369, deposit: 39, balance: 330 },
  { name: "遮光床帘", spec: "宿舍床位适用", price: 259, deposit: 39, balance: 220 },
];

const productFacts = [
  {
    number: "01",
    title: "致雅三件套",
    headline: "高支高密，100% 纯棉",
    details: ["床单 210 × 155cm", "被套 205 × 155cm", "枕套 40 × 60cm", "A/B 双版设计"],
    note: "宣传素材标注：斜纹工艺、活性印染、GB18401-2010 A类。",
  },
  {
    number: "02",
    title: "深睡零压床垫",
    headline: "35D 记忆棉 + 25D 支撑棉",
    details: ["基础款 5cm", "基础款 7cm", "透气面料", "高弹支撑"],
    note: "5cm 与 7cm 两种厚度，可按床板与睡感偏好选择。",
  },
  {
    number: "03",
    title: "云柔被芯",
    headline: "宿舍单人床尺寸",
    details: ["尺寸 150 × 200cm", "4.5斤春秋冬通用", "另有 5斤款", "整张羽丝棉填充"],
    note: "宣传素材标注：柔软亲肤、抗菌抑螨、透气不闷。",
  },
  {
    number: "04",
    title: "枕芯方案",
    headline: "基础与高奢两种选择",
    details: ["立体包边枕", "0压乳胶枕", "云柔羽眠枕", "贴合支撑"],
    note: "具体枕型、颜色和库存请在预订前向客服确认。",
  },
];

const posters = [
  {
    src: "images/product-overview.jpg",
    alt: "校选优品宿舍床品产品总览宣传海报",
    label: "产品总览",
    caption: "三件套、减压床垫、云柔枕与云柔被芯",
  },
  {
    src: "images/product-detail-poster.jpg",
    alt: "校选优品致雅三件套床垫与被芯详情海报",
    label: "参数详情",
    caption: "材质、尺寸、床垫结构与被芯参数",
  },
  {
    src: "images/price-list.jpg",
    alt: "校选优品雅致套装与单品价格表",
    label: "价格原表",
    caption: "六、七、九、十件套与单品售价",
  },
];

const faqs = [
  {
    q: "如何预订套装？",
    a: "先选择六、七、九或十件套，再确认基础款/高奢款、床垫厚度和枕型。支付对应预定金后，尾款按价格表结算；具体收款方式请通过电话或微信确认。",
  },
  {
    q: "还不知道宿舍床铺尺寸怎么办？",
    a: "建议先咨询学校、辅导员或新生群，确认床板长宽和床围高度后再下单。网站所列三件套与被芯参数来自现有宣传素材，不能代替学校实际尺寸。",
  },
  {
    q: "四人寝和六人寝都能使用吗？",
    a: "可以按单床购买，也可以与室友统一选规格、分别选花色。寝室人数并不决定床铺尺寸，最终仍需按学校床位信息确认。",
  },
  {
    q: "质保和退换政策是什么？",
    a: "宣传素材标注“1460天质保”和“120天无理由退换”。正式下单前请向客服确认适用商品、起算时间、退换条件、运费承担和不适用情形。",
  },
  {
    q: "网站上的抗菌、防螨和A类信息可靠吗？",
    a: "页面依据商家提供的宣传素材整理。正式公开投放前，建议补充并核验检测报告、执行标准、洗护标签和商品实拍信息。",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.5 10 8.2 8.1 10c1.2 2.5 3.3 4.5 5.8 5.8l1.8-1.9 4.8 2.8c.2.1.3.4.2.7-.6 2-2.3 3.2-4.3 3.1C9.6 19.9 4.1 14.4 3.5 7.6c-.1-2 1.1-3.7 3.1-4.3.2-.1.5 0 .6.2Z" />
    </svg>
  );
}

export default function Home() {
  const [activeSet, setActiveSet] = useState("九件套");
  const [viewer, setViewer] = useState(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [isWeChat, setIsWeChat] = useState(false);

  const currentPlan = useMemo(() => packageMatrix[activeSet], [activeSet]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setViewer(null);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = viewer ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [viewer]);

  useEffect(() => {
    setIsWeChat(/MicroMessenger/i.test(window.navigator.userAgent));
  }, []);

  function goTo(selector) {
    setMenuOpen(false);
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function copyPageLink() {
    const pageLink = window.location.href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageLink);
      } else {
        const input = document.createElement("textarea");
        input.value = pageLink;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 1800);
    } catch {
      setLinkCopied(false);
    }
  }

  return (
    <main>
      {isWeChat && (
        <aside className="wechat-access-note" aria-label="微信访问提示">
          <div className="shell">
            <div className="wechat-access-copy">
              <strong>微信访问提示</strong>
              <span>若图片加载缓慢或页面空白，请点右上角“···”，选择“在浏览器打开”。</span>
            </div>
            <button type="button" onClick={copyPageLink}>
              {linkCopied ? "已复制" : "复制网址"}
            </button>
          </div>
        </aside>
      )}

      <div className="notice-bar">
        <div className="shell notice-inner">
          <span className="notice-label">2026 新生季预订</span>
          <span>宣传资料标注：1460天质保</span>
          <i />
          <span>120天无理由退换</span>
          <i />
          <a href={`tel:${PHONE}`}>咨询电话 {PHONE}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="校选优品首页">
            <span className="brand-symbol" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="brand-text">
              <strong>校选优品</strong>
              <small>SCHOOL SELECTED PREMIUM</small>
            </span>
          </a>

          <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="主导航">
            <button onClick={() => goTo("#packages")}>套装价格</button>
            <button onClick={() => goTo("#products")}>产品优势</button>
            <button onClick={() => goTo("#catalog")}>花色图鉴</button>
            <button onClick={() => goTo("#dorms")}>寝室方案</button>
            <button onClick={() => goTo("#contact")}>联系预订</button>
          </nav>

          <div className="header-cta">
            <a className="phone-link" href={`tel:${PHONE}`}>
              <PhoneIcon />
              <span>
                <small>电话咨询</small>
                <strong>{PHONE}</strong>
              </span>
            </a>
            <button className="primary-button compact" onClick={() => goTo("#contact")}>
              微信预订
              <ArrowIcon />
            </button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="打开或关闭导航"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              抗菌校园套件 · 面向全国准大学生
            </div>
            <h1>
              从一张好床开始，
              <br />
              <em>住进大学新生活。</em>
            </h1>
            <p>
              校选优品为四人寝、六人寝准备宿舍床品方案。
              套装、床垫、被芯、枕芯和床帘按需选择，28 款花色让每张床都有自己的样子。
            </p>
            <div className="hero-actions">
              <button className="primary-button large" onClick={() => goTo("#packages")}>
                查看真实价格
                <ArrowIcon />
              </button>
              <a className="secondary-button large" href={`tel:${PHONE}`}>
                <PhoneIcon />
                电话咨询
              </a>
            </div>
            <div className="hero-trust">
              <div>
                <strong>28</strong>
                <span>款花色可选</span>
              </div>
              <div>
                <strong>4 档</strong>
                <span>套装配置</span>
              </div>
              <div>
                <strong>¥499</strong>
                <span>雅致套装起</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card" role="button" tabIndex={0} onClick={() => setViewer(posters[0])}>
              <img src="images/product-overview.jpg" alt="校选优品产品总览" />
              <span className="zoom-hint">点击放大</span>
            </div>
            <div className="hero-price-card">
              <span>雅致套装</span>
              <div>
                <small>¥</small>
                <strong>499</strong>
                <small>起</small>
              </div>
              <p>预定金 ¥49 起</p>
            </div>
            <div className="hero-style-card">
              <span>FULL SERIES</span>
              <strong>28 款花色</strong>
              <button onClick={() => goTo("#catalog")}>查看图鉴 →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="order-steps">
        <div className="shell order-step-grid">
          {[
            ["01", "选件数", "六 / 七 / 九 / 十件套"],
            ["02", "选睡感", "5cm 或 7cm 床垫"],
            ["03", "付预定金", "¥49 / ¥79 / ¥99 / ¥109"],
            ["04", "确认发货", "核对花色、尺寸和地址"],
          ].map((step) => (
            <article key={step[0]}>
              <span>{step[0]}</span>
              <div>
                <strong>{step[1]}</strong>
                <small>{step[2]}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section package-section" id="packages">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">PACKAGE PRICING</span>
              <h2>价格透明，先选件数再选睡感</h2>
            </div>
            <p>
              以下价格已按你提供的原始价格表录入。套装具体构成、花色库存、运费及收款方式，请在支付前与客服再次确认。
            </p>
          </div>

          <div className="set-tabs" role="tablist" aria-label="选择套装件数">
            {Object.keys(packageMatrix).map((setName) => (
              <button
                key={setName}
                className={activeSet === setName ? "active" : ""}
                onClick={() => setActiveSet(setName)}
                role="tab"
                aria-selected={activeSet === setName}
              >
                <span>雅致</span>
                <strong>{setName}</strong>
                <small>¥{packageMatrix[setName].from} 起</small>
              </button>
            ))}
          </div>

          <div className="package-board">
            <aside className="package-summary">
              <span className="summary-index">0{Object.keys(packageMatrix).indexOf(activeSet) + 1}</span>
              <span className="section-kicker light">{activeSet.toUpperCase()}</span>
              <h3>{currentPlan.title}</h3>
              <p>{currentPlan.note}</p>
              <div className="summary-price">
                <span>售价</span>
                <div>
                  <small>¥</small>
                  <strong>{currentPlan.from}</strong>
                  <small>起</small>
                </div>
              </div>
              <div className="summary-deposit">
                <span>预定金</span>
                <strong>¥{currentPlan.deposit}</strong>
              </div>
              <div className="summary-footnote">
                <CheckIcon />
                <span>尾款 = 售价 − 预定金</span>
              </div>
              <a href={`tel:${PHONE}`}>
                电话确认配置
                <ArrowIcon />
              </a>
            </aside>

            <div className="variant-grid">
              {currentPlan.variants.map((variant) => (
                <article className={variant.line.includes("高奢") ? "variant-card luxury" : "variant-card"} key={`${variant.line}-${variant.mattress}`}>
                  {variant.badge && <span className="variant-badge">{variant.badge}</span>}
                  <div className="variant-topline">
                    <span>{variant.line}</span>
                    <i className={variant.line.includes("高奢") ? "luxury-dot" : ""} />
                  </div>
                  <h3>{variant.mattress}</h3>
                  <p>{variant.pillow}</p>
                  <div className="variant-price">
                    <div>
                      <small>售价</small>
                      <strong>¥{variant.price}</strong>
                    </div>
                    <div>
                      <small>预定金</small>
                      <strong>¥{currentPlan.deposit}</strong>
                    </div>
                    <div>
                      <small>尾款</small>
                      <strong>¥{variant.balance}</strong>
                    </div>
                  </div>
                  <button onClick={() => goTo("#contact")}>
                    咨询这一款
                    <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section singles-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-kicker">SINGLE ITEMS</span>
              <h2>不买整套，也可以按需加购</h2>
            </div>
            <a href={`tel:${PHONE}`}>咨询单品库存 →</a>
          </div>

          <div className="single-grid">
            {singleItems.map((item, index) => (
              <article key={`${item.name}-${item.spec}`}>
                <span className="single-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="single-copy">
                  <h3>{item.name}</h3>
                  <p>{item.spec}</p>
                </div>
                <div className="single-price">
                  <small>售价</small>
                  <strong>¥{item.price}</strong>
                </div>
                {item.deposit && (
                  <div className="single-deposit">
                    定金 ¥{item.deposit} · 尾款 ¥{item.balance}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-heading centered">
            <span className="section-kicker">PRODUCT DETAILS</span>
            <h2>把宣传图里的重点，整理成可核对的参数</h2>
            <p>商品信息依据你提供的海报整理；尺寸、材质与宣传用语在正式投放前仍建议以实物标签和检测资料复核。</p>
          </div>

          <div className="overview-poster" role="button" tabIndex={0} onClick={() => setViewer(posters[0])}>
            <img src="images/product-overview.jpg" alt="校选优品产品总览海报" loading="lazy" />
            <div className="poster-overlay">
              <span>产品总览海报</span>
              <strong>点击查看原图</strong>
            </div>
          </div>

          <div className="fact-grid">
            {productFacts.map((fact) => (
              <article key={fact.number}>
                <div className="fact-top">
                  <span>{fact.number}</span>
                  <small>{fact.title}</small>
                </div>
                <h3>{fact.headline}</h3>
                <ul>
                  {fact.details.map((detail) => (
                    <li key={detail}>
                      <CheckIcon />
                      {detail}
                    </li>
                  ))}
                </ul>
                <p>{fact.note}</p>
              </article>
            ))}
          </div>

          <div className="detail-story">
            <div className="detail-story-copy">
              <span className="section-kicker">MATERIAL STORY</span>
              <h2>好床品，好睡眠，好状态</h2>
              <p>
                三件套强调亲肤透气与宿舍机洗；床垫提供 5cm、7cm 两种厚度；
                被芯有 4.5斤和 5斤选择；枕芯则覆盖基础包边枕与高奢乳胶枕。
              </p>
              <div className="detail-tags">
                <span>纯棉三件套</span>
                <span>深睡减压垫</span>
                <span>云柔羽眠枕</span>
                <span>云柔羽眠被</span>
              </div>
              <button className="outline-button" onClick={() => setViewer(posters[1])}>
                放大查看参数海报
                <ArrowIcon />
              </button>
            </div>
            <button className="detail-poster-card" onClick={() => setViewer(posters[1])} aria-label="放大产品参数海报">
              <img src="images/product-detail-poster.jpg" alt="致雅三件套床垫与被芯参数海报" loading="lazy" />
              <span>查看完整参数</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section catalog-section" id="catalog">
        <div className="shell catalog-layout">
          <div className="catalog-copy">
            <span className="section-kicker light">28 COLORWAYS</span>
            <h2>28 款花色，和室友一起选也不撞款</h2>
            <p>
              清新条纹、可爱印花、简约灰蓝、黑白格纹等风格集中展示。
              点击海报可以打开原图，放大查看每款编号与名称。
            </p>
            <div className="catalog-stats">
              <div>
                <strong>28</strong>
                <span>全系列花色</span>
              </div>
              <div>
                <strong>A / B</strong>
                <span>双版设计</span>
              </div>
              <div>
                <strong>4 / 6</strong>
                <span>人寝均适用</span>
              </div>
            </div>
            <button className="light-button" onClick={() => setViewer({ src: "images/catalog-28.jpg", alt: "校选优品28款花色全系列海报" })}>
              放大整张花色图
              <ArrowIcon />
            </button>
            <small>花色库存可能变化，预订前请通过微信确认。</small>
          </div>

          <div className="catalog-frame">
            <div className="catalog-toolbar">
              <span>
                <i />
                全系列套件
              </span>
              <button onClick={() => setViewer({ src: "images/catalog-28.jpg", alt: "校选优品28款花色全系列海报" })}>
                放大查看 ↗
              </button>
            </div>
            <div className="catalog-scroll">
                <img src="images/catalog-28.jpg" alt="校选优品28款花色全系列海报" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section dorm-section" id="dorms">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="section-kicker">DORM SCENARIOS</span>
              <h2>四人寝、六人寝，都从单床方案开始配</h2>
            </div>
            <p>
              可单人购买，也可与室友统一规格、分别选花色。寝室人数不代表床铺尺寸，下单前请以学校信息为准。
            </p>
          </div>

          <div className="dorm-grid">
            <article className="dorm-card">
              <div className="dorm-image">
              <img src="images/four-person-dorm-hero.png" alt="四人寝床品搭配示意" loading="lazy" />
                <span>4-PERSON DORM</span>
              </div>
              <div className="dorm-copy">
                <div>
                  <span>四人寝</span>
                  <h3>上床下桌 · 单人自由选色</h3>
                </div>
                <p>推荐先核对床板尺寸，再从六件套或九件套开始比较。</p>
                <button onClick={() => goTo("#packages")}>
                  选择套装
                  <ArrowIcon />
                </button>
              </div>
            </article>
            <article className="dorm-card">
              <div className="dorm-image">
              <img src="images/six-person-dorm.png" alt="六人寝床品搭配示意" loading="lazy" />
                <span>6-PERSON DORM</span>
              </div>
              <div className="dorm-copy">
                <div>
                  <span>六人寝</span>
                  <h3>组合上下铺 · 统一规格更省心</h3>
                </div>
                <p>适合室友共同确认尺寸，用不同花色区分各自床品。</p>
                <button onClick={() => goTo("#contact")}>
                  咨询拼单
                  <ArrowIcon />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section source-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-kicker">ORIGINAL MATERIALS</span>
              <h2>宣传资料原图</h2>
            </div>
            <p>点击任意资料可放大审核，便于逐项核对价格与宣传文案。</p>
          </div>
          <div className="poster-grid">
            {posters.map((poster) => (
              <button key={poster.src} onClick={() => setViewer(poster)}>
                <div className={`poster-thumb ${poster.src.includes("detail") || poster.src.includes("price") ? "portrait" : ""}`}>
                  <img src={poster.src} alt={poster.alt} loading="lazy" />
                  <span>放大 ↗</span>
                </div>
                <div>
                  <span>{poster.label}</span>
                  <strong>{poster.caption}</strong>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <span className="section-kicker">BUYING GUIDE</span>
            <h2>新生下单前，先把关键问题问清楚</h2>
            <p>页面负责把信息整理清楚，最终配置、库存、配送和售后仍以客服确认结果为准。</p>
            <a className="outline-button" href={`tel:${PHONE}`}>
              电话咨询
              <ArrowIcon />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <article className={faqOpen === index ? "open" : ""} key={item.q}>
                <button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}>
                  <span>{item.q}</span>
                  <i>{faqOpen === index ? "−" : "+"}</i>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-pattern" />
        <div className="shell contact-grid">
          <div className="contact-copy">
            <span className="section-kicker light">CONTACT & PRE-ORDER</span>
            <h2>选好套装后，电话或微信确认库存</h2>
            <p>请准备好学校、寝室人数、床铺尺寸、套装件数、床垫厚度和意向花色，沟通会更高效。</p>
            <div className="contact-phone">
              <span>联系电话</span>
              <a href={`tel:${PHONE}`}>{PHONE}</a>
              <button onClick={copyPhone}>{copied ? "已复制" : "复制号码"}</button>
            </div>
            <div className="contact-actions">
              <a className="light-button" href={`tel:${PHONE}`}>
                <PhoneIcon />
                立即拨打
              </a>
              <button className="glass-button" onClick={() => document.querySelector(".qr-card")?.scrollIntoView({ behavior: "smooth", block: "center" })}>
                查看微信二维码
              </button>
            </div>
            <small>面向全国准大学生开放咨询；配送范围、运费和发货时间请以客服确认为准。</small>
          </div>

          <div className="qr-card">
            <div className="qr-card-head">
              <div className="qr-avatar">冰</div>
              <div>
                <span>微信昵称</span>
                <strong>冰汤圆</strong>
              </div>
              <i>WECHAT</i>
            </div>
            <button onClick={() => setViewer({ src: "images/wechat-qr.jpg", alt: "校选优品客服微信二维码，昵称冰汤圆" })} aria-label="放大微信二维码">
              <img src="images/wechat-qr.jpg" alt="校选优品客服微信二维码，昵称冰汤圆" loading="lazy" />
            </button>
            <p>微信扫一扫，添加好友咨询花色与库存</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#top">
              <span className="brand-symbol" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="brand-text">
                <strong>校选优品</strong>
                <small>SCHOOL SELECTED PREMIUM</small>
              </span>
            </a>
            <p>宿舍好物优选 · 好枕头 · 好睡眠 · 好状态</p>
          </div>
          <div>
            <strong>快速查看</strong>
            <a href="#packages">套装价格</a>
            <a href="#products">产品参数</a>
            <a href="#catalog">28款花色</a>
          </div>
          <div>
            <strong>购买咨询</strong>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
            <a href="#contact">微信二维码</a>
            <a href="#faq">常见问题</a>
          </div>
          <div>
            <strong>审核提醒</strong>
            <span>宣传内容来自商家素材</span>
            <span>下单前请确认库存与政策</span>
            <span>正式投放前核验检测资料</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 校选优品</span>
          <span>页面审核稿 · 商品与服务以最终确认信息为准</span>
        </div>
      </footer>

      <div className="mobile-sticky">
        <a href={`tel:${PHONE}`}>
          <PhoneIcon />
          电话咨询
        </a>
        <button onClick={() => goTo("#contact")}>微信预订</button>
      </div>

      {viewer && (
        <div className="viewer-backdrop" role="presentation" onMouseDown={() => setViewer(null)}>
          <div className="viewer" role="dialog" aria-modal="true" aria-label="宣传资料大图" onMouseDown={(event) => event.stopPropagation()}>
            <div className="viewer-toolbar">
              <div>
                <span>校选优品</span>
                <strong>{viewer.label || "宣传资料"}</strong>
              </div>
              <button onClick={() => setViewer(null)} aria-label="关闭大图">
                ×
              </button>
            </div>
            <div className="viewer-scroll">
              <img src={viewer.src} alt={viewer.alt} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
