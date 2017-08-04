class Stack
  def initialize
    # create ivar to store stack here!
    @ivar = []
  end

  def add(el)
    # adds an element to the stack
    @ivar << el
  end

  def remove
    # removes one element from the stack
    @ivar.pop
  end

  def show
    # return a copy of the stack
    @ivar
  end
end

class Queue
  def initialize
    @ivar = []
  end

  def enqueue(el)
    @ivar << el
  end

  def dequeue
    @ivar.shift
  end

  def show
    @ivar
  end
end

class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    @map.reject! { |key_val_pair| key_val_pair.first == key }
    @map << [key, value]
  end

  def lookup(key)
    @map.each do |key_val_pair|
      return key_val_pair.last if key_val_pair.first == key
    end
  end

  def remove(key)
    @map.reject! { |key_val_pair| key_val_pair.first == key }
  end
end
