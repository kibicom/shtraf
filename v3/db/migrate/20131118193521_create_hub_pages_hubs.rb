class CreateHubPagesHubs < ActiveRecord::Migration
  def change
    create_table :hub_pages_hubs do |t|
      t.references :hub, index: true
      t.references :hub_page, index: true
    end
  end
end
