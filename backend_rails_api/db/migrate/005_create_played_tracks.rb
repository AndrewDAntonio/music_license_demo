class CreatePlayedTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :played_tracks do |t|
      t.boolean :payed
      t.foreign_key :track_id
      t.foreign_key :venue_id

      t.timestamps
    end
  end
end
