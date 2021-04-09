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
    if Artist.exists?(name: params[:artistName])
      artist = Artist.find_by(name: params[:artistName])
    else
      artist = Artist.create()
    end

    if Track.exists?(title: params[:trackName])
      track = Track.find_by(title: params[:trackName])
    else
      license = License.first
      track = Track.create(title: params[:trackName], artist_id: artist.id, license_id: license.id)
    end

    venue = params[:currentUser]

    new_Song = PlayedTrack.create(track_id: track.id, venue_id: venue.id)

    render json: new_Song
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
