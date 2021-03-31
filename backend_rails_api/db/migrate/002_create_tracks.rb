class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :ISRC
      t.foreign_key :artist_id
      t.foreign_key :license_id

      t.timestamps
    end
  end
end
