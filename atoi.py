import re
class Solution:
    def myAtoi(self, s: str) -> int:
        '''
    atoi function in python\n
    s =  string containing the number to be converted\n
    Usage: myAtoi('-129') -> -129
    '''
        MAX_VALUE = 2147483647
        MIN_VALUE = -2147483648
        res = 0
        ne = False
        digits = re.findall("\d", s)
        words = re.findall("[a-z]", s)
        if words and [*s].index(words[0]) < [*s].index(digits[0]):
            return 0
        if len(s) != len(digits):
            ne = s[[*s].index(digits[0]) - 1] == '-'
        for x in digits:
            res = res * 10 + (ord(x) - ord('0'))
        res = (res, -res)[ne]
        return MAX_VALUE if res > MAX_VALUE else MIN_VALUE if res < MIN_VALUE else res


ty = Solution()
print(ty.myAtoi('-129'))
