def sum_pairs(array, sum):
    matches = []
    copy_array = array[:]
    for x in array:
        copy_array.remove(x)
        for y in copy_array:
            if x + y == sum:
                if [y, x] in matches:
                    pass
                else:
                    matches.append([x, y])   
    if (matches == []):
        return 'unable to find pairs'
    
    return matches
