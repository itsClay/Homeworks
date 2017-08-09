require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:pie) { Dessert.new('Apple', 10, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(pie.type).to eq("Apple")
    end

    it "sets a quantity" do
      expect(pie.quantity).to eq(10)
    end

    it "starts ingredients as an empty array" do
      expect(pie.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new('Apple', "A TON", chef)}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      pie.add_ingredient('apples')
      expect(pie.ingredients).to include('apples')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      pie.ingredients = ["apple", "sugar", "crust"]
      expect(pie.ingredients).not_to eq(["apple", "sugar", "crust"])
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      pie.amount = 10
      expect(pie.eat(1)).to eq(9)
    end

    it "raises an error if the amount is greater than the quantity"
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
