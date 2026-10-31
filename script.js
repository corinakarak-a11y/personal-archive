/*
    ARCHIVE WORK LISTING
    Edit the work details below as the fic develops.
*/

const works = [
    {
        id: "whiskey-over-coffee",
        title: "Whiskey Over Coffee",
        href: "./work.html",
        rating: "Teen And Up Audiences",
        warnings: "Creator Chose Not To Use Archive Warnings",
        category: "F/F",
        fandom: "Fandom: The Last of Us",
        relationship: "Ellie Williams/Dina",
        characters: ["Ellie Williams", "Dina"],

        additionalTags: [
            "Coffee Shop AU",
            "Love at First Sight",
            "Slow Burn",
            "Fluff and Angst",
            "Romantic Fluff",
            "Pining",
            "Falling in Love",
            "Feelings",
            "Oppossites Attract",
            "Ellie Williams Has Feelings",
            "Dina Is a Menace (Affectionate)"
        ],

        language: "English",
        totalChapters: null,

        chapters: [
            {
                title: "Chapter 1",
                text: ""
            }
        ],

        summary: "Ellie Williams was never one for routine. She couldn't stay in one place for too long before restlessness began to creep under her skin, something restless and insistent urging her to leave before she could get too comfortable. Then she met a girl with whiskey-coloured eyes who smelled of coffee and caramel, and suddenly, the thought of staying didn't seem quite so unbearable.",

        stats: {
            comments: 24,
            kudos: 186,
            bookmarks: 37,
            hits: 1204
        },

        status: "In Progress"
    }
];

function countWords(text) {
    const trimmed = (text || "").trim();

    if (!trimmed) return 0;

    return trimmed.split(/\s+/).filter(Boolean).length;
}

function getWordCount(work) {
    return work.chapters.reduce(
        (total, chapter) => total + countWords(chapter.text),
        0
    );
}

function getChapterCount(work) {
    return work.chapters.length;
}

