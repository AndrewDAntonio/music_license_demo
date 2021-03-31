class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :username
      t.password_digest :password
      t.string :name

      t.timestamps
    end
  end
end
