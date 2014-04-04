class RobokassaController < ApplicationController
  require 'rack/auth/digest/md5'
  def button


    Digest::MD5.hexdigest("sMerchantLogin:nOutSum:nInvId:sMerchantPass1")

    respond_to do |format|
      format.js
    end
  end
end
