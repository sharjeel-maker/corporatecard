// UAE Corporate Card Comparison Website - Core Logic & Structured Data

const CARDS_DATABASE = [
  {
    id: "qashio",
    name: "Qashio",
    rating: 4.8,
    reviewsCount: 142,
    bestFor: "Enterprise rewards & robust corporate spend control",
    cardType: "Corporate",
    availability: "UAE & Saudi Arabia",
    startingPrice: "AED 99/month",
    monthlyFee: 99,
    annualFee: "AED 1,188",
    minSpend: "No minimum spend",
    fxFees: "1.5% markup",
    cashback: "Up to 1.0% cashback",
    rewards: "Earn points on every spend, redeemable for flights, hotels, and gift cards",
    travelRewards: "Yes",
    airportBenefits: "No",
    eligibility: "UAE registered business, 3 months bank statements",
    theme: "qashio-theme",
    colorGradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    logoColor: "#7c3aed",
    description: "Qashio is a leading corporate card and spend management platform in the MENA region. It provides real-time visibility, automated expense reporting, and robust spend controls to businesses of all sizes.",
    pros: [
      "Outstanding spend controls and multi-tier approval workflows",
      "Seamless local ERP integrations (Zoho, QuickBooks, Xero, Dynamics)",
      "Dedicated Saudi Riyal (SAR) and UAE Dirham (AED) accounts"
    ],
    cons: [
      "Has a platform monthly fee for advanced enterprise capabilities",
      "Requires minimal administrative setup time"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: true,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: true,
      airportBenefits: false,
      internationalPayments: true
    },
    accountingIntegrations: ["QuickBooks", "Xero", "Zoho Books", "Microsoft Dynamics", "Oracle NetSuite"],
    scores: {
      spendManagement: 96,
      rewards: 88,
      flexibility: 90,
      automation: 94,
      pricing: 80,
      travel: 85,
      integrations: 95,
      ux: 92
    },
    tags: ["Rewards", "Expense Management", "Virtual Cards", "Enterprise", "Medium Businesses"]
  },
  {
    id: "alaan",
    name: "Alaan",
    rating: 4.9,
    reviewsCount: 198,
    bestFor: "Guaranteed cashback & zero platform fees for SMEs",
    cardType: "Corporate",
    availability: "UAE businesses",
    startingPrice: "Free (0 AED/month)",
    monthlyFee: 0,
    annualFee: "Free",
    minSpend: "No minimum spend",
    fxFees: "1.0% markup",
    cashback: "Up to 2.0% cashback",
    rewards: "Industry-leading flat cashback on corporate purchases & advertising spending",
    travelRewards: "Yes",
    airportBenefits: "No",
    eligibility: "UAE registered business with active trade license",
    theme: "alaan-theme",
    colorGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    logoColor: "#10b981",
    description: "Alaan is a multi-currency corporate card and spend platform built specifically for Middle Eastern businesses. It charges zero platform fees and rewards businesses with real cashback on international and local spend.",
    pros: [
      "Industry-leading 2.0% cashback on marketing and advertising spend",
      "Absolutely free platform with unlimited virtual cards",
      "Supports multi-currency business spending (AED, USD, SAR, etc.)"
    ],
    cons: [
      "Slightly fewer advanced enterprise integration nodes compared to legacy ERPs",
      "Fewer physical airport lounge perks"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: true,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: true,
      airportBenefits: false,
      internationalPayments: true
    },
    accountingIntegrations: ["Xero", "QuickBooks", "Zoho Books", "Wafeq"],
    scores: {
      spendManagement: 94,
      rewards: 98,
      flexibility: 92,
      automation: 91,
      pricing: 100,
      travel: 82,
      integrations: 88,
      ux: 95
    },
    tags: ["Cashback", "Virtual Cards", "SMEs", "Startups", "Zero Fees"]
  },
  {
    id: "pemo",
    name: "Pemo",
    rating: 4.7,
    reviewsCount: 115,
    bestFor: "SME expense automation & instant WhatsApp receipt capture",
    cardType: "Corporate",
    availability: "UAE & Saudi Arabia",
    startingPrice: "AED 49/month",
    monthlyFee: 49,
    annualFee: "AED 588",
    minSpend: "No minimum spend",
    fxFees: "1.25% markup",
    cashback: "Up to 1.0% cashback",
    rewards: "SME discount perks on SaaS partners and corporate software platforms",
    travelRewards: "No",
    airportBenefits: "No",
    eligibility: "UAE or Saudi active business entities",
    theme: "pemo-theme",
    colorGradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    logoColor: "#0284c7",
    description: "Pemo is designed to simplify and automate corporate expense processes for small and medium-sized enterprises in the GCC. It features a state-of-the-art receipt management workflow using WhatsApp integrations.",
    pros: [
      "Extremely user-friendly WhatsApp bot for snapping receipts on-the-go",
      "Intuitive app layout requiring virtually zero training for employees",
      "Cost-effective tier structures for growing SME businesses"
    ],
    cons: [
      "Limited customized premium travel benefits or airport lounge entries",
      "Fewer customization features in department controls compared to Pluto"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: false,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: false,
      airportBenefits: false,
      internationalPayments: true
    },
    accountingIntegrations: ["Xero", "QuickBooks", "Zoho Books"],
    scores: {
      spendManagement: 88,
      rewards: 75,
      flexibility: 85,
      automation: 96,
      pricing: 90,
      travel: 70,
      integrations: 86,
      ux: 96
    },
    tags: ["Expense Management", "Startups", "SMEs", "WhatsApp Receipt"]
  },
  {
    id: "pluto",
    name: "Pluto Card",
    rating: 4.8,
    reviewsCount: 130,
    bestFor: "SaaS subscriptions, high limits, and marketing agencies",
    cardType: "Corporate",
    availability: "UAE businesses",
    startingPrice: "AED 120/month",
    monthlyFee: 120,
    annualFee: "AED 1,440",
    minSpend: "No minimum spend",
    fxFees: "0.75% markup",
    cashback: "Up to 1.5% cashback",
    rewards: "Cashback and tailored platform discounts for digital agencies & SaaS tools",
    travelRewards: "Yes",
    airportBenefits: "No",
    eligibility: "UAE registered startups, digital agencies, and SMEs",
    theme: "pluto-theme",
    colorGradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    logoColor: "#1e293b",
    description: "Pluto is a robust corporate card that excels in helping marketing agencies and high-spending e-commerce brands manage subscription tools, Meta/Google ad limits, and vendor payments with instant virtual cards.",
    pros: [
      "Industry-leading API integrations and custom spending thresholds",
      "Low FX transaction fees for global digital SaaS vendors",
      "Unlimited customizable virtual cards for specific ad campaigns"
    ],
    cons: [
      "Mainly tailored for digital native businesses, might be overkill for heavy industrial/fleet clients",
      "Higher starting fee tier for smaller enterprise packages"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: true,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: true,
      airportBenefits: false,
      internationalPayments: true
    },
    accountingIntegrations: ["Xero", "QuickBooks", "Oracle NetSuite", "Dynamics"],
    scores: {
      spendManagement: 95,
      rewards: 90,
      flexibility: 94,
      automation: 92,
      pricing: 82,
      travel: 80,
      integrations: 92,
      ux: 91
    },
    tags: ["Virtual Cards", "Marketing Spend", "SaaS Subscriptions", "Ecommerce"]
  },
  {
    id: "ramp",
    name: "Ramp",
    rating: 4.9,
    reviewsCount: 420,
    bestFor: "AI-driven cost savings & automated vendor contract parsing",
    cardType: "Corporate",
    availability: "International with UAE setup",
    startingPrice: "Free to start",
    monthlyFee: 0,
    annualFee: "Free",
    minSpend: "No minimum spend",
    fxFees: "Zero FX markups",
    cashback: "Flat 1.5% cashback",
    rewards: "AI-based recommendations highlighting where your company is overpaying on software",
    travelRewards: "Yes",
    airportBenefits: "No",
    eligibility: "Global entity structure with UAE branches",
    theme: "ramp-theme",
    colorGradient: "linear-gradient(135deg, #1c1917 0%, #3f3f46 100%)",
    logoColor: "#1c1917",
    description: "Ramp is the ultimate financial operations platform designed to save your business time and money. Known for AI capabilities, Ramp parses software contracts to discover redundant SaaS spend.",
    pros: [
      "Unbelievable cost-savings intelligence tools built directly into dashboard",
      "Zero foreign exchange markups globally",
      "Robust global accounting sync integrations"
    ],
    cons: [
      "Requires international business presence / US parent setups for peak benefits",
      "Customer support is mostly US business hours focused"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: true,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: true,
      airportBenefits: false,
      internationalPayments: true
    },
    accountingIntegrations: ["Oracle NetSuite", "Sage Intacct", "Xero", "QuickBooks Desktop"],
    scores: {
      spendManagement: 98,
      rewards: 92,
      flexibility: 96,
      automation: 99,
      pricing: 95,
      travel: 86,
      integrations: 98,
      ux: 94
    },
    tags: ["Cashback", "Expense Management", "AI Insights", "Zero FX"]
  },
  {
    id: "brex",
    name: "Brex",
    rating: 4.8,
    reviewsCount: 380,
    bestFor: "Ventured-backed startups, high limits & global travel perks",
    cardType: "Corporate",
    availability: "International with UAE offices",
    startingPrice: "Free tier available",
    monthlyFee: 0,
    annualFee: "Free basic tier",
    minSpend: "No minimum spend",
    fxFees: "No foreign transaction fees",
    cashback: "Points multiplier (Up to 4x on travel & ads)",
    rewards: "Premium flights, transfers, and high-value startup credits (AWS, Google Cloud)",
    travelRewards: "Yes",
    airportBenefits: "Yes",
    eligibility: "Venture-backed startups or corporate entities with global offices",
    theme: "brex-theme",
    colorGradient: "linear-gradient(135deg, #27272a 0%, #09090b 100%)",
    logoColor: "#09090b",
    description: "Brex is the gold standard corporate card for venture-backed startups and high-growth global enterprises. It offers flexible card-limits based on your startup funding rather than traditional credit scores.",
    pros: [
      "Enables venture-backed startups to get massive limits without personal guarantees",
      "Exceptional startup partner rewards (AWS, Slack, and advertising multipliers)",
      "High-end premium global travel portal access and airport perks"
    ],
    cons: [
      "Very strict eligibility criteria; non-venture backed bootstrap startups might not qualify",
      "Physical offices must sometimes be structured globally"
    ],
    features: {
      virtualCards: true,
      physicalCards: true,
      unlimitedVirtualCards: true,
      employeeCards: true,
      customLimits: true,
      merchantControls: true,
      departmentControls: true,
      approvalWorkflows: true,
      expenseManagement: true,
      receiptManagement: true,
      accountingSync: true,
      travelBenefits: true,
      airportBenefits: true,
      internationalPayments: true
    },
    accountingIntegrations: ["Oracle NetSuite", "Sage Intacct", "Xero", "QuickBooks"],
    scores: {
      spendManagement: 92,
      rewards: 97,
      flexibility: 95,
      automation: 90,
      pricing: 88,
      travel: 98,
      integrations: 93,
      ux: 93
    },
    tags: ["Venture-Backed", "Startups", "Miles & Travel", "Lounge Access"]
  }
];

