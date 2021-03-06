class Venue < ApplicationRecord

    has_secure_password
    has_many :played_tracks
    has_many :shows
    
    def Venue.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                      BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
      end
end
