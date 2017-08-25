class UserMailer < ApplicationMailer
  default from: '99cats@example.com'

  def welcome_email(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: user.username, subject: 'Welcome to 99Cats!')
  end

end
