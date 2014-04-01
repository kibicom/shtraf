class RequestFineController < ApplicationController

  require 'net/http'
  require 'json'

  def getFine
    @name = params[:param1]
    @phone = params[:param2]
    @cust = params[:param3]
    Net::HTTP.start("dev.kibicom.com") do |http|
      resp = http.get("/test.json")
      @json = JSON.parse(resp.body)
    end
  end
end
