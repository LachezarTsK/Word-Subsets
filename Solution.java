
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int ALPABET_SIZE = 26;
    private final int[] maxFrequencySubsets = new int[ALPABET_SIZE];

    public List<String> wordSubsets(String[] candidatesForUniversal, String[] subsets) {
        initializeArrayMaxFrequencySubsets(subsets);
        return findUniversalStrings(candidatesForUniversal);
    }

    private List<String> findUniversalStrings(String[] candidatesForUniversal) {
        List<String> universalStrings = new ArrayList<>();
        for (String candidate : candidatesForUniversal) {
            int[] frequencyCandidate = createArrayFrequency(candidate);
            if (isUniversalString(frequencyCandidate)) {
                universalStrings.add(candidate);
            }
        }
        return universalStrings;
    }

    private boolean isUniversalString(int[] frequencyCandidate) {
        for (int i = 0; i < ALPABET_SIZE; ++i) {
            if (maxFrequencySubsets[i] > frequencyCandidate[i]) {
                return false;
            }
        }
        return true;
    }

    private void updateArrayMaxFrequencySubsets(int[] frequency) {
        for (int i = 0; i < ALPABET_SIZE; ++i) {
            maxFrequencySubsets[i] = Math.max(maxFrequencySubsets[i], frequency[i]);
        }
    }

    private void initializeArrayMaxFrequencySubsets(String[] subsets) {
        for (String word : subsets) {
            int[] frequency = createArrayFrequency(word);
            updateArrayMaxFrequencySubsets(frequency);
        }
    }

    private int[] createArrayFrequency(String word) {
        int[] frequency = new int[ALPABET_SIZE];
        for (int i = 0; i < word.length(); ++i) {
            ++frequency[word.charAt(i) - 'a'];
        }
        return frequency;
    }
}
