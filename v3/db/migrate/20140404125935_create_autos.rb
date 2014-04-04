class CreateAutos < ActiveRecord::Migration
  def change
    create_table :autos do |t|
      t.string :nauto
      t.string :reg_auto

      t.timestamps
    end
  end
end
