module ApplicationHelper
  def auth_token
    token = form_authenticity_token
    html = <<-HTML
    <input type="hidden" name="authenticity_token" value="#{h(token)}">
    HTML
    html.html_safe
  end
end



# "<input type=\"hidden\" name=\"authenticiy_token\" value=\"#{h(form_authenticity_token)}/>\"".html_safe
