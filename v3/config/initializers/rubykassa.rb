# -*- encoding : utf-8 -*-
Rubykassa.configure do |c|
  c.login = ENV['Sex0Shop']
  c.first_password = ENV['qwerty1']
  c.second_password = ENV['qwerty2']
  c.mode = :test # or :production
  c.http_method = :post  #or :get
  c.xml_http_method = :get # or :post
end
