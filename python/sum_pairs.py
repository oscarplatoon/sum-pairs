def sum_pairs(list, num):
    #print(list, num)
    print(list, type(len(list)), num)

    len_list = len(list)
    new_reversed_list = New list

    list_pairs = []

    for start in range(0, len_list):
        #print(list[start])
        for end in range(0, len_list):
            print(reverse_list[end])


    #print(type(list[start]), type(list[end]), list[start], list[end], list[start + 1], list[end - 1])

    #print(start, end)

    """while list[start] < list[end]:
        if list[start] + list[end] > num:
            end - 1
            print('if', list[end])
        elif list[start] + list[end] < num:
            start += 1
            print('elif', list[start])
        elif list[start] + list[end] == num:
            list_result.extend(lis)
        else:
            #list_pairs.append([list[start], list[end]])
            list_pairs = [list[start] or list[end]]"""
    
    print(list_pairs)
    
    #print(list[start + 1], list[end - 1], list, list_pairs)


#sum_pairs([1,2,3,4,5], 9) # [[4,5]]
#sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
#sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'

    #return (list_pairs)