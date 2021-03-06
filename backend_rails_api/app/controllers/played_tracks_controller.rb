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
      artist = Artist.create(name: params[:artistName] )
    end

    if Songwriter.exists?(name: params[:songwriterName])
      songwriter = Songwriter.find_by(name: params[:songwriterName])
    else
      songwriter = Songwriter.create(name: params[:songwriterName])
    end

    if Track.exists?(title: params[:trackName])
      track = Track.find_by(title: params[:trackName])
    else
      license = License.first
      track = Track.create(title: params[:trackName], artist_id: artist.id, songwriter_id: songwriter.id, license_id: license.id)
    end

    

    venue = Venue.find_by(name: params[:venueName])

    

    new_Song = PlayedTrack.create(track_id: track.id, venue_id: venue.id)

    render json: new_Song
  end

  # PATCH/PUT /played_tracks/1
  def update
    played_track = PlayedTrack.find_by(id: params[:id])
    played_track.update(payed: true)

    render json: played_track
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
