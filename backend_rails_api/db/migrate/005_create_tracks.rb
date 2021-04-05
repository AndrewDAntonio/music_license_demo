class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :ISRC
      t.integer :artist_id
      t.integer :license_id

      t.timestamps
    end
  end
end
