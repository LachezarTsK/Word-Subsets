
#include <array>
#include <vector>
using namespace std;

class Solution {
    
    inline static const int ALPABET_SIZE = 26;
    array<int, ALPABET_SIZE> maxFrequencySubsets{};

public:
    vector<string> wordSubsets(vector<string>& candidatesForUniversal, vector<string>& subsets) {
        initializeArrayMaxFrequencySubsets(subsets);
        return findUniversalStrings(candidatesForUniversal);
    }

private:
    vector<string> findUniversalStrings(const vector<string>& candidatesForUniversal) {
        vector<string> universalStrings;
        for (const auto& candidate : candidatesForUniversal) {
            vector<int> frequencyCandidate = createArrayFrequency(candidate);
            if (isUniversalString(frequencyCandidate)) {
                universalStrings.push_back(candidate);
            }
        }
        return universalStrings;
    }

    bool isUniversalString(const vector<int>& frequencyCandidate) {
        for (int i = 0; i < ALPABET_SIZE; ++i) {
            if (maxFrequencySubsets[i] > frequencyCandidate[i]) {
                return false;
            }
        }
        return true;
    }

    void updateArrayMaxFrequencySubsets(const vector<int>& frequency) {
        for (int i = 0; i < ALPABET_SIZE; ++i) {
            maxFrequencySubsets[i] = max(maxFrequencySubsets[i], frequency[i]);
        }
    }

    void initializeArrayMaxFrequencySubsets(const vector<string>& subsets) {
        for (const auto& word : subsets) {
            vector<int> frequency = createArrayFrequency(word);
            updateArrayMaxFrequencySubsets(frequency);
        }
    }

    vector<int> createArrayFrequency(const string& word) {
        vector<int> frequency(ALPABET_SIZE);
        for (const auto& letter : word) {
            ++frequency[letter - 'a'];
        }
        return frequency;
    }
};
