class RobokassaController < ApplicationController
  require 'digest/md5'
  def button

    @payment = Payment.new# do
      #self.status="начато"
      #self.sum=params.sum
   # end

    @payment.save

    logger.debug @payment.id
    logger.debug params[:sum]

    #debug @payment

    params[:seq]=Digest::MD5.hexdigest("kibicom:"+params[:sum]+":"+@payment.id.to_s+":B:4x2--_$ qN+9<\\");
    #params[:seq]=Digest::MD5.hexdigest("demo:10.96:0:password_1:Desc=ROBOKASSA+Advanced+User+Guide:Shp_code=Asp:Shp_item=");

    logger.debug params

    respond_to do |format|
      format.js
    end
  end
end
