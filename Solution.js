
/**
 * @param {string[]} candidatesForUniversal
 * @param {string[]} subsets
 * @return {string[]}
 */
var wordSubsets = function (candidatesForUniversal, subsets) {
    this.ALPABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;
    this.maxFrequencySubsets = new Array(ALPABET_SIZE).fill(0);
    initializeArrayMaxFrequencySubsets(subsets);
    return findUniversalStrings(candidatesForUniversal);
};

/**
 * @param {string[]} candidatesForUniversal
 * @return {string[]}
 */
function findUniversalStrings(candidatesForUniversal) {
    const universalStrings = [];
    for (let candidate of candidatesForUniversal) {
        const frequencyCandidate = createArrayFrequency(candidate);
        if (isUniversalString(frequencyCandidate)) {
            universalStrings.push(candidate);
        }
    }
    return universalStrings;
}

/**
 * @param {number[]} frequencyCandidate
 * @return {boolean}
 */
function isUniversalString(frequencyCandidate) {
    for (let i = 0; i < this.ALPABET_SIZE; ++i) {
        if (this.maxFrequencySubsets[i] > frequencyCandidate[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {number[]} frequency
 * @return {void}
 */
function updateArrayMaxFrequencySubsets(frequency) {
    for (let i = 0; i < this.ALPABET_SIZE; ++i) {
        this.maxFrequencySubsets[i] = Math.max(this.maxFrequencySubsets[i], frequency[i]);
    }
}

/**
 * @param {string[]} subsets
 * @return {void}
 */
function initializeArrayMaxFrequencySubsets(subsets) {
    for (let word of subsets) {
        const frequency = createArrayFrequency(word);
        updateArrayMaxFrequencySubsets(frequency);
    }
}

/**
 * @param {string} word
 * @return {number[]}
 */
function createArrayFrequency(word) {
    const frequency = new Array(this.ALPABET_SIZE).fill(0);
    for (let i = 0; i < word.length; ++i) {
        ++frequency[word.codePointAt(i) - this.ASCII_SMALL_CASE_A];
    }
    return frequency;
}
