export const splitWordsToSpans = (paragraph) => {
  if (!paragraph) return [];

  const words: string[] = paragraph.textContent?.split(" ") || []; // split text into words
  paragraph.textContent = ""; // clear original text

  const spans: HTMLSpanElement[] = words.map((word) => {
    const span = document.createElement("span");
    span.textContent = String(word) + " "; // add space after word
    span.style.opacity = "0"; // initial style for animation
    paragraph.appendChild(span);
    return span;
  });

  return spans;
};