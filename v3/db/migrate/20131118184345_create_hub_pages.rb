class CreateHubPages < ActiveRecord::Migration
  def change
    create_table :hub_pages do |t|
      t.string :name
      t.string :path

      t.timestamps
    end
  end
end
