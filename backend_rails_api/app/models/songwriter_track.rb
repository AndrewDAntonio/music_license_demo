class SongwriterTrack < ApplicationRecord

    belongs_to :track 
    belongs_to :songwriter
    
end
