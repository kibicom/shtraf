class RobopayController < ApplicationController
  def result
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @SignatureValue=params[:SignatureValue]
    @Email=params[:Email]
    @Phone=params[:Phone]

  end

  def success
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @SignatureValue=params[:SignatureValue]
    @Culture=params[:Culture]
    @Email=params[:Email]
    @Phone=params[:Phone]
  end

  def fail
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @Culture=params[:Culture]


  end
end
