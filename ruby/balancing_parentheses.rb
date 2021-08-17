def balancing_parentheses(string)
  # type your code in here

  split_string = string.split('')

  if split_string.length < 1 
    return split_string.length
  end

  opening = split_string.index("(")
  if opening 
    following = split_string.slice((opening + 1)..(split_string.length))
    closing = following.index(")")
    if closing
      beginning = []
      if opening > 0
        beginning = split_string.slice(0..(opening - 1))
      end
      ending = []
      if following.length > 1
        if closing == 0
          ending = following.slice((closing + 1)..following.length)
        elsif closing > 0
          ending = following.slice(0..(closing - 1)) + following.slice((closing + 1)..following.length)
        end
      end
      new_array = beginning + ending
      new_string = new_array.join('')
      balancing_parentheses(new_string)
    else
      split_string.length
    end
  else
    split_string.length
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts "Expecting: 3"
  puts balancing_parentheses('()()())))')

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts "Expecting: 5"
  puts balancing_parentheses('(((((')

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
