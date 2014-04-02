class RequestFineController < ApplicationController

  require 'net/http'
  require 'json'

  def getFine
    #@auto_number = params[:auto_number]
    #@region = params[:region]
    #@driver_license = params[:driver_license]
    #@registration = params[:registration]
    #@registration_full = params[:registration_full]

    #uri = URI('http://www.dev.kibicom.com/test.json')
    #    if params[:region] != '16' #У Татарстана нет номера лицензии и регистрационный номер другой
    #      resp = Net::HTTP.post_form(uri, 'auto_number' => params[:auto_number], 'region' => params[:region], 'license' => params[:driver_license], 'reg' => params[:registration_full])
    #    else
    #      resp = Net::HTTP.post_form(uri, 'auto_number' => params[:auto_number], 'region' => params[:region], 'reg' => params[:registration])
        Net::HTTP.start("dev.kibicom.com") do |http|
          resp = http.get("/test.json")

          if resp.code == '200'
            @json = JSON.parse(resp.body)
          #else
          #  need to throw some exception
          end
    end
  end
end
