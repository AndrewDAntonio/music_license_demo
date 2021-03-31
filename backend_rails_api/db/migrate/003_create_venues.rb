class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :username
      t.password_digest :password
      t.string :name
      t.integer :capacity

      t.timestamps
    end
  end
end
