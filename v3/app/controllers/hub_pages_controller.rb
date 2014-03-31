class HubPagesController < ApplicationController
  before_action :set_hub_page, only: [:show, :edit, :update, :destroy]

  # GET /hub_pages
  # GET /hub_pages.json
  def index
    @hub_pages = HubPage.all
  end

  # GET /hub_pages/1
  # GET /hub_pages/1.json
  def show
  end

  # GET /hub_pages/new
  def new
    @hub_page = HubPage.new
  end

  # GET /hub_pages/1/edit
  def edit
  end

  # POST /hub_pages
  # POST /hub_pages.json
  def create
    @hub_page = HubPage.new(hub_page_params)

    respond_to do |format|
      if @hub_page.save
        format.html { redirect_to @hub_page, notice: 'Hub page was successfully created.' }
        format.json { render action: 'show', status: :created, location: @hub_page }
      else
        format.html { render action: 'new' }
        format.json { render json: @hub_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hub_pages/1
  # PATCH/PUT /hub_pages/1.json
  def update
    respond_to do |format|
      if @hub_page.update(hub_page_params)
        format.html { redirect_to @hub_page, notice: 'Hub page was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @hub_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hub_pages/1
  # DELETE /hub_pages/1.json
  def destroy
    @hub_page.destroy
    respond_to do |format|
      format.html { redirect_to hub_pages_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hub_page
      @hub_page = HubPage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hub_page_params
      params.require(:hub_page).permit(:name, :path, hub_ids: [])
    end
end
