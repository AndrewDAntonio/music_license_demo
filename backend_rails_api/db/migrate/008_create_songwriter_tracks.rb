class CreateSongwriterTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :songwriter_tracks do |t|
      t.integer :track_id
      t.integer :songwriter_id

      t.timestamps
    end
  end
end
