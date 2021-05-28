def sum_pairs(int_list, target):
    output_list = []

    #iterate with 2 range loops and append matches to output list
    for i in range(len(int_list)-1):
        first = int_list[i]
        for j in range(i + 1,len(int_list)):
            second = int_list[j]
            if target == int_list[i] + int_list[j]:
                output_list.append([first, second])
    
    pairs_found = len(output_list) != 0
    pairs = output_list if pairs_found else 'unable to find pairs'
    return pairs

