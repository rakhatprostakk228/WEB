const paragraph = document.getElementById('paragraph');
let paragraphText = paragraph.innerHTML;

function highlightLongWords() {
    const words = paragraphText.split(' ');
    const updatedWords = words.map(word => {
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    });
    paragraph.innerHTML = updatedWords.join(' ');
}

function addSourceLink() {
    const sourceLink = document.createElement('a');
    sourceLink.href = "https://www.google.com/search?q=hahaha&oq=hahaha&gs_lcrp=EgZjaHJvbWUqDwgAEAAYQxjjAhiABBiKBTIPCAAQABhDGOMCGIAEGIoFMgwIARAuGEMYgAQYigUyDAgCEAAYQxiABBiKBTIHCAMQLhiABDIHCAQQABiABDIHCAUQLhiABDIHCAYQABiABDIMCAcQABhDGIAEGIoFMgcICBAAGIAEMgwICRAAGEMYgAQYigXSAQgxMDM4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";
    sourceLink.textContent = "Source: Read the full article here";
    paragraph.insertAdjacentElement('afterend', sourceLink);
}

function splitSentences() {
    paragraph.innerHTML = paragraph.innerHTML
        .replace(/([.?!])\s*/g, '$1<br><br>');
}

function countWords() {
    const words = paragraph.innerText.split(' ').filter(word => word.length > 0);
    const wordCountDisplay = document.getElementById('wordCount');
    wordCountDisplay.textContent = `Word count: ${words.length}`;
}

function replaceSymbols() {
    paragraph.innerHTML = paragraph.innerHTML
        .replace(/\?/g, '🤔')
        .replace(/!/g, '😲');
}

highlightLongWords();
addSourceLink();
splitSentences();
countWords();
replaceSymbols();