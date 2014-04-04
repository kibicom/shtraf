class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.float :sum
      t.string :status

      t.timestamps
    end
  end
end