// Active Compare State
let selectedCompareIds = [];

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic content
  renderCardsGrid(CARDS_DATABASE);
  initSearch();
  initDiscoveryFilters();
  initCardPicker();
  initRewardsCalculator();
  initCostCalculator();
  initComparisonsDropdowns();
  
  // Track CTA/Modal actions
  setupEventListeners();
});

// Render the featured cards list
function renderCardsGrid(cards) {
  const gridContainer = document.getElementById("featured-cards-grid");
  if (!gridContainer) return;

  if (cards.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results">
        <h3>No cards match your current filter selections</h3>
        <p>Try resetting the search query or selecting "Best Overall" above.</p>
        <button class="btn btn-secondary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = cards.map(card => {
    const isChecked = selectedCompareIds.includes(card.id) ? "checked" : "";
    return `
      <div class="card-tile fade-in" data-id="${card.id}">
        <div class="card-tile-header">
          <div class="provider-info">
            <div class="provider-logo" style="background-color: ${card.logoColor}">
              ${card.name[0]}
            </div>
            <div>
              <h3 class="provider-name">${card.name}</h3>
              <div class="rating-badge">
                <span class="star-rating">★</span>
                <span class="rating-num">${card.rating}</span>
                <span class="reviews-count">(${card.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>
          
          <div class="compare-checkbox-wrapper">
            <label class="checkbox-container">
              <input type="checkbox" class="compare-card-checkbox" data-id="${card.id}" ${isChecked} onchange="toggleCardComparison('${card.id}', this)">
              <span class="checkmark"></span>
              Compare
            </label>
          </div>
        </div>

        <div class="card-visual-container">
          <div class="card-mockup" style="background: ${card.colorGradient}">
            <div class="card-mockup-chip"></div>
            <div class="card-mockup-brand">${card.name}</div>
            <div class="card-mockup-number">•••• •••• •••• 2026</div>
            <div class="card-mockup-footer">
              <span class="card-mockup-name">BUSINESS SPEND</span>
              <span class="card-mockup-logo">VISA</span>
            </div>
          </div>
        </div>

        <div class="card-tile-body">
          <p class="best-for-text"><strong>Best for:</strong> ${card.bestFor}</p>
          
          <div class="card-key-metrics">
            <div class="metric-item">
              <span class="metric-label">Fees</span>
              <span class="metric-value font-highlight">${card.startingPrice}</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Cashback</span>
              <span class="metric-value font-highlight">${card.cashback}</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Card Type</span>
              <span class="metric-value">${card.cardType}</span>
            </div>
          </div>

          <div class="card-highlights">
            <div class="highlight-bullet">
              <span class="bullet-check">✓</span>
              <span>Virtual & Physical Corporate Cards</span>
            </div>
            <div class="highlight-bullet">
              <span class="bullet-check">✓</span>
              <span>${card.features.unlimitedVirtualCards ? "Unlimited" : "Flexible"} Virtual Cards</span>
            </div>
            <div class="highlight-bullet">
              <span class="bullet-check">✓</span>
              <span>Granular Spend & Merchant Limits</span>
            </div>
            <div class="highlight-bullet">
              <span class="bullet-check">✓</span>
              <span>${card.accountingIntegrations.length}+ Accounting Integrations</span>
            </div>
          </div>
        </div>

        <div class="card-tile-footer">
          <button class="btn btn-secondary btn-full" onclick="openDetailsModal('${card.id}')">View Details</button>
          <a href="#apply-link" class="btn btn-primary btn-full" onclick="visitProviderAlert('${card.name}')">Visit Provider</a>
        </div>
      </div>
    `;
  }).join("");
}

