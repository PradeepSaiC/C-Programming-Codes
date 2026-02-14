// State
let topics = topicData; // From data.js
let currentTopicIndex = -1;
let currentProgramIndex = -1;

// DOM Elements
const homeView = document.getElementById('home-view');
const programListView = document.getElementById('program-list-view');
const detailView = document.getElementById('detail-view');

const topicListEl = document.getElementById('topic-list');
const programListEl = document.getElementById('program-list');
const contentArea = document.getElementById('content-area');

const topicTitle = document.getElementById('topic-title');
const programTitle = document.getElementById('program-title');

const backToHomeBtn = document.getElementById('back-to-home-btn');
const backToListBtn = document.getElementById('back-to-list-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initialization
function init() {
    renderTopicList();
    setupEventListeners();

    // Check Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        updateTelegramBackButton();
    }
}

// 1. Render Topics (Home)
function renderTopicList() {
    topicListEl.innerHTML = '';
    topics.forEach((topic, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <span class="arrow">→</span>
        `;
        card.onclick = () => openTopic(index);
        topicListEl.appendChild(card);
    });
}

// 2. Open Topic (Programs List)
function openTopic(index) {
    currentTopicIndex = index;
    const topic = topics[index];

    topicTitle.textContent = topic.title;
    renderProgramList(topic.programs);

    switchView(programListView);
}

function renderProgramList(programs) {
    programListEl.innerHTML = '';
    programs.forEach((prog, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card'; // Reuse style
        card.innerHTML = `
            <h3>${prog.title}</h3>
            <span class="arrow">→</span>
        `;
        card.onclick = () => openProgram(index);
        programListEl.appendChild(card);
    });
}

// 3. Open Program (Detail)
function openProgram(index) {
    currentProgramIndex = index;
    renderDetailView();
    updateNavButtons();

    switchView(detailView);
}

function renderDetailView() {
    const topic = topics[currentTopicIndex];
    if (!topic) return;
    const prog = topic.programs[currentProgramIndex];
    if (!prog) return;

    programTitle.textContent = prog.title;
    contentArea.innerHTML = '';

    prog.blocks.forEach((block, idx) => {
        const container = document.createElement('div');
        container.className = 'block-container';

        // Highlight logic
        const highlightedCode = highlightCode(block.code); // Defined in data.js

        const blockId = `code-${idx}`;

        // Safely encode code for button
        const safeCode = encryptCode(block.code);

        container.innerHTML = `
            <div class="code-wrapper">
                <button class="copy-btn" onclick="copyCode(this, '${safeCode}')">
                    Copy
                </button>
                <pre><code id="${blockId}">${highlightedCode}</code></pre>
            </div>
            <div class="explanation">
                ${block.explanation}
            </div>
        `;
        contentArea.appendChild(container);
    });
}

// Navigation Logic
function goHome() {
    currentTopicIndex = -1;
    currentProgramIndex = -1;
    switchView(homeView);
}

function goTopicList() {
    currentProgramIndex = -1;
    switchView(programListView);
}

function nextProgram() {
    const topic = topics[currentTopicIndex];
    if (currentProgramIndex < topic.programs.length - 1) {
        openProgram(currentProgramIndex + 1);
    }
}

function prevProgram() {
    if (currentProgramIndex > 0) {
        openProgram(currentProgramIndex - 1);
    }
}

function updateNavButtons() {
    const topic = topics[currentTopicIndex];
    prevBtn.disabled = currentProgramIndex === 0;
    nextBtn.disabled = currentProgramIndex === topic.programs.length - 1;
}

// Helpers
function switchView(viewElement) {
    // Hide all
    homeView.classList.remove('active');
    programListView.classList.remove('active');
    detailView.classList.remove('active');

    // Show one
    viewElement.classList.add('active');
    window.scrollTo(0, 0);

    updateTelegramBackButton();
}

// Copy Functionality
window.copyCode = function (btn, encodedCode) {
    // FIX: Use decodeURIComponent to handle all chars correctly
    const code = decodeURIComponent(encodedCode);
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#f7df1e';
        btn.style.color = '#000';

        setTimeout(() => {
            btn.textContent = originalText; // Reset to "Copy" vs originalText which might include whitespace
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    });
};

function encryptCode(str) {
    return encodeURIComponent(str);
}

// Event Listeners
function setupEventListeners() {
    backToHomeBtn.addEventListener('click', goHome);
    backToListBtn.addEventListener('click', goTopicList);

    prevBtn.addEventListener('click', prevProgram);
    nextBtn.addEventListener('click', nextProgram);

    // Telegram Back Button Logic
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.BackButton.onClick(() => {
            if (detailView.classList.contains('active')) {
                goTopicList();
            } else if (programListView.classList.contains('active')) {
                goHome();
            }
        });
    }
}

function updateTelegramBackButton() {
    if (window.Telegram && window.Telegram.WebApp) {
        const bb = window.Telegram.WebApp.BackButton;
        if (homeView.classList.contains('active')) {
            bb.hide();
        } else {
            bb.show();
        }
    }
}

init();
