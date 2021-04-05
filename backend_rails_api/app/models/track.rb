class Track < ApplicationRecord

    belongs_to :artist
    belongs_to :license
    has_many :played_tracks
    
end
