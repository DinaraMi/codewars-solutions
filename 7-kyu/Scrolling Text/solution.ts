function scrollingText(text: string) {
    text = text.toUpperCase();
    return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}
