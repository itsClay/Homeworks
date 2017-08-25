class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    @url - 'http://example.com/login'
    mail(to: user.email, subject: 'Welcome to my Awesome Site')

    # uncomment to attach a file
    # attachments['filename.jpg'] = File.read('/path/to/filename.jpg')
  end

  def reminder_email(user)
    #...
  end

  #other emails...
end
