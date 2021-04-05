class CreatePlayedTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :played_tracks do |t|
      t.boolean :payed, :default => false
      t.integer :track_id
      t.integer :venue_id

      t.timestamps
    end
  end
end
