import unittest

from sum_pairs import sum_pairs

class sumPairsTestCase(unittest.TestCase):

    def test_returns_a_list(self):
        """
        when sum_pairs is called it returns a list
        """
        self.assertEqual(type(sum_pairs([1,2,3,4,5], 9)), list)

    def test_returns_list_of_pairs(self):
        """
        when you call sum_pairs
        sum_pairs([1,2,3,4,5], 9)
        * return [[4,5]]
        sum_pairs([1,2,3,4,5], 7)
        * [[2,5], [3,4]]
        """

        self.assertEqual(sum_pairs(list[1,2,3,4,5], 9), [[4,5]])
        self.assertEqual(sum_pairs(list[1,2,3,4,5], 7), [[2,5], [3,4]])
    
    def test_returns_string(self):
        """
        if no pairs are found that add up to target num, return string unfound
        """
        self.assertEqual(sum_pairs(list[3, 1, 5, 8, 2], 27), 'unable to find pairs')


# sum_pairs([1,2,3,4,5], 9) # [[4,5]]
# sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
# sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'

if __name__ == '__main__':
    unittest.main()

# write your specs here!
