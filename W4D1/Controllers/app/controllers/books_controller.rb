class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    # your code here
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to '/books'
    else
      render json: @book.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find_by(id: params[:id])
    if @book.destroy
      redirect_to '/books'
    else
      render "Can't destroy that."
    end
  end

  private
  
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
