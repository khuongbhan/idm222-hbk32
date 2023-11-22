from pyscript import document

def translate_english(event):
    input_text = document.querySelector("#english")
    word = input_text.value

    alphaword = {'but': 'b', 'can': 'c', 'do': 'd', 'every': 'e', 'from': 'f', 'go': 'g', 'have': 'h', 'just': 'j', 'knowledge': 'k', 'like': 'l', 'more': 'm', 'not': 'n', 'people': 'p', 'quite': 'q', 'rather': 'r', 'so': 's', 'that': 't', 'us': 'u', 'very': 'v', 'will': 'w', 'it': 'x', 'you': 'y', 'as': 'z', 'child': '*', 'shall': '%', 'this': '?', 'which': ':', 'out': '\\', 'still': '/', 'be': '2', 'his': '8', 'in': '9', 'enough': '5', 'was': '0', 'were': '7'}
    groupsign = {'ing': '+', 'be': '2', 'con': '3', 'dis': '4', 'ea': '1', 'bb': '2', 'cc': '3', 'ff': '6', 'gg': '7', 'ound': '.d', 'ance': '.e', 'sion': '.n', 'less': '.s', 'ount': '.t', 'ence': ';e',  'ong': ';g', 'ful': ';l', 'tion': ';n', 'ness': ';s', 'ment': ';t', 'ity': ';y'}
    contraction = {'and': '&', 'for': '=', 'of': '(', 'the': '!', 'with': ')', 'ch': '*', 'sh': '%', 'th': '?', 'wh': ':', 'ou': '\\', 'st': '/', 'ar': '>', 'ed': '$', 'er': ']', 'gh': '<', 'ow': '[', 'in': '9', 'en': '5', 'day': '"d', 'ever': '"e', 'father': '"f', 'here': '"h', 'know': '"k', 'lord': '"l', 'mother': '"m', 'name': '"n', 'one': '"o', 'part': '"p', 'question': '"q', 'right': '"r', 'some': '"s', 'time': '"t', 'under': '"u', 'work': '"w', 'young': '"y', 'there': '"!', 'character': '"*', 'through': '"?', 'where': '":', 'ought': '"\\', 'upon': '^u', 'word': '^w', 'these': '^!', 'those': '^?', 'whose': '^:',  'cannot': '_c', 'had': '_h', 'many': '_m', 'spirit': '_s', 'world': '_w', 'their': '_!', 'about': 'ab', 'above': 'abv', 'according': 'ac', 'across': 'acr', 'after': 'af', 'afternoon': 'afn', 'afterward': 'afw', 'again': 'ag', 'against': 'ag/', 'almost': 'alm', 'already': 'alr', 'also': 'al', 'although': 'al?', 'altogether': 'alt', 'always': 'alw', 'because': '2c', 'before': '2f', 'behind': '2h', 'below': '2l', 'beneath': '2n', 'beside': '2s', 'between': '2t', 'beyond': '2y', 'blind': 'bl', 'braille': 'brl', 'children': '*n', 'conceive': '3cv', 'conceiving': '3cvg', 'could': 'cd', 'deceive': 'dcv', 'deceiving': 'dcvg', 'declare': 'dcl', 'declaring': 'dclg', 'either': 'ei', 'first': 'f/', 'friend': 'fr', 'good': 'gd', 'great': 'grt', 'herself': 'h]f', 'him': 'hm', 'himself': 'hmf', 'immediate': 'imm', 'its': 'xs', 'itself': 'xf', 'letter': 'lr', 'little': 'll', 'much': 'm*', 'must': 'm/', 'myself': 'myf', 'necessary': 'nec', 'neither': 'nei', 'oneself': '"of', 'ourselves': '\\rvs', 'paid': 'pd', 'perceive': 'p]cv', 'perceiving': 'p]cvg', 'perhaps': 'p]h', 'quick': 'qk', 'receive': 'rcv', 'receiving': 'rcvg', 'rejoice': 'rjc', 'rejoicing': 'rjcg', 'said': 'sd', 'should': '%d', 'such': 's*', 'themselves': '!mvs', 'thyself': '?yf', 'today': 'td', 'together': 'tgr', 'tomorrow': 'tm', 'tonight': 'tn', 'would': 'wd', 'your': 'yr', 'yourself': 'yrf', 'yourselves': 'yrvs'}

    braille_dict = {' ': '⠀', '!': '⠮', '"': '⠐', '#': '⠼', '$': '⠫', '%': '⠩', '&': '⠯', '': '⠄', '(': '⠷', ')': '⠾', '*': '⠡', '+': '⠬', ',': '⠠', '-': '⠤', '.': '⠨', '/': '⠌', '0': '⠴', '1': '⠂', '2': '⠆', '3': '⠒', '4': '⠲', '5': '⠢', '6': '⠖', '7': '⠶', '8': '⠦', '9': '⠔', ':': '⠱', ';': '⠰', '<': '⠣', '=': '⠿', '>': '⠜', '?': '⠹', '@': '⠈', 'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽', 'z': '⠵', '[': '⠪', '\\': '⠳', ']': '⠻', '^': '⠘', '_': '⠸'}

    i = 0
    res = ""
    braille = ""
    prefix = ['be','con','dis']
    infix = ['bb', 'cc', 'ff', 'gg', 'ea']
    suffix = ['ing','ound', 'ance', 'sion', 'less', 'ount', 'ence',  'ong', 'ful', 'tion', 'ness', 'ment', 'ity']
    exception = ['biscuity','dacoity', 'hoity-toity', 'fruity', 'rabbity','bee','conch','disc']
    if word in alphaword:
        res += alphaword[word]

    else:
        while i < len(word):
            temp = {}
            for j in range(i,len(word)+1):
                cur = word[i:j]
                if cur in contraction and (not(cur == 'one' and word[i-1] == 'o') and not (cur == 'under' and word[i-1] in ['o','a'])):
                    temp[cur] = contraction[cur]
                elif cur in groupsign:
                    if (cur not in infix) and (word not in exception):
                        if (word.startswith(tuple(prefix)) and word not in ['con','dis']) or ((not word.startswith(tuple(suffix))) and (cur not in prefix)):
                            temp[cur] = groupsign[cur]
            if len(temp) != 0:
                max_str = max(temp.keys(),key=len)
                max_len = len(max(temp.keys(),key=len))
                res += temp[max_str]
            else:
                max_len = 1
                res += word[i]
            i += max_len
        if not res.startswith(tuple(infix)) and not res.endswith(tuple(infix)):
            for c in infix:
                if c in res:
                    res = res.replace(c,groupsign[c])

    for char in res:
        braille += braille_dict[char]

    output_div1 = document.querySelector("#output1")
    output_div2 = document.querySelector("#output2")
    output_div1.innerText = res
    output_div2.innerText = braille
    return('/n')