const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
