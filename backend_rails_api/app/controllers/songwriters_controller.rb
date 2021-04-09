class SongwritersController < ApplicationController
  before_action :set_songwriter, only: [:show, :update, :destroy]

  # GET /songwriters
  def index
    @songwriters = Songwriter.all

    render json: @songwriters
  end

  # GET /songwriters/1
  def show
    render json: @songwriter
  end

  # POST /songwriters
  def create
    @songwriter = Songwriter.new(songwriter_params)

    if @songwriter.save
      render json: @songwriter, status: :created, location: @songwriter
    else
      render json: @songwriter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songwriters/1
  def update
    if @songwriter.update(songwriter_params)
      render json: @songwriter
    else
      render json: @songwriter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songwriters/1
  def destroy
    @songwriter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_songwriter
      @songwriter = Songwriter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def songwriter_params
      params.require(:songwriter).permit(:name)
    end
end
