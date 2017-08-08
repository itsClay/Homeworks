class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..5).each do |i|
      @cups[i] += [:stone, :stone, :stone, :stone]
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos == 6 || start_pos == 13
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones, @cups[start_pos] = @cups[start_pos], []

    move = start_pos

    stones.length.times do
      move += 1
      move = 0 if move > 13

      if move == 6 && current_player_name == @name1
        @cups[move] << stones.shift
      elsif move == 13 && current_player_name == @name2
        @cups[move] << stones.shift
      else
        @cups[move] << stones.shift
      end
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
