import unittest
from sum_pairs import sum_pairs

# write your specs here!
class SumPairsTestCase(unittest.TestCase):

    def test_returns_list(self):
        "do i need this"
        self.assertEqual(type(sum_pairs([1,2,3,4,5], 9)), list)

    def test_returns_four_five(self):
        "test if necessary"
        self.assertEqual(sum_pairs([1,2,3,4,5], 9), [[4,5]])
    
    def test_returns_two_pair(self):
        "test if necessary"
        self.assertEqual(sum_pairs([1,2,3,4,5], 7), [[2,5], [3,4]])
    
    def test_returns_no_pairs(self):
        "test if necessary"
        self.assertEqual(sum_pairs([3, 1, 5, 8, 2], 27), 'unable to find pairs')

