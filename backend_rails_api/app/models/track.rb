class Track < ApplicationRecord

    belongs_to :artist
    belongs_to :license
    belongs_to :songwriter
    has_many :played_tracks
    
    
end
