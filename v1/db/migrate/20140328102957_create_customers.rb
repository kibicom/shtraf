class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers, :id => false do |t|
      t.primary_key :id
      t.string :name
      t.string :phone

      t.timestamps
    end
  end
end
