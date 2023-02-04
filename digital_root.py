def digital_root(n,digits_counter=0):
    if digits_counter == 1:
        return n
    individual_digits = list(map(int,str(n)))
    sum_digits = sum(individual_digits)
    individual_sum_digits = list(map(int, str(sum_digits)))
    no_digits_counter =len(individual_sum_digits)
    return digital_root(sum_digits,no_digits_counter)

def roots(n):
    num_list = list(str(n))
    if len(num_list) == 1:
        return n
    return roots(sum(map(int,num_list)))


print(sum(map(int,'1234567')))