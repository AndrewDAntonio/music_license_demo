class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :username
      t.string :password_digest
      t.string :name

      t.timestamps
    end
  end
end