// Reset all filters in dynamic section
window.resetAllFilters = function() {
  document.getElementById("search-input").value = "";
  const activePill = document.querySelector(".discovery-pill.active");
  if (activePill) activePill.classList.remove("active");
  const firstPill = document.querySelector(".discovery-pill[data-category='all']");
  if (firstPill) firstPill.classList.add("active");
  
  // Reset sort
  document.getElementById("sort-select").value = "recommended";
  
  filterAndSortCards();
};

// Filter & Sort core engine
function filterAndSortCards() {
  const searchQuery = document.getElementById("search-input").value.toLowerCase().trim();
  const selectedPill = document.querySelector(".discovery-pill.active");
  const category = selectedPill ? selectedPill.getAttribute("data-category") : "all";
  const sortBy = document.getElementById("sort-select").value;

  let filtered = [...CARDS_DATABASE];

  // 1. Filter by Search Query
  if (searchQuery) {
    filtered = filtered.filter(card => {
      const matchName = card.name.toLowerCase().includes(searchQuery);
      const matchBestFor = card.bestFor.toLowerCase().includes(searchQuery);
      const matchDesc = card.description.toLowerCase().includes(searchQuery);
      const matchTags = card.tags.some(t => t.toLowerCase().includes(searchQuery));
      const matchIntegrations = card.accountingIntegrations.some(i => i.toLowerCase().includes(searchQuery));
      return matchName || matchBestFor || matchDesc || matchTags || matchIntegrations;
    });
  }

  // 2. Filter by Discovery Pill Category
  if (category !== "all") {
    filtered = filtered.filter(card => {
      switch(category) {
        case "cashback":
          return card.cashback !== "None" && !card.cashback.includes("0%");
        case "travel":
          return card.features.travelBenefits || card.travelRewards === "Yes";
        case "virtual":
          return card.features.virtualCards;
        case "startups":
          return card.tags.includes("Startups") || card.tags.includes("Venture-Backed");
        case "smes":
          return card.tags.includes("SMEs");
        case "expense":
          return card.features.expenseManagement;
        case "free":
          return card.monthlyFee === 0;
        default:
          return true;
      }
    });
  }

  // 3. Sort Cards
  filtered.sort((a, b) => {
    if (sortBy === "recommended") {
      return b.rating - a.rating; // Sort by rating descending
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "cashback") {
      // Crude parsing of cashback
      const getVal = (str) => parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
      return getVal(b.cashback) - getVal(a.cashback);
    } else if (sortBy === "cost-low") {
      return a.monthlyFee - b.monthlyFee;
    } else if (sortBy === "rewards") {
      // Put tags containing Rewards first
      const hasRewardsA = a.tags.includes("Rewards") || a.travelRewards === "Yes";
      const hasRewardsB = b.tags.includes("Rewards") || b.travelRewards === "Yes";
      return hasRewardsB - hasRewardsA;
    }
    return 0;
  });

  renderCardsGrid(filtered);
}

