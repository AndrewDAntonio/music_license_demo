class VenuesController < ApplicationController
  before_action :set_venue, only: [:show, :update, :destroy]

  # GET /venues
  def index
    venues = Venue.all

    render json: venues
  end

  # GET /venues/1
  def show
    render json: @venue
  end

  # POST /venues
  def create
    venue = Venue.create(username: params[:username], password: params[:password], name: params[:name], capacity: params[:capacity])
    session[:user_id] = venue.id

    render json: venue
  end

  # PATCH/PUT /venues/1
  def update
    if @venue.update(venue_params)
      render json: @venue
    else
      render json: @venue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /venues/1
  def destroy
    @venue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_venue
      @venue = Venue.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def venue_params
      params.require(:venue).permit(:username, :password, :name, :capacity)
    end
end
