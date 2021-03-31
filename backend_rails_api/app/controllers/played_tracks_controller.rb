class PlayedTracksController < ApplicationController
  before_action :set_played_track, only: [:show, :update, :destroy]

  # GET /played_tracks
  def index
    @played_tracks = PlayedTrack.all

    render json: @played_tracks
  end

  # GET /played_tracks/1
  def show
    render json: @played_track
  end

  # POST /played_tracks
  def create
    @played_track = PlayedTrack.new(played_track_params)

    if @played_track.save
      render json: @played_track, status: :created, location: @played_track
    else
      render json: @played_track.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /played_tracks/1
  def update
    if @played_track.update(played_track_params)
      render json: @played_track
    else
      render json: @played_track.errors, status: :unprocessable_entity
    end
  end

  # DELETE /played_tracks/1
  def destroy
    @played_track.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_played_track
      @played_track = PlayedTrack.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def played_track_params
      params.require(:played_track).permit(:payed, :track_id, :venue_id)
    end
end
