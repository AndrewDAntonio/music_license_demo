class CreateSongwriters < ActiveRecord::Migration[6.0]
  def change
    create_table :songwriters do |t|
      t.string :name

      t.timestamps
    end
  end
end