// Search field initialization
function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    filterAndSortCards();
  });
}

// Discovery selection pills initialization
function initDiscoveryFilters() {
  const pills = document.querySelectorAll(".discovery-pill");
  const sortSelect = document.getElementById("sort-select");

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      filterAndSortCards();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      filterAndSortCards();
    });
  }
}

// Global quick-search queries
window.triggerQuickSearch = function(query) {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
  searchInput.value = query;
  
  // Scroll smoothly to featured cards listing
  const featuredSection = document.getElementById("featured-cards-section");
  if (featuredSection) {
    featuredSection.scrollIntoView({ behavior: "smooth" });
  }
  filterAndSortCards();
};

// Compare Toggle functionality
window.toggleCardComparison = function(id, checkbox) {
  if (checkbox.checked) {
    if (selectedCompareIds.length >= 4) {
      alert("You can compare up to 4 corporate cards side-by-side.");
      checkbox.checked = false;
      return;
    }
    if (!selectedCompareIds.includes(id)) {
      selectedCompareIds.push(id);
    }
  } else {
    selectedCompareIds = selectedCompareIds.filter(item => item !== id);
  }

  updateComparisonTray();
};

// Update floating dynamic comparison widget
function updateComparisonTray() {
  const tray = document.getElementById("comparison-sticky-tray");
  const listContainer = document.getElementById("comparison-selected-list");
  
  if (!tray || !listContainer) return;

  if (selectedCompareIds.length === 0) {
    tray.classList.remove("active");
    return;
  }

  tray.classList.add("active");
  
  listContainer.innerHTML = selectedCompareIds.map(id => {
    const card = CARDS_DATABASE.find(c => c.id === id);
    return `
      <div class="tray-card-item">
        <span class="tray-card-logo-dot" style="background-color: ${card.logoColor}"></span>
        <span class="tray-card-name">${card.name}</span>
        <button class="tray-card-remove" onclick="removeCompareCard('${card.id}')">✕</button>
      </div>
    `;
  }).join("");

  // Update Compare Button Count Text
  const compareCountText = document.getElementById("compare-submit-count");
  if (compareCountText) {
    compareCountText.textContent = `(${selectedCompareIds.length})`;
  }
}

window.removeCompareCard = function(id) {
  selectedCompareIds = selectedCompareIds.filter(item => item !== id);
  
  // Uncheck in grid
  const checkboxes = document.querySelectorAll(`.compare-card-checkbox[data-id="${id}"]`);
  checkboxes.forEach(cb => cb.checked = false);

  updateComparisonTray();
};

window.clearComparisonTray = function() {
  selectedCompareIds = [];
  const checkboxes = document.querySelectorAll(`.compare-card-checkbox`);
  checkboxes.forEach(cb => cb.checked = false);
  updateComparisonTray();
};

