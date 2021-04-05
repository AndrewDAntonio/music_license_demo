class Venue < ApplicationRecord

    has_secure_password
    has_many :played_tracks
    
end
