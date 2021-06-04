


def sum_pairs(list, num):
    new_list = list.copy()
    list_pairs = []

    for a in range(len(new_list) - 1):
        start = new_list[a]
        # print(new_list[a])
        for b in range(a + 1, len(new_list)):
            # print(new_list[b])
            end = new_list[b]
            if start + end == num:
                list_pairs.append([new_list[a], new_list[b]])
            
    if len(list_pairs) > 0:
         return list_pairs
    elif list_pairs == []:
       return 'unable to find pairs'
    

# sum_pairs([1,2,3,4,5], 14) # [[4,5]]
