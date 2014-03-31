class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.integer :streetid
      t.integer :cityid
      t.integer :areaid
      t.string :home

      t.timestamps
    end
  end
end
