class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.datetime :date
      t.integer :venue_id

      t.timestamps
    end
  end
end
