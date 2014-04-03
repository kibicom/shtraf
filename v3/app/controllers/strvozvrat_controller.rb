class StrvozvratController < ApplicationController
  def result
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @SignatureValue=params[:SignatureValue]

  end

  def success
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @SignatureValue=params[:SignatureValue]
    @Culture=params[:Culture]
  end

  def fail
    @OutSum=params[:OutSum]
    @InvId=params[:InvId]
    @Culture=params[:Culture]
  end
end
