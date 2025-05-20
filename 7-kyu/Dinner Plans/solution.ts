function commonGround(s1: string, s2: string) {
    const words1 = s1.split(' ').sort((a,b) => a - b)
    const words2 = s2.split(' ').sort((a, b) => a - b)
    
    let i = 0, j = 0
    const common = new Set<string>();

    while (i < words1.length && j < words2.length) {
        if (words1[i] === words2[j]) {
            common.add(words1[i])
            j++
        } else if (words1[i] < words2[j]) {
            i++
        } else {
            j++
        }
    }

    const words2Original = s2.split(" ");
    const result: string[] = [];
    for (const word of words2Original) {
        if (common.has(word)) result.push(word);
    }

    return result.length > 0 ? result.join(" ") : "death";
}

function commonGround2(s1: string, s2: string): string {
    const set1 = new Set(s1.split(" "));
    const words2 = s2.split(" ");
    const result: string[] = [];
    const seen = new Set<string>();

    for (const word of words2) {
        if (set1.has(word) && !seen.has(word)) {
            result.push(word);
            seen.add(word);
        }
    }

    return result.length > 0 ? result.join(" ") : "death";
}

// DESCRIPTION:

// Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.

// The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to.Thus, the only thing left to do is find what the common ground of what they are saying is.

// Compare the proposals with the following function:

//     function commonGround(s1, s2)
// The parameters s1 and s2 are the strings representing what each of the generals said.You should output a string containing the words in s1 that also occur in s2.

// Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

// If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")