function makeTag(text) {
    const tag = document.createElement("span");
    tag.textContent = text;
    return tag;
}
function createWorkCard(work) {
    const article = document.createElement("article");
    article.className = "work";
    // AO3-INSPIRED WORK SYMBOLS
const symbols = document.createElement("div");
symbols.className = "work-symbols";

// Rating symbol
let ratingLetter = "G";
let ratingClass = "rating-general";

if (work.rating === "Teen And Up Audiences") {
    ratingLetter = "T";
    ratingClass = "rating-teen";
} else if (work.rating === "Mature") {
    ratingLetter = "M";
    ratingClass = "rating-mature";
} else if (work.rating === "Explicit") {
    ratingLetter = "E";
    ratingClass = "rating-explicit";
} else if (work.rating === "Not Rated") {
    ratingLetter = "?";
    ratingClass = "rating-unrated";
}

const ratingSymbol = document.createElement("span");
ratingSymbol.className = `archive-symbol ${ratingClass}`;
ratingSymbol.textContent = ratingLetter;
ratingSymbol.title = work.rating;
ratingSymbol.setAttribute("aria-label", `Rating: ${work.rating}`);
symbols.appendChild(ratingSymbol);


// Relationship symbol
let relationshipSymbol = "○";
let relationshipClass = "relationship-gen";
let relationshipLabel = "No romantic or sexual relationships";

if (work.category === "F/F") {
    relationshipSymbol = "♀";
    relationshipClass = "relationship-ff";
    relationshipLabel = "F/F relationship";
} else if (work.category === "F/M") {
    relationshipSymbol = "♀♂";
    relationshipClass = "relationship-fm";
    relationshipLabel = "F/M relationship";
} else if (work.category === "M/M") {
    relationshipSymbol = "♂";
    relationshipClass = "relationship-mm";
    relationshipLabel = "M/M relationship";
} else if (work.category === "Multi") {
    relationshipSymbol = "✣";
    relationshipClass = "relationship-multi";
    relationshipLabel = "Multiple relationship types";
} else if (work.category === "Other") {
    relationshipSymbol = "⚒";
    relationshipClass = "relationship-other";
    relationshipLabel = "Other relationship category";
}

const relationship = document.createElement("span");
relationship.className = `archive-symbol ${relationshipClass}`;
relationship.textContent = relationshipSymbol;
relationship.title = relationshipLabel;
relationship.setAttribute("aria-label", relationshipLabel);
symbols.appendChild(relationship);


// Archive warning symbol
const warningSymbol = document.createElement("span");

if (
    work.warnings === "Creator Chose Not To Use Archive Warnings"
) {
    warningSymbol.className = "archive-symbol warning-chose";
    warningSymbol.textContent = "!?";
    warningSymbol.title = "Creator Chose Not To Use Archive Warnings";
    warningSymbol.setAttribute(
        "aria-label",
        "Creator Chose Not To Use Archive Warnings"
    );
} else if (
    work.warnings === "No Archive Warnings Apply"
) {
    warningSymbol.className = "archive-symbol warning-none";
    warningSymbol.textContent = "✓";
    warningSymbol.title = "No Archive Warnings Apply";
    warningSymbol.setAttribute(
        "aria-label",
        "No Archive Warnings Apply"
    );
} else {
    warningSymbol.className = "archive-symbol warning-apply";
    warningSymbol.textContent = "!";
    warningSymbol.title = "Archive Warnings Apply";
    warningSymbol.setAttribute(
        "aria-label",
        "Archive Warnings Apply"
    );
}

symbols.appendChild(warningSymbol);


// Completion status symbol
const statusSymbol = document.createElement("span");

if (work.status === "Complete") {
    statusSymbol.className = "archive-symbol status-complete";
    statusSymbol.textContent = "✓";
    statusSymbol.title = "Work Complete";
    statusSymbol.setAttribute("aria-label", "Work Complete");
} else {
    statusSymbol.className = "archive-symbol status-progress";
    statusSymbol.textContent = "⊘";
    statusSymbol.title = "Work in Progress";
    statusSymbol.setAttribute("aria-label", "Work in Progress");
}

symbols.appendChild(statusSymbol);

// Place symbols at the top-left of the work listing
article.appendChild(symbols);

    const title = document.createElement("h3");
    const titleLink = document.createElement("a");

    titleLink.href = work.href;
    titleLink.textContent = work.title;

    title.appendChild(titleLink);
    article.appendChild(title);

    const tags = document.createElement("div");
    tags.className = "tags";

    [
        work.rating,
        work.warnings,
        work.category,
        work.relationship,
        ...work.additionalTags
    ].forEach(tag => tags.appendChild(makeTag(tag)));

    article.appendChild(tags);

    const fandom = document.createElement("p");
    fandom.className = "fandom";
    fandom.textContent = work.fandom;
    article.appendChild(fandom);

    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = work.summary;
    article.appendChild(summary);

    const language = document.createElement("p");
    language.className = "stats";
    language.textContent = `Language: ${work.language}`;
    article.appendChild(language);

    const chapterCount = work.totalChapters === null
        ? `${getChapterCount(work)}/?`
        : `${getChapterCount(work)}/${work.totalChapters}`;

    const stats = document.createElement("p");
    stats.className = "stats";

    stats.textContent =
        `Chapters: ${chapterCount} · ` +
        `Words: ${getWordCount(work).toLocaleString("en-AU")} · ` +
        work.status;

    article.appendChild(stats);

    const engagement = document.createElement("p");
    engagement.className = "stats";

    engagement.textContent =
        `Comments: ${work.stats.comments.toLocaleString("en-AU")} · ` +
        `Kudos: ${work.stats.kudos.toLocaleString("en-AU")} · ` +
        `Bookmarks: ${work.stats.bookmarks.toLocaleString("en-AU")} · ` +
        `Hits: ${work.stats.hits.toLocaleString("en-AU")}`;

    article.appendChild(engagement);

    return article;
}

function renderWorks(filteredWorks = works) {
    const workList = document.getElementById("work-list");
    const workCount = document.getElementById("work-count");
    const noResults = document.getElementById("no-results");

    workList.replaceChildren();

    filteredWorks.forEach(work => {
        workList.appendChild(createWorkCard(work));
    });

    workCount.textContent =
        `${filteredWorks.length} ${filteredWorks.length === 1 ? "work" : "works"}`;

    noResults.hidden = filteredWorks.length !== 0;
}

function setupSearch() {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const query = input.value.trim().toLowerCase();

        const matchingWorks = works.filter(work => {
            const searchableText = [
                work.title,
                work.fandom,
                work.relationship,
                work.summary,
                work.rating,
                work.category,
                work.warnings,
                ...work.characters,
                ...work.additionalTags
            ].join(" ").toLowerCase();

            return searchableText.includes(query);
        });

        renderWorks(matchingWorks);

        document.getElementById("works").scrollIntoView({
            behavior: "smooth"
        });
    });

    input.addEventListener("input", () => {
        if (input.value.trim() === "") {
            renderWorks(works);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderWorks();
    setupSearch();
});

