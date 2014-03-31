class HubPage < ActiveRecord::Base
  has_and_belongs_to_many :hubs
	accepts_nested_attributes_for :hubs
  
  def self.for_hub hub_path
    Hub.where(path: hub_path).hub_pages
  end
  
end
