class AddDriverLicenseToCustomers < ActiveRecord::Migration
  def change
    add_column :customers, :driver_license, :string
  end
end
