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
Track.destroy_all
PlayedTrack.destroy_all

#Licenses
default_license = License.create(name:"default", cost:1.20)

#Artists
artist1 = Artist.create(username:"steve", password_digest:"123", name:"Stevey Sangcash")


puts "Database Seeded"