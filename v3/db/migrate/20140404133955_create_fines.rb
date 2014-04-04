class CreateFines < ActiveRecord::Migration
  def change
    create_table :fines do |t|
      t.string :date
      t.string :decree_number
      t.float :sum

      t.timestamps
    end
  end
end
