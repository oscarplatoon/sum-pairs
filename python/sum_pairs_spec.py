import unittest
from sum_pairs import sum_pairs

class SumPairs(unittest.TestCase):

  """Tests for sum_pairs.py"""
  def test_returns_a_list(self):
    """When you call sum_pairs with a list you get a list back"""
    test_list = [1,2,3,4]
    test_value = 8
    self.assertEqual(type(sum_pairs(test_list, test_value)), list)
  
  """Test for unable to find pairs"""
  def test_returns_error_if_no_pairs(self):
    self.assertEqual(sum_pairs([1,2], 5), "unable to find pairs")

  """Test for duplication of response (no [3,4] && [4,3]"""
  def test_no_duplicates(self):
    pass
  """Test for accuracy of results"""


if __name__ == '__main__':
    unittest.main() # https://stackoverflow.com/questions/419163/what-does-if-name-main-do
