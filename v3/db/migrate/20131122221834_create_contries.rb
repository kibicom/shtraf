class CreateContries < ActiveRecord::Migration
  def change
    create_table :contries do |t|
      t.string :name

      t.timestamps
    end
  end
end
