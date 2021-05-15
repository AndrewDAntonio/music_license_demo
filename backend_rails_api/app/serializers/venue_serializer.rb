class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :capacity, :songs

  def songs
      self.object.played_tracks.map do |track|
        
        get_track = Track.find_by(id: track.track_id)
        get_license = License.find_by(id: get_track.license.id)
        get_artist = Artist.find_by(id: get_track.artist_id)
        get_songwriter = Songwriter.find_by(id: get_track.songwriter_id)
       
        {
          id: track.id,
          title: get_track.title,
          artist: get_artist.name,
          songwriter: get_songwriter.name,
          payed: track.payed,
          license_cost: get_license.cost
        }
      end
  end

end
