let numCommentsRemoved = 0;
function removeCommentsWithWords(words) {
    const comments = document.querySelectorAll('ytd-comment-thread-renderer');
    comments.forEach(comment => {
        const commentText = comment.innerText.toLowerCase();
        words.forEach(word => {
            if (commentText.includes(word.toLowerCase())) {
                comment.style.display = 'none';
                console.log("Removed comment: "+commentText);
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
    'Building wealth'
];
removeCommentsWithWords(forbiddenWords);

// Observe the page for new comments (e.g., when scrolling)
const observer = new MutationObserver(() => {
    removeCommentsWithWords(forbiddenWords);
});

observer.observe(document, { childList: true, subtree: true });
