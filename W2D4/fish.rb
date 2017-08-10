FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
        'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# n squared
def bubble_fish(array)
  sorted = false
  until sorted
    sorted = true
    (0...array.length - 1).each do |i|
      if array[i] > array[i + 1]
        array[i], array[i + 1] = array[i + 1], array[i]
        sorted = false
      end
    end
  end
  array.last
end

# n log n
class Array
  def quick_sort(&prc)
    prc ||= Proc.new {|x, y| x <=> y}

    return array if array.size < 2

    pivot = first

    left = self[1..-1].select { |num| prc.call(num, pivot) == -1 }
    right = self[1..-1].select { |num| prc.call(num, pivot) != -1 }

    left.quick_sort(&prc) + [pivot] + right.quick_sort(&prc)
  end
end

def dominant_octopus(array)
  prc = Proc.new { |x, y| y.length <=> x.length }
  array.quick_sort(&prc)[0]
end



def clever_octopus(array)
  biggest_fish = array.first

  array.each do |fish|
    if fish.length > biggest_fish
      biggest_fish = fish
    end
  end

  biggest_fish
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

fish_hash = Hash.new(0)
tiles_array.each_with_index do |fish, idx|
  fish_hash[fish] = idx
end

class DancingOctopus
  attr_reader :tiles_array

  def slow_dance(direction, tiles)
    tiles.each_with_index do |tile, idx|
      return idx if tile == direction
    end
  end

  def fast_dance(direction, tiles)
    tiles[direction]
  end

end


if __FILE__ == $PROGRAM_NAME
  # p bubble_fish(FISH)
  # p dominant_octopus(FISH)
  dance = DancingOctopus.new
  p dance.slow_dance("up", tiles_array)
  p dance.fast_dance("down", fish_hash)
end
