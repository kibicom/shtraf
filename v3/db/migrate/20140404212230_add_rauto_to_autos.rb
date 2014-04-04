class AddRautoToAutos < ActiveRecord::Migration
  def change
    add_column :autos, :rauto, :string
  end
end
