def sum_pairs(list, num):
    list_pairs = []
    
    start = 0
    end = -1

    while start < end:
        counter = list[start] + list[end]
        if counter == num:
            list_pairs.extend(list[start], list[end])
            # print('if', counter)
        elif counter < num:
            start = start + 1
            # ('elif', counter)
        else: 
            end = end - 1

    if len(list_pairs):
        return list_pairs
    else:
        return 'unable to find pairs'

    # print(list_pairs)    
        
    #print(type(list[start]), type(list[end]), list[start], list[end], list[start + 1], list[end - 1])

    #print(start, end)
    
    #print(list[start + 1], list[end - 1], list, list_pairs)

sum_pairs([1,2,3,4,5], 9) # [[4,5]]
