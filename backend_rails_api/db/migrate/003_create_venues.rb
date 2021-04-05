class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.integer :capacity

      t.timestamps
    end
  end
end
