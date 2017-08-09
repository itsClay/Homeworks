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
    (7..12).each do |i|
      @cups[i] += [:stone, :stone, :stone, :stone]
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos == 6 || start_pos > 12
    raise "Invalid starting cup" if @cups[start_pos].nil?
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones, @cups[start_pos] = @cups[start_pos], []

    move = start_pos

    until stones.empty? do
      move += 1
      move = 0 if move > 13

      next if move == 6 && current_player_name == @name2
      next if move == 13 && current_player_name == @name1

      @cups[move] << stones.shift

    end
    render
    next_turn(move)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    if @cups[0..5].all? {|x| x.empty?}
      return true
    elsif @cups[7..12].all? {|x| x.empty?}
      return true
    end
    false
  end

  def winner
    player1_count = @cups[6].count
    player2_count = @cups[13].count

    case player1_count <=> player2_count
    when -1
      @name2
    when 0
      :draw
    when 1
      @name1
    end
  end
end