// Main Comparison Table Modal Generator
window.launchComparisonMatrix = function() {
  if (selectedCompareIds.length < 2) {
    alert("Please select at least 2 corporate cards to run a comparison.");
    return;
  }

  const selectedCards = selectedCompareIds.map(id => CARDS_DATABASE.find(c => c.id === id));
  const matrixBody = document.getElementById("comparison-matrix-modal-content");
  
  if (!matrixBody) return;

  // Compile full table structure
  let tableHTML = `
    <div class="table-responsive">
      <table class="comparison-grid-table">
        <thead>
          <tr>
            <th class="sticky-col feature-col-head">Product Detail</th>
            ${selectedCards.map(c => `
              <th class="matrix-header-cell">
                <div class="matrix-provider-icon" style="background-color: ${c.logoColor}">${c.name[0]}</div>
                <h4 class="matrix-provider-name">${c.name}</h4>
                <div class="matrix-score-rating">★ ${c.rating}/5</div>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sticky-col feature-row-label">Monthly Fee</td>
            ${selectedCards.map(c => `<td><strong class="text-indigo">${c.startingPrice}</strong></td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Annual Fee Equivalent</td>
            ${selectedCards.map(c => `<td>${c.annualFee}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Standard Cash Rewards</td>
            ${selectedCards.map(c => `<td><strong>${c.cashback}</strong></td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Rewards Description</td>
            ${selectedCards.map(c => `<td class="text-small">${c.rewards}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">FX Markup Fees</td>
            ${selectedCards.map(c => `<td>${c.fxFees}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Virtual Cards Availability</td>
            ${selectedCards.map(c => `<td>${c.features.virtualCards ? "✅ Included" : "❌ No"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Unlimited Virtual Cards</td>
            ${selectedCards.map(c => `<td>${c.features.unlimitedVirtualCards ? "✅ Yes (Unlimited)" : "⚠️ Limited"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Physical Cards for Employees</td>
            ${selectedCards.map(c => `<td>${c.features.physicalCards ? "✅ Yes" : "❌ No"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Spending & Custom Controls</td>
            ${selectedCards.map(c => `<td>${c.features.customLimits ? "✅ Multi-tiered Limits" : "❌ Basic"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Merchant-Specific Controls</td>
            ${selectedCards.map(c => `<td>${c.features.merchantControls ? "✅ Lock to Merchant" : "❌ Basic Limits"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Approval Workflows</td>
            ${selectedCards.map(c => `<td>${c.features.approvalWorkflows ? "✅ Fully Automated" : "❌ No"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Receipt WhatsApp Integration</td>
            ${selectedCards.map(c => `<td>${c.id === "pemo" ? "🔥 Best-in-class WhatsApp Bot" : "✅ Mobile App Upload"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Primary Integrations</td>
            ${selectedCards.map(c => `<td class="text-small">${c.accountingIntegrations.join(", ")}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">Travel Benefits / Airport Lounge</td>
            ${selectedCards.map(c => `<td>${c.features.airportBenefits ? "✈️ Premium Lounge Access Included" : "❌ No lounge perks"}</td>`).join("")}
          </tr>
          <tr>
            <td class="sticky-col feature-row-label">SME Support Scoring</td>
            ${selectedCards.map(c => `
              <td>
                <div class="progress-bar-container">
                  <div class="progress-bar-fill" style="width: ${c.scores.spendManagement}%"></div>
                </div>
                <span class="score-percentage-text">${c.scores.spendManagement}/100</span>
              </td>
            `).join("")}
          </tr>
          <tr class="action-row">
            <td class="sticky-col feature-row-label">Actions</td>
            ${selectedCards.map(c => `
              <td>
                <button class="btn btn-primary btn-sm btn-full" style="margin-bottom: 5px" onclick="visitProviderAlert('${c.name}')">Apply Now</button>
                <button class="btn btn-secondary btn-sm btn-full" onclick="openDetailsModal('${c.id}')">Full Details</button>
              </td>
            `).join("")}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  matrixBody.innerHTML = tableHTML;
  document.getElementById("comparison-modal-backdrop").style.display = "flex";
  document.body.style.overflow = "hidden"; // disable background scrolling
};

window.closeComparisonMatrix = function() {
  document.getElementById("comparison-modal-backdrop").style.display = "none";
  document.body.style.overflow = ""; // enable scrolling
};

// Launch pre-configured direct head-to-head comparison
window.launchDirectCompare = function(id1, id2) {
  selectedCompareIds = [id1, id2];
  updateComparisonTray();
  launchComparisonMatrix();
};

// Individual Detailed Modal Generator
window.openDetailsModal = function(id) {
  const card = CARDS_DATABASE.find(c => c.id === id);
  if (!card) return;

  const modalBody = document.getElementById("details-modal-content");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="details-modal-grid">
      <div class="details-col-left">
        <div class="details-mockup-wrapper">
          <div class="card-mockup" style="background: ${card.colorGradient}; width: 100%; height: 180px;">
            <div class="card-mockup-chip"></div>
            <div class="card-mockup-brand">${card.name}</div>
            <div class="card-mockup-number">•••• •••• •••• 2026</div>
            <div class="card-mockup-footer">
              <span class="card-mockup-name">CORPORATE CARD</span>
              <span class="card-mockup-logo">VISA</span>
            </div>
          </div>
        </div>

        <div class="detailed-scores-list">
          <h4 class="details-section-title">Independent Editorial Scoring</h4>
          <div class="score-metric">
            <div class="score-metric-info">
              <span>Spend Controls</span>
              <span>${card.scores.spendManagement}/100</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${card.scores.spendManagement}%"></div></div>
          </div>
          <div class="score-metric">
            <div class="score-metric-info">
              <span>Rewards & Cashback</span>
              <span>${card.scores.rewards}/100</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${card.scores.rewards}%"></div></div>
          </div>
          <div class="score-metric">
            <div class="score-metric-info">
              <span>Expense Automation</span>
              <span>${card.scores.automation}/100</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${card.scores.automation}%"></div></div>
          </div>
          <div class="score-metric">
            <div class="score-metric-info">
              <span>Pricing & Platform Cost</span>
              <span>${card.scores.pricing}/100</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${card.scores.pricing}%"></div></div>
          </div>
          <div class="score-metric">
            <div class="score-metric-info">
              <span>Integrations Sync</span>
              <span>${card.scores.integrations}/100</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${card.scores.integrations}%"></div></div>
          </div>
        </div>
      </div>

      <div class="details-col-right">
        <div class="details-title-row">
          <h2 class="details-modal-title">${card.name} Corporate Card</h2>
          <span class="card-badge">${card.cardType}</span>
        </div>
        <p class="details-desc">${card.description}</p>

        <div class="detailed-highlights-grid">
          <div>
            <strong>Pricing:</strong> ${card.startingPrice}
          </div>
          <div>
            <strong>Eligibility:</strong> ${card.eligibility}
          </div>
          <div>
            <strong>Cashback:</strong> ${card.cashback}
          </div>
          <div>
            <strong>FX Markups:</strong> ${card.fxFees}
          </div>
        </div>

        <div class="pros-cons-container">
          <div class="pros-box">
            <h5 class="pro-con-title text-emerald">Pros</h5>
            <ul>
              ${card.pros.map(p => `<li>✓ ${p}</li>`).join("")}
            </ul>
          </div>
          <div class="cons-box">
            <h5 class="pro-con-title text-rose">Cons</h5>
            <ul>
              ${card.cons.map(c => `<li>✕ ${c}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="details-integrations-box">
          <strong>Official Integrations Supported:</strong>
          <div class="integrations-pill-wrap">
            ${card.accountingIntegrations.map(int => `<span class="int-pill">${int}</span>`).join("")}
          </div>
        </div>

        <div class="details-modal-actions">
          <a href="#apply" class="btn btn-primary btn-full" onclick="visitProviderAlert('${card.name}')">Visit Official Website</a>
          <button class="btn btn-secondary btn-full" onclick="closeDetailsModal()">Close Detail Panel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("details-modal-backdrop").style.display = "flex";
  document.body.style.overflow = "hidden";
};

window.closeDetailsModal = function() {
  document.getElementById("details-modal-backdrop").style.display = "none";
  document.body.style.overflow = "";
};

// Visit provider outbound simulation
window.visitProviderAlert = function(name) {
  alert(`Redirecting to ${name} UAE portal...\nThis link will contain our transparent referral architecture.`);
};

// Interactive Card Picker ("Which Corporate Card is Right for Me?" Tool)
let currentPickerStep = 1;
const totalPickerSteps = 5;
const pickerSelections = {
  businessType: "",
  industry: "",
  primarySpend: "",
  employeeCount: "",
  primaryPriority: ""
};

function initCardPicker() {
  renderPickerStep();
  
  // Bind CTA button to trigger matrix search from results
  const tryAgainBtn = document.getElementById("picker-retry-btn");
  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", () => {
      resetCardPicker();
    });
  }
}

function renderPickerStep() {
  const container = document.getElementById("picker-options-container");
  const stepTitle = document.getElementById("picker-step-title");
  const stepSubtitle = document.getElementById("picker-step-subtitle");
  const progressFill = document.getElementById("picker-progress-fill");
  const stepNumberText = document.getElementById("picker-step-number");
  
  if (!container || !stepTitle || !stepSubtitle || !progressFill || !stepNumberText) return;

  // Update visual progress
  const percent = (currentPickerStep / totalPickerSteps) * 100;
  progressFill.style.width = `${percent}%`;
  stepNumberText.textContent = `Question ${currentPickerStep} of ${totalPickerSteps}`;

  let optionsHTML = "";

  switch(currentPickerStep) {
    case 1:
      stepTitle.textContent = "What size is your business entity?";
      stepSubtitle.textContent = "We map you to the correct compliance bracket and funding requirements.";
      optionsHTML = `
        <button class="picker-opt-btn" onclick="selectPickerOption('businessType', 'Startup')">
          <span class="picker-opt-title">Startup / Venture-backed</span>
          <span class="picker-opt-desc">Rapidly scaling, focused on VC funding or high limits.</span>
        </button>
        <button class="picker-opt-btn" onclick="selectPickerOption('businessType', 'SME')">
          <span class="picker-opt-title">SME / Small-Medium Enterprise</span>
          <span class="picker-opt-desc">Steady cashflows, focused on local efficiency and tax compliance.</span>
        </button>
        <button class="picker-opt-btn" onclick="selectPickerOption('businessType', 'Enterprise')">
          <span class="picker-opt-title">Enterprise / Multi-national</span>
          <span class="picker-opt-desc">Large staff footprint, advanced ERP requirements and audit log needs.</span>
        </button>
      `;
      break;

    case 2:
      stepTitle.textContent = "Which industry best describes your company?";
      stepSubtitle.textContent = "Different providers offer premium perks tailored around industry spending loops.";
      optionsHTML = `
        <div class="picker-options-grid">
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Marketing')">Marketing / Agency</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Ecommerce')">E-commerce / Retail</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Technology')">SaaS & Technology</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Construction')">Construction / Real Estate</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Professional Services')">Consulting / Legal / Finance</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('industry', 'Travel')">Logistics & Travel Agency</button>
        </div>
      `;
      break;

    case 3:
      stepTitle.textContent = "Where does your company spend the most?";
      stepSubtitle.textContent = "Let's maximize your corporate cashback, loyalty points or airline miles.";
      optionsHTML = `
        <div class="picker-options-grid">
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'Advertising')">Online Ads (Meta, Google, LinkedIn)</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'Software')">SaaS Subscriptions & AWS</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'Travel')">Flights & Hotel Bookings</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'Employees')">Local Employee Expenses & Petty Cash</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'International')">Overseas Suppliers & Vendor Payments</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primarySpend', 'Fuel')">Logistics, Fuel & Fleet Cards</button>
        </div>
      `;
      break;

    case 4:
      stepTitle.textContent = "How many staff members require cards?";
      stepSubtitle.textContent = "Determines whether you need virtual cards or instant receipt workflows.";
      optionsHTML = `
        <button class="picker-opt-btn" onclick="selectPickerOption('employeeCount', '1-5')">
          <span class="picker-opt-title">1 - 5 Cards</span>
          <span class="picker-opt-desc">Basic controls, easy WhatsApp photo receipts.</span>
        </button>
        <button class="picker-opt-btn" onclick="selectPickerOption('employeeCount', '6-50')">
          <span class="picker-opt-title">6 - 50 Cards</span>
          <span class="picker-opt-desc">Department tracking, individual approvals required.</span>
        </button>
        <button class="picker-opt-btn" onclick="selectPickerOption('employeeCount', '51+')">
          <span class="picker-opt-title">51+ Active Cards</span>
          <span class="picker-opt-desc">Granular procurement cards, heavy automated spend controls.</span>
        </button>
      `;
      break;

    case 5:
      stepTitle.textContent = "What is the single most important factor for you?";
      stepSubtitle.textContent = "We will prioritize corporate matches optimized around this metric.";
      optionsHTML = `
        <div class="picker-options-grid">
          <button class="picker-opt-btn" onclick="selectPickerOption('primaryPriority', 'Rewards')">Earning Cashback & Points</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primaryPriority', 'Expense Controls')">Automating Employee Expenses</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primaryPriority', 'Zero Fees')">No Platform Fees / Low Cost</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primaryPriority', 'Integrations')">Syncing ERP & QuickBooks</button>
          <button class="picker-opt-btn" onclick="selectPickerOption('primaryPriority', 'Travel')">Global Flight & Lounge Perks</button>
        </div>
      `;
      break;
  }

  container.innerHTML = optionsHTML;
}

window.selectPickerOption = function(key, val) {
  pickerSelections[key] = val;
  if (currentPickerStep < totalPickerSteps) {
    currentPickerStep++;
    renderPickerStep();
  } else {
    // End of questionnaire: show recommendations!
    renderPickerResults();
  }
};

function renderPickerResults() {
  const activeView = document.getElementById("picker-question-view");
  const resultsView = document.getElementById("picker-results-view");
  const resultsList = document.getElementById("picker-recommended-cards-list");
  
  if (!activeView || !resultsView || !resultsList) return;

  activeView.style.display = "none";
  resultsView.style.display = "block";

  // Score matching logic
  const matches = CARDS_DATABASE.map(card => {
    let matchScore = 0;
    
    // Business size matching
    if (pickerSelections.businessType === "Startup") {
      if (card.tags.includes("Startups") || card.tags.includes("Venture-Backed")) matchScore += 25;
    } else if (pickerSelections.businessType === "SME") {
      if (card.tags.includes("SMEs")) matchScore += 25;
    } else if (pickerSelections.businessType === "Enterprise") {
      if (card.tags.includes("Enterprise") || card.startingPrice.includes("99")) matchScore += 20;
    }

    // Priority matching
    if (pickerSelections.primaryPriority === "Rewards") {
      matchScore += (card.scores.rewards * 0.3);
    } else if (pickerSelections.primaryPriority === "Expense Controls") {
      matchScore += (card.scores.spendManagement * 0.3);
    } else if (pickerSelections.primaryPriority === "Zero Fees") {
      matchScore += (card.scores.pricing * 0.35);
    } else if (pickerSelections.primaryPriority === "Integrations") {
      matchScore += (card.scores.integrations * 0.3);
    } else if (pickerSelections.primaryPriority === "Travel") {
      matchScore += (card.scores.travel * 0.35);
    }

    // Spending matching
    if (pickerSelections.primarySpend === "Advertising") {
      if (card.id === "alaan" || card.id === "pluto") matchScore += 20;
    } else if (pickerSelections.primarySpend === "Travel") {
      if (card.features.travelBenefits || card.id === "brex") matchScore += 20;
    } else if (pickerSelections.primarySpend === "Employees") {
      if (card.features.expenseManagement) matchScore += 15;
    } else if (pickerSelections.primarySpend === "International") {
      if (card.fxFees.includes("Zero") || card.fxFees.includes("No foreign")) matchScore += 20;
    }

    // Rounding matches
    const roundedScore = Math.min(100, Math.round(50 + matchScore));

    return { card, matchScore: roundedScore };
  });

  // Sort descending by matchScore
  matches.sort((a, b) => b.matchScore - a.matchScore);

  // Render top 3 recommendations
  resultsList.innerHTML = matches.slice(0, 3).map((match, idx) => {
    const c = match.card;
    return `
      <div class="match-result-item">
        <div class="match-rank-badge">#${idx + 1} Best Match</div>
        <div class="match-result-header">
          <div class="match-result-brand">
            <span class="match-logo-initial" style="background-color: ${c.logoColor}">${c.name[0]}</span>
            <div>
              <h4>${c.name}</h4>
              <span class="text-xs text-muted">Editorial rating: ★ ${c.rating}</span>
            </div>
          </div>
          <div class="match-percentage">${match.matchScore}% Match</div>
        </div>

        <p class="match-bestfor-text">${c.bestFor}</p>

        <div class="match-details-grid">
          <div><strong>Monthly Fee:</strong> ${c.startingPrice}</div>
          <div><strong>Cashback:</strong> ${c.cashback}</div>
          <div><strong>Key Sync:</strong> ${c.accountingIntegrations[0]} & ${c.accountingIntegrations[1] || "Others"}</div>
        </div>

        <div class="match-actions">
          <button class="btn btn-primary btn-sm btn-full" onclick="visitProviderAlert('${c.name}')">Apply via Kredit UAE</button>
          <button class="btn btn-secondary btn-sm btn-full" onclick="openDetailsModal('${c.id}')">View Product Specs</button>
        </div>
      </div>
    `;
  }).join("");
}

window.resetCardPicker = function() {
  currentPickerStep = 1;
  pickerSelections.businessType = "";
  pickerSelections.industry = "";
  pickerSelections.primarySpend = "";
  pickerSelections.employeeCount = "";
  pickerSelections.primaryPriority = "";

  document.getElementById("picker-question-view").style.display = "block";
  document.getElementById("picker-results-view").style.display = "none";
  renderPickerStep();
};


// Interactive Rewards Calculator Module
function initRewardsCalculator() {
  const rangeInput = document.getElementById("rewards-spend-range");
  const numInput = document.getElementById("rewards-spend-num");

  if (!rangeInput || !numInput) return;

  // Sync inputs
  rangeInput.addEventListener("input", (e) => {
    numInput.value = e.target.value;
    calculateEstimatedRewards(parseFloat(e.target.value));
  });

  numInput.addEventListener("input", (e) => {
    let val = parseFloat(e.target.value) || 0;
    if (val > 1000000) val = 1000000;
    rangeInput.value = val;
    calculateEstimatedRewards(val);
  });

  // Categories selectors sync
  const categoriesSliders = document.querySelectorAll(".calc-cat-slider");
  categoriesSliders.forEach(slider => {
    slider.addEventListener("input", () => {
      // Re-sum categories into total
      let total = 0;
      categoriesSliders.forEach(s => {
        total += parseFloat(s.value) || 0;
      });
      numInput.value = total;
      rangeInput.value = total;
      calculateEstimatedRewards(total);
    });
  });

  // Run initial default calculation
  calculateEstimatedRewards(150000);
}

function calculateEstimatedRewards(monthlySpend) {
  const displayCashbackValue = document.getElementById("calc-est-cashback");
  const displayPointsValue = document.getElementById("calc-est-points");
  const displayMilesValue = document.getElementById("calc-est-miles");
  const topProviderName = document.getElementById("calc-best-rewards-provider");
  
  if (!displayCashbackValue || !displayPointsValue || !displayMilesValue || !topProviderName) return;

  // Let's calculate Alaan's 1.5% cashback average, Qashio points index, Brex miles multiplier
  const annualSpend = monthlySpend * 12;
  const cashbackEstimated = annualSpend * 0.015; // 1.5% standard
  const pointsEstimated = annualSpend * 1.25; // 1.25 points per Dirham
  const milesEstimated = annualSpend / 4; // 1 mile per 4 Dirham spent average

  // Animate numbers smoothly
  animateNumberDisplay(displayCashbackValue, cashbackEstimated, "AED ", "", 0);
  animateNumberDisplay(displayPointsValue, pointsEstimated, "", " pts", 0);
  animateNumberDisplay(displayMilesValue, milesEstimated, "", " miles", 0);

  // Set recommendation text based on size
  if (monthlySpend >= 300000) {
    topProviderName.textContent = "Brex (Global Miles) / Ramp (No FX fees)";
  } else if (monthlySpend >= 50000) {
    topProviderName.textContent = "Alaan (Up to 2% Advertising Cashback)";
  } else {
    topProviderName.textContent = "Qashio SME / Pemo Expense Card";
  }
}


// Dynamic Cost Calculator Module
function initCostCalculator() {
  const cardsNeeded = document.getElementById("cost-cards-needed");
  const platformFeeOutput = document.getElementById("cost-platform-output");
  const fxFeesOutput = document.getElementById("cost-fx-output");
  const totalCostOutput = document.getElementById("cost-total-output");

  if (!cardsNeeded || !platformFeeOutput || !fxFeesOutput || !totalCostOutput) return;

  const updateCalculations = () => {
    const qty = parseInt(cardsNeeded.value) || 1;
    const isIntlChecked = document.getElementById("cost-intl-payments").checked;

    // Platform base calculation
    const baseFee = qty * 15; // 15 AED per physical employee card average
    const fXMarkup = isIntlChecked ? 450 : 50; // simulated foreign exchange rates on active overseas spend

    const annualTotal = (baseFee * 12) + fXMarkup;

    platformFeeOutput.textContent = `AED ${baseFee * 12}/year`;
    fxFeesOutput.textContent = `AED ${fXMarkup}/year`;
    totalCostOutput.textContent = `AED ${annualTotal}/year`;
  };

  cardsNeeded.addEventListener("input", updateCalculations);
  document.getElementById("cost-intl-payments").addEventListener("change", updateCalculations);

  updateCalculations();
}

// Helpers
function animateNumberDisplay(element, targetValue, prefix = "", suffix = "", decimals = 0) {
  let start = 0;
  const duration = 200; // fast animation
  const stepTime = 15;
  const steps = duration / stepTime;
  const increment = targetValue / steps;
  let currentStep = 0;

  const timer = setInterval(() => {
    currentStep++;
    start += increment;
    if (currentStep >= steps) {
      clearInterval(timer);
      element.textContent = prefix + targetValue.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    } else {
      element.textContent = prefix + Math.round(start).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    }
  }, stepTime);
}

// Pre-configured comparison page triggers
function initComparisonsDropdowns() {
  const compSelect = document.getElementById("quick-head-to-head-select");
  if (!compSelect) return;

  compSelect.addEventListener("change", (e) => {
    const value = e.target.value;
    if (!value) return;

    const parts = value.split("-vs-");
    if (parts.length === 2) {
      launchDirectCompare(parts[0], parts[1]);
    }
  });
}

function setupEventListeners() {
  // Mobile navigation drawer toggle
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("main-nav-menu");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });
  }
}
