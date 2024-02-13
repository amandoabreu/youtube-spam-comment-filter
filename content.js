let numCommentsRemoved = 0;
function removeCommentsWithWords(words) {
    const comments = document.querySelectorAll('ytd-comment-thread-renderer');
    comments.forEach(comment => {
        const commentText = comment.querySelector('#comment-content').innerText.toLowerCase();
        const usernameElement = comment.querySelector('#header-author #author-text');
        const username = usernameElement ? usernameElement.textContent.trim() : "Unknown User";
        words.forEach(word => {
            if (commentText.includes(word.toLowerCase())) {
                comment.style.display = 'none';
                console.log(`Removed comment by ${username}`); // Limiting comment text to 50 chars for brevity
                numCommentsRemoved++;
            }
        });
    });
}

const forbiddenWords = [
    'financial advisor',
    'personal finances',
    'financial independence',
    'trader',
    'my investment decisions',
    'building wealth',
    'work with advisors',
    'She goes by',
    'Do you mind sharing info on the adviser',
    'licensed advisor'
];
removeCommentsWithWords(forbiddenWords);

// Observe the page for new comments (e.g., when scrolling)
const observer = new MutationObserver(() => {
    removeCommentsWithWords(forbiddenWords);
});

observer.observe(document, { childList: true, subtree: true });
