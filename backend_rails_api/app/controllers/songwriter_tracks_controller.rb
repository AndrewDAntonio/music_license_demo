class SongwriterTracksController < ApplicationController
  before_action :set_songwriter_track, only: [:show, :update, :destroy]

  # GET /songwriter_tracks
  def index
    @songwriter_tracks = SongwriterTrack.all

    render json: @songwriter_tracks
  end

  # GET /songwriter_tracks/1
  def show
    render json: @songwriter_track
  end

  # POST /songwriter_tracks
  def create
    @songwriter_track = SongwriterTrack.new(songwriter_track_params)

    if @songwriter_track.save
      render json: @songwriter_track, status: :created, location: @songwriter_track
    else
      render json: @songwriter_track.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songwriter_tracks/1
  def update
    if @songwriter_track.update(songwriter_track_params)
      render json: @songwriter_track
    else
      render json: @songwriter_track.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songwriter_tracks/1
  def destroy
    @songwriter_track.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_songwriter_track
      @songwriter_track = SongwriterTrack.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def songwriter_track_params
      params.require(:songwriter_track).permit(:track_id, :songwriter_id)
    end
end
