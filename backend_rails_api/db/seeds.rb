# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
License.destroy_all
Venue.destroy_all
Artist.destroy_all
Songwriter.destroy_all
Track.destroy_all
PlayedTrack.destroy_all

#Licenses
default_license = License.create(name:"default", cost:1.20)

#Artists
artist1 = Artist.create(username:"steve", password_digest:"123", name:"Stevey Sangcash")

#Songwriters
songwriter1 = Songwriter.create(name:"Mystery Person")

#Venues
andrews_venue = Venue.create(username:'Andrew', password_digest:Venue.digest('123'), name:"Andrew's Venue", capacity:10000)

#Tracks
steve_track = Track.create(title:"Steve's Song", ISRC:"QWERTY", artist_id:artist1.id, license_id:default_license.id, songwriter_id:songwriter1.id)

#PlayedTracks
andrew_played1 = PlayedTrack.create(payed:true, track_id: steve_track.id, venue_id:andrews_venue.id)
puts "Database Seeded"