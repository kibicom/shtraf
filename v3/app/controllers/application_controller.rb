class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def url_options
    { :hub_path => params[:hub_path] }.merge(super)
  end
  
end
