def sum_pairs(input_list, target_value):
  result_list = []
  sum_list = []

  for i, value in enumerate(input_list):
     for item in input_list[1:]:
       if (input_list[i] + item) == target_value:
         if not item < input_list[i]:
          sum_list.append(input_list[i])
          sum_list.append(item)
          result_list.append(sum_list)
          sum_list = []
          i += 1
          break

  if len(result_list) == 0:
    return "unable to find pairs" 
  return result_list

# print(type(sum_pairs([1,2,3,4], 4)))
# print(sum_pairs([1,2,3,4,5], 7))