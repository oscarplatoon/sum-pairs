from sum_pairs import sum_pairs

import unittest

class TestSumPairs(unittest.TestCase):

    def test_type(self):
        self.assertEqual(type(sum_pairs([1,2], 3)), list)

    def test_first_entry(self):
        self.assertEqual(type(sum_pairs([1,2], 3)[0]), list)

    def test_no_pair(self):
        self.assertEqual(sum_pairs([1,3], 2), 'unable to find pairs')
    
    def test_correct1(self):
        self.assertEqual(sum_pairs([1,2,3,4,5], 9), [[4, 5]])

    def test_correct2(self):
        self.assertEqual(sum_pairs([1,2,3,4,5], 7), [[2, 5], [3, 4]])
    



if __name__ == '__main__':
    unittest.main()


# sum_pairs([1,2,3,4,5], 9) # [[4,5]]
# sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
# sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